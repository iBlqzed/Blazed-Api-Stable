import { system as Isystem } from "@minecraft/server";
const tickCallbacks = [];
const tick = () => {
    tickCallbacks.forEach((e) => e());
    Isystem.run(tick);
};
Isystem.run(tick);
class System {
    constructor() {
        this.id = 0;
    }
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @param tickDelay Amount of ticks until callback is called
     * @returns {number} An id that can be used with the clearRun method
     */
    run(callback, tickDelay = 0) {
        let currentTick = 0;
        --tickDelay;
        const id = this.id;
        const tick = () => {
            if (currentTick++ >= tickDelay) {
                //@ts-ignore
                tickCallbacks.splice(tickCallbacks.findIndex(e => e["id"] === id), 1);
                callback();
            }
        };
        tick["id"] = id;
        tickCallbacks.push(tick);
        return this.id++;
    }
    /**
     * Runs a specified function at a scheduled interval
     * @param callback Function callback to run on the specified schedule
     * @param tickInterval Amount of ticks until callback is called
     * @returns {number} An id that can be used with the clearRun method
     */
    runSchedule(callback, tickInterval = 0) {
        let currentTick = 0;
        --tickInterval;
        const tick = () => {
            if (currentTick++ >= tickInterval) {
                currentTick = 0;
                callback();
            }
        };
        tick["id"] = this.id;
        tickCallbacks.push(tick);
        return this.id++;
    }
    /**
     * Clear the run of a previously executed run call
     * @param id Id of the returned run
     */
    clearRun(id) {
        //@ts-ignore
        const index = tickCallbacks.findIndex(e => e["id"] === id);
        if (index === -1)
            return;
        tickCallbacks.splice(index, 1);
    }
    /**
     * Clear the run of a previously executed runSchedule call
     * @param id Id of the returned runSchedule
     */
    clearRunSchedule(id) {
        //@ts-ignore
        const index = tickCallbacks.findIndex(e => e["id"] === id);
        if (index === -1)
            return;
        tickCallbacks.splice(index, 1);
    }
}
export const system = new System();
