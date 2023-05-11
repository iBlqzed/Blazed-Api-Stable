export class BlockPermutation {
    constructor(permutation) {
        this.permutation = permutation;
    }
    /**
     * Gets the block's IBlockPermutation
     * @returns {IBlockPermutation} The block's IBlockPermutation
     */
    getIPermutation() {
        return this.permutation;
    }
    /**
     * Tests if the permutation matches the id and properties
     * @param {string} id The block id to match the permutation with
     * @param {Record<string, string | number | boolean>} properties A list of properties to match the permutation with
     * @returns {boolean} Whether the permutation matches the id and properties
     */
    matches(id, properties) {
        return this.permutation.matches(id, properties);
    }
}
