import { system } from "@minecraft/server";
import { EventCreator } from "./EventCreator";
export class TickEventSignal extends EventCreator {
    constructor() {
        super();
        let now = Date.now();
        const tick = () => {
            const v = Date.now();
            this.emit({ deltaTime: v - now });
            now = v;
            system.run(tick);
        };
        system.run(tick);
    }
}
