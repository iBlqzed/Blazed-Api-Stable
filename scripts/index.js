import { world } from "./Api/index.js";
const timeArray = [];
let tps;
world.events.tick.subscribe(async ({ deltaTime }) => {
    if (timeArray.length >= 50)
        timeArray.shift();
    timeArray.push(deltaTime / 1000);
    tps = Math.min(Math.round(timeArray.length / timeArray.reduce((a, b) => a + b) * 10) / 10, 19.9);
});