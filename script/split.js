const { SyntaxKind, ts } = require('ts-morph');
const { resolve: resolvePath, relative: relativePath, sep: pathSep } = require('path');
const { sep: pathSepPosix } = require('path/posix');
const { mkdirSync, writeFileSync, existsSync, readFileSync } = require('fs');

const basePath = resolvePath(__dirname, '..');
const translatingPath = resolvePath(basePath, 'translate-pieces');
const translatedPath = resolvePath(basePath, 'translated');

const SkippedTopLevelSyntaxKinds = [
    SyntaxKind.EndOfFileToken,
    SyntaxKind.ImportDeclaration,
    SyntaxKind.ImportEqualsDeclaration
];

const SyntaxKindToCategory = new Map([
    [SyntaxKind.EnumDeclaration, 'enums'],
    [SyntaxKind.ClassDeclaration, 'classes'],
    [SyntaxKind.FunctionDeclaration, 'functions'],
    [SyntaxKind.InterfaceDeclaration, 'interfaces'],
    [SyntaxKind.ModuleDeclaration, 'modules'],
    [SyntaxKind.TypeAliasDeclaration, 'types'],
    [SyntaxKind.VariableStatement, 'variables'],
    [SyntaxKind.ExportDeclaration, 'types']
]);

function getSourceFilePieceDirectory(sourceFile) {
    return resolvePath(
        translatingPath,
        relativePath(translatedPath, sourceFile.getDirectoryPath()),
        sourceFile.getBaseNameWithoutExtension()
    );
}

function asRelativeModulePath(from, to) {
    const relativePathPlatform = relativePath(from, to);
    let relativePathPosix = relativePathPlatform.replaceAll(pathSep, pathSepPosix);
    if (!relativePathPosix.startsWith('.')) {
        relativePathPosix = `.${pathSepPosix}${relativePathPosix}`;
    }
    relativePathPosix = relativePathPosix.replace(/(?:\.d)?\.ts$/, '');
    return relativePathPosix;
}

const ImportPrompt = '/* IMPORT */';
const ExportPrompt = '/* EXPORT */';

/**
 * @param {import('ts-morph').SourceFile} sourceFile
 */
