import { Dimension } from "./Dimension";
import { BlockPermutation } from "./BlockPermutation";
export class Block {
    constructor(block) {
        this.block = block;
        this.x = block.x;
        this.y = block.y;
        this.z = block.z;
    }
    /**
     * Gets the block's dimension
     * @returns {Dimension} The block's dimension
     */
    getDimension() {
        //@ts-ignore
        return new Dimension(this.block.dimension);
    }
    /**
     * Gets the block's location
     * @returns {Vector3} The block's location
     */
    getLocation() {
        return this.block.location;
    }
    /**
     * Gets the block's permutation
     * @returns {BlockPermutation} The block's permutation
     */
    getPermutation() {
        return new BlockPermutation(this.block.permutation);
    }
    /**
     * Sets the block's permutation
     * @param {BlockPermutation} permutation The permutation to set the block to
     */
    setPermutation(permutation) {
        this.block.setPermutation(permutation);
    }
}
