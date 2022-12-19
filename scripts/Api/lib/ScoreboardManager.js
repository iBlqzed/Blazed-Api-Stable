import { world } from "@minecraft/server";
const v = world.getDimension("overworld");
export class ScoreboardManager {
    /**
     * Add a scoreboard objective
     * @param {string} id The objective id
     * @param {string} display The optional display of the objective
     */
    addObjective(id, display) {
        v.runCommandAsync(`scoreboard objectives add ${id} dummy ${display ?? ''}`);
    }
    /**
     * Remove an objective
     * @param {string} id The objective id to remove
     */
    removeObjective(id) {
        v.runCommandAsync(`scoreboard objectives remove ${id}`);
    }
    /**
     * Set an objective to a display slot
     * @param {string} objective Objective to set at the display slot
     * @param {DisplaySlot} displaySlot The display slot
     */
    setObjectiveAtDisplaySlot(objective, displaySlot) {
        v.runCommandAsync(`scoreboard objectives setdisplay ${displaySlot} ${objective}`);
    }
    /**
     * Clear whatever objective is at a display slot
     * @param {DisplaySlot} displaySlot The display slot
     */
    clearObjectiveAtDisplaySlot(displaySlot) {
        v.runCommandAsync(`scoreboard objectives setdisplay ${displaySlot}`);
    }
}
