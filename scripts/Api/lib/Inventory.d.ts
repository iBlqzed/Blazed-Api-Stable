import { ItemStack } from "./Item";
import { Entity } from "./Entity";
import { Player as IPlayer } from "@minecraft/server";
export declare class EntityInventory {
    protected readonly entity: Entity | IPlayer;
    readonly size: number;
    constructor(entity: Entity | IPlayer);
    /**
     * Add an item to the inventory
     * @param {ItemStack} item Item to be added to the inventory
     */
    addItem(item: ItemStack): void;
    /**
     * Clears all items from the inventory
     */
    clear(): void;
    /**
     * Test for if a slot in the inventory is empty
     * @param {number} slot Slot to test
     * @returns {Promise<boolean>} Whether or not the slot is empty
     */
    isEmpty(slot: number): Promise<boolean>;
    /**
     * Set an item to a certain slot in the inventory
     * @param {number} slot The slot of the inventory to set the item to
     * @param {ItemStack} item The item to set to the slot in the inventory
     */
    setItem(slot: number, item?: ItemStack): void;
}
