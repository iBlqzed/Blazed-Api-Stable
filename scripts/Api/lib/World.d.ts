import { RawMessage } from "@minecraft/server";
import { Dimension } from "./Dimension";
import { Events } from "./Events/Events";
import { Player } from "./Entity";
import { ScoreboardManager } from "./ScoreboardManager";
import { Difficulty, Dimensions, EntityQueryOptions, Gamerule, MusicOptions, SoundOptions, Time } from "./Types";
declare class World {
    /**
     * A set of events to run code
     */
    readonly events: Events;
    /**
     * The world scoreboard manager
     */
    readonly scoreboard: ScoreboardManager;
    /**
     * Set the world's time
     * @param {Time} timeOfDay The time
     */
    setTime(timeOfDay: Time): void;
    /**
     * Plays a particular track for all players
     * @param {string} musicId The id of the track to play
     * @param {MusicOptions} musicOptions Aditional music options
     */
    playMusic(musicId: string, musicOptions?: MusicOptions): void;
    /**
     * Queues an additional music track for all players. if a track is not playing, a music track will play
     * @param {string} musicId The id of the track to queue
     * @param {MusicOptions} musicOptions Aditional music options
     */
    queueMusic(musicId: string, musicOptions?: MusicOptions): void;
    /**
     * Stops any music tracks from playing
     */
    stopMusic(): void;
    /**
     * Plays a sound for all players
     * @param {string} soundId The id of the sound to play
     * @param {SoundOptions} soundOptions Aditional sound options
     */
    playSound(soundId: string, soundOptions?: SoundOptions): void;
    /**
     * Set the difficulty of the world
     * @param {Difficulty} difficulty The difficulty to set the world to
     */
    setDifficulty(difficulty: Difficulty): void;
    /**
     * Set the value of a gamerule
     * @template {keyof Gamerule} V
     * @param {V} gamerule The gamerule to set
     * @param {Gamerule[V]} value The value to set the gamerule too
     */
    setGamerule<V extends keyof Gamerule>(gamerule: V, value: Gamerule[V]): void;
    /**
     * Get all players
     * @returns {Player[]} All players
     */
    getAllPlayers(): Player[];
    /**
     * Get all players, with custom query options
     * @param {EntityQueryOptions} options The query options
     * @returns {Promise<Player[]>} All players that match the query options
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
     * @param {string | RawMessage} message Message to broadcast
     */
    sendMessage(message: string | RawMessage): void;
}
export declare const world: World;
export {};
