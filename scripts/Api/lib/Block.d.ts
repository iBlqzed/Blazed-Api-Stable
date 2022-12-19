import { IBlockLocation } from "./Types";

export declare class Block {
    private readonly location: IBlockLocation
    private readonly x: number
    private readonly y: number
    private readonly z: number
    constructor (x: number, y: number, z: number) {
        this.x = x; this.y = y; this.z = z
        this.location.x = x; this.location.y = y; this.location.z = z
    }
   /**
     * Sets the type of block.
     * @param {string} type Sets the type of block.
     * @param {string} components Additional components for this block
     * @example setType('minecraft:wool', '["color": "red"]')
     */
    setType(type: string, components: string): boolean

    /**
     * Breaks the block if it exists
     */
    break(): void
}

export declare class BlockLocation {
    /**
     * The x position
     */
    private readonly x: number
     /**
     * The y position
     */
    private readonly y: number
     /**
     * The y position
     */
    private readonly z: number 
    constructor (x: number, y: number, z: number) {
        this.x = x; this.y = y; this.z = z
    }

    /**
     * Compares this BlockLocation and another BlockLocation to one another.
     * @param {BlockLocation} BlockLocation
     */
    equals(BlockLocation: BlockLocation): boolean
    /**
     * Returns a BlockLocation for a block above this BlockLocation (that is, y + 1).
     */
    above(): BlockLocation
}