import { world } from "./Api/index.js";
const timeArray = [];
let tps;
world.events.tick.subscribe(async ({ deltaTime }) => {
    if (timeArray.length >= 50)
        timeArray.shift();
    timeArray.push(deltaTime);
    tps = Math.round(timeArray.length / timeArray.reduce((a, b) => a + b));
    // world.broadcast(`§aTPS: [${tps}]`)
});
