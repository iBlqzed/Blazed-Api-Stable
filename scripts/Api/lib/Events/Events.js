import { PlayerDeathEventSignal } from "./PlayerDeath";
import { PlayerJoinEventSignal } from "./PlayerJoin";
import { PlayerLeaveEventSignal } from "./PlayerLeave";
import { TickEventSignal } from "./Tick";
export class Events {
    constructor() {
        this.tick = new TickEventSignal();
        this.playerJoin = new PlayerJoinEventSignal();
        this.playerDeath = new PlayerDeathEventSignal();
        this.playerLeave = new PlayerLeaveEventSignal();
    }
}
export { PlayerDeathEventSignal, PlayerJoinEventSignal, PlayerLeaveEventSignal, TickEventSignal };
