import { system } from "@minecraft/server";
import { EventCreator } from "./EventCreator";
export class TickEventSignal extends EventCreator {
    constructor() {
        super();
        let now = Date.now();
        system.runInterval(() => {
            const v = Date.now();
            this.emit({ deltaTime: (v - now) / 1000, currentTick: system.currentTick });
            now = v;
        });
    }
}
