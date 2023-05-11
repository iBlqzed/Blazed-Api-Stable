export class EntityInventory {
    constructor(entity) {
        this.entity = entity;
        this.size = 36;
    }
    /**
     * Add an item to the inventory
     * @param {ItemStack} item Item to be added to the inventory
     */
    addItem(item) {
        this.entity.runCommandAsync(`give @s ${item.getId()} ${item.getAmount()} ${item.getData()}`);
    }
    /**
     * Clears all items from the inventory
     */
    clear() {
        this.entity.runCommandAsync(`clear @s`);
    }
    /**
     * Test for if a slot in the inventory is empty
     * @param {number} slot Slot to test
     * @returns {Promise<boolean>} Whether or not the slot is empty
     */
    async isEmpty(slot) {
        if (slot < 0 || slot >= this.size)
            return true;
        return this.entity.runCommandAsync(`replaceitem entity @s slot.${slot > 8 ? `inventory ${slot - 8}` : `hotbar ${slot}`} keep minecraft:air`).then(() => true, () => false);
    }
    /**
     * Set an item to a certain slot in the inventory
     * @param {number} slot The slot of the inventory to set the item to
     * @param {ItemStack} item The item to set to the slot in the inventory
     */
    setItem(slot, item) {
        if (slot < 0 || slot >= this.size)
            return;
        this.entity.runCommandAsync(`replaceitem entity @s slot.${slot > 8 ? `inventory ${slot - 8}` : `hotbar ${slot}`} ${item.getId() ?? "minecraft:air"} ${item.getAmount() ?? 1} ${item.getData() ?? 0}`);
    }
}
