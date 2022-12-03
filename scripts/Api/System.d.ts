declare class System {
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @param tickDelay Amount of ticks until callback is called
     */
    run(callback: () => void, tickDelay?: number): void;
    /**
     * Runs a specified function at a scheduled interval
     * @param callback Function callback to run on the specified schedule
     * @param tickInterval Amount of ticks until callback is called
     */
    runSchedule(callback: () => void, tickInterval?: number): void;
}
export declare const system: System;
export {};
