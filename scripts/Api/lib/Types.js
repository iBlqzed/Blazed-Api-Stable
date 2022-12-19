export var Gamemode;
(function (Gamemode) {
    Gamemode[Gamemode["survival"] = 0] = "survival";
    Gamemode[Gamemode["creative"] = 1] = "creative";
    Gamemode[Gamemode["adventure"] = 2] = "adventure";
    Gamemode[Gamemode["spectator"] = 3] = "spectator";
    Gamemode[Gamemode["default"] = 5] = "default";
})(Gamemode || (Gamemode = {}));
export const MinecraftEffectTypes = {
    absorption: {
        getName() {
            return "absorption";
        }
    },
    badOmen: {
        getName() {
            return "bad_omen";
        }
    },
    blindness: {
        getName() {
            return "blindness";
        }
    },
    conduitPower: {
        getName() {
            return "conduit_power";
        }
    },
    darkness: {
        getName() {
            return "darkness";
        }
    },
    fatalPoison: {
        getName() {
            return "fatal_poison";
        }
    },
    fireResistance: {
        getName() {
            return "fire_resistance";
        }
    },
    haste: {
        getName() {
            return "haste";
        }
    },
    healthBoost: {
        getName() {
            return "health_boost";
        }
    },
    hunger: {
        getName() {
            return "hunger";
        }
    },
    instantDamage: {
        getName() {
            return "instant_damage";
        }
    },
    instantHealth: {
        getName() {
            return "instant_health";
        }
    },
    invisibility: {
        getName() {
            return "invisibility";
        }
    },
    jumpBoost: {
        getName() {
            return "jump_boost";
        }
    },
    levitation: {
        getName() {
            return "levitation";
        }
    },
    miningFatigue: {
        getName() {
            return "mining_fatigue";
        }
    },
    nausea: {
        getName() {
            return "nausea";
        }
    },
    nightVision: {
        getName() {
            return "night_vision";
        }
    },
    poison: {
        getName() {
            return "poison";
        }
    },
    regeneration: {
        getName() {
            return "regeneration";
        }
    },
    resistance: {
        getName() {
            return "resistance";
        }
    },
    saturation: {
        getName() {
            return "saturation";
        }
    },
    slowFalling: {
        getName() {
            return "slow_falling";
        }
    },
    slowness: {
        getName() {
            return "slowness";
        }
    },
    speed: {
        getName() {
            return "speed";
        }
    },
    strength: {
        getName() {
            return "strength";
        }
    },
    villageHero: {
        getName() {
            return "village_hero";
        }
    },
    waterBreathing: {
        getName() {
            return "water_breathing";
        }
    },
    weakness: {
        getName() {
            return "weakness";
        }
    },
    wither: {
        getName() {
            return "wither";
        }
    }
};
