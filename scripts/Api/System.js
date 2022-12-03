import { system as Isystem } from "@minecraft/server";
class System {
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @param tickDelay Amount of ticks until callback is called
     */
    run(callback, tickDelay = 0) {
        let currentTick = 0;
        const tick = () => {
            if (currentTick++ >= tickDelay)
                return callback();
            Isystem.run(tick);
        };
        Isystem.run(tick);
    }
    /**
     * Runs a specified function at a scheduled interval
     * @param callback Function callback to run on the specified schedule
     * @param tickInterval Amount of ticks until callback is called
     */
    runSchedule(callback, tickInterval = 0) {
        const tick = () => {
            callback();
            this.run(tick, tickInterval);
        };
        this.run(tick, tickInterval);
    }
}
export const system = new System();
