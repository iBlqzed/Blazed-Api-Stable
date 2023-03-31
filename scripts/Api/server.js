import { system, world } from "@minecraft/server";
export * from "./lib/index.js";
system.run(() => {
    const v = world.getDimension("overworld");
    v.runCommandAsync(`scoreboard objectives add API_X dummy`);
    v.runCommandAsync(`scoreboard objectives add API_Y dummy`);
    v.runCommandAsync(`scoreboard objectives add API_Z dummy`);
});
