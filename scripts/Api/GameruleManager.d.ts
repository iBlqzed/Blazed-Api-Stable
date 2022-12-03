import { Rule } from "./Types";

export declare class GameruleManager {
    /**
     * Sets a gamerule value
     * @param {Rule} rule
     * @param {boolean | number} value  
     */
    setGamerule(rule: Rule, value: boolean | number): void;
}