import { Location } from "./Location";
import { Dimensions } from "./Types";
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
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     */
    spawnParticle(effectName: string, location: Location): void;
}
