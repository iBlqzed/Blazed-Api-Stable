import { world } from "./Api/server";
world.events.playerDeath.subscribe(data => {
    data.player;
});
