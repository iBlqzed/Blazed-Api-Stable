import { Block as IBlock } from "@minecraft/server";
import { Dimension } from "./Dimension";
import { Vector3 } from "./Types.js";
import { BlockPermutation } from "./BlockPermutation";
export declare class Block {
    protected readonly block: IBlock;
    /**
     * The block's x position
     */
    readonly x: number;
    /**
     * The block's y position
     */
    readonly y: number;
    /**
     * The block's z position
     */
    readonly z: number;
    constructor(block: IBlock);
    /**
     * Gets the block's dimension
     * @returns {Dimension} The block's dimension
     */
    getDimension(): Dimension;
    /**
     * Gets the block's location
     * @returns {Vector3} The block's location
     */
    getLocation(): Vector3;
    /**
     * Gets the block's permutation
     * @returns {BlockPermutation} The block's permutation
     */
    getPermutation(): BlockPermutation;
    /**
     * Sets the block's permutation
     * @param {BlockPermutation} permutation The permutation to set the block to
     */
    setPermutation(permutation: BlockPermutation): void;
}
