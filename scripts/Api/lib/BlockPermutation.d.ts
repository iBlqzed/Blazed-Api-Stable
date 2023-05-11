import { BlockPermutation as IBlockPermutation } from "@minecraft/server";
export declare class BlockPermutation {
    protected readonly permutation: IBlockPermutation;
    constructor(permutation: IBlockPermutation);
    /**
     * Gets the block's IBlockPermutation
     * @returns {IBlockPermutation} The block's IBlockPermutation
     */
    getIPermutation(): IBlockPermutation;
    /**
     * Tests if the permutation matches the id and properties
     * @param {string} id The block id to match the permutation with
     * @param {Record<string, string | number | boolean>} properties A list of properties to match the permutation with
     * @returns {boolean} Whether the permutation matches the id and properties
     */
    matches(id: string, properties?: Record<string, string | number | boolean>): boolean;
}
