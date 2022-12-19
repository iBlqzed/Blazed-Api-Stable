import type { Player } from "./Player";
export declare enum Gamemode {
    survival = 0,
    creative = 1,
    adventure = 2,
    spectator = 3,
    default = 5
}
export declare const MinecraftEffectTypes: {
    readonly absorption: EffectType;
    readonly badOmen: EffectType;
    readonly blindness: EffectType;
    readonly conduitPower: EffectType;
    readonly darkness: EffectType;
    readonly fatalPoison: EffectType;
    readonly fireResistance: EffectType;
    readonly haste: EffectType;
    readonly healthBoost: EffectType;
    readonly hunger: EffectType;
    readonly instantDamage: EffectType;
    readonly instantHealth: EffectType;
    readonly invisibility: EffectType;
    readonly jumpBoost: EffectType;
    readonly levitation: EffectType;
    readonly miningFatigue: EffectType;
    readonly nausea: EffectType;
    readonly nightVision: EffectType;
    readonly poison: EffectType;
    readonly regeneration: EffectType;
    readonly resistance: EffectType;
    readonly saturation: EffectType;
    readonly slowFalling: EffectType;
    readonly slowness: EffectType;
    readonly speed: EffectType;
    readonly strength: EffectType;
    readonly villageHero: EffectType;
    readonly waterBreathing: EffectType;
    readonly weakness: EffectType;
    readonly wither: EffectType;
};
export declare type EffectType = {
    /**
     * Get the name of the effect type
     * @returns {string} The name of the effect type
     */
    getName(): string;
};
export declare type Vec3 = {
    /**
     * The x position
     */
    x: number;
    /**
     * The y position
     */
    y: number;
    /**
     * The z position
     */
    z: number;
};
export declare type EntityQueryScoreOptions = {
    /**
     * If set to true, entities and players within this score range
     * are excluded from query results.
     */
    exclude?: boolean;
    /**
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     */
    maxScore?: number;
    /**
     * If defined, only players that have a score equal to or over
     * minScore are included.
     */
    minScore?: number;
    /**
     * Identifier of the scoreboard objective to filter on.
     */
    objective?: string;
};
export declare type EntityQueryOptions = {
    /**
     * Includes entities with the specified name.
     */
    name?: string;
    /**
     * Includes entities with a gamemode that matches the specified gamemode.
     */
    gameMode?: Gamemode;
    /**
     * Includes entities that match all of the specified tags.
     */
    tags?: string[];
    /**
     * Include entities at the location
     * Used in conjunction with closest, farthest, limit, and distance properties (Requires atleast one of the following).
     */
    location?: Vec3;
    /**
     * Includes the closest entities to the location that was specified
     */
    closest?: number;
    /**
     * Include entities that match the score options
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * Excludes entities that have a name that match one of the specified values.
     */
    excludeNames?: string[];
    /**
     * Excludes entities if have a specific gamemode that matches the specified gamemode.
     */
    excludeGameModes?: Gamemode[];
    /**
     * Excludes entities with a tag that matches one of the specified values.
     */
    excludeTags?: string[];
};
export declare type Dimensions = "overworld" | "nether" | "the end";
export declare type Time = "sunrise" | "day" | "noon" | "sunset" | "night" | "midnight" | number;
export declare type DisplaySlot = "belowname" | "list" | "sidebar";
export declare type Difficulty = "peaceful" | "easy" | "normal" | "hard" | number;
export declare type Gamerule = {
    "commandblockoutput": boolean;
    "commandblocksenbled": boolean;
    "dodaylightcycle": boolean;
    "doweathercycle": boolean;
    "doentitydrops": boolean;
    "dofiretick": boolean;
    "doinmediaterespawn": boolean;
    "doinsomnia": boolean;
    "domobloot": boolean;
    "domobspawning": boolean;
    "dotiledrops": boolean;
    "drowningdamage": boolean;
    "falldamage": boolean;
    "freezedamage": boolean;
    "firedamage": boolean;
    "functioncommandlimit": number;
    "keepinventory": boolean;
    "maxcommandchainlength": number;
    "randomtickspeed": number;
    "respawnblocksexplode": boolean;
    "sendcommandfeedback": boolean;
    "showcoordinates": boolean;
    "showdeathmessages": boolean;
    "naturalregeneration": boolean;
    "mobgriefing": boolean;
    "showtags": boolean;
    "tntexplodes": boolean;
    "spawnradius": boolean;
    "pvp": boolean;
};
export declare type MusicOptions = {
    /**
     * Specifies a fade overlap for music at the end of play.
     */
    fade?: number;
    /**
     * If set to true, this music track will play repeatedly.
     */
    loop?: boolean;
    /**
     * Relative volume level of the music.
     */
    volume?: number;
};
export declare type SoundOptions = {
    /**
     * Specifies a location of where to play a particular sound.
     */
    location?: Vec3;
    /**
     * Pitch adjustment level for the sound.
     */
    pitch?: number;
    /**
     * Relative volume level of the sound.
     */
    volume?: number;
};
export interface CommandInfo {
    /**
     * The name of the command
     */
    name: string;
    /**
     * The description of the commands
     */
    description?: string;
    /**
     * Permission the player needs to run the command
     */
    permission?: (player: Player) => boolean;
}
export interface CommandData extends CommandInfo {
    callback(data: {
        player: Player;
        args: string[];
    }): void;
}
