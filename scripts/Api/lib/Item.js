export class ItemStack {
    constructor(id, amount = 1, data = 0) {
        this.id = id;
        this.amount = amount;
        this.data = data;
    }
    /**
     * Get the itemstack's id
     * @returns {string} The itemstack's id
     */
    getId() {
        return this.id;
    }
    /**
     * Get the amount of the itemstack
     * @returns {number} The amount of the itemstack
     */
    getAmount() {
        return this.amount;
    }
    /**
     * Get the data of the itemstack
     * @returns {number} The data of the itemstack
     */
    getData() {
        return this.data;
    }
    /**
     * Set the amount of the itemstack
     * @param {number} amount The itemstack's new amount
     */
    setAmount(amount) {
        this.amount = amount;
        return this;
    }
    /**
     * Set the data of the itemstack
     * @param {number} data The itemstack's new data
     */
    setData(data) {
        this.data = data;
        return this;
    }
}
