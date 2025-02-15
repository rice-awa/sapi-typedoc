/* IMPORT */ import { PlayerInteractWithBlockBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with a block.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with a block.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}