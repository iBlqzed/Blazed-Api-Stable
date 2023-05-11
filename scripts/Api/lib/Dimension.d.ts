import { Dimension as IDimension } from "@minecraft/server";
import { Dimensions, Vector3 } from "./Types";
import { Block } from "./Block";
export declare class Dimension {
    private readonly dimension;
    constructor(dim: Dimensions | IDimension);
    /**
     * Gets a block at a certian location
     * @param {Vector3} location Location to get the block
     * @returns {Block} Location of the block to get
     */
    getBlock(location: Vector3): Block;
    /**
     * Get the dimension's id
     * @returns {string} The dimension's id
     */
    getId(): string;
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
    /**
     * Spawn a particle at a certain location in this dimension
     * @param particleId The particle id
     * @param location The location at which to spawn the particle
     */
    spawnParticle(particleId: string, location: Vector3): void;
}
