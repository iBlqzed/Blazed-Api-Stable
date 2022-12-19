declare class System {
    private id;
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @param tickDelay Amount of ticks until callback is called
     * @returns {number} An id that can be used with the clearRun method
     */
    run(callback: () => void, tickDelay?: number): number;
    /**
     * Runs a specified function at a scheduled interval
     * @param callback Function callback to run on the specified schedule
     * @param tickInterval Amount of ticks until callback is called
     * @returns {number} An id that can be used with the clearRun method
     */
    runSchedule(callback: () => void, tickInterval?: number): number;
    /**
     * Clear the run of a previously executed run call
     * @param id Id of the returned run
     */
    clearRun(id: number): void;
    /**
     * Clear the run of a previously executed runSchedule call
     * @param id Id of the returned runSchedule
     */
    clearRunSchedule(id: number): void;
}
export declare const system: System;
export {};
