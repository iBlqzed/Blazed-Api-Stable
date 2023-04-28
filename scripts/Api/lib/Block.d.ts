import { Dimensions } from "./Types"

export declare class Block {
    readonly location: BlockLocation
    constructor(location: BlockLocation) {
        this.x = location.x
    }

    setType(type: string, components: string): void

    break(): void
}

export declare class BlockLocation {
    readonly x: number
    readonly y: number
    readonly z: number
    readonly dimension: Dimensions
    constructor(x: number, y: number, z: number): void
    above(): BlockLocation
    equals(location: BlockLocation): boolean
}