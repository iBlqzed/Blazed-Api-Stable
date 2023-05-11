declare class System {
    /**
     * Amount of ticks that have passed since the world started
     */
    readonly currentTick: number;
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @returns {number} An id that can be used with the clearRun method
     */
    run(callback: () => void): number;
    /**
     * Runs a specified function at a scheduled interval
     * @param callback Function callback to run on the specified interval
     * @param tickInterval Amount of ticks until callback is called
     * @returns {number} An id that can be used with the clearRun method
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @returns {number} An id that can be used with the clearRun method
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * Clear the run of a previously executed run call
     * @param id Id of the returned run call
     */
    clearRun(id: number): void;
}
export declare const system: System;
export {};
