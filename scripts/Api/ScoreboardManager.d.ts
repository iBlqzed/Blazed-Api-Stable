import { DisplaySlotId, ScoreboardObjectiveDisplayOptions } from "./Types";

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
     * Sets an objective into display slot with specified additional display setting
     * @param {DisplaySlotId} displaySlotId
     * @param {ScoreboardObjectiveDisplayOptions} objectiveDisplaySetting
     */
    setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): void;
    /**
     * Clears the objective that occupies a display slot
     * @param {DisplaySlotId} displaySlotId
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): void;
}
