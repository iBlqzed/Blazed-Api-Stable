export declare class ItemStack {
    private readonly id;
    private amount;
    private data;
    constructor(id: string, amount?: number, data?: number);
    /**
     * Get the itemstack's id
     * @returns {string} The itemstack's id
     */
    getId(): string;
    /**
     * Get the amount of the itemstack
     * @returns {number} The amount of the itemstack
     */
    getAmount(): number;
    /**
     * Get the data of the itemstack
     * @returns {number} The data of the itemstack
     */
    getData(): number;
    /**
     * Set the amount of the itemstack
     * @param {number} amount The itemstack's new amount
     */
    setAmount(amount: number): ItemStack;
    /**
     * Set the data of the itemstack
     * @param {number} data The itemstack's new data
     */
    setData(data: number): ItemStack;
}
