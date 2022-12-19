import { system, world } from "@minecraft/server";
export { world } from "./lib/World.js";
export { system } from "./lib/System.js";
export { Player } from "./lib/Player.js";
export * from "./lib/Types.js";
system.run(() => {
    const v = world.getDimension("overworld");
    v.runCommandAsync(`scoreboard objectives add API_X dummy`);
    v.runCommandAsync(`scoreboard objectives add API_Y dummy`);
    v.runCommandAsync(`scoreboard objectives add API_Z dummy`);
});
