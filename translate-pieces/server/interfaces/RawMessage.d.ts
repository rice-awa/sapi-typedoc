/* IMPORT */ import { RawMessageScore } from '../index';

/**
 * Defines a JSON structure that is used for more flexible.
 * @example addTranslatedSign.ts
 * ```typescript
 * import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
 *
 * function placeTranslatedSign(location: DimensionLocation, text: string) {
 *     const signBlock = location.dimension.getBlock(location);
 *
 *     if (!signBlock) {
 *         console.warn('Could not find a block at specified location.');
 *         return;
 *     }
 *     const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
 *     signBlock.setPermutation(signPerm);
 *
 *     const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
 *     if (signComponent) {
 *         signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
 *     } else {
 *         console.error('Could not find a sign component on the block.');
 *     }
 * }
 *
 * placeTranslatedSign(
 *     {
 *         dimension: world.getDimension('overworld'),
 *         x: 0,
 *         y: 0,
 *         z: 0,
 *     },
 *     'Steve',
 * );
 * ```
 * @example showTranslatedMessageForm.ts
 * ```typescript
 * import { world, Player } from '@minecraft/server';
 * import { MessageFormData, MessageFormResponse } from '@minecraft/server-ui';
 *
 * function showMessage(player: Player) {
 *     const messageForm = new MessageFormData()
 *         .title({ translate: 'permissions.removeplayer' })
 *         .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] })
 *         .button1('Player 1')
 *         .button2('Player 2');
 *
 *     messageForm
 *         .show(player)
 *         .then((formData: MessageFormResponse) => {
 *             // player canceled the form, or another dialog was up and open.
 *             if (formData.canceled || formData.selection === undefined) {
 *                 return;
 *             }
 *
 *             console.warn(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
 *         })
 *         .catch((error: Error) => {
 *             console.warn('Failed to show form: ' + error);
 *         });
 * };
 *
 * showMessage(world.getAllPlayers()[0]);
 * ```
 */
export interface RawMessage {
    /**
     * @remarks
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * Provides a token that will get replaced with the value of a
     * score.
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * Arguments for the translation token. Can be either an array
     * of strings or RawMessage containing an array of raw text
     * objects.
     *
     */
    with?: string[] | RawMessage;
}