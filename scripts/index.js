import { world } from "./Api/server";
world.events.tick.subscribe(async (data) => {
    for (const player of world.getAllPlayers()) {
        // player.teleport(await player.getLocation())
    }
});
