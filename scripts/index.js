import { world, system } from "./Api/index";
const timeArray = [];
let tps;
let i = 0;
world.events.tick.subscribe(async ({ deltaTime }) => {
    i++;
    if (timeArray.length >= 50)
        timeArray.shift();
    timeArray.push(deltaTime);
    tps = Math.round(timeArray.length / timeArray.reduce((a, b) => a + b));
    // world.broadcast(`§aTPS: [${tps}]`)
});
const id = system.run(() => {
    console.warn("this shouldn't happen");
}, 1);
system.clearRun(id);
