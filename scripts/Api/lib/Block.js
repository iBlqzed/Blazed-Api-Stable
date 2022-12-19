import { world } from "./World"

export class Block {
    #dimension
    constructor(location) {
        this.location = { x: location.x, y: location.y, z: location.z }
        this.#dimension = world.getDimension(location.dimension)
    }

    setType(type, components) {
        this.#dimension.runCommandAsync(`setblock ${this.location.x} ${this.location.y} ${this.location.z} ${type} ${components ?? ""}`)
    }

    break() {
        this.#dimension.runCommandAsync(`setblock ${this.location.x} ${this.location.y} ${this.location.z} air 0 destroy`)
    }
}

export class BlockLocation {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    above() {
        const loc = new BlockLocation(this.x, this.y + 1, this.z)
        loc.dimension = this?.dimension
        return loc
    }

    equals(location) {
        return (this.x === location.x && this.y === location.y && this.z === location.z && this?.dimension === location.dimension)
    }
}