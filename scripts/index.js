import { world } from "./Api/index.js";
import { Location } from "./Api/Location.js";
const timeArray = [];
let tps;
world.events.tick.subscribe(async ({ deltaTime }) => {
    if (timeArray.length >= 50)
        timeArray.shift();
    timeArray.push(deltaTime / 1000);
    tps = Math.min(Math.round(timeArray.length / timeArray.reduce((a, b) => a + b) * 10) / 10, 19.9);
});

world.scoreboard.setObjectiveAtDisplaySlot("sidebar", { objective: "exampleObj", sortOrder: 0 })
world.scoreboard.clearObjectiveAtDisplaySlot("belowname")
world.getDimension("overworld").spawnParticle("minecraft:arrow_spell_emitter", new Location(10, 60, -29))
world.setDifficulty("peaceful")
world.setMaxPlayers(1)
world.gamerule.setGamerule("")