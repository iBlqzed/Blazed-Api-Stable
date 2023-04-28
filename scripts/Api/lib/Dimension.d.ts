import { Block, BlockLocation } from "./Block";
import { Dimensions, Vec3 } from "./Types";
export declare class Dimension {
    private dimension;
    constructor(id: Dimensions);
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
    spawnParticle(particleId: string, location: Vec3): void;

    getBlock(location: BlockLocation): Block
}
