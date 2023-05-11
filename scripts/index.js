import { world } from "./Api/server";
world.events.tick.subscribe(async (data) => {
    for (const player of world.getAllPlayers()) {
        console.warn(player.getDimension().getBlock(await player.getLocation()).x);
    }
});
