import { world as Iworld } from "@minecraft/server";
import { Dimension } from "./Dimension";
import { Events } from "./Events/Events";
import { Player } from "./Entity";
import { ScoreboardManager } from "./ScoreboardManager";
import { Gamemode } from "./Types";
const v = Iworld.getDimension("overworld");
class World {
    constructor() {
        /**
         * A set of events to run code
         */
        this.events = new Events();
        /**
         * The world scoreboard manager
         */
        this.scoreboard = new ScoreboardManager();
    }
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    async runCommandAsync(command) {
        return v.runCommandAsync(command).then(() => true).catch(() => false);
    }
    /**
     * Set the world's time
     * @param {Time} timeOfDay The time
     */
    setTime(timeOfDay) {
        v.runCommandAsync(`time set ${timeOfDay}`);
    }
    /**
     * Plays a particular track for all players
     * @param {string} musicId The id of the track to play
     * @param {MusicOptions} musicOptions Aditional music options
     */
    playMusic(musicId, musicOptions) {
        v.runCommandAsync(`music play ${musicId} ${musicOptions?.volume ?? "1"} ${musicOptions?.fade ?? "0"} ${musicOptions?.loop ? "loop" : "only_once"}`);
    }
    /**
     * Queues an additional music track for all players. if a track is not playing, a music track will play
     * @param {string} musicId The id of the track to queue
     * @param {MusicOptions} musicOptions Aditional music options
     */
    queueMusic(musicId, musicOptions) {
        v.runCommandAsync(`music queue ${musicId} ${musicOptions?.volume ?? "1"} ${musicOptions?.fade ?? "0"} ${musicOptions?.loop ? "loop" : "only_once"}`);
    }
    /**
     * Stops any music tracks from playing
     */
    stopMusic() {
        v.runCommandAsync('music stop');
    }
    /**
     * Plays a sound for all players
     * @param {string} soundId The id of the sound to play
     * @param {SoundOptions} soundOptions Aditional sound options
     */
    playSound(soundId, soundOptions) {
        v.runCommandAsync(`execute as @a at @s run playsound ${soundId} @s ${soundOptions?.location ? `${soundOptions.location.x} ${soundOptions.location.y} ${soundOptions.location.z}` : `~~~`} ${soundOptions?.volume ?? '1'} ${soundOptions?.pitch ?? "1"}`);
    }
    /**
     * Set the difficulty of the world
     * @param {Difficulty} difficulty The difficulty to set the world to
     */
    setDifficulty(difficulty) {
        v.runCommandAsync(`difficulty ${difficulty}`);
    }
    /**
     * Set the value of a gamerule
     * @template {keyof Gamerule} V
     * @param {V} gamerule The gamerule to set
     * @param {Gamerule[V]} value The value to set the gamerule too
     */
    setGamerule(gamerule, value) {
        v.runCommandAsync(`gamerule ${gamerule} ${value}`);
    }
    /**
     * Get all players
     * @returns {Player[]} All players
     */
    getAllPlayers() {
        return Iworld.getAllPlayers().map(plr => new Player(plr));
    }
    /**
     * Get all players, with custom query options
     * @param {EntityQueryOptions} options The query options
     * @returns {Promise<Player[]>} All players that match the query options
     */
    async getPlayers(options) {
        if (!options)
            return Iworld.getAllPlayers().map(plr => new Player(plr));
        return new Promise(e => {
            const plrArr = [], plrs = Iworld.getAllPlayers(), len = plrs.length;
            let cmd = `testfor @s[`;
            if (options.name)
                cmd += `name=${options.name},`;
            else if (options.excludeNames)
                options.excludeNames.forEach(name => cmd += `name=!${name},`);
            if (options.gameMode)
                cmd += `m=${options.gameMode === Gamemode.spectator ? "spectator" : options.gameMode},`;
            else if (options.excludeGameModes)
                options.excludeGameModes.forEach(gm => cmd += `m=!${gm},`);
            if (options.tags)
                cmd += options.tags.forEach(tag => `tag=${tag},`);
            else if (options.excludeTags)
                options.excludeTags.forEach(tag => cmd += `tag=!${tag},`);
            if (options.family)
                cmd += `family=${options.family},`;
            else if (options.excludeFamilies)
                options.excludeFamilies.forEach(family => cmd += `family=!${family},`);
            if (options.location) {
                cmd += `x=${Math.floor(options.location.x)},y=${Math.floor(options.location.y)},z=${Math.floor(options.location.z)},`;
                if (options.closest)
                    cmd += `c=${options.closest},`;
            }
            plrs.forEach(async (plr, i) => {
                plr.runCommandAsync(cmd.slice(0, -1) + "]").then(() => plrArr.push(new Player(plr))).finally(() => (++i === len) && e(plrArr));
            });
        });
    }
    /**
     * Get a dimension
     * @param {Dimensions} dimension The dimension to get
     * @returns {Dimension} The dimension class
     */
    getDimension(dimension) {
        return new Dimension(dimension);
    }
    /**
     * Broadcast a message in chat
     * @param {string | number | symbol} message Message to broadcast
     */
    say(message) {
        v.runCommandAsync(`tellraw @a {"rawtext":[{"text":"${message.toString().replaceAll('"', '\\"')}"}]}`);
    }
}
export const world = new World();
