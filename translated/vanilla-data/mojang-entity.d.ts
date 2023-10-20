/**
 * All possible MinecraftEntityTypes
 */
export declare enum MinecraftEntityTypes {
    /** 智能体。 */
    Agent = "agent",
    /** 悦灵。 */
    Allay = "allay",
    /** 区域效果云（不可召唤）。 */
    AreaEffectCloud = "area_effect_cloud",
    /** 盔甲架。 */
    ArmorStand = "armor_stand",
    /** 箭。 */
    Arrow = "arrow",
    /** 美西螈。 */
    Axolotl = "axolotl",
    /** 蝙蝠。 */
    Bat = "bat",
    /** 蜜蜂。 */
    Bee = "bee",
    /** 烈焰人。 */
    Blaze = "blaze",
    /** 船。 */
    Boat = "boat",
    /** 骆驼。 */
    Camel = "camel",
    /** 猫。 */
    Cat = "cat",
    /** 洞穴蜘蛛。 */
    CaveSpider = "cave_spider",
    /** 运输船。 */
    ChestBoat = "chest_boat",
    /** 运输矿车。 */
    ChestMinecart = "chest_minecart",
    /** 鸡。 */
    Chicken = "chicken",
    /** 鳕鱼。 */
    Cod = "cod",
    /** 命令方块矿车。 */
    CommandBlockMinecart = "command_block_minecart",
    /** 牛。 */
    Cow = "cow",
    /** 苦力怕。 */
    Creeper = "creeper",
    /** 海豚。 */
    Dolphin = "dolphin",
    /** 驴。 */
    Donkey = "donkey",
    /** 末影龙火球（不可召唤）。 */
    DragonFireball = "dragon_fireball",
    /** 溺尸。 */
    Drowned = "drowned",
    /** 鸡蛋。 */
    Egg = "egg",
    /** 远古守卫者。 */
    ElderGuardian = "elder_guardian",
    /** 末地水晶。 */
    EnderCrystal = "ender_crystal",
    /** 末影龙。 */
    EnderDragon = "ender_dragon",
    /** 末影珍珠（不可召唤）。 */
    EnderPearl = "ender_pearl",
    /** 末影人。 */
    Enderman = "enderman",
    /** 末影螨。 */
    Endermite = "endermite",
    /** 唤魔者。 */
    EvocationIllager = "evocation_illager",
    /** 末影之眼（不可召唤）。 */
    EyeOfEnderSignal = "eye_of_ender_signal",
    /** 火球（不可召唤）。 */
    Fireball = "fireball",
    /** 烟花火箭。 */
    FireworksRocket = "fireworks_rocket",
    /** 浮漂（不可召唤）。 */
    FishingHook = "fishing_hook",
    /** 狐狸。 */
    Fox = "fox",
    /** 青蛙。 */
    Frog = "frog",
    /** 恶魂。 */
    Ghast = "ghast",
    /** 发光鱿鱼。 */
    GlowSquid = "glow_squid",
    /** 山羊。 */
    Goat = "goat",
    /** 守卫者。 */
    Guardian = "guardian",
    /** 疣猪兽。 */
    Hoglin = "hoglin",
    /** 漏斗矿车。 */
    HopperMinecart = "hopper_minecart",
    /** 马。 */
    Horse = "horse",
    /** 尸壳。 */
    Husk = "husk",
    /** 铁傀儡。 */
    IronGolem = "iron_golem",
    /** 闪电束。 */
    LightningBolt = "lightning_bolt",
    /** 滞留药水（不可召唤）。 */
    LingeringPotion = "lingering_potion",
    /** 羊驼。 */
    Llama = "llama",
    /** 羊驼唾沫（不可召唤）。 */
    LlamaSpit = "llama_spit",
    /** 岩浆怪。 */
    MagmaCube = "magma_cube",
    /** 矿车。 */
    Minecart = "minecart",
    /** 哞菇。 */
    Mooshroom = "mooshroom",
    /** 骡。 */
    Mule = "mule",
    /** NPC。 */
    Npc = "npc",
    /** 豹猫。 */
    Ocelot = "ocelot",
    /** 熊猫。 */
    Panda = "panda",
    /** 鹦鹉。 */
    Parrot = "parrot",
    /** 幻翼。 */
    Phantom = "phantom",
    /** 猪。 */
    Pig = "pig",
    /** 猪灵。 */
    Piglin = "piglin",
    /** 猪灵蛮兵。 */
    PiglinBrute = "piglin_brute",
    /** 掠夺者。 */
    Pillager = "pillager",
    /** 玩家（不可召唤）。 */
    Player = "player",
    /** 北极熊。 */
    PolarBear = "polar_bear",
    /** 河豚。 */
    Pufferfish = "pufferfish",
    /** 兔子。 */
    Rabbit = "rabbit",
    /** 劫掠兽。 */
    Ravager = "ravager",
    /** 鲑鱼。 */
    Salmon = "salmon",
    /** 绵羊。 */
    Sheep = "sheep",
    /** 潜影贝。 */
    Shulker = "shulker",
    /** 潜影弹（不可召唤）。 */
    ShulkerBullet = "shulker_bullet",
    /** 蠹虫。 */
    Silverfish = "silverfish",
    /** 骷髅。 */
    Skeleton = "skeleton",
    /** 骷髅马。 */
    SkeletonHorse = "skeleton_horse",
    /** 史莱姆。 */
    Slime = "slime",
    /** 小火球（不可召唤）。 */
    SmallFireball = "small_fireball",
    /** 嗅探兽。 */
    Sniffer = "sniffer",
    /** 雪傀儡。 */
    SnowGolem = "snow_golem",
    /** 雪球。 */
    Snowball = "snowball",
    /** 蜘蛛。 */
    Spider = "spider",
    /** 喷溅药水。 */
    SplashPotion = "splash_potion",
    /** 鱿鱼。 */
    Squid = "squid",
    /** 流浪者。 */
    Stray = "stray",
    /** 炽足兽。 */
    Strider = "strider",
    /** 蝌蚪。 */
    Tadpole = "tadpole",
    /** 三叉戟（不可召唤）。 */
    ThrownTrident = "thrown_trident",
    /** 被激活的TNT。 */
    Tnt = "tnt",
    /** TNT矿车。 */
    TntMinecart = "tnt_minecart",
    /** 行商羊驼。 */
    TraderLlama = "trader_llama",
    /** 相机。 */
    TripodCamera = "tripod_camera",
    /** 热带鱼。 */
    Tropicalfish = "tropicalfish",
    /** 海龟。 */
    Turtle = "turtle",
    /** 恼鬼。 */
    Vex = "vex",
    /** 村民。 */
    Villager = "villager",
    /** 村民（不可召唤）。 */
    VillagerV2 = "villager_v2",
    /** 卫道士。 */
    Vindicator = "vindicator",
    /** 流浪商人。 */
    WanderingTrader = "wandering_trader",
    /** 监守者。 */
    Warden = "warden",
    /** 女巫。 */
    Witch = "witch",
    /** 凋灵。 */
    Wither = "wither",
    /** 凋灵骷髅。 */
    WitherSkeleton = "wither_skeleton",
    /** 凋灵之首（不可召唤）。 */
    WitherSkull = "wither_skull",
    /** 蓝色凋灵之首（不可召唤）。 */
    WitherSkullDangerous = "wither_skull_dangerous",
    /** 狼。 */
    Wolf = "wolf",
    /** 附魔之瓶。 */
    XpBottle = "xp_bottle",
    /** 经验球。 */
    XpOrb = "xp_orb",
    /** 僵尸疣猪兽。 */
    Zoglin = "zoglin",
    /** 僵尸。 */
    Zombie = "zombie",
    /** 僵尸马。 */
    ZombieHorse = "zombie_horse",
    /** 僵尸猪灵。 */
    ZombiePigman = "zombie_pigman",
    /** 僵尸村民。 */
    ZombieVillager = "zombie_villager",
    /** 僵尸村民（不可召唤）。 */
    ZombieVillagerV2 = "zombie_villager_v2"
}
/**
 * Union type equivalent of the MinecraftEntityTypes enum.
 */
export type MinecraftEntityTypesUnion = keyof typeof MinecraftEntityTypes;
