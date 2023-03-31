import { Player } from "../Entity";
import { EventCreator } from "./EventCreator";
export declare class PlayerDeathEventSignal extends EventCreator<PlayerDeathEvent> {
    constructor();
}
declare type PlayerDeathEvent = {
    player: Player;
};
export {};
