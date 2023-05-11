import { system as Isystem } from "@minecraft/server";
class System {
    constructor() {
        /**
         * Amount of ticks that have passed since the world started
         */
        this.currentTick = Isystem.currentTick;
    }
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @returns {number} An id that can be used with the clearRun method
     */
    run(callback) {
        return Isystem.run(callback);
    }
    /**
     * Runs a specified function at a scheduled interval
     * @param callback Function callback to run on the specified interval
     * @param tickInterval Amount of ticks until callback is called
     * @returns {number} An id that can be used with the clearRun method
     */
    runInterval(callback, tickInterval) {
        return Isystem.runInterval(callback, tickInterval);
    }
    /**
     * Runs a specified function at a future time
     * @param callback Function callback to run when the tickDelay time criteria is met
     * @returns {number} An id that can be used with the clearRun method
     */
    runTimeout(callback, tickDelay) {
        return Isystem.runTimeout(callback, tickDelay);
    }
    /**
     * Clear the run of a previously executed run call
     * @param id Id of the returned run call
     */
    clearRun(id) {
        Isystem.clearRun(id);
    }
}
export const system = new System();