function split(sourceFile) {
    const pieceDirectory = getSourceFilePieceDirectory(sourceFile);
    const pieceExports = [];
    const piecePathList = [];
    const pieces = [];
    const packageDocumentationJSDoc = sourceFile
        .getDescendantsOfKind(SyntaxKind.JSDoc)
        .find((jsdoc) => jsdoc.getTags().some((tag) => tag.getTagName() === 'packageDocumentation'));
    if (packageDocumentationJSDoc) {
        pieces.push({
            start: packageDocumentationJSDoc.getStart(),
            end: packageDocumentationJSDoc.getEnd(),
            path: resolvePath(pieceDirectory, `package.d.ts`)
        });
    }
    const sourceScopeSymbols = new Set(
        sourceFile.getSymbolsInScope(ts.SymbolFlags.ModuleMember).map((e) => e.getExportSymbol() || e)
    );
    sourceFile.forEachChild((node) => {
        if (SkippedTopLevelSyntaxKinds.includes(node.getKind())) return;
        /** @type {import('ts-morph').Symbol[]} */
        let includedSymbols = node
            .getDescendants()
            .map((e) => e.getSymbol())
            .filter((e) => e !== undefined);
        const scopedSymbols = includedSymbols.filter((e) => sourceScopeSymbols.has(e));
        let symbol = node.getSymbol();
        if (!symbol) {
            symbol = includedSymbols[0];
        }
        if (!symbol) {
            console.log(`Cannot find symbol for node: ${node.getKindName()}`);
            return;
        }
        const category = SyntaxKindToCategory.get(node.getKind());
        if (!category) {
            console.log(`Cannot find category for node: ${node.getKindName()}`);
            return;
        }
        let piecePath = resolvePath(pieceDirectory, category, `${symbol.getName()}.d.ts`);
        let pieceIndex = 1;
        while (piecePathList.includes(piecePath.toLowerCase())) {
            piecePath = resolvePath(pieceDirectory, category, `${symbol.getName()}-${pieceIndex}.d.ts`);
            pieceIndex++;
        }
        piecePathList.push(piecePath.toLowerCase());
        const jsdocList = node
            .getChildrenOfKind(SyntaxKind.JSDoc)
            .filter((jsdoc) => jsdoc.getStart() !== packageDocumentationJSDoc.getStart());
        let pieceStart = node.getStart(false);
        if (jsdocList.length > 0) {
            pieceStart = jsdocList.pop().getStart();
        }

        const importSymbols = [...new Set(scopedSymbols)]
            .map((symbol) => {
                return symbol
                    .getDeclarations()
                    .filter((decl) => {
                        const declSourceFile = decl.getSourceFile();
                        if (declSourceFile.getFilePath() === sourceFile.getFilePath()) {
                            if (decl.getStart() >= pieceStart && decl.getEnd() <= node.getEnd()) {
                                return false;
                            }
                        }
                        return resolvePath(declSourceFile.getFilePath()).startsWith(translatedPath);
                    })
                    .map((decl) => ({
                        fromName: decl.getSymbolOrThrow().getName(),
                        toName: symbol.getName(),
                        sourceFile: resolvePath(getSourceFilePieceDirectory(decl.getSourceFile()), 'index.d.ts')
                    }))[0];
            })
            .filter((e) => e !== undefined);
        importSymbols.sort((a, b) => (a.toName > b.toName ? 1 : a.toName < b.toName ? -1 : 0));
        const exportedSymbol = node.hasExportKeyword?.() ? null : symbol.getName();

        const importGroupedByFile = {};
        importSymbols.forEach((e) => {
            let group = importGroupedByFile[e.sourceFile];
            if (!group) {
                importGroupedByFile[e.sourceFile] = group = [];
            }
            group.push(e.fromName === e.toName ? e.toName : `${e.fromName} as ${e.toName}`);
        });

        const piecePathParent = resolvePath(piecePath, '..');
        const importStatements = Object.entries(importGroupedByFile).map(([fileName, imports]) => {
            const fileNameRelative = asRelativeModulePath(piecePathParent, fileName);
            return `import { ${imports.join(', ')} } from '${fileNameRelative}';`;
        });

        pieceExports.push([symbol.getName(), piecePath]);
        pieces.push({
            start: pieceStart,
            end: node.getEnd(),
            path: piecePath,
            imports: importStatements.map((e) => `${ImportPrompt} ${e}`).join('\n'),
            exports: exportedSymbol ? `${ExportPrompt} export { ${exportedSymbol} };` : ''
        });
    });

    const sourceIndexPieceFile = resolvePath(pieceDirectory, 'index.d.ts');
    const sourceImportDeclarations = sourceFile.getImportDeclarations();
    const indexImportStatements = [];
    const indexExportStatements = [];
    sourceImportDeclarations.forEach((e) => {
        const importModulePathRelative = asRelativeModulePath(
            pieceDirectory,
            e.getModuleSpecifierSourceFileOrThrow().getFilePath()
        );
        const importClause = e.getImportClause();
        const importedIdentifiers = [];
        const namespaceImport = importClause.getNamespaceImport();
        if (namespaceImport) {
            importedIdentifiers.push(namespaceImport);
        } else {
            importClause.getNamedImports().forEach((spec) => {
                importedIdentifiers.push(spec.getAliasNode() || spec.getNameNode());
            });
        }
        const importedIdentifierNames = importedIdentifiers.map((e) => e.getText());
        indexImportStatements.push(`import ${importClause.getFullText()} from '${importModulePathRelative}';`);
        indexExportStatements.push(`export { ${importedIdentifierNames.join(', ')} };`);
    });
    pieceExports.forEach(([symbolName, piecePath]) => {
        const piecePathRelative = asRelativeModulePath(pieceDirectory, piecePath);
        indexExportStatements.push(`export { ${symbolName} } from '${piecePathRelative}';`);
    });
    const sourceIndexPiece = {
        generated: true,
        path: sourceIndexPieceFile,
        content: [...indexImportStatements, ...indexExportStatements].join('\n')
    };
    pieces.sort((a, b) => b.start - a.start);
    pieces.unshift(sourceIndexPiece);
    return pieces;
}

function writePiece(sourceFile, piece) {
    mkdirSync(resolvePath(piece.path, '..'), { recursive: true });
    if (piece.generated) {
        writeFileSync(piece.path, piece.content);
    } else {
        let pieceContent = sourceFile.getFullText().slice(piece.start, piece.end);
        if (piece.imports) {
            pieceContent = `${piece.imports}\n\n${pieceContent}`;
        }
        if (piece.exports) {
            pieceContent = `${pieceContent}\n\n${piece.exports}`;
        }
        writeFileSync(piece.path, pieceContent);
    }
}

function replacePieces(sourceFile, pieces) {
    let sourceFileText = sourceFile.getFullText();
    let writtenCount = 0;
    pieces.forEach((piece) => {
        if (piece.generated || !existsSync(piece.path)) return;
        const text = readFileSync(piece.path, 'utf-8')
            .split('\n')
            .filter((e) => !e.startsWith(ImportPrompt) && !e.startsWith(ExportPrompt))
            .join('\n')
            .trim();
        sourceFileText = `${sourceFileText.slice(0, piece.start)}${text}${sourceFileText.slice(piece.end)}`;
        writtenCount++;
    });
    if (writtenCount > 0) {
        sourceFile.replaceWithText(sourceFileText);
    }
}

module.exports = { split, writePiece, replacePieces };
