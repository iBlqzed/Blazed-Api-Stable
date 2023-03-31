import { Dimension } from "./Dimension";
import { EntityInventory } from "./Inventory";
import { Gamemode } from "./Types";
export class Entity {
    constructor(entity) {
        this.entity = entity;
    }
    /**
     * Add an effect to the entity
     * @param {Effects} effect Effect to add to the entity
     * @param {number} duration Amount of time (in seconds) for the effect to last
     * @param {number} amplifier The strength of the effect
     * @param {boolean} showParticles Whether or not to show particles
     */
    addEffect(effect, duration, amplifier, showParticles) {
        this.entity.runCommandAsync(`effect @s ${effect.getName()} ${duration} ${amplifier ?? ""} ${amplifier ? !showParticles : ""}`);
    }
    /**
     * Add a score to an objective
     * @param {string} objective Objective to add the score to
     * @param {number} score Amount to add to the objective
     */
    addScore(objective, score) {
        this.entity.runCommandAsync(`scoreboard players add @s "${objective}" ${score}`);
    }
    /**
     * Add a tag to the entity
     * @param {string} tag Tag to add to the entity
     */
    addTag(tag) {
        this.entity.runCommandAsync(`tag @s add ${tag}`);
    }
    /**
     * Get the dimension of the entity
     * @returns {Dimension} The entity's dimension
     */
    getDimension() {
        return new Dimension("overworld");
        //@ts-ignore
        return new Dimension(this.entity.dimension.id);
    }
    /**
     * Get the entity's id
     * @returns {string} The entity's id
     */
    getId() {
        return this.entity.typeId;
    }
    /**
     * Get the IEntity
     * @returns {IPlayer} The IEntity
     */
    getIEntity() {
        return this.entity;
    }
    /**
     * Get a score on an objective
     * @param {string} objective Objective to get the score of
     * @returns {Promise<number>} The score, or NaN if error
     */
    async getScore(objective) {
        return this.entity.runCommandAsync(`scoreboard players test @s "${objective}" -2147483648 -2147483648`).then(() => -2147483648, (e) => parseInt(e.match(/-?\d+/)[0]) ?? NaN);
    }
    /**
     * Get the entity's unique id
     * @remarks This is different for every single entity
     * @returns {string} The entity's unique id
     */
    getUniqueId() {
        return this.entity.id;
    }
    /**
     * Test for whether or not the player has a certain tag
     * @param {string} tag Tag to test for
     * @returns {Promise<boolean>} Whether or not the entity has the tag
     */
    async hasTag(tag) {
        return this.entity.runCommandAsync(`tag @s add ${tag}`).then(async () => {
            await this.entity.runCommandAsync(`tag @s remove ${tag}`);
            return false;
        }, () => true);
    }
    /**
     * Kill the entity
     */
    kill() {
        this.entity.runCommandAsync(`kill @s`);
    }
    /**
     * Remove a score from an objective
     * @param {string} objective Objective to remove the score from
     * @param {number} score Amount to remove from the objective
     */
    removeScore(objective, score) {
        this.entity.runCommandAsync(`scoreboard players remove @s "${objective}" ${score}`);
    }
    /**
     * Remove a tag from the entity
     * @param {string} tag Tag to remove from the entity
     */
    removeTag(tag) {
        this.entity.runCommandAsync(`tag @s remove ${tag}`);
    }
    /**
     * Make the entity run an async command
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    async runCommandAsync(command) {
        return this.entity.runCommandAsync(command).then(() => true).catch(() => false);
    }
    /**
     * Set a score for an objective
     * @param {string} objective Objective to set the score to
     * @param {number} score Amount to set for the objective
     */
    setScore(objective, score) {
        this.entity.runCommandAsync(`scoreboard players set @s "${objective}" ${score}`);
    }
    /**
     * Teleport to a certain location
     * @param {Vec3} location The location to teleport to
     */
    teleport(location) {
        this.entity.runCommandAsync(`tp @s ${location.x} ${location.y} ${location.z}`);
    }
    /**
     * Trigger an entity event
     * @param {string} event Event to trigger
     */
    triggerEvent(event) {
        this.entity.runCommandAsync(`event entity @s ${event}`);
    }
}
export class Player extends Entity {
    constructor(player) {
        super(player);
    }
    /**
     * Add xp points to the player
     * @param {number} amount Amount of xp points to add to the player
     */
    addXpPoints(amount) {
        if (!Number.isSafeInteger(amount))
            return;
        this.entity.runCommandAsync(`xp ${amount} @s`);
    }
    /**
     * Add xp levels to the player
     * @param {number} amount Amount of xp levels to add to the player
     */
    addXpLevels(amount) {
        if (!Number.isSafeInteger(amount))
            return;
        this.entity.runCommandAsync(`xp ${amount}L @s`);
    }
    /**
     * Clear the player's spawn point
     */
    clearRespawnPoint() {
        this.entity.runCommandAsync(`clearspawnpoint @s`);
    }
    /**
     * Clear the player's title
     * @remarks Clears title and subtitle, not actionbar
     */
    clearTitle() {
        this.entity.runCommandAsync(`title @s clear`);
    }
    /**
     * Get the player's gamemode
     * @returns {Promise<Gamemode>} The player's gamemode
     */
    async getGamemode() {
        return Promise.any([
            this.entity.runCommandAsync(`testfor @s[m=${Gamemode.survival}]`).then(() => Gamemode.survival),
            this.entity.runCommandAsync(`testfor @s[m=${Gamemode.creative}]`).then(() => Gamemode.creative),
            this.entity.runCommandAsync(`testfor @s[m=${Gamemode.adventure}]`).then(() => Gamemode.adventure),
            this.entity.runCommandAsync(`testfor @s[m=spectator]`).then(() => Gamemode.spectator),
        ]).catch(() => undefined);
    }
    /**
     * Get the entity's id
     * @returns {"minecraft:player"} The entity's id
     */
    getId() {
        return "minecraft:player";
    }
    /**
     * Get the IPlayer
     * @returns {IPlayer} The IPlayer
     */
    getIEntity() {
        return this.entity;
    }
    /**
     * Get the entity's inventory
     * @returns {EntityInventory} The entity's inventory
     */
    getInventory() {
        return new EntityInventory(this.entity);
    }
    /**
     * Get the player's location
     * @returns {Promise<Vec3>} The player's location
     */
    async getLocation() {
        return {
            x: await this.getScore("API_X"),
            y: await this.getScore("API_Y"),
            z: await this.getScore("API_Z")
        };
    }
    /**
     * Get the player's name
     * @returns {string} The player's name
     */
    getName() {
        return this.entity.name;
    }
    /**
     * Message the player something
     * @param {string | number | symbol} message Message to send to the player
     */
    sendMessage(message) {
        this.entity.runCommandAsync(`tellraw @s {"rawtext":[{"text":"${message.toString()}"}]}`);
    }
    /**
     * Plays a sound that only this particular player can hear
     * @param {string} soundId The id of the sound to player
     * @param {SoundOptions} soundOptions Aditional sound options
     */
    playSound(soundId, soundOptions) {
        this.entity.runCommandAsync(`playsound ${soundId} @s ${soundOptions?.location ? `${soundOptions.location.x} ${soundOptions.location.y} ${soundOptions.location.z}` : `~~~`} ${soundOptions?.volume ?? '1'} ${soundOptions?.pitch ?? "1"}`);
    }
    /**
     * Set the player's gamemode
     * @param {Gamemode} gamemode The gamemode to set as the player's
     */
    setGamemode(gamemode) {
        this.entity.runCommandAsync(`gamemode ${gamemode === Gamemode.spectator ? "spectator" : gamemode} @s`);
    }
}
