import { CommandHandler } from "./CommandHandler";
import { Dimension } from "./Dimension";
import { Events } from "./Events/Events";
import { Player } from "./Player";
import { Dimensions, EntityQueryOptions } from "./Types";
export declare class World {
    /**
     * A set of events to run code
     */
    readonly events: Events;
    /**
     * A custom commmand handler
     */
    readonly commands: CommandHandler;
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
    /**
     * Get all players, with custom query options
     * @param {EntityQueryOptions} options The query options
     * @returns {Player[]} All players that match the query options
     */
    getPlayers(options?: EntityQueryOptions): Promise<Player[]>;
    /**
     * Get a dimension
     * @param {Dimensions} dimension The dimension to get
     * @returns {Dimension} The dimension class
     */
    getDimension(dimension: Dimensions): Dimension;
    /**
     * Broadcast a message in chat
     * @param {string | number | symbol} message Message to broadcast
     */
    broadcast(message: string | number | symbol): void;
    /**
     * Plays a particular music track for all players
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * Queues an additional music track for all players. if a track is not playing, a music track will play
     */
    queueMusic(): void;
    /**
     * Plays a sound for all players
     */
    playSound(soundID: string, soundOptions: SoundOptions): void;
    /**
     * Stops any music tracks from playing
     */
    stopMusic(): void;
}
export declare const world: World;
export {};
