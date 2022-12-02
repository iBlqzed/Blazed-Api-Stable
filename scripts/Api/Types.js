export var Gamemode;
(function (Gamemode) {
    Gamemode[Gamemode["creative"] = 0] = "creative";
    Gamemode[Gamemode["survival"] = 1] = "survival";
    Gamemode[Gamemode["adventure"] = 2] = "adventure";
    Gamemode[Gamemode["spectator"] = 3] = "spectator";
})(Gamemode || (Gamemode = {}));

/**
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
 export class ScoreboardObjectiveDisplayOptions {
    objective
    sortOrder
    constructor(objective, sortOrder) {
        this.objective = objective
        this.sortOrder = sortOrder
    }
}