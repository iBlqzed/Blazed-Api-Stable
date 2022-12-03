import { EventCreator } from "./EventCreator";
export declare class TickEventSignal extends EventCreator<TickEvent> {
    constructor();
}
declare type TickEvent = {
    deltaTime: number;
};
export {};
