import { world as IWorld } from "@minecraft/server"
const v = IWorld.getDimension("overworld")

export class GameruleManager {
    /**
     * Sets a gamerule value
     * @param {Rule} rule
     * @param {boolean | number} value  
     */
    setGamerule(rule, value) {
        v.runCommandAsync(`gamerule ${rule} ${value}`)
    }
}