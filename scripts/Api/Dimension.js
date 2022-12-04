import { world } from "@minecraft/server";
export class Dimension {
    constructor(id) {
        this.dimension = world.getDimension(id);
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
        return new Promise(e => this.dimension.runCommandAsync(command).then(() => e(true)).catch(() => e(false)));
    }
    /**
     * Spawn a particle at a certain location in this dimension
     * @param particleId The particle id
     * @param location The location at which to spawn the particle
     */
    spawnParticle(particleId, location) {
        this.dimension.runCommandAsync(`particle ${particleId} ${location ? `${location.x} ${location.y} ${location.z}` : "~~~"}`);
    }
}
