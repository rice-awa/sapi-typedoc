/* IMPORT */ import { SecretString } from '../index';

/**
 * A collection of server secrets defined in dedicated server
 * configuration.
 */
export class ServerSecrets {
    private constructor();
    /**
     * @remarks
     * A list of available, configured server secrets.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     *
     * This function can't be called in read-only mode.
     *
     */
    get(name: string): SecretString | undefined;
}