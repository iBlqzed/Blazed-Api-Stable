import { world } from "./World";

export class Block {
    constructor (x, y, z) {
        this.x = x; this.y = y; this.z = z
        this.location.x = x; this.location.y = y; this.location.z = z
    }

    /**
     * Sets the type of block.
     * @param {string} type Sets the type of block.
     * @param {string} components Additional components for this block
     * @example setType('minecraft:wool', '["color": "red"]')
     */
    async setType(type, components) {
        return await world.getDimension('overworld').runCommandAsync(`setblock ${this.x} ${this.y} ${this.z} ${type} ${components ?? ""}`)
        .then(() => true).catch(() => false)
    }

    /**
     * Breaks the block if it exists
     */
    break() {
        world.getDimension('overworld').runCommandAsync(`setblock ${this.x} ${this.y} ${this.z} air 0 destroy`)
    }
}

export class BlockLocation {
    constructor (x, y, z) {
        this.x = x; this.y = y; this.z = z
    }
    /**
     * Compares this BlockLocation and another BlockLocation to one another.
     * @param {BlockLocation} BlockLocation
     */
    equals(BlockLocation) {
        return (this.x === BlockLocation.x && this.y === BlockLocation.y && this.z === BlockLocation.z)
    }

    above() {
        return new BlockLocation(this.x, this.y + 1, this.z)
    }
}