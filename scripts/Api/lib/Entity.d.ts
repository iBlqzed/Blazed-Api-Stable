import { Player as IPlayer, Entity as IEntity } from "@minecraft/server";
import { Dimension } from "./Dimension";
import { EntityInventory } from "./Inventory";
import { EffectType, Gamemode, SoundOptions, Vector3 } from "./Types";
export declare class Entity {
    protected readonly entity: IEntity;
    constructor(entity: IEntity);
    /**
     * Add an effect to the entity
     * @param {Effects} effect Effect to add to the entity
     * @param {number} duration Amount of time (in seconds) for the effect to last
     * @param {number} amplifier The strength of the effect
     * @param {boolean} showParticles Whether or not to show particles
     */
    addEffect(effect: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * Add a score to an objective
     * @param {string} objective Objective to add the score to
     * @param {number} score Amount to add to the objective
     */
    addScore(objective: string, score: number): void;
    /**
     * Add a tag to the entity
     * @param {string} tag Tag to add to the entity
     */
    addTag(tag: string): void;
    /**
     * Get the dimension of the entity
     * @returns {Dimension} The entity's dimension
     */
    getDimension(): Dimension;
    /**
     * Get the entity's id
     * @returns {string} The entity's id
     */
    getId(): string;
    /**
     * Get the IEntity
     * @returns {IEntity} The IEntity
     */
    getIEntity(): IEntity;
    /**
     * Get a score on an objective
     * @param {string} objective Objective to get the score of
     * @returns {Promise<number>} The score, or NaN if error
     */
    getScore(objective: string): Promise<number>;
    /**
     * Get the entity's unique id
     * @remarks This is different for every single entity
     * @returns {string} The entity's unique id
     */
    getUniqueId(): string;
    /**
     * Test for whether or not the player has a certain tag
     * @param {string} tag Tag to test for
     * @returns {Promise<boolean>} Whether or not the entity has the tag
     */
    hasTag(tag: string): Promise<boolean>;
    /**
     * Kill the entity
     */
    kill(): void;
    /**
     * Remove a score from an objective
     * @param {string} objective Objective to remove the score from
     * @param {number} score Amount to remove from the objective
     */
    removeScore(objective: string, score: number): void;
    /**
     * Remove a tag from the entity
     * @param {string} tag Tag to remove from the entity
     */
    removeTag(tag: string): void;
    /**
     * Make the entity run an async command
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
    /**
     * Set a score for an objective
     * @param {string} objective Objective to set the score to
     * @param {number} score Amount to set for the objective
     */
    setScore(objective: string, score: number): void;
    /**
     * Teleport to a certain location
     * @param {Vector3} location The location to teleport to
     */
    teleport(location: Vector3): void;
    /**
     * Trigger an entity event
     * @param {string} event Event to trigger
     */
    triggerEvent(event: string): void;
}
export declare class Player extends Entity {
    protected entity: IPlayer;
    constructor(player: IPlayer);
    /**
     * Add xp points to the player
     * @param {number} amount Amount of xp points to add to the player
     */
    addXpPoints(amount: number): void;
    /**
     * Add xp levels to the player
     * @param {number} amount Amount of xp levels to add to the player
     */
    addXpLevels(amount: number): void;
    /**
     * Clear the player's spawn point
     */
    clearRespawnPoint(): void;
    /**
     * Clear the player's title
     * @remarks Clears title and subtitle, not actionbar
     */
    clearTitle(): void;
    /**
     * Get the player's gamemode
     * @returns {Promise<Gamemode>} The player's gamemode
     */
    getGamemode(): Promise<Gamemode>;
    /**
     * Get the entity's id
     * @returns {"minecraft:player"} The entity's id
     */
    getId(): "minecraft:player";
    /**
     * Get the IPlayer
     * @returns {IPlayer} The IPlayer
     */
    getIEntity(): IPlayer;
    /**
     * Get the entity's inventory
     * @returns {EntityInventory} The entity's inventory
     */
    getInventory(): EntityInventory;
    /**
     * Get the player's location
     * @returns {Promise<Vector3>} The player's location
     */
    getLocation(): Promise<Vector3>;
    /**
     * Get the player's name
     * @returns {string} The player's name
     */
    getName(): string;
    /**
     * Message the player something
     * @param {string | number | symbol} message Message to send to the player
     */
    sendMessage(message: string | number | symbol): void;
    /**
     * Plays a sound that only this particular player can hear
     * @param {string} soundId The id of the sound to player
     * @param {SoundOptions} soundOptions Aditional sound options
     */
    playSound(soundId: string, soundOptions?: SoundOptions): void;
    /**
     * Set the player's gamemode
     * @param {Gamemode} gamemode The gamemode to set as the player's
     */
    setGamemode(gamemode: Gamemode): void;
}
