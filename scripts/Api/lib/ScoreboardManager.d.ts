import { DisplaySlot } from "./Types";
export declare class ScoreboardManager {
    /**
     * Add a scoreboard objective
     * @param {string} id The objective id
     * @param {string} display The optional display of the objective
     */
    addObjective(id: string, display?: string): void;
    /**
     * Remove an objective
     * @param {string} id The objective id to remove
     */
    removeObjective(id: string): void;
    /**
     * Set an objective to a display slot
     * @param {string} objective Objective to set at the display slot
     * @param {DisplaySlot} displaySlot The display slot
     */
    setObjectiveAtDisplaySlot(objective: string, displaySlot: DisplaySlot): void;
    /**
     * Clear whatever objective is at a display slot
     * @param {DisplaySlot} displaySlot The display slot
     */
    clearObjectiveAtDisplaySlot(displaySlot: DisplaySlot): void;
}
