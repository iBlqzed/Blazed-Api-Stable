import { world } from "@minecraft/server";
import { Block } from "./Block";
export class Dimension {
    constructor(dim) {
        this.dimension = typeof dim === "string" ? world.getDimension(dim) : dim;
    }
    /**
     * Gets a block at a certian location
     * @param {Vector3} location Location to get the block
     * @returns {Block} Location of the block to get
     */
    getBlock(location) {
        return new Block(this.dimension.getBlock(location));
    }
    /**
     * Get the dimension's id
     * @returns {string} The dimension's id
     */
    getId() {
        return this.dimension.id;
    }
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command) {
        return this.dimension.runCommandAsync(command).then(() => false, () => true);
    }
    /**
     * Spawn a particle at a certain location in this dimension
     * @param particleId The particle id
     * @param location The location at which to spawn the particle
     */
    spawnParticle(particleId, location) {
        this.dimension.runCommandAsync(`particle ${particleId} ${location.x} ${location.y} ${location.z}`);
    }
}
