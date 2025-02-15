// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * 包含了大量用于修改 Minecraft 世界（实体、方块、维度等）的类型。
 * 
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "2.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
// @ts-ignore Optional types-only package, will decay to any if @minecraft/vanilla-data isn't installed
import type * as minecraftvanilladata from '@minecraft/vanilla-data';
/**
 * @beta
 * Specifies different targeting modes for use in aim-assist.
 *
 * 表示用于辅助瞄准的不同目标模式。
 */
export enum AimAssistTargetMode {
	/**
	 * @remarks
	 * Angle based targeting.
	 *
	 * 基于角度的目标选择。
	 */
	Angle = "Angle",
	/**
	 * @remarks
	 * Distance based targeting.
	 *
	 * 基于距离的目标选择。
	 */
	Distance = "Distance",
}

/**
 * The types of block components that are accessible via
 * function Block.getComponent.
 * 
 * 可以通过 Block.getComponent 函数访问的方块组件类型。
 */
export enum BlockComponentTypes {
    FluidContainer = 'minecraft:fluidContainer',
    /**
     * @remarks
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     *
     * 表示世界中方块的库存。用于像箱子这样的方块。
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     * 当存在时，该方块具有类似活塞的行为。包含用于发现方块活塞状态的附加属性。
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * Represents a block that can play a record.
     *
     * 表示可以播放唱片的方块。
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * Represents a block that can display text on it.
     *
     * 表示可以显示文本的方块。
     */
    Sign = 'minecraft:sign',
}

/**
 * An enumeration describing the state of a block piston.
 *
 * 表示方块活塞状态的枚举。
 */
export enum BlockPistonState {
	/**
	 * @remarks
	 * Whether the piston is fully expanded.
	 *
	 * 活塞是否完全伸展。
	 */
	Expanded = "Expanded",
	/**
	 * @remarks
	 * Whether the piston is in the process of expanding.
	 *
	 * 活塞是否正在伸展中。
	 */
	Expanding = "Expanding",
	/**
	 * @remarks
	 * Whether the piston is fully retracted.
	 *
	 * 活塞是否完全收回。
	 */
	Retracted = "Retracted",
	/**
	 * @remarks
	 * Whether the piston is in the process of retracting.
	 *
	 * 活塞是否正在收回中。
	 */
	Retracting = "Retracting",
}

/**
 * Description of the resulting intersection test on two
 * BlockVolume objects
 *
 * 表示两个BlockVolume对象的相交测试结果
 */
export enum BlockVolumeIntersection {
	/**
	 * @remarks
	 * Volume B has no intersection points with Volume A
	 *
	 * 体积B与体积A没有交集
	 */
	Disjoint = 0,
	/**
	 * @remarks
	 * Volume B resides completely inside Volume A
	 *
	 * 体积B完全位于体积A内
	 */
	Contains = 1,
	/**
	 * @remarks
	 * Volume B partially intersects Volume A
	 *
	 * 体积B与体积A部分相交
	 */
	Intersects = 2,
}

/**
 * @beta
 * The state of a button on a keyboard, controller, or touch
 * interface.
 * 
 * 表示键盘、控制器或触摸界面上按钮的状态。
 */
export enum ButtonState {
	Pressed = "Pressed",
	Released = "Released",
}

/**
 * @beta
 * The Action enum determines how the CompoundBlockVolume
 * considers the associated CompoundBlockVolumeItem when
 * performing inside/outside calculations.
 * 
 * Action枚举表示CompoundBlockVolume在进行内部/外部计算时如何考虑
 * 相关的CompoundBlockVolumeItem。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * The associated BlockVolume is considered a positive space,
     * and any intersection tests are considered hits
     *
     * 相关的BlockVolume被视为一个正空间，并且任何交集测试都被视为命中。
     */
    Add = 0,
    /**
     * @remarks
     * The associated BlockVolume is considered a negative or void
     * space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes`
     * in block volumes so that any intersection tests may pass
     * through such spaces
     *
     * 相关的BlockVolume被视为一个负空间或空白空间，并且任何交集测试都被视为未命中。
     * 使用Subtract操作，可以在方块体积中“打孔”，以便任何交集测试可以穿过此类空间。
     */
    Subtract = 1,
}

/**
 * @beta
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 * 
 * 一个枚举类型，用于描述CompoundBlockVolumeItem
 * 相对于父CompoundVolume的相对位置。
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * The locations within the associated BlockVolume are relative
     * to the CompoundBlockVolume to which they were added
     *
     * 关联的BlockVolume中的位置是相对于它们被添加到的
     * CompoundBlockVolume。
     */
    Relative = 0,
    /**
     * @remarks
     * The locations within the associated BlockVolume are in
     * absolute world space
     *
     * 关联的BlockVolume中的位置处于绝对世界空间中。
     */
    Absolute = 1,
}

export enum CustomComponentNameErrorReason {
	NoNamespace = 1,
	DisallowedNamespace = 2,
}

/**
 * @beta
 * An enumeration for the various difficulty levels of
 * Minecraft.
 *
 * 表示Minecraft中各种难度级别的枚举。
 */
export enum Difficulty {
	/**
	 * @remarks
	 * Peaceful difficulty level.
	 *
	 * 表示和平难度。
	 */
	Peaceful = 0,
	/**
	 * @remarks
	 * Easy difficulty level.
	 *
	 * 表示简单难度。
	 */
	Easy = 1,
	/**
	 * @remarks
	 * Normal difficulty level.
	 *
	 * 表示普通难度。
	 */
	Normal = 2,
	/**
	 * @remarks
	 * Hard difficulty level.
	 *
	 * 表示困难难度。
	 */
	Hard = 3,
}

/**
 * 通用枚举之一。表示朝向。
 * 
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @remarks
     * 表示下方（y - 1）。
     * 
     * Returns the {@link Block} beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * 表示东方（x + 1）。
     * 
     * Returns the {@link Block} to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @remarks
     * 表示北方（z - 1）。
     * 
     * Returns the {@link Block} to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @remarks
     * 表示南方（z + 1）。
     * 
     * Returns the {@link Block} to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @remarks
     * 表示上方（y + 1）。
     * 
     * Returns the {@link Block} above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * 表示西方（x - 1）。
     * 
     * Returns the {@link Block} to the west (x - 1) of this item.
     *
     */
    West = 'West',
}

/**
 * Specifies a mechanism for displaying scores on a scoreboard.
 * 
 * 表示记分板分数的显示方式。
 */
export enum DisplaySlotId {
    /**
     * Displays the score below the player's name.
     *
     * 记分项上的分数将显示在玩家名称牌下方。
     * 
     */
    BelowName = 'BelowName',
    /**
     * Displays the score as a list on the pause screen.
     *
     * 该记分项与对应的分数持有者将显示在暂停菜单上。
     * 
     */
    List = 'List',
    /**
     * Displays the score on the side of the player's screen.
     *
     * 记分项将在屏幕右侧显示。
     * 
     */
    Sidebar = 'Sidebar',
}

/**
 * Specifies different colors for use as dye.
 * 
 * 表示用于染料的不同颜色。
 */
export enum DyeColor {
    /**
     * @remarks
     * Black dye color.
     *
     * 黑色染料颜色。
     */
    Black = 'Black',
    /**
     * @remarks
     * Blue dye color.
     *
     * 蓝色染料颜色。
     */
    Blue = 'Blue',
    /**
     * @remarks
     * Brown dye color.
     *
     * 棕色染料颜色。
     */
    Brown = 'Brown',
    /**
     * @remarks
     * Cyan dye color.
     *
     * 青色染料颜色。
     */
    Cyan = 'Cyan',
    /**
     * @remarks
     * Gray dye color.
     *
     * 灰色染料颜色。
     */
    Gray = 'Gray',
    /**
     * @remarks
     * Green dye color.
     *
     * 绿色染料颜色。
     */
    Green = 'Green',
    /**
     * @remarks
     * Light blue dye color.
     *
     * 淡蓝色染料颜色。
     */
    LightBlue = 'LightBlue',
    /**
     * @remarks
     * Lime dye color.
     *
     * 绿色染料颜色。
     */
    Lime = 'Lime',
    /**
     * @remarks
     * Magenta dye color.
     *
     * 品红色染料颜色。
     */
    Magenta = 'Magenta',
    /**
     * @remarks
     * Orange dye color.
     *
     * 橙色染料颜色。
     */
    Orange = 'Orange',
    /**
     * @remarks
     * Pink dye color.
     *
     * 粉色染料颜色。
     */
    Pink = 'Pink',
    /**
     * @remarks
     * Purple dye color.
     *
     * 紫色染料颜色。
     */
    Purple = 'Purple',
    /**
     * @remarks
     * Red dye color.
     *
     * 红色染料颜色。
     */
    Red = 'Red',
    /**
     * @remarks
     * Silver dye color.
     *
     * 银色染料颜色。
     */
    Silver = 'Silver',
    /**
     * @remarks
     * White dye color.
     *
     * 白色染料颜色。
     */
    White = 'White',
    /**
     * @remarks
     * Yellow dye color.
     *
     * 黄色染料颜色。
     */
    Yellow = 'Yellow',
}

export enum EasingType {
    InBack = 'InBack',
    InBounce = 'InBounce',
    InCirc = 'InCirc',
    InCubic = 'InCubic',
    InElastic = 'InElastic',
    InExpo = 'InExpo',
    InOutBack = 'InOutBack',
    InOutBounce = 'InOutBounce',
    InOutCirc = 'InOutCirc',
    InOutCubic = 'InOutCubic',
    InOutElastic = 'InOutElastic',
    InOutExpo = 'InOutExpo',
    InOutQuad = 'InOutQuad',
    InOutQuart = 'InOutQuart',
    InOutQuint = 'InOutQuint',
    InOutSine = 'InOutSine',
    InQuad = 'InQuad',
    InQuart = 'InQuart',
    InQuint = 'InQuint',
    InSine = 'InSine',
    Linear = 'Linear',
    OutBack = 'OutBack',
    OutBounce = 'OutBounce',
    OutCirc = 'OutCirc',
    OutCubic = 'OutCubic',
    OutElastic = 'OutElastic',
    OutExpo = 'OutExpo',
    OutQuad = 'OutQuad',
    OutQuart = 'OutQuart',
    OutQuint = 'OutQuint',
    OutSine = 'OutSine',
    Spring = 'Spring',
}

export enum EnchantmentSlot {
    ArmorFeet = 'ArmorFeet', 
    ArmorHead = 'ArmorHead', 
    ArmorLegs = 'ArmorLegs', 
    ArmorTorso = 'ArmorTorso', 
    Axe = 'Axe', 
    Bow = 'Bow', 
    CarrotStick = 'CarrotStick', 
    CosmeticHead = 'CosmeticHead', 
    Crossbow = 'Crossbow', 
    Elytra = 'Elytra', 
    FishingRod = 'FishingRod', 
    Flintsteel = 'Flintsteel', 
    Hoe = 'Hoe', 
    Pickaxe = 'Pickaxe', 
    Shears = 'Shears', 
    Shield = 'Shield', 
    Shovel = 'Shovel', 
    Spear = 'Spear', 
    Sword = 'Sword',
}

/**
 * The types of entity components that are accessible via
 * function Entity.getComponent.
 *
 * 通过函数 Entity.getComponent 可以访问的实体组件类型。
 */
export enum EntityComponentTypes {
	/**
	 * @remarks
	 * When added, this component makes the entity spawn with a
	 * rider of the specified entityType.
	 *
	 * 添加后，该组件使实体生成时带有指定实体类型的骑乘者。
	 */
	AddRider = "minecraft:addrider",
	/**
	 * @remarks
	 * Adds a timer for the entity to grow up. It can be
	 * accelerated by giving the entity the items it likes as
	 * defined by feedItems.
	 *
	 * 为实体添加一个成长计时器。可以通过给予实体其喜欢的物品（由 feedItems 定义）来加速成长。
	 */
	Ageable = "minecraft:ageable",
	/**
	 * @remarks
	 * Defines what blocks this entity can breathe in and gives
	 * them the ability to suffocate.
	 *
	 * 定义该实体可以在其中呼吸的方块，并赋予其窒息能力。
	 */
	Breathable = "minecraft:breathable",
	/**
	 * @remarks
	 * When added, this component signifies that the entity can
	 * climb up ladders.
	 *
	 * 添加后，该组件表示实体可以爬上梯子。
	 */
	CanClimb = "minecraft:can_climb",
	/**
	 * @remarks
	 * When added, this component signifies that the entity can
	 * fly, and the pathfinder won't be restricted to paths where a
	 * solid block is required underneath it.
	 *
	 * 添加后，该组件表示实体可以飞行，并且路径查找不再受限于需要下方有实体方块的路径。
	 */
	CanFly = "minecraft:can_fly",
	/**
	 * @remarks
	 * When added, this component signifies that the entity can
	 * power jump like the horse does within Minecraft.
	 *
	 * 添加后，该组件表示实体可以像 Minecraft 中的马一样进行强力跳跃。
	 */
	CanPowerJump = "minecraft:can_power_jump",
	/**
	 * @remarks
	 * Defines the entity's color. Only works on certain entities
	 * that have predefined color values (e.g., sheep, llama,
	 * shulker).
	 *
	 * 定义实体的颜色。仅适用于某些具有预定义颜色值的实体（例如，绵羊、羊驼、潜影贝）。
	 */
	Color = "minecraft:color",
	/**
	 * @remarks
	 * Defines the entity's secondary color. Only works on certain
	 * entities that have predefined secondary color values (e.g.,
	 * tropical fish).
	 *
	 * 定义实体的次要颜色。仅适用于某些具有预定义次要颜色值的实体（例如，热带鱼）。
	 */
	Color2 = "minecraft:color2",
	CursorInventory = "minecraft:cursor_inventory",
	/**
	 * @remarks
	 * Provides access to a mob's equipment slots. This component
	 * exists for all mob entities.
	 *
	 * 提供访问生物装备槽的接口。该组件存在于所有生物实体中。
	 */
	Equippable = "minecraft:equippable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity
	 * doesn't take damage from fire.
	 *
	 * 添加后，该组件表示实体不会受到火焰伤害。
	 */
	FireImmune = "minecraft:fire_immune",
	/**
	 * @remarks
	 * When added, this component signifies that this entity can
	 * float in liquid blocks.
	 *
	 * 添加后，该组件表示实体可以漂浮在液体方块中。
	 */
	FloatsInLiquid = "minecraft:floats_in_liquid",
	/**
	 * @remarks
	 * Represents the flying speed of an entity.
	 *
	 * 表示实体的飞行速度。
	 */
	FlyingSpeed = "minecraft:flying_speed",
	/**
	 * @remarks
	 * Defines how much friction affects this entity.
	 *
	 * 定义摩擦对实体的影响程度。
	 */
	FrictionModifier = "minecraft:friction_modifier",
	/**
	 * @remarks
	 * Sets the offset from the ground that the entity is actually
	 * at.
	 *
	 * 设置实体实际位置距离地面的偏移量。
	 */
	GroundOffset = "minecraft:ground_offset",
	/**
	 * @remarks
	 * Defines the interactions with this entity for healing it.
	 *
	 * 定义与实体的交互以进行治疗。
	 */
	Healable = "minecraft:healable",
	/**
	 * @remarks
	 * Defines the health properties of an entity.
	 *
	 * 定义实体的生命属性。
	 */
	Health = "minecraft:health",
	/**
	 * @remarks
	 * Defines this entity's inventory properties.
	 *
	 * 定义实体的物品栏属性。
	 */
	Inventory = "minecraft:inventory",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is a
	 * baby.
	 *
	 * 添加后，该组件表示实体是宝宝。
	 */
	IsBaby = "minecraft:is_baby",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * charged.
	 *
	 * 添加后，该组件表示实体处于充能状态。
	 */
	IsCharged = "minecraft:is_charged",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently carrying a chest.
	 *
	 * 添加后，该组件表示实体当前携带一个箱子。
	 */
	IsChested = "minecraft:is_chested",
	/**
	 * @remarks
	 * When added, this component signifies that dyes can be used
	 * on this entity to change its color.
	 *
	 * 添加后，该组件表示可以对实体使用染料来改变其颜色。
	 */
	IsDyeable = "minecraft:is_dyeable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity can
	 * hide from hostile mobs while invisible.
	 *
	 * 添加后，该组件表示实体在隐身时可以躲避敌对生物。
	 */
	IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
	/**
	 * @remarks
	 * When added, this component signifies that this entity this
	 * currently on fire.
	 *
	 * 添加后，该组件表示实体当前着火。
	 */
	IsIgnited = "minecraft:is_ignited",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is an
	 * illager captain.
	 *
	 * 添加后，该组件表示实体是一个灾厄村民队长。
	 */
	IsIllagerCaptain = "minecraft:is_illager_captain",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently saddled.
	 *
	 * 添加后，该组件表示实体上装有鞍。
	 */
	IsSaddled = "minecraft:is_saddled",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently shaking.
	 *
	 * 添加后，该组件表示实体当前正在颤抖。
	 */
	IsShaking = "minecraft:is_shaking",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently sheared.
	 *
	 * 添加后，该组件表示实体当前被剪过毛。
	 */
	IsSheared = "minecraft:is_sheared",
	/**
	 * @remarks
	 * When added, this component signifies that this entity can be
	 * stacked.
	 *
	 * 添加后，该组件表示实体可以堆叠。
	 */
	IsStackable = "minecraft:is_stackable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently stunned.
	 *
	 * 添加后，该组件表示实体当前被击晕。
	 */
	IsStunned = "minecraft:is_stunned",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently tamed.
	 *
	 * 添加后，该组件表示实体当前被驯服。
	 */
	IsTamed = "minecraft:is_tamed",
	/**
	 * @remarks
	 * If added onto the entity, this indicates that the entity
	 * represents a free-floating item in the world. Lets you
	 * retrieve the actual item stack contents via the itemStack
	 * property.
	 *
	 * 若添加到实体上。这表明实体表示一个世界中的漂浮物品。可以通过 itemStack 属性获取实际物品堆的内容。
	 */
	Item = "minecraft:item",
	/**
	 * @remarks
	 * Defines the base movement speed in lava of this entity.
	 *
	 * 定义实体在岩浆中的基础移动速度。
	 */
	LavaMovement = "minecraft:lava_movement",
	/**
	 * @remarks
	 * Allows this entity to be leashed and defines the conditions
	 * and events for this entity when is leashed.
	 *
	 * 允许该实体被拴住，并定义被拴住时的条件和事件。
	 */
	Leashable = "minecraft:leashable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity
	 * contains an additional variant value. Can be used to further
	 * differentiate variants.
	 *
	 * 添加后，该组件表示实体包含一个附加的变体值。可以用于进一步区分变体。
	 */
	MarkVariant = "minecraft:mark_variant",
	/**
	 * @remarks
	 * Defines the general movement speed of this entity.
	 *
	 * 定义实体的一般移动速度。
	 */
	Movement = "minecraft:movement",
	/**
	 * @remarks
	 * When added, this movement control allows the mob to swim in
	 * water and walk on land.
	 *
	 * 添加后，该移动控件允许生物在水中游泳并在陆地上行走。
	 */
	MovementAmphibious = "minecraft:movement.amphibious",
	/**
	 * @remarks
	 * When added, this component allows the movement of an entity.
	 *
	 * 添加后，该组件允许实体移动。
	 */
	MovementBasic = "minecraft:movement.basic",
	/**
	 * @remarks
	 * When added, this move control causes the mob to fly.
	 *
	 * 添加后，该移动控件使生物飞行。
	 */
	MovementFly = "minecraft:movement.fly",
	/**
	 * @remarks
	 * When added, this move control allows a mob to fly, swim,
	 * climb, etc.
	 *
	 * 添加后，该移动控件允许生物飞行、游泳、爬行等。
	 */
	MovementGeneric = "minecraft:movement.generic",
	/**
	 * @remarks
	 * When added, this movement control allows the mob to glide.
	 *
	 * 添加后，该移动控件允许生物滑翔。
	 */
	MovementGlide = "minecraft:movement.glide",
	/**
	 * @remarks
	 * When added, this move control causes the mob to hover.
	 *
	 * 添加后，该移动控件使生物悬停。
	 */
	MovementHover = "minecraft:movement.hover",
	/**
	 * @remarks
	 * Move control that causes the mob to jump as it moves with a
	 * specified delay between jumps.
	 *
	 * 移动控件使生物在移动时跳跃，跳跃之间有指定的延迟。
	 */
	MovementJump = "minecraft:movement.jump",
	/**
	 * @remarks
	 * When added, this move control causes the mob to hop as it
	 * moves.
	 *
	 * 添加后，该移动控件使生物在移动时跳跃。
	 */
	MovementSkip = "minecraft:movement.skip",
	/**
	 * @remarks
	 * When added, this move control causes the mob to sway side to
	 * side giving the impression it is swimming.
	 *
	 * 添加后，该移动控件使生物左右摇摆，给人以游泳的印象。
	 */
	MovementSway = "minecraft:movement.sway",
	/**
	 * @remarks
	 * Allows this entity to generate paths that include vertical
	 * walls (for example, like Minecraft spiders do.)
	 *
	 * 允许该实体生成包括垂直墙壁的路径（例如，像 Minecraft 蜘蛛一样）。
	 */
	NavigationClimb = "minecraft:navigation.climb",
	/**
	 * @remarks
	 * Allows this entity to generate paths by flying around the
	 * air like the regular Ghast.
	 *
	 * 允许该实体通过在空中飞行生成路径，类似于普通的幽灵。
	 */
	NavigationFloat = "minecraft:navigation.float",
	/**
	 * @remarks
	 * Allows this entity to generate paths in the air (for
	 * example, like Minecraft parrots do.)
	 *
	 * 允许该实体在空中生成路径（例如，像 Minecraft 鹦鹉一样）。
	 */
	NavigationFly = "minecraft:navigation.fly",
	/**
	 * @remarks
	 * Allows this entity to generate paths by walking, swimming,
	 * flying and/or climbing around and jumping up and down a
	 * block.
	 *
	 * 允许该实体通过步行、游泳、飞行和/或攀爬以及上下跳跃生成路径。
	 */
	NavigationGeneric = "minecraft:navigation.generic",
	/**
	 * @remarks
	 * Allows this entity to generate paths in the air (for
	 * example, like the Minecraft Bees do.) Keeps them from
	 * falling out of the skies and doing predictive movement.
	 *
	 * 允许该实体在空中生成路径（例如，像 Minecraft 蜜蜂一样）。防止它们从空中坠落并进行预测性移动。
	 */
	NavigationHover = "minecraft:navigation.hover",
	/**
	 * @remarks
	 * Allows this entity to generate paths by walking around and
	 * jumping up and down a block like regular mobs.
	 *
	 * 允许该实体通过四处走动和上下跳跃生成路径，类似于普通生物。
	 */
	NavigationWalk = "minecraft:navigation.walk",
	/**
	 * @beta
	 * @remarks
	 * Adds NPC capabilities to an entity such as custom skin,
	 * name, and dialogue interactions.
	 *
	 * 为实体添加 NPC 功能，如自定义皮肤、名称和对话交互。
	 */
	Npc = "minecraft:npc",
	/**
	 * @remarks
	 * When present on an entity, this entity is on fire.
	 *
	 * 当实体存在该组件时，表示实体着火。
	 */
	OnFire = "minecraft:onfire",
	/**
	 * @remarks
	 * The projectile component controls the properties of a
	 * projectile entity and allows it to be shot in a given
	 * direction. This component is present when the entity has the
	 * minecraft:projectile component.
	 *
	 * 投射物组件控制投射物实体的属性，并允许其在给定方向上发射。当实体具有 minecraft:projectile 组件时存在此组件。
	 */
	Projectile = "minecraft:projectile",
	/**
	 * @remarks
	 * Sets the distance through which the entity can push through.
	 *
	 * 设置实体可以推过的距离。
	 */
	PushThrough = "minecraft:push_through",
	/**
	 * @remarks
	 * When added, this component adds the capability that an
	 * entity can be ridden by another entity.
	 *
	 * 添加后，该组件增加了实体可以被另一实体骑乘的能力。
	 */
	Rideable = "minecraft:rideable",
	/**
	 * @remarks
	 * This component is added to any entity when it is riding
	 * another entity.
	 *
	 * 当实体骑乘另一实体时，将添加此组件。
	 */
	Riding = "minecraft:riding",
	/**
	 * @remarks
	 * Sets the entity's visual size.
	 *
	 * 设置实体的视觉大小。
	 */
	Scale = "minecraft:scale",
	/**
	 * @remarks
	 * Skin Id value. Can be used to differentiate skins, such as
	 * base skins for villagers.
	 *
	 * 皮肤 ID 值。可以用于区分皮肤，例如村民的基本皮肤。
	 */
	SkinId = "minecraft:skin_id",
	/**
	 * @remarks
	 * Defines the entity's strength to carry items.
	 *
	 * 定义实体携带物品的力量。
	 */
	Strength = "minecraft:strength",
	/**
	 * @remarks
	 * Defines the rules for an entity to be tamed by the player.
	 *
	 * 定义玩家驯服实体的规则。
	 */
	Tameable = "minecraft:tameable",
	/**
	 * @remarks
	 * Contains options for taming a rideable entity based on the
	 * entity that mounts it.
	 *
	 * 包含基于其骑乘的实体驯服可骑乘实体的选项。
	 */
	TameMount = "minecraft:tamemount",
	/**
	 * @remarks
	 * Used to determine the type families the entity belongs to.
	 *
	 * 用于确定实体所属的类型族。
	 */
	TypeFamily = "minecraft:type_family",
	/**
	 * @remarks
	 * Defines the general movement speed underwater of this
	 * entity.
	 *
	 * 定义实体在水下的一般移动速度。
	 */
	UnderwaterMovement = "minecraft:underwater_movement",
	/**
	 * @remarks
	 * Used to differentiate the component group of a variant of an
	 * entity from others. (e.g. ocelot, villager).
	 *
	 * 用于区分实体变体的组件组与其他组件组（例如豹猫、村民）。
	 */
	Variant = "minecraft:variant",
	/**
	 * @remarks
	 * When added, this component signifies that this entity wants
	 * to become a jockey.
	 *
	 * 添加后，该组件表示实体想要成为骑兵。
	 */
	WantsJockey = "minecraft:wants_jockey",
}

/**
 * Describes the source of damage from an Entity.
 * 表示实体的伤害来源。
 */
export enum EntityDamageCause {
	/**
	 * @remarks
	 * Damage caused by a falling anvil.
	 *
	 * 表示由掉落的铁砧造成的伤害。
	 */
	anvil = "anvil",
	/**
	 * @remarks
	 * Damage caused from a non-Entity explosion. For example, an
	 * exploding bed.
	 *
	 * 表示由非实体爆炸造成的伤害。例如，爆炸的床。
	 */
	blockExplosion = "blockExplosion",
	/**
	 * @remarks
	 * Damage caused by Campfires.
	 *
	 * 表示由营火造成的伤害。
	 */
	campfire = "campfire",
	/**
	 * @remarks
	 * Unused.
	 *
	 * 未使用。
	 */
	charging = "charging",
	/**
	 * @remarks
	 * Damage caused by physically touching an Entity or Block. For
	 * example, touching a Sweet Berry bush or Pufferfish.
	 *
	 * 表示通过物理接触实体或方块造成的伤害。例如，接触甜浆果灌木或河豚。
	 */
	contact = "contact",
	/**
	 * @remarks
	 * Damage caused by an Entity being out of air and inside a
	 * liquid block.
	 *
	 * 表示实体因缺氧且位于液体方块中而造成的伤害。
	 */
	drowning = "drowning",
	/**
	 * @remarks
	 * Damage caused by an Entity attack.
	 *
	 * 表示由实体攻击造成的伤害。
	 */
	entityAttack = "entityAttack",
	/**
	 * @remarks
	 * Damage caused by an Entity explosion. For example, a Creeper
	 * or Wither.
	 *
	 * 表示由实体爆炸造成的伤害。例如，苦力怕或凋灵。
	 */
	entityExplosion = "entityExplosion",
	/**
	 * @remarks
	 * Damage caused by falling onto the ground.
	 *
	 * 表示因坠落到地面造成的伤害。
	 */
	fall = "fall",
	/**
	 * @remarks
	 * Damage caused by falling blocks. Note: Anvils and
	 * Stalactites have their own damage causes.
	 *
	 * 表示由掉落的方块造成的伤害。注意：铁砧和钟乳石有各自的伤害原因。
	 */
	fallingBlock = "fallingBlock",
	/**
	 * @remarks
	 * Damage caused by catching on fire.
	 *
	 * 表示因着火造成的伤害。
	 */
	fire = "fire",
	/**
	 * @remarks
	 * Damage caused by burning over time.
	 *
	 * 表示因长时间燃烧造成的伤害。
	 */
	fireTick = "fireTick",
	/**
	 * @remarks
	 * Damage caused by fireworks.
	 *
	 * 表示由烟花造成的伤害。
	 */
	fireworks = "fireworks",
	/**
	 * @remarks
	 * Damage caused by flying into a wall at high speed while
	 * gliding with Elytra.
	 *
	 * 表示在使用鞘翅滑翔时高速撞墙造成的伤害。
	 */
	flyIntoWall = "flyIntoWall",
	/**
	 * @remarks
	 * Damage caused by staying inside a Powder Snow block.
	 *
	 * 表示因停留在细雪方块中造成的伤害。
	 */
	freezing = "freezing",
	/**
	 * @remarks
	 * Damage caused by touching a Lava block.
	 *
	 * 表示因接触岩浆方块造成的伤害。
	 */
	lava = "lava",
	/**
	 * @remarks
	 * Damage caused by being struck by lightning.
	 *
	 * 表示因被闪电击中造成的伤害。
	 */
	lightning = "lightning",
	maceSmash = "maceSmash",
	/**
	 * @remarks
	 * Damage caused by magical attacks. For example, Evoker Fang
	 * or Conduit Block.
	 *
	 * 表示由魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心。
	 */
	magic = "magic",
	/**
	 * @remarks
	 * Damage caused by touching a Magma block.
	 *
	 * 表示因接触岩浆块造成的伤害。
	 */
	magma = "magma",
	/**
	 * @remarks
	 * Damage caused by no source. For example, from a command or
	 * script.
	 *
	 * 表示无特定来源的伤害。例如，由命令或脚本造成的伤害。
	 */
	none = "none",
	/**
	 * @remarks
	 * Damage caused by an indirect source. For example, setting a
	 * mob's health to 0 in a behavior pack.
	 *
	 * 表示由间接来源造成的伤害。例如，在行为包中将生物的生命值设为0。
	 */
	override = "override",
	/**
	 * @remarks
	 * Damage caused by a Piston.
	 *
	 * 表示由活塞造成的伤害。
	 */
	piston = "piston",
	/**
	 * @remarks
	 * Damage caused by a projectile.
	 *
	 * 表示由抛射物造成的伤害。
	 */
	projectile = "projectile",
	/**
	 * @remarks
	 * Damage caused by Goat ramming.
	 *
	 * 表示由山羊冲撞造成的伤害。
	 */
	ramAttack = "ramAttack",
	/**
	 * @remarks
	 * Damage caused by the /kill command.
	 *
	 * 表示由 /kill 命令造成的伤害。
	 */
	selfDestruct = "selfDestruct",
	/**
	 * @remarks
	 * Damage caused by the Warden's Sonic Boom attack.
	 *
	 * 表示由监守者的音波攻击造成的伤害。
	 */
	sonicBoom = "sonicBoom",
	/**
	 * @remarks
	 * Damage caused by a Soul Campfire.
	 *
	 * 表示由灵魂营火造成的伤害。
	 */
	soulCampfire = "soulCampfire",
	/**
	 * @remarks
	 * Damage caused by a falling Stalactite block.
	 *
	 * 表示由掉落的钟乳石方块造成的伤害。
	 */
	stalactite = "stalactite",
	/**
	 * @remarks
	 * Damage caused by touching a Stalagmite block.
	 *
	 * 表示因接触石笋方块造成的伤害。
	 */
	stalagmite = "stalagmite",
	/**
	 * @remarks
	 * Damage caused over time by having an empty hunger bar.
	 *
	 * 表示因饥饿条为空而持续造成的伤害。
	 */
	starve = "starve",
	/**
	 * @remarks
	 * Damage caused by an Entity being out of air and inside a
	 * non-liquid block.
	 *
	 * 表示实体因缺氧且位于非液体方块中而造成的伤害。
	 */
	suffocation = "suffocation",
	/**
	 * @remarks
	 * Damage caused by an Entity killing itself. For example, from
	 * the /kill command.
	 *
	 * 表示实体自杀造成的伤害。例如，由 /kill 命令导致的伤害。
	 */
	suicide = "suicide",
	/**
	 * @remarks
	 * Damage caused by an Entity being in an inhabitable climate.
	 * For example, a Snow Golem in a biome with a temperature
	 * greater than 1.
	 *
	 * 表示实体处于不适宜生存的气候中造成的伤害。例如，雪傀儡处于温度大于1的生物群系中。
	 */
	temperature = "temperature",
	/**
	 * @remarks
	 * Damage caused by the Thorns armor enchantment and by the
	 * Guardian thorns effect.
	 *
	 * 表示由荆棘护甲附魔和守卫者荆棘效果造成的伤害。
	 */
	thorns = "thorns",
	/**
	 * @remarks
	 * Damage caused over time by falling into the void.
	 *
	 * 表示因掉入虚空而持续造成的伤害。
	 */
	"void" = "void",
	/**
	 * @remarks
	 * Damage caused by the Wither effect. For example, from
	 * touching a Wither Rose.
	 *
	 * 表示因凋零效果造成的伤害。例如，接触凋零玫瑰。
	 */
	wither = "wither",
}

/**
 * An enumeration describing initialization cause of an entity.
 *
 * 表示实体初始化原因的枚举。
 */
export enum EntityInitializationCause {
	/**
	 * @remarks
	 * Case when an entity is created as child of other entity or
	 * entities, e.g., cows making a cow or slimes making smaller
	 * slimes after dying.
	 *
	 * 表示当一个实体作为其他实体或实体的子实体被创建时的情况，例如，牛生小牛或史莱姆死亡后生成小史莱姆。
	 */
	Born = "Born",
	/**
	 * @remarks
	 * Case when an entity is created by an event, e.g., a
	 * Wandering trader spawning llamas.
	 *
	 * 表示当一个实体由事件生成时的情况，例如，流浪商人生成羊驼。
	 */
	Event = "Event",
	/**
	 * @remarks
	 * Case when an entity is loaded into the world.
	 *
	 * 表示当一个实体被加载到世界中时的情况。
	 */
	Loaded = "Loaded",
	/**
	 * @remarks
	 * Case when an entity is naturally spawned in the world.
	 *
	 * 表示当一个实体自然生成在世界中时的情况。
	 */
	Spawned = "Spawned",
	/**
	 * @remarks
	 * Case when an entity is transformed into another entity.
	 *
	 * 表示当一个实体转变为另一个实体时的情况。
	 */
	Transformed = "Transformed",
}

/**
 * @beta
 * 表示实体生成的类别的枚举。
 *
 * An enum containing categories of entity spawning.
 */
export enum EntitySpawnCategory {
	/**
	 * @remarks
	 * 表示是环境生成的生物。
	 *
	 * Mobs that have an ambient spawn.
	 *
	 */
	Ambient = "Ambient",
	/**
	 * @remarks
	 * 表示专门为美西螈生成的类别。
	 *
	 * Specific spawn for axolotls.
	 *
	 */
	Axolotls = "Axolotls",
	/**
	 * @remarks
	 * 表示生物生成。
	 *
	 * Creature spawns.
	 *
	 */
	Creature = "Creature",
	/**
	 * @remarks
	 * 表示其他的生成（例如村民、铁傀儡）。
	 *
	 * Miscellaneous spawns (e.g. Villager, Iron Golem).
	 *
	 */
	Misc = "Misc",
	/**
	 * @remarks
	 * 表示怪物生成。
	 *
	 * Monster spawns.
	 *
	 */
	Monster = "Monster",
	/**
	 * @remarks
	 * 表示在地下水中生成的生物。
	 *
	 * Creatures that spawn underground in the water.
	 *
	 */
	UndergroundWaterCreature = "UndergroundWaterCreature",
	/**
	 * @remarks
	 * 表示是环境生成的水生生物。
	 *
	 * Water mobs that have an ambient spawn.
	 *
	 */
	WaterAmbient = "WaterAmbient",
	/**
	 * @remarks
	 * 表示水生生物生成。
	 *
	 * Water creature spawns.
	 *
	 */
	WaterCreature = "WaterCreature",
}

/**
 * @beta
 * 一个枚举，表示实体生成的原因。
 *
 * An enum containing reasons an entity could be spawned.
 */
export enum EntitySpawnReason {
	/**
	 * @remarks
	 * 繁殖生成的后代。
	 *
	 * Bred offspring.
	 *
	 */
	Breeding = "Breeding",
	/**
	 * @remarks
	 * 通过桶生成的实体（例如鱼）。
	 *
	 * Spawned from a bucket (e.g. Fish)
	 *
	 */
	Bucket = "Bucket",
	/**
	 * @remarks
	 * 因区块生成而生成的实体。
	 *
	 * Spawned due to a chunk being generated.
	 *
	 */
	ChunkGeneration = "ChunkGeneration",
	/**
	 * @remarks
	 * 通过 /summon 命令生成的实体。
	 *
	 * Spawned via the /summon command.
	 *
	 */
	Command = "Command",
	/**
	 * @remarks
	 * 由其他生物转化生成的实体（例如村民 -> 僵尸村民）。
	 *
	 * Mob converted from another mob (e.g. Villager -> Zombie
	 * Villager).
	 *
	 */
	Conversion = "Conversion",
	/**
	 * @remarks
	 * 从另一个维度传送过来的实体。
	 *
	 * Mob transferred from another dimension.
	 *
	 */
	DimensionTravel = "DimensionTravel",
	/**
	 * @remarks
	 * 通过发射器生成的实体。
	 *
	 * Spawned via dispenser.
	 *
	 */
	Dispenser = "Dispenser",
	/**
	 * @remarks
	 * 因游戏内某些事件生成的实体。
	 *
	 * Mobs spawned due to some in game event.
	 *
	 */
	Event = "Event",
	/**
	 * @remarks
	 * 与其骑乘的实体一起生成的骑乘生物（例如鸡骑士）。
	 *
	 * Jockey spawned with the mob they ride (e.g. Chicken jockey).
	 *
	 */
	Jockey = "Jockey",
	/**
	 * @remarks
	 * 从保存状态加载的实体。
	 *
	 * Mob loaded in from a saved state.
	 *
	 */
	Load = "Load",
	/**
	 * @remarks
	 * 由其他生物召唤生成的实体（例如恼鬼）。
	 *
	 * Mobs summoned via other mobs (e.g. Vex).
	 *
	 */
	MobSummoned = "MobSummoned",
	/**
	 * @remarks
	 * 自然生成的生物。
	 *
	 * Natural Mob Spawning.
	 *
	 */
	Natural = "Natural",
	/**
	 * @remarks
	 * 因巡逻而生成的生物。
	 *
	 * Mobs spawned due to a patrol.
	 *
	 */
	Patrol = "Patrol",
	/**
	 * @remarks
	 * 因增援属性生成的生物（例如僵尸）。
	 *
	 * Mobs spawned from the reinforcement attribute (e.g.
	 * Zombies).
	 *
	 */
	Reinforcement = "Reinforcement",
	/**
	 * @remarks
	 * 通过刷怪蛋生成的实体。
	 *
	 * Spawned from a spawn egg.
	 *
	 */
	SpawnEgg = "SpawnEgg",
	/**
	 * @remarks
	 * 由刷怪笼生成的实体。
	 *
	 * Spawner spawns.
	 *
	 */
	Spawner = "Spawner",
	/**
	 * @remarks
	 * 特定结构内生成的实体（下界堡垒、海底神殿、女巫小屋等）。
	 *
	 * Mobs generated specifically within some structure (Nether
	 * Fortress, Ocean Monument, Witch Hut, etc).
	 *
	 */
	Structure = "Structure",
	/**
	 * @remarks
	 * 由试验性刷怪笼生成的实体。
	 *
	 * Mobs spawned from a Trial Spawner.
	 *
	 */
	TrialSpawner = "TrialSpawner",
	/**
	 * @remarks
	 * 某些玩家触发的生物生成（例如骷髅马陷阱、凋灵、雪傀儡）。
	 *
	 * Some type of player triggered mob spawn (e.g. Skeleton Horse
	 * Traps, Wither, Snow Golem).
	 *
	 */
	Triggered = "Triggered",
}

/**
 * The equipment slot of the mob. This includes armor, offhand
 * and mainhand slots.
 *
 * 生物的装备槽位。包括护甲、副手和主手槽位。
 */
export enum EquipmentSlot {
	/**
	 * @beta
	 * @remarks
	 * The body slot. This slot is used to hold armor for
	 * non-humanoid mobs.
	 *
	 * 身体槽位。此槽位用于存放非人形生物的护甲。
	 */
	Body = "Body",
	/**
	 * @remarks
	 * The chest slot. This slot is used to hold items such as
	 * Chestplate or Elytra.
	 *
	 * 胸部槽位。此槽位用于存放如胸甲或鞘翅等物品。
	 */
	Chest = "Chest",
	/**
	 * @remarks
	 * The feet slot. This slot is used to hold items such as
	 * Boots.
	 *
	 * 脚部槽位。此槽位用于存放如靴子等物品。
	 */
	Feet = "Feet",
	/**
	 * @remarks
	 * The head slot. This slot is used to hold items such as
	 * Helmets or Carved Pumpkins.
	 *
	 * 头部槽位。此槽位用于存放如头盔或雕刻南瓜等物品。
	 */
	Head = "Head",
	/**
	 * @remarks
	 * The legs slot. This slot is used to hold items such as
	 * Leggings.
	 *
	 * 腿部槽位。此槽位用于存放如护腿等物品。
	 */
	Legs = "Legs",
	/**
	 * @remarks
	 * The mainhand slot. For players, the mainhand slot refers to
	 * the currently active hotbar slot.
	 *
	 * 主手槽位。对于玩家来说，主手槽位指的是当前激活的快捷栏槽位位。
	 */
	Mainhand = "Mainhand",
	/**
	 * @remarks
	 * The offhand slot. This slot is used to hold items such as
	 * shields and maps.
	 *
	 * 副手槽位。此槽位用于存放如盾牌和地图等物品。
	 */
	Offhand = "Offhand",
}

/**
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 * 
 * 表示用于盛装流体方块中的流体类型，如炼药锅。
 */
export enum FluidType {
    /**
     * @remarks
     * Represents lava as a type of fluid.
     *
     * 表示熔岩作为一种流体类型。
     */
    Lava = 'Lava',
    /**
     * @remarks
     * Represents a potion as a type of fluid.
     *
     * 表示药水作为一种流体类型。
     */
    Potion = 'Potion',
    /**
     * @remarks
     * Represents powder snow as a type of fluid.
     *
     * 表示细雪作为一种流体类型。
     */
    PowderSnow = 'PowderSnow',
    /**
     * @remarks
     * Represents water as a type of fluida.
     *
     * 表示水作为一种流体类型。
     */
    Water = 'Water',
}

/**
 * Represents a game mode for the current world experience.
 * 表示当前游戏世界的游戏模式。
 */
export enum GameMode {
	/**
	 * @remarks
	 * World is in a more locked-down experience, where blocks may
	 * not be manipulated.
	 *
	 * 表示世界处于限制更多的世界中，方块可能无法被操作。
	 */
	adventure = "adventure",
	/**
	 * @remarks
	 * World is in a full creative mode. In creative mode, the
	 * player has all the resources available in the item selection
	 * tabs and the survival selection tab. They can also destroy
	 * blocks instantly including those which would normally be
	 * indestructible. Command and structure blocks can also be
	 * used in creative mode. Items also do not lose durability or
	 * disappear.
	 *
	 * 表示世界处于创造模式。在创造模式中，玩家可以从物品选择标签和生存选择标签中获得所有资源。他们还可以立即破坏方块，包括那些通常无法破坏的方块。命令方块和结构方块在创造模式中也可以使用。物品也不会失去耐久或消失。
	 */
	creative = "creative",
	/**
	 * @remarks
	 * World is in spectator mode. In spectator mode, spectators
	 * are always flying and cannot become grounded. Spectators can
	 * pass through solid blocks and entities without any
	 * collisions, and cannot use items or interact with blocks or
	 * mobs. Spectators cannot be seen by mobs or other players,
	 * except for other spectators; spectators appear as a
	 * transparent floating head.
	 *
	 * 表示处于旁观者模式。在旁观者模式中，旁观者总是处于飞行状态，无法着陆。旁观者可以穿过实体和实体而不会发生碰撞，不能使用物品或与方块或生物互动。除了其他旁观者外，旁观者不会被生物或其他玩家看到；旁观者显示为一个透明的漂浮头。
	 */
	spectator = "spectator",
	/**
	 * @remarks
	 * World is in a survival mode, where players can take damage
	 * and entities may not be peaceful. Survival mode is where the
	 * player must collect resources, build structures while
	 * surviving in their generated world. Activities can, over
	 * time, chip away at player health and hunger bar.
	 *
	 * 表示处于生存模式，玩家可能会受到伤害，实体可能不友好。在生存模式中，玩家必须在生成的世界中收集资源、建造结构以求生存。活动可能会随着时间的推移逐渐减少玩家的生命值和饥饿值。
	 */
	survival = "survival",
}

/**
 * Game rules. These values can also be controlled via the
 * /gamerule command.
 * 
 * 游戏规则。这些值也可以通过 /gamerule 命令来控制。
 */
export enum GameRule {
    /**
     * @remarks
     * Whether command blocks should notify admins when they
     * perform commands.
     *
     * 是否在命令方块执行命令时通知管理员。
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * Controls whether command blocks can execute commands.
     *
     * 控制命令方块是否可以执行命令。
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * Controls whether the day and night cycles progress.
     *
     * 控制昼夜循环是否进行。
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * Controls whether non-mob entities do drops. ie. Item Frame
     *
     * 控制非生物实体是否掉落物品。例如，物品展示框。
     */
    DoEntityDrops = 'doEntityDrops',
    /**
     * @remarks
     * Controls whether fire spreads.
     *
     * 控制火是否蔓延。
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * Controls whether players immediately respawn or are shown
     * the death screen.
     *
     * 控制玩家是立即重生还是显示死亡界面。
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * Controls whether players deal with the effects of not
     * sleeping (such as Phantom spawning).
     *
     * 控制玩家是否受到不睡觉的影响（例如幻翼生成）。
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * Determines whether players should be able to craft only
     * those recipes that they've unlocked first - when
     * dolimitedcrafting is set to true.
     *
     * 决定玩家是否只能合成已解锁的配方 - 当 dolimitedcrafting 为 true 时。
     */
    DoLimitedCrafting = 'doLimitedCrafting',
    /**
     * @remarks
     * Controls whether mobs drop loot.
     *
     * 控制生物是否掉落战利品。
     */
    DoMobLoot = 'doMobLoot',
    /**
     * @remarks
     * Controls whether mobs spawn naturally in the world.
     *
     * 控制生物是否自然生成在世界中。
     */
    DoMobSpawning = 'doMobSpawning',
    /**
     * @remarks
     * Controls whether blocks drop items when destroyed.
     *
     * 控制方块被破坏时是否掉落物品。
     */
    DoTileDrops = 'doTileDrops',
    /**
     * @remarks
     * Controls whether the weather can change naturally.
     *
     * 控制天气是否可以自然变化。
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * Controls whether entities take damage from drowning.
     *
     * 控制实体是否因溺水而受伤。
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * Controls whether entities take damage from falling.
     *
     * 控制实体是否因坠落而受伤。
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * Controls whether entities take damage from fire.
     *
     * 控制实体是否因火而受伤。
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * Controls whether there is damage from freezing.
     *
     * 控制是否因冻结而受伤。
     */
    FreezeDamage = 'freezeDamage',
    /**
     * @remarks
     * The maximum number of commands that can be executed
     * simultaneously by the /function command.
     *
     * /function 命令可以同时执行的最大命令数量。
     */
    FunctionCommandLimit = 'functionCommandLimit',
    /**
     * @remarks
     * Controls whether players keep their inventories when they
     * die.
     *
     * 控制玩家死亡时是否保留物品栏。
     */
    KeepInventory = 'keepInventory',
    /**
     * @remarks
     * The maximum number of chained commands that can execute per
     * tick.
     *
     * 每个刻可以执行的最大连锁命令数量。
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * Controls whether mob griefing can happen in the world.
     * Example: A Creeper explosion destroying blocks.
     *
     * 控制生物破坏是否可以发生在世界中。例如：苦力怕爆炸破坏方块。
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * Controls whether players can regenerate health.
     *
     * 控制玩家是否可以再生生命值。
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * The percentage of players required to be sleeping in order
     * to advance to the next day.
     *
     * 需要多少百分比的玩家入睡才能进入第二天。
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @remarks
     * Controls whether projectiles (entities with a projectile
     * component, like Arrows, thrown Tridents or Fireworks) can
     * destroy certain blocks that support this interaction (such
     * as Chorus Fruit, Dripstone or Decorated Pots). Restrictions
     * on which projectiles can destroy certain blocks apply.
     *
     * 控制投射物（具有投射物组件的实体，如箭、投掷的三叉戟或烟花）是否可以破坏某些支持此交互的方块（如歌萤果、滴水石或装饰罐）。对哪些投射物可以破坏哪些方块有相应限制。
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * Controls whether players can damage each other.
     *
     * 控制玩家是否可以互相伤害。
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * Controls how frequently random ticks occur. A value of 0 or
     * less will disable random ticks. The default value is 1.
     *
     * 控制随机刻的发生频率。值为0或更小将禁用随机刻。默认值为1。
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * Controls whether built-in (vanilla) recipes automatically
     * unlock as the player progresses through the game (one
     * alternative to this is to use the /recipe command based on
     * custom gameplay logic.)
     *
     * 控制内置（原版）配方是否会随着玩家游戏进程自动解锁（另一种选择是根据自定义游戏逻辑使用 /recipe 命令）。
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * Controls whether respawn blocks (e.g. Bed, Respawn Anchor)
     * explode in other dimensions.
     *
     * 控制重生方块（例如床、重生锚）是否在其他维度爆炸。
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * Controls whether command output is displayed to players.
     * Also controls whether Command Block output is stored by
     * default.
     *
     * 控制是否向玩家显示命令输出。还控制是否默认存储命令方块输出。
     */
    SendCommandFeedback = 'sendCommandFeedback',
    /**
     * @remarks
     * Controls whether Border Block effects are shown.
     *
     * 控制是否显示边界方块效果。
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * Controls whether player coordinates are displayed.
     *
     * 控制是否显示玩家坐标。
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @remarks
     * Controls whether the days a player has played is displayed.
     *
     * 控制是否显示玩家已玩天数。
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * Controls whether death messages are displayed in chat.
     *
     * 控制是否在聊天中显示死亡消息。
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * Controls whether standard player notifications for recipes
     * will show. When set to false, 'player unlocked recipes' are
     * no longer sent as player notifications.
     *
     * 控制是否显示配方的标准玩家通知。当设置为 false 时，“玩家解锁配方”不再作为玩家通知发送。
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * Controls whether item tags are shown. E.g. 'Can Place On',
     * 'Can Destroy', item lock icons, etc.
     *
     * 控制是否显示物品标签。例如“可以放置在”、“可以破坏”、“物品锁定图标”等。
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * The block radius from world spawn that a player is allowed
     * to spawn in. Does not affect Adventure mode. The default
     * value is 10 blocks.
     *
     * 玩家可以在世界出生点生成的方块半径。不影响冒险模式。默认值为10个方块。
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * Affects whether TNT blocks can be lit.
     *
     * 影响TNT方块是否可以被点燃。
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * Controls whether blocks randomly drop loot or all blocks
     * drop loot when destroyed by an explosion. Defaults to false.
     *
     * 控制方块是否随机掉落战利品或所有方块在爆炸时掉落战利品。默认为 false。
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}

/**
 * @beta
 * Describes the graphics mode of a client. Used by {@link
 * Player.graphicsMode}
 *
 * 表示客户端的图形模式。由 {@link Player.graphicsMode} 使用。
 */
export enum GraphicsMode {
	/**
     * @remarks
     * 
     * A graphics mode that refers to the Deferred Technical
     * Preview graphics mode setting.
     * 
     * 表示延迟技术预览图形模式设置。
     */
	Deferred = 'Deferred',
	/**
	 * @remarks
	 *
	 * A graphics mode that refers to the Fancy graphics mode
	 * setting. Most special graphics effects are turned on in this
	 * setting.
     * 
	 * 表示高级图形模式设置。在此设置中，大多数特殊图形效果都会开启。
	 */
	Fancy = 'Fancy',
	/**
	 * @remarks
	 *
	 * A graphics mode that refers to the Ray Traced graphics mode
	 * setting. This setting enables ray tracing.
	 *
     * 表示光线追踪图形模式设置。此设置会启用光线追踪。
	 */
	RayTraced = 'RayTraced',
	/**
	 * @remarks
	 
	 *
	 * A graphics mode that refers to the Simple graphics mode
	 * setting. Most graphics effects are turned off in this
	 * setting.
	 *
     * 表示简单图形模式设置。在此设置中，大多数图形效果都会关闭。
	 */
	Simple = 'Simple',
}

export enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    Hotbar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
}

/**
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 * 
 * 枚举，用于指定如何处理HUD元素的可见性。
 */
export enum HudVisibility {
    /**
     * @remarks
     * Specifies that this HUD element should be hidden.
     * 
     * 表示此HUD元素应被隐藏。
     */
    Hide = 0,
    /**
     * @remarks
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     * 
     * 表示此HUD元素应重置为其默认状态（虽然大多数HUD元素是可见的，但某些HUD元素可以通过设置被玩家隐藏）。
     */
    Reset = 1,
}

/**
 * @beta
 * All the different input buttons that are supported. Use with
 * {@link @minecraft/server.PlayerInput.getButtonState} via
 * {@link @minecraft/server.Player.input} or {@link
 * PlayerButtonInputAfterEvent} via {@link
 * WorldAfterEvents.playerButtonInput}
 *
 * 表示支持的所有不同输入按钮。可通过 {@link @minecraft/server.Player.input} 使用 {@link @minecraft/server.PlayerInput.getButtonState}，或通过 {@link WorldAfterEvents.playerButtonInput} 使用 {@link PlayerButtonInputAfterEvent}
 */
export enum InputButton {
	/**
	 * @remarks
	 * This is mapped to the 'Jump' button on controllers,
	 * keyboards, and touch interfaces.
	 *
	 * 表示映射到控制器、键盘和触摸界面上的“跳跃”按钮。
	 */
	Jump = "Jump",
	/**
	 * @remarks
	 * This is mapped to the 'Sneak' button on controllers,
	 * keyboards, and touch interfaces. By default, this is shift
	 * on a keyboard or B on an Xbox controller. On touch
	 * interfaces this will only be pressed for 1 tick or less and
	 * then it will be released immediately even if the player
	 * holds their finger down. Dismounting a horse or exiting a
	 * boat will not send a Sneak button change event.
	 *
	 * 表示映射到控制器、键盘和触摸界面上的“潜行”按钮。默认情况下，这在键盘上是 shift 键，在 Xbox 控制器上是 B 键。在触摸界面上，这个按钮只会按下 1 tick 或更短时间，然后即使玩家按住手指，它也会立即释放。下马或离开船只不会发送潜行按钮更改事件。
	 */
	Sneak = "Sneak",
}

/**
 * @rc
 * Describes the type of input of a device.
 *
 * 表示设备的输入类型。
 */
export enum InputMode {
	/**
	 * @remarks
	 * Gamepad input.
	 *
	 * 游戏手柄输入。
	 */
	Gamepad = "Gamepad",
	/**
	 * @remarks
	 * Keyboard and mouse input.
	 *
	 * 键盘和鼠标输入。
	 */
	KeyboardAndMouse = "KeyboardAndMouse",
	/**
	 * @remarks
	 * Motion controller input.
	 *
	 * 运动控制器输入。
	 */
	MotionController = "MotionController",
	/**
	 * @remarks
	 * Touch input.
	 *
	 * 触摸输入。
	 */
	Touch = "Touch",
}

/**
 * Input permission categories. Used by {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} to specify
 * which category was changed and {@link
 * PlayerInputPermissions} to get or set permissions.
 * 
 * 输入权限类别。由 {@link PlayerInputPermissionCategoryChangeAfterEvent} 用于指定哪个类别被更改，并由 {@link PlayerInputPermissions} 用于获取或设置权限。
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * Player input relating to camera movement.
     * 
     * 与相机移动相关的玩家输入。
     */
    Camera = 1,
    /**
     * @remarks
     * Player input relating to all player movement. Disabling this
     * is equivalent to disabling jump, sneak, lateral movement,
     * mount, and dismount.
     * 
     * 与所有玩家移动相关的输入。禁用此项相当于禁用跳跃、潜行、横向移动、骑乘和下马。
     */
    Movement = 2,
    /**
     * @rc
     * @remarks
     * Player input for moving laterally in the world. This would
     * be WASD on a keyboard or the movement joystick on gamepad or
     * touch.
     * 
     * 玩家在世界中横向移动的输入。这在键盘上是WASD，或游戏手柄或触摸设备上的移动摇杆。
     */
    LateralMovement = 4,
    /**
     * @rc
     * @remarks
     * Player input relating to sneak. This also affects flying
     * down.
     * 
     * 与潜行相关的玩家输入。这也影响向下飞行。
     */
    Sneak = 5,
    /**
     * @rc
     * @remarks
     * Player input relating to jumping. This also affects flying
     * up.
     * 
     * 与跳跃相关的玩家输入。这也影响向上飞行。
     */
    Jump = 6,
    /**
     * @rc
     * @remarks
     * Player input relating to mounting vehicles.
     * 
     * 与骑乘载具相关的玩家输入。
     */
    Mount = 7,
    /**
     * @rc
     * @remarks
     * Player input relating to dismounting. When disabled, the
     * player can still dismount vehicles by other means, for
     * example on horses players can still jump off and in boats
     * players can go into another boat.
     * 
     * 与下马相关的玩家输入。禁用时，玩家仍可通过其他方式下马，例如在马上玩家仍可以跳下，而在船上玩家可以进入另一艘船。
     */
    Dismount = 8,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player forward.
     * 
     * 与玩家向前移动相关的输入。
     */
    MoveForward = 9,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player backward.
     * 
     * 与玩家向后移动相关的输入。
     */
    MoveBackward = 10,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player left.
     * 
     * 与玩家向左移动相关的输入。
     */
    MoveLeft = 11,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player right.
     * 
     * 与玩家向右移动相关的输入。
     */
    MoveRight = 12,
}

/**
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 *
 * 通过函数 ItemStack.getComponent 访问的物品组件类型。
 */
export enum ItemComponentTypes {
	/**
	 * @rc
	 */
	Compostable = "minecraft:compostable",
	/**
	 * @remarks
	 * The minecraft:cooldown component.
	 *
	 * 表示 minecraft:cooldown(冷却) 组件。
	 */
	Cooldown = "minecraft:cooldown",
	/**
	 * @remarks
	 * The minecraft:durability component.
	 *
	 * 表示 minecraft:durability(耐久度) 组件。
	 */
	Durability = "minecraft:durability",
	/**
	 * @beta
	 */
	Dyeable = "minecraft:dyeable",
	/**
	 * @remarks
	 * The minecraft:enchantable component.
	 *
	 * 表示 minecraft:enchantable(附魔) 组件。
	 */
	Enchantable = "minecraft:enchantable",
	/**
	 * @remarks
	 * The minecraft:food component.
	 *
	 * 表示 minecraft:food(食物) 组件。
	 */
	Food = "minecraft:food",
	/**
	 * @beta
	 */
	Potion = "minecraft:potion",
}

/**
 * Describes how an an item can be moved within a container.
 *
 * 表示物品在容器中如何移动。
 */
export enum ItemLockMode {
	/**
	 * @remarks
	 * The item cannot be dropped or crafted with.
	 *
	 * 物品不能被丢弃或用于合成。
	 */
	inventory = "inventory",
	/**
	 * @remarks
	 * The item has no container restrictions.
	 *
	 * 物品没有容器限制。
	 */
	none = "none",
	/**
	 * @remarks
	 * The item cannot be moved from its slot, dropped or crafted
	 * with.
	 *
	 * 物品不能从其槽位移动、丢弃或用于合成。
	 */
	slot = "slot",
}

/**
 * @beta
 * Represents the type of liquid that can be placed on a block
 * or flow dynamically in the world.
 *
 * 表示可以放置在方块上或在世界中动态流动的液体类型。
 */
export enum LiquidType {
	/**
	 * @remarks
	 * Represents water as a type of liquid.
	 *
	 * 表示水是一种液体类型。
	 */
	Water = "Water",
}

/**
 * Describes the memory of a device.
 *
 * 表示设备的内存。
 */
export enum MemoryTier {
	/**
	 * @remarks
	 * Max memory for Super Low Tier is 1.5GBs.
	 *
	 * 超低级的最大内存为1.5GB。
	 */
	SuperLow = 0,
	/**
	 * @remarks
	 * Max memory for Low Tier is 2GBs.
	 *
	 * 低级的最大内存为2GB。
	 */
	Low = 1,
	/**
	 * @remarks
	 * Max memory for Mid Tier is 4GBs.
	 *
	 * 中级的最大内存为4GB。
	 */
	Mid = 2,
	/**
	 * @remarks
	 * Max memory for High Tier is 8GBs.
	 *
	 * 高级的最大内存为8GB。
	 */
	High = 3,
	/**
	 * @remarks
	 * Memory for Super High Tier is above 8GBs.
	 *
	 * 超高级的内存超过8GB。
	 */
	SuperHigh = 4,
}

/**
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * 表示根据当前日期的不同月相的枚举。使用 world.getMoonPhase 获取当前月相。
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 *
 * 月亮的盈亏会影响生物的各种行为，例如沼泽生物群系中生成的史莱姆数量、骷髅和僵尸生成时佩戴盔甲的几率，以及蜘蛛生成时具备特定状态效果的几率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     * 最明亮的月相。在此阶段，猫有50%的几率生成为黑猫。
     */
    FullMoon = 0,
    /**
     * @remarks
     * The phase following the Full Moon.
     *
     * 满月之后的月相。
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * The phase following the Waxing Crescent.
     *
     * 娥眉月之后的月相。
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * The phase following the Last Quarter.
     *
     * 下弦月之后的月相。
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * The darkest moon phase.
     *
     * 最黑暗的月相。
     */
    NewMoon = 4,
    /**
     * @remarks
     * The phase following the New Moon.
     *
     * 新月之后的月相。
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * The phase following the Waning Gibbous.
     *
     * 盈凸月之后的月相。
     */
    LastQuarter = 6,
    /**
     * @remarks
     * The phase following the First Quarter.
     *
     * 上弦月之后的月相。
     */
    WaxingGibbous = 7,
}

/**
 * @beta
 * An enumeration describing the reason for the namespace name
 * error being thrown
 *
 * 描述命名空间名称错误被抛出的原因的枚举
 */
export enum NamespaceNameErrorReason {
	/**
	 * @remarks
	 * A restricted namespace was used as the namespace
	 *
	 * 使用了受限的命名空间
	 *
	 */
	DisallowedNamespace = "DisallowedNamespace",
	/**
	 * @remarks
	 * The name was missing a namespace when one is required
	 *
	 * 在需要命名空间的情况下缺少命名空间
	 *
	 */
	NoNamespace = "NoNamespace",
}

/**
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 *
 * 表示分数持有者列表的排序顺序。
 */
export enum ObjectiveSortOrder {
	/**
	 * @remarks
	 *
	 * Objective participant list is displayed in ascending (e.g.,
	 * A-Z) order.
	 *
	 * 以升序显示分数持有者列表（例如：A-Z）。
	 */
	Ascending = 0,
	/**
	 * @remarks
	 *
	 * Objective participant list is displayed in descending (e.g.,
	 * Z-A) order.
	 *
	 * 以降序显示分数持有者列表（例如：Z-A）。
	 */
	Descending = 1,
}

/**
 * Enum containing colors to be used with EntityColorComponent
 * and EntityColor2Component
 * 表示可与EntityColorComponent(Entity颜色组件)及EntityColor2Component(Entity颜色2组件)搭配使用的颜色枚举
 */
export enum PaletteColor {
	/**
	 * @remarks
	 * Hex color #f0f0f0
	 *
	 * 十六进制颜色 #f0f0f0
	 */
	White = 0,
	/**
	 * @remarks
	 * Hex color #F9801D
	 *
	 * 十六进制颜色 #F9801D
	 */
	Orange = 1,
	/**
	 * @remarks
	 * Hex color #C74EBD
	 *
	 * 十六进制颜色 #C74EBD
	 */
	Magenta = 2,
	/**
	 * @remarks
	 * Hex color #3AB3DA
	 *
	 * 十六进制颜色 #3AB3DA
	 */
	LightBlue = 3,
	/**
	 * @remarks
	 * Hex color #FED83D
	 *
	 * 十六进制颜色 #FED83D
	 */
	Yellow = 4,
	/**
	 * @remarks
	 * Hex color #80C71F
	 *
	 * 十六进制颜色 #80C71F
	 */
	Lime = 5,
	/**
	 * @remarks
	 * Hex color #F38BAA
	 *
	 * 十六进制颜色 #F38BAA
	 */
	Pink = 6,
	/**
	 * @remarks
	 * Hex color #474F52
	 *
	 * 十六进制颜色 #474F52
	 */
	Gray = 7,
	/**
	 * @remarks
	 * Hex color #9D9D97
	 *
	 * 十六进制颜色 #9D9D97
	 */
	Silver = 8,
	/**
	 * @remarks
	 * Hex color #169C9C
	 *
	 * 十六进制颜色 #169C9C
	 */
	Cyan = 9,
	/**
	 * @remarks
	 * Hex color #8932B8
	 *
	 * 十六进制颜色 #8932B8
	 */
	Purple = 10,
	/**
	 * @remarks
	 * Hex color #3C44AA
	 *
	 * 十六进制颜色 #3C44AA
	 */
	Blue = 11,
	/**
	 * @remarks
	 * Hex color #835432
	 *
	 * 十六进制颜色 #835432
	 */
	Brown = 12,
	/**
	 * @remarks
	 * Hex color #5E7C16
	 *
	 * 十六进制颜色 #5E7C16
	 */
	Green = 13,
	/**
	 * @remarks
	 * Hex color #B02E26
	 *
	 * 十六进制颜色 #B02E26
	 */
	Red = 14,
	/**
	 * @remarks
	 * Hex color #1D1D21
	 *
	 * 十六进制颜色 #1D1D21
	 */
	Black = 15,
}

/**
 * Describes what kind of platform is a device.
 *
 * 表示设备属于哪种平台。
 */
export enum PlatformType {
	/**
	 * @remarks
	 * Specialized gaming device.
	 *
	 * 表示专用游戏设备。
	 */
	Console = "Console",
	/**
	 * @remarks
	 * Personal Computer (PC).
	 *
	 * 表示个人电脑（PC）。
	 */
	Desktop = "Desktop",
	/**
	 * @remarks
	 * Handheld device such smartphone or tablet.
	 *
	 * 表示手持设备，例如智能手机或平板电脑。
	 */
	Mobile = "Mobile",
}

/**
 * 表示分数持有者的类型。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @remarks
     * 分数持有者是一个实体。
     * 
     * This scoreboard participant is tied to an entity.
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 分数持有者是一个虚拟玩家（通常用于存储数据或者作为抽象进度）。
     * 
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @remarks
     * 分数持有者是一位玩家。
     * 
     * This scoreboard participant is tied to a player.
     *
     */
    Player = 'Player',
}

/**
 * Describes where the script event originated from.
 *
 * 表示脚本事件的来源。
 */
export enum ScriptEventSource {
	/**
	 * @remarks
	 * The script event originated from a Block such as a Command
	 * Block.
	 *
	 * 表示脚本事件来源于方块，例如命令方块。
	 */
	Block = "Block",
	/**
	 * @remarks
	 * The script event originated from an Entity such as a Player,
	 * Command Block Minecart or Animation Controller.
	 *
	 * 表示脚本事件来源于实体，例如玩家、命令方块矿车或动画控制器。
	 */
	Entity = "Entity",
	/**
	 * @remarks
	 * The script event originated from an NPC dialogue.
	 *
	 * 表示脚本事件来源于NPC对话。
	 */
	NPCDialogue = "NPCDialogue",
	/**
	 * @remarks
	 * The script event originated from the server, such as from a
	 * runCommand API call or a dedicated server console.
	 *
	 * 表示脚本事件来源于服务器，例如通过runCommand API调用或专用服务器控制台。
	 */
	Server = "Server",
}

/**
 * Represents a side of a sign.
 *
 * 表示告示牌的一个面。
 */
export enum SignSide {
	/**
	 * @remarks
	 * The back of the sign.
	 *
	 * 表示告示牌的背面。
	 */
	Back = "Back",
	/**
	 * @remarks
	 * The front of the sign.
	 *
	 * 表示告示牌的正面。
	 */
	Front = "Front",
}

/**
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 * 表示在放置结构时结构方块的动画方式。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * Blocks will be randomly placed one at at time. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     * 表示方块将会被随机一个一个地放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 来控制所有方块放置完成所需的时间。
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * Blocks will be placed one layer at a time from bottom to
     * top. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     * 表示方块将会自下而上一层一层地放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 来控制所有方块放置完成所需的时间。
     */
    Layers = 'Layers',
    /**
     * @remarks
     * All blocks will be placed immediately.
     * 表示所有方块将会立即放置。
     */
    None = 'None',
}

/**
 * 表示在放置结构时应如何进行镜像。
 *
 * Specifies how a structure should be mirrored when placed.
 */
export enum StructureMirrorAxis {
	/**
	 * @remarks
	 * 不进行镜像。
	 *
	 * No mirroring.
	 *
	 */
	None = "None",
	/**
	 * @remarks
	 * 结构沿 X 轴进行镜像。
	 *
	 * Structure is mirrored across the X axis.
	 *
	 */
	X = "X",
	/**
	 * @remarks
	 * 结构沿 X 和 Z 轴进行镜像。
	 *
	 * Structure is mirrored across both the X and Z axes.
	 *
	 */
	XZ = "XZ",
	/**
	 * @remarks
	 * 结构沿 Z 轴进行镜像。
	 *
	 * Structure is mirrored across the Z axis.
	 *
	 */
	Z = "Z",
}

/**
 * Enum describing a structure's placement rotation.
 *
 * 表示结构放置时的旋转方式的枚举。
 */
export enum StructureRotation {
	/**
	 * @remarks
	 * No rotation.
	 *
	 * 无旋转。
	 */
	None = "None",
	/**
	 * @remarks
	 * 180 degree rotation.
	 *
	 * 180度旋转。
	 */
	Rotate180 = "Rotate180",
	/**
	 * @remarks
	 * 270 degree rotation.
	 *
	 * 270度旋转。
	 */
	Rotate270 = "Rotate270",
	/**
	 * @remarks
	 * 90 degree rotation.
	 *
	 * 90度旋转。
	 */
	Rotate90 = "Rotate90",
}

/**
 * Specifies how a structure should be saved.
 *
 * 表示如何保存结构。
 */
export enum StructureSaveMode {
	/**
	 * @remarks
	 * The structure will be temporarily saved to memory. The
	 * structure will persist until the world is shut down.
	 *
	 * 表示结构将被临时保存到内存中。该结构将持续存在，直到世界被关闭。
	 *
	 */
	Memory = "Memory",
	/**
	 * @remarks
	 * The structure will be saved to the world file and persist
	 * between world loads. A saved structure can be removed from
	 * the world via @minecraft/server.StructureManager.delete.
	 *
	 * 表示结构将被保存到世界文件中，并在世界加载之间持续存在。可以通过@minecraft/server.StructureManager.delete从世界中删除已保存的结构。
	 *
	 */
	World = "World",
}

/**
 * Provides numeric values for common periods in the Minecraft
 * day.
 * 表示Minecraft中常见时间段的数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * Sets the time to the start of the day, which is time of the
     * day 1,000 (or the equivalent of 7am) in Minecraft.
     * 将时间设置为一天的开始，即Minecraft中的1000时间（相当于早上7点）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * Sets the time to noon, which is time of the day 6,000 in
     * Minecraft.
     * 将时间设置为中午，即Minecraft中的6000时间。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * Sets the time to sunset, which is time of the day 12,000 (or
     * the equivalent of 6pm) in Minecraft.
     * 将时间设置为日落，即Minecraft中的12000时间（相当于下午6点）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * Sets the time to night, which is time of the day 13,000 (or
     * the equivalent of 7:00pm) in Minecraft.
     * 将时间设置为夜晚，即Minecraft中的13000时间（相当于晚上7点）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * Sets the time to midnight, which is time of the day 18,000
     * (or the equivalent of 12:00am) in Minecraft.
     * 将时间设置为午夜，即Minecraft中的18000时间（相当于凌晨12点）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * Sets the time to sunrise, which is time of the day 23,000
     * (or the equivalent of 5am) in Minecraft.
     * 将时间设置为日出，即Minecraft中的23000时间（相当于早上5点）。
     *
     */
    Sunrise = 23000,
}

/**
 * @beta
 */
export enum TintMethod {

    /**
     * 表示白桦树叶的颜色渲染方法。
     * 
     * Represents the tint method for birch foliage.
     */
    BirchFoliage = 'BirchFoliage',

    /**
     * 表示默认树叶的颜色渲染方法。
     * 
     * Represents the default tint method for foliage.
     */
    DefaultFoliage = 'DefaultFoliage',

    /**
     * 表示常绿树叶的颜色渲染方法。
     * 
     * Represents the tint method for evergreen foliage.
     */
    EvergreenFoliage = 'EvergreenFoliage',

    /**
     * 表示草地的颜色渲染方法。
     * 
     * Represents the tint method for grass.
     */
    Grass = 'Grass',

    /**
     * 表示无颜色渲染方法。
     * 
     * Represents no tint method.
     */
    None = 'None',

    /**
     * 表示水的颜色渲染方法。
     * 
     * Represents the tint method for water.
     */
    Water = 'Water',
}

/**
 * @beta
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 * 
 * 表示看门狗决定终止行为包脚本执行的原因的枚举。
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     * 
     * 表示由于脚本无响应（卡死或无限循环），行为包的脚本运行时被终止。
     */
    Hang = 'Hang',
    /**
     * @remarks
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     * 
     * 表示由于堆栈溢出（长且可能无限的函数调用链），行为包的脚本运行时被终止。
     */
    StackOverflow = 'StackOverflow',
}

/**
 * Used to specify the type of weather condition within the
 * world.
 *
 * 表示世界中的天气类型。
 */
export enum WeatherType {
	/**
	 * @remarks
	 * Specifies a clear weather condition.
	 *
	 * 表示晴朗的天气条件。
	 */
	Clear = "Clear",
	/**
	 * @remarks
	 * Specifies a rain weather condition.
	 *
	 * 表示下雨的天气条件。
	 */
	Rain = "Rain",
	/**
	 * @remarks
	 * Specifies a rain and thunder weather condition.
	 *
	 * 表示雷雨的天气条件。
	 */
	Thunder = "Thunder",
}

/**
 * @beta
 */
export type BlockComponentTypeMap = {
	fluidContainer: BlockFluidContainerComponent;
	inventory: BlockInventoryComponent;
	map_color: BlockMapColorComponent;
	'minecraft:fluidContainer': BlockFluidContainerComponent;
	'minecraft:inventory': BlockInventoryComponent;
	'minecraft:map_color': BlockMapColorComponent;
	'minecraft:piston': BlockPistonComponent;
	'minecraft:record_player': BlockRecordPlayerComponent;
	'minecraft:sign': BlockSignComponent;
	piston: BlockPistonComponent;
	record_player: BlockRecordPlayerComponent;
	sign: BlockSignComponent;
};

/**
 * @beta
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 * 
 * 表示 {@link BlockPermutation} 的匹配和解析函数使用的类型别名，用于将方块状态参数类型缩小到由 {@link @minecraft/vanilla-data.BlockStateMapping} 映射的类型。
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;

/**
 * @beta
 */
export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    cursor_inventory: PlayerCursorInventoryComponent;
    equippable: EntityEquippableComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    ground_offset: EntityGroundOffsetComponent;
    healable: EntityHealableComponent;
    health: EntityHealthComponent;
    inventory: EntityInventoryComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    item: EntityItemComponent;
    lava_movement: EntityLavaMovementComponent;
    leashable: EntityLeashableComponent;
    mark_variant: EntityMarkVariantComponent;
    'minecraft:addrider': EntityAddRiderComponent;
    'minecraft:ageable': EntityAgeableComponent;
    'minecraft:breathable': EntityBreathableComponent;
    'minecraft:can_climb': EntityCanClimbComponent;
    'minecraft:can_fly': EntityCanFlyComponent;
    'minecraft:can_power_jump': EntityCanPowerJumpComponent;
    'minecraft:color': EntityColorComponent;
    'minecraft:color2': EntityColor2Component;
    'minecraft:cursor_inventory': PlayerCursorInventoryComponent;
    'minecraft:equippable': EntityEquippableComponent;
    'minecraft:fire_immune': EntityFireImmuneComponent;
    'minecraft:floats_in_liquid': EntityFloatsInLiquidComponent;
    'minecraft:flying_speed': EntityFlyingSpeedComponent;
    'minecraft:friction_modifier': EntityFrictionModifierComponent;
    'minecraft:ground_offset': EntityGroundOffsetComponent;
    'minecraft:healable': EntityHealableComponent;
    'minecraft:health': EntityHealthComponent;
    'minecraft:inventory': EntityInventoryComponent;
    'minecraft:is_baby': EntityIsBabyComponent;
    'minecraft:is_charged': EntityIsChargedComponent;
    'minecraft:is_chested': EntityIsChestedComponent;
    'minecraft:is_dyeable': EntityIsDyeableComponent;
    'minecraft:is_hidden_when_invisible': EntityIsHiddenWhenInvisibleComponent;
    'minecraft:is_ignited': EntityIsIgnitedComponent;
    'minecraft:is_illager_captain': EntityIsIllagerCaptainComponent;
    'minecraft:is_saddled': EntityIsSaddledComponent;
    'minecraft:is_shaking': EntityIsShakingComponent;
    'minecraft:is_sheared': EntityIsShearedComponent;
    'minecraft:is_stackable': EntityIsStackableComponent;
    'minecraft:is_stunned': EntityIsStunnedComponent;
    'minecraft:is_tamed': EntityIsTamedComponent;
    'minecraft:item': EntityItemComponent;
    'minecraft:lava_movement': EntityLavaMovementComponent;
    'minecraft:leashable': EntityLeashableComponent;
    'minecraft:mark_variant': EntityMarkVariantComponent;
    'minecraft:movement': EntityMovementComponent;
    'minecraft:movement.amphibious': EntityMovementAmphibiousComponent;
    'minecraft:movement.basic': EntityMovementBasicComponent;
    'minecraft:movement.fly': EntityMovementFlyComponent;
    'minecraft:movement.generic': EntityMovementGenericComponent;
    'minecraft:movement.glide': EntityMovementGlideComponent;
    'minecraft:movement.hover': EntityMovementHoverComponent;
    'minecraft:movement.jump': EntityMovementJumpComponent;
    'minecraft:movement.skip': EntityMovementSkipComponent;
    'minecraft:movement.sway': EntityMovementSwayComponent;
    'minecraft:navigation.climb': EntityNavigationClimbComponent;
    'minecraft:navigation.float': EntityNavigationFloatComponent;
    'minecraft:navigation.fly': EntityNavigationFlyComponent;
    'minecraft:navigation.generic': EntityNavigationGenericComponent;
    'minecraft:navigation.hover': EntityNavigationHoverComponent;
    'minecraft:navigation.walk': EntityNavigationWalkComponent;
    'minecraft:npc': EntityNpcComponent;
    'minecraft:onfire': EntityOnFireComponent;
    'minecraft:projectile': EntityProjectileComponent;
    'minecraft:push_through': EntityPushThroughComponent;
    'minecraft:rideable': EntityRideableComponent;
    'minecraft:riding': EntityRidingComponent;
    'minecraft:scale': EntityScaleComponent;
    'minecraft:skin_id': EntitySkinIdComponent;
    'minecraft:strength': EntityStrengthComponent;
    'minecraft:tameable': EntityTameableComponent;
    'minecraft:tamemount': EntityTameMountComponent;
    'minecraft:type_family': EntityTypeFamilyComponent;
    'minecraft:underwater_movement': EntityUnderwaterMovementComponent;
    'minecraft:variant': EntityVariantComponent;
    'minecraft:wants_jockey': EntityWantsJockeyComponent;
    movement: EntityMovementComponent;
    'movement.amphibious': EntityMovementAmphibiousComponent;
    'movement.basic': EntityMovementBasicComponent;
    'movement.fly': EntityMovementFlyComponent;
    'movement.generic': EntityMovementGenericComponent;
    'movement.glide': EntityMovementGlideComponent;
    'movement.hover': EntityMovementHoverComponent;
    'movement.jump': EntityMovementJumpComponent;
    'movement.skip': EntityMovementSkipComponent;
    'movement.sway': EntityMovementSwayComponent;
    'navigation.climb': EntityNavigationClimbComponent;
    'navigation.float': EntityNavigationFloatComponent;
    'navigation.fly': EntityNavigationFlyComponent;
    'navigation.generic': EntityNavigationGenericComponent;
    'navigation.hover': EntityNavigationHoverComponent;
    'navigation.walk': EntityNavigationWalkComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    projectile: EntityProjectileComponent;
    push_through: EntityPushThroughComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    tamemount: EntityTameMountComponent;
    type_family: EntityTypeFamilyComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    variant: EntityVariantComponent;
    wants_jockey: EntityWantsJockeyComponent;
};

/**
 * @beta
 */
export type ItemComponentTypeMap = {
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    'minecraft:compostable': ItemCompostableComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:dyeable': ItemDyeableComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
    'minecraft:potion': ItemPotionComponent;
    potion: ItemPotionComponent;
};

/**
 * @beta
 * Handle to an aim-assist category that exists in the
 * world.aimAssist registry.
 * 
 * 句柄，用于访问存在于 world.aimAssist 注册表中的瞄准辅助类别。
 *
 * Required Experiments:
 * - Camera Aim Assist
 * 
 * 必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * Default targeting priority used for block types not found in
     * getBlockPriorities.
     * 
     * 用于未在 getBlockPriorities 中找到的方块类型的默认目标优先级。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     *
     * {@link Error}
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * Default targeting priority used for entity types not found
     * in getEntityPriorities.
     * 
     * 用于未在 getEntityPriorities 中找到的实体类型的默认目标优先级。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     *
     * {@link Error}
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * The unique Id associated with the category.
     * 
     * 与此类别关联的唯一标识符。
     *
     */
    readonly identifier: string;
    /**
     * @remarks
     * Gets the priority settings used for block targeting.
     * 
     * 获取用于方块目标选择的优先级设置。
     *
     * @returns
     * The record mapping block Ids to their priority settings.
     * Larger numbers have greater priority.
     * 
     * 映射方块 ID 到其优先级设置的记录。数值越大，优先级越高。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     *
     * {@link Error}
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @remarks
     * Gets the priority settings used for entity targeting.
     * 
     * 获取用于实体目标选择的优先级设置。
     *
     * @returns
     * The record mapping entity Ids to their priority settings.
     * Larger numbers have greater priority.
     * 
     * 映射实体 ID 到其优先级设置的记录。数值越大，优先级越高。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     *
     * {@link Error}
     */
    getEntityPriorities(): Record<string, number>;
}

/**
 * @beta
 * Settings used with AimAssistRegistry.addCategory for
 * creation of the AimAssistCategory.
 *
 * 用于与 AimAssistRegistry.addCategory 一起使用的设置，
 * 用于创建 AimAssistCategory。
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 * 必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 */
export class AimAssistCategorySettings {
	/**
	 * @remarks
	 * Optional. Default targeting priority used for block types
	 * not provided to setBlockPriorities.
	 *
	 * 可选项。用于未提供给 setBlockPriorities 的方块类型的默认目标优先级。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 *
	 */
	defaultBlockPriority: number;
	/**
	 * @remarks
	 * Optional. Default targeting priority used for entity types
	 * not provided to setEntityPriorities.
	 *
	 * 可选项。用于未提供给 setEntityPriorities 的实体类型的默认目标优先级。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 *
	 */
	defaultEntityPriority: number;
	/**
	 * @remarks
	 * The unique Id used to register the category with. Must have
	 * a namespace.
	 *
	 * 用于注册类别的唯一标识符。必须包含命名空间。
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistCategory. Must have a namespace.
	 *
	 * 构造函数，接受一个唯一标识符以与创建的 AimAssistCategory 关联。
	 * 必须包含命名空间。
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * Gets the priority settings used for block targeting.
	 *
	 * 获取用于方块目标选择的优先级设置。
	 *
	 * @returns
	 * The record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射方块 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	getBlockPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * Gets the priority settings used for entity targeting.
	 *
	 * 获取用于实体目标选择的优先级设置。
	 *
	 * @returns
	 * The record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射实体 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	getEntityPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * Sets the priority settings used for block targeting.
	 *
	 * 设置用于方块目标选择的优先级设置。
	 *
	 * @param blockPriorities
	 * A record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射方块 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	setBlockPriorities(
        blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>,
    ): void;
	/**
	 * @remarks
	 * Sets the priority settings used for entity targeting.
	 *
	 * 设置用于实体目标选择的优先级设置。
	 *
	 * @param entityPriorities
	 * A record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射实体 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	setEntityPriorities(
        entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>,
    ): void;
}

/**
 * @beta
 * 表示一个存在于 world.aimAssist 注册表中的辅助瞄准预设句柄。
 *
 * Represents a handle to an aim-assist preset that exists in the world.aimAssist registry.
 *
 * 必须启用的实验特性：
 * - 相机辅助瞄准
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class AimAssistPreset {
	private constructor();
	/**
	 * @remarks
	 * 可选。用于未通过 setItemSettings 提供的物品的默认辅助瞄准类别 ID。
	 *
	 * Optional. Default aim-assist category Id used for items not provided to setItemSettings.
	 *
	 * @throws 此属性在使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly defaultItemSettings?: string;
	/**
	 * @remarks
	 * 可选。用于空手的辅助瞄准类别 ID。
	 *
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * @throws 此属性在使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly handSettings?: string;
	/**
	 * @remarks
	 * 与该预设关联的唯一标识符。
	 *
	 * The unique Id associated with the preset.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 获取从辅助瞄准目标中排除的方块/实体 ID 列表。
	 *
	 * Gets the list of block/entity Ids to exclude from aim assist targeting.
	 *
	 * @returns
	 * 包含方块/实体 ID 的数组。
	 *
	 * The array of block/entity Ids.
	 *
	 * @throws 此函数可能会抛出异常。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getExcludedTargets(): string[];
	/**
	 * @remarks
	 * 获取每个物品的辅助瞄准类别 ID。
	 *
	 * Gets the per-item aim-assist category Ids.
	 *
	 * @returns
	 * 映射物品 ID 到辅助瞄准类别 ID 的记录。
	 *
	 * The record mapping item Ids to aim-assist category Ids.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * 获取在被持有时会使用辅助瞄准目标液体方块的物品 ID 列表。
	 *
	 * Gets the list of item Ids that will target liquid blocks with aim-assist when being held.
	 *
	 * @returns
	 * 包含物品 ID 的数组。
	 *
	 * The array of item Ids.
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getLiquidTargetingItems(): string[];
}

/**
 * @beta
 * 用于 AimAssistRegistry.addPreset 创建 AimAssistPreset 的设置。
 *
 * 必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 * Settings used with AimAssistRegistry.addPreset for creation
 * of the AimAssistPreset.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class AimAssistPresetSettings {
	/**
	 * @remarks
	 * 可选。默认的瞄准辅助类别 ID，用于未通过 setItemSettings 提供的物品。
	 *
	 * Optional. Default aim-assist category Id used for items not
	 * provided to setItemSettings.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	defaultItemSettings?: string;
	/**
	 * @remarks
	 * 可选。用于空手的瞄准辅助类别 ID。
	 *
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	handSettings?: string;
	/**
	 * @remarks
	 * 用于注册预设的唯一 ID。必须包含命名空间。
	 *
	 * The unique Id used to register the preset with. Must have a
	 * namespace.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 构造函数，接受一个与创建的 AimAssistPreset 关联的唯一 ID。必须包含命名空间。
	 *
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistPreset. Must have a namespace.
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * 获取从瞄准辅助目标中排除的方块/实体 ID 列表。
	 *
	 * Gets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @returns
	 * 包含方块/实体 ID 的数组。
	 *
	 * The array of block/entity Ids.
	 */
	getExcludedTargets(): string[] | undefined;
	/**
	 * @remarks
	 * 获取每个物品的瞄准辅助类别 ID。
	 *
	 * Gets the per-item aim-assist category Ids.
	 *
	 * @returns
	 * 一个将物品 ID 映射到瞄准辅助类别 ID 的记录。
	 *
	 * The record mapping item Ids to aim-assist category Ids.
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * 获取在持有时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
	 *
	 * Gets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @returns
	 * 包含物品 ID 的数组。
	 *
	 * The array of item Ids.
	 */
	getLiquidTargetingItems(): string[] | undefined;
	/**
	 * @remarks
	 * 设置从瞄准辅助目标中排除的方块/实体 ID 列表。
	 *
	 * Sets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @param targets
	 * 一个包含方块/实体 ID 的数组。
	 *
	 * An array of block/entity Ids.
	 */
	setExcludedTargets(
		targets?: (
			| keyof typeof minecraftvanilladata.MinecraftBlockTypes
			| keyof typeof minecraftvanilladata.MinecraftEntityTypes
			| string
		)[],
	): void;
	/**
	 * @remarks
	 * 设置每个物品的瞄准辅助类别 ID。
	 *
	 * Sets the per-item aim-assist category Ids.
	 *
	 * @param itemSettings
	 * 一个将物品 ID 映射到瞄准辅助类别 ID 的记录。
	 * 类别 ID 必须包含命名空间。
	 *
	 * A record mapping item Ids to aim-assist category Ids.
	 * Category Ids must have a namespace.
	 */
	setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
	/**
	 * @remarks
	 * 设置在持有时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
	 *
	 * Sets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @param items
	 * 一个包含物品 ID 的数组。
	 *
	 * An array of item Ids.
	 */
	setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}

/**
 * @beta
 * 包含与世界的辅助瞄准设置相关的 API 的容器。
 *
 *  必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 * A container for APIs related to the world's aim-assist
 * settings.
 *
 * Required Experiments:
 * - Camera Aim Assist
 */
export class AimAssistRegistry {
	private constructor();
	/**
	 * @remarks
	 * 默认的辅助瞄准预设标识符，当未另行指定时使用。
	 *
	 */
	static readonly DefaultPresetId = "minecraft:aim_assist_default";
	/**
	 * @remarks
	 * 向注册表中添加一个辅助瞄准类别。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param category
	 * 用于创建新类别的类别设置。
	 * @returns
	 * 创建的类别句柄。
	 * @throws This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 */
	addCategory(category: AimAssistCategorySettings): AimAssistCategory;
	/**
	 * @remarks
	 * 向注册表中添加一个辅助瞄准预设。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param preset
	 * 用于创建新预设的预设设置。
	 * @returns
	 * 创建的预设句柄。
	 * @throws This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 */
	addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
	/**
	 * @remarks
	 * 获取注册表中所有可用的类别。
	 *
	 * @returns
	 * 一个包含所有可用类别对象的数组。
	 */
	getCategories(): AimAssistCategory[];
	/**
	 * @remarks
	 * 获取与提供的标识符关联的类别。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 若存在，返回类别对象；否则返回 undefined。
	 */
	getCategory(categoryId: string): AimAssistCategory | undefined;
	/**
	 * @remarks
	 * 获取与提供的标识符关联的预设。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param presetId
	 * 要检索的预设的标识符。必须包含命名空间。
	 * @returns
	 * 若存在，返回预设对象；否则返回 undefined。
	 */
	getPreset(presetId: string): AimAssistPreset | undefined;
	/**
	 * @remarks
	 * 获取注册表中所有可用的预设。
	 *
	 * @returns
	 * 一个包含所有可用预设对象的数组。
	 */
	getPresets(): AimAssistPreset[];
}

/**
 * @beta
 * 表示一种生物群系类型。
 *
 * Describes a type of biome.
 */
export class BiomeType {
	private constructor();
	/**
	 * @remarks
	 * 生物群系类型的标识符。
	 *
	 * Identifier of the biome type.
	 *
	 */
	readonly id: string;
}

/**
 * @beta
 * 表示在Minecraft中注册的可用生物群系类型目录。
 *
 * Supports a catalog of available biome types registered
 * within Minecraft.
 */
export class BiomeTypes {
	private constructor();
	/**
	 * @remarks
	 * 返回特定的生物群系类型。
	 *
	 * Returns a specific biome type.
	 *
	 * @param typeName
	 * 生物群系的标识符。通常应使用带命名空间的标识符
	 * (例如，minecraft:frozen_peaks)。
	 *
	 * Identifier of the biome.  Generally, namespaced identifiers
	 * (e.g., minecraft:frozen_peaks) should be used.
	 * @returns
	 * 若生物群系存在，则返回一个 BiomeType 对象。若不存在，
	 * 则返回 undefined。
	 *
	 * If the biome exists, a BiomeType object is returned. If not,
	 * undefined is returned.
	 */
	static get(typeName: string): BiomeType | undefined;
	/**
	 * @remarks
	 * 返回Minecraft中所有注册的生物群系类型。
	 *
	 * Returns all registered biome types within Minecraft
	 *
	 */
	static getAll(): BiomeType[];
}

/**
 * 表示世界维度中的特定位置的方块。
 * 方块对象对应了唯一的 X、Y、Z 与维度，可用于读取或修改此位置的方块状态。
 * 此类型在 1.17.10.21 有重大更新。
 *
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
	private constructor();

	/**
	 * @remarks
	 * 返回方块所在维度对象。
	 *
	 * Returns the dimension that the block is within.
	 *
	 * @returns
	 * 方块所在维度对象。
	 *
	 */
	readonly dimension: Dimension;

	/**
	 * @remarks
	 * 返回 true 若这个方块是空气方块（例如，空的空间）。
	 *
	 * Returns true if this block is an air block (i.e., empty
	 * space).
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isAir: boolean;

	/**
	 * @remarks
	 * 若这个方块是液体方块，例如水方块和岩浆方块等，则返回 true。
	 * 空气方块和石头方块等则不属于液体方块。
	 * 含水方块不算作液体方块。
	 *
	 * Returns true if this block is a liquid block - (e.g., a
	 * water block and a lava block are liquid, while an air block
	 * and a stone block are not. Water logged blocks are not
	 * liquid blocks).
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isLiquid: boolean;

	/**
	 * @beta
	 * @remarks
	 * 若该方块为实心且不可穿过的方块，则返回 true
	 * -（例如，鹅卵石块和钻石块是实心的，而梯子块和栅栏块则不是）。
	 *
	 * Returns true if this block is solid and impassible - (e.g.,
	 * a cobblestone block and a diamond block are solid, while a
	 * ladder block and a fence block are not).
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isSolid: boolean;

	/**
	 * @rc
	 * @remarks
	 * 返回或设置该方块是否含水。
	 *
	 * Returns or sets whether this block has water on it.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isWaterlogged: boolean;

	/**
	 * @remarks
	 * 该方块的坐标。
	 *
	 * Coordinates of the specified block.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 */
	readonly location: Vector3;

	/**
	 * @remarks
	 * 描述该方块的附加配置数据。
	 * （常称为方块状态）
	 *
	 * Additional block configuration data that describes the
	 * block.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly permutation: BlockPermutation;

	/**
	 * @remarks
	 * 获取方块的类型。
	 *
	 * Gets the type of block.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly "type": BlockType;

	/**
	 * @remarks
	 * 该方块的类型标识符。
	 *
	 * Identifier of the type of block for this block. Warning:
	 * Vanilla block names can be changed in future releases, try
	 * using 'Block.matches' instead for block comparison.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly typeId: string;

	/**
	 * @remarks
	 * 方块的 X 坐标。
	 *
	 * X coordinate of the block.
	 *
	 */
	readonly x: number;

	/**
	 * @remarks
	 * 方块的 Y 坐标。
	 *
	 * Y coordinate of the block.
	 *
	 */
	readonly y: number;

	/**
	 * @remarks
	 * 方块的 Z 坐标。
	 *
	 * Z coordinate of the block.
	 *
	 */
	readonly z: number;

	/**
	 * @remarks
	 * 返回该方块上方的 {@link Block}（Y 方向正方向）。
	 *
	 * Returns the {@link Block} above this block (positive in the
	 * Y direction).
	 *
	 * @param steps
	 * 返回之前要执行的步骤数。
	 * 留空默认为一。
	 * （返回的方块在原方块上方的距离）。
	 *
	 * Number of steps above to step before returning.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	above(steps?: number): Block | undefined;

	/**
	 * @remarks
	 * 返回该方块下方的 {@link Block}（Y 方向负方向）。
	 *
	 * Returns the {@link Block} below this block (negative in the
	 * Y direction).
	 *
	 * @param steps
	 * 向下的步数。
	 * 留空默认为一。
	 *
	 * Number of steps below to step before returning.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	below(steps?: number): Block | undefined;

	/**
	 * @remarks
	 * 返回该方块在 X 轴和 Z 轴上的中心的 {@link Vector3}。
	 *
	 * Returns the {@link Vector3} of the center of this block on
	 * the X and Z axis.
	 *
	 */
	bottomCenter(): Vector3;

	/**
	 * @beta
	 * @remarks
	 * 返回该方块被液体接触时是否会被移除。
	 *
	 * Returns whether this block is removed when touched by
	 * liquid.
	 *
	 * @param liquidType
	 * 此函数应被调用的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 *
	 * @returns
	 * 当此方块被液体接触时，是否会被移除。
	 *
	 * Whether this block is removed when touched by liquid.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;

	/**
	 * @beta
	 * @remarks
	 * 返回该方块是否可以放置液体，例如被水浸泡。
	 *
	 * Returns whether this block can have a liquid placed over it,
	 * i.e. be waterlogged.
	 *
	 * @param liquidType
	 * 此函数应被调用的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 *
	 * @returns
	 * 可否放置液体于此方块上。
	 *
	 * Whether this block can have a liquid placed over it.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	canContainLiquid(liquidType: LiquidType): boolean;

	/**
	 * @remark
	 * 检查在该方块的指定面上放置 {@link BlockPermutation} 或 {@link BlockType} 或指定标识符的方块是否可行。
	 *
	 * Checks to see whether it is valid to place the specified
	 * block type or block permutation, on a specified face on this
	 * block
	 *
	 * @param blockToPlace
	 * 被检查放置可行性的 {@link BlockPermutation} 或 {@link BlockType} 或方块标识符。
	 *
	 * Block type or block permutation to check placement for.
	 *
	 * @param faceToPlaceOn
	 * 可选参数，指定要检查放置方块的方向。
	 *
	 * Optional specific face of this block to check placement
	 * against.
	 *
	 * @returns
	 * 若在此面可以放置这样的方块则返回 True 。
	 *
	 * Returns `true` if the block type or permutation can be
	 * placed on this block, else `false`.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;

	/**
	 * @remarks
	 * 返回该方块在 X、Y 和 Z 轴上中心的 {@link Vector3}。
	 *
	 * Returns the {@link Vector3} of the center of this block on
	 * the X, Y, and Z axis.
	 *
	 */
	center(): Vector3;

	/**
	 * @remarks
	 * 返回位于该方块东侧（X 轴正方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the east of this block
	 * (positive in the X direction).
	 *
	 * @param steps
	 * 向东的步数。
	 *
	 * Number of steps to the east to step before returning.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	east(steps?: number): Block | undefined;

	/**
	 * @remarks
	 * 获取一个方块的组件（代表附加功能），例如，一个箱子方块的库存组件。
	 *
	 * Gets a component (that represents additional capabilities)
	 * for a block - for example, an inventory component of a chest
	 * block.
	 *
	 * @param componentId
	 * 组件的标识符（例如 'minecraft:inventory'）。
	 * 若未指定命名空间前缀，将默认使用 'minecraft:'。
	 * 可用的组件标识符可以在 {@link BlockComponentTypes} 枚举中找到。
	 *
	 * The identifier of the component (e.g.,
	 * 'minecraft:inventory'). If no namespace prefix is specified,
	 * 'minecraft:' is assumed. Available component IDs can be
	 * found as part of the {@link BlockComponentTypes} enum.
	 *
	 * @returns
	 * 若该组件存在于该方块，则返回该组件。
	 * 否则返回 undefined。
	 *
	 * Returns the component if it exists on the block, otherwise
	 * undefined.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getComponent<T extends keyof BlockComponentTypeMap>(componentId: T): BlockComponentTypeMap[T] | undefined;

	/**
	 * @remarks
	 * 创建一个基于该方块的原型物品对象 - {@link ItemStack}，可以与 {@link Container}/{@link ContainerSlot} 接口一起使用。
	 *
	 * Creates a prototype item stack based on this block that can
	 * be used with Container/ContainerSlot APIs.
	 *
	 * @param amount
	 * 要设置在物品对象 - {@link ItemStack} 中的这个方块的数量。
	 *
	 * Number of instances of this block to place in the item
	 * stack.
	 *
	 * @param withData
	 * 是否包括物品对象的附加数据。
	 *
	 * Whether additional data facets of the item stack are
	 * included.
	 *
	 * @returns
	 * 一个带有指定数量和数据的物品对象。
	 * 若方块类型不兼容，则返回 undefined。
	 *
	 * An itemStack with the specified amount of items and data.
	 * Returns undefined if block type is incompatible.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;

	/**
	 * @beta
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getMapColor(): RGBA;

	/**
	 * @remarks
	 * 返回该方块的净红石能量强度。
	 * 考虑了所有输入和输出后的总红石能量强度。
	 * 表示了一个方块与周围环境中所有红石元件的相互作用后的红石能量状态。
	 *
	 * Returns the net redstone power of this block.
	 *
	 * @returns
	 * 若这个方块不适用红石能量，返回 undefined。
	 *
	 * Returns undefined if redstone power is not applicable to
	 * this block.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getRedstonePower(): number | undefined;

	/**
	 * @remarks
	 * 返回方块被设置的标签的列表。
	 *
	 * Returns a set of tags for a block.
	 *
	 * @returns
	 * 方块拥有的标签列表。
	 *
	 * The list of tags that the block has.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getTags(): string[];

	/**
	 * @remarks
	 * 检查该方块的 {@link BlockPermutation} 是否具有特定的标签。
	 *
	 * Checks to see if the permutation of this block has a
	 * specific tag.
	 *
	 * @param tag
	 * 要检查的标签。
	 *
	 * Tag to check for.
	 *
	 * @returns
	 * 若该方块的 {@link BlockPermutation} 具有该标签，则返回 `true`，否则返回 `false`。
	 *
	 * Returns `true` if the permutation of this block has the tag,
	 * else `false`.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 *
	 * @seeExample checkBlockTags.ts
	 */
	hasTag(tag: string): boolean;

	/**
	 * @beta
	 * @remarks
	 * 返回该方块是否阻止液体流动。
	 *
	 * Returns whether this block stops liquid from flowing.
	 *
	 * @param liquidType
	 * 此函数应被调用的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 *
	 * @returns
	 * 是否阻止液体流动。
	 *
	 * Whether this block stops liquid from flowing.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	isLiquidBlocking(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 若对该方块的引用仍然有效，则返回 `true`（例如，若方块未加载，对该方块的引用将不再有效）。
	 *
	 * Returns true if this reference to a block is still valid
	 * (for example, if the block is unloaded, references to that
	 * block will no longer be valid.)
	 *
	 * @returns
	 * 若这个方块对象仍然存在且有效，则返回 `true`。
	 *
	 * True if this block object is still working and valid.
	 */
	isValid(): boolean;
	/**
	 * @beta
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;
	/**
	 * @beta
	 * @remarks
	 * 表示当液体接触此方块时，该方块是否会被移除并掉落对应的物品。
	 *
	 * Returns whether this block is removed and spawns its item
	 * when touched by liquid.
	 *
	 * @param liquidType
	 * 要调用此函数的液体类型。
	 * 
	 * The type of liquid this function should be called for.
	 
	 * @returns
	 * 表示当液体接触此方块时，该方块是否会被移除并掉落对应的物品。
	 * 
	 * Whether this block is removed and spawns its item when
	 * touched by liquid.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 测试此方块是否符合特定条件。
	 *
	 * Tests whether this block matches a specific criteria.
	 *
	 * @param blockName
	 * 要与此 API 匹配的方块类型标识符。
	 *
	 * Block type identifier to match this API against.
	 * @param states
	 * 可选的一组方块状态，用于测试此方块。
	 *
	 * Optional set of block states to test this block against.
	 * @returns
	 * 若此方块符合指定条件，则返回 true。
	 *
	 * Returns true if the block matches the specified criteria.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
	/**
	 * @remarks
	 * 返回位于该方块北侧（Z轴负方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the north of this block
	 * (negative in the Z direction).
	 *
	 * @param steps
	 * 在返回之前，向北移动的步数。
	 *
	 * Number of steps to the north to step before returning.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	north(steps?: number): Block | undefined;
	/**
	 * @remarks
	 * 返回一个相对于当前方块的偏移向量位置的方块。
	 *
	 * @param offset
	 * 偏移向量。例如，偏移量为 0, 1, 0 将返回当前方块
	 * 上方的方块。
	 * @returns
	 * 指定偏移位置的方块，若无法获取该方块（例如，
	 * 该方块及其所在的区块尚未加载），则返回 undefined。
	 * @throws 此函数可能会抛出错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	offset(offset: Vector3): Block | undefined;
	/**
	 * @remarks
	 * 在维度中将方块设置为{@link BlockPermutation}的状态。
	 *
	 * Sets the block in the dimension to the state of the
	 * permutation.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param permutation
	 * 包含方块一组属性状态的{@link BlockPermutation}。
	 *
	 * Permutation that contains a set of property states for the
	 * Block.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setPermutation(permutation: BlockPermutation): void;
	/**
	 * @remarks
	 * 设置方块的类型。
	 *
	 * Sets the type of block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param blockType
	 * 要应用的方块类型的标识符或方块类型，
	 * 例如，`minecraft:powered_repeater`。
	 *
	 * Identifier of the type of block to apply - for example,
	 * minecraft:powered_repeater.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setType(blockType: BlockType | string): void;
	/**
	 * @rc
	 * @remarks
	 * Sets whether this block has a water logged state - for
	 * example, whether stairs are submerged within water.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param isWaterlogged
	 * true if the block should have water within it.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setWaterlogged(isWaterlogged: boolean): void;
	/**
	 * @remarks
	 * 返回位于该方块南侧（Z轴正方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the south of this block
	 * (positive in the Z direction).
	 *
	 * @param steps
	 * 在返回之前，向南移动的步数。
	 *
	 * Number of steps to the south to step before returning.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	south(steps?: number): Block | undefined;
	/**
	 * @beta
	 * @remarks
	 * 首先检查放置是否有效，
	 * 如何尝试在维度中将方块设置为{@link BlockPermutation}的状态，
	 *
	 *
	 * Tries to set the block in the dimension to the state of the
	 * permutation by first checking if the placement is valid.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param permutation
	 * 包含一组方块属性状态的{@link BlockPermutation}。
	 *
	 * Permutation that contains a set of property states for the
	 * Block.
	 * @returns
	 * 若成功设置了方块的{@link BlockPermutation}，
	 * 则返回 `true`，否则返回 `false`。
	 *
	 * Returns `true` if the block permutation data was
	 * successfully set, else `false`.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	trySetPermutation(permutation: BlockPermutation): boolean;
	/**
	 * @remarks
	 * 返回位于该方块西侧（X轴负方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the west of this block
	 * (negative in the X direction).
	 *
	 * @param steps
	 * 在返回之前，向西移动的步数。
	 *
	 * Number of steps to the west to step before returning.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	west(steps?: number): Block | undefined;
}

/**
 * 与方块关联的组件的基本类型。
 * 
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 此组件所属的方块实例。
     * 
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}

/**
 * 表示实体掉落到特定方块上的信息。
 *
 * Contains information regarding an entity falling onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 掉落到方块上的实体。
	 *
	 * The entity that fell onto the block.
	 *
	 */
	readonly entity?: Entity;
	/**
	 * @remarks
	 * 实体掉落到该方块的距离。
	 *
	 * The distance that the entity fell onto this block with.
	 *
	 */
	readonly fallDistance: number;
}

/**
 * 描述了放置的特定方块的信息。
 *
 * Contains information regarding a specific block that was
 * placed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 先前在此位置被替换的方块。
	 *
	 * Previous block at this location that was replaced.
	 *
	 */
	readonly previousBlock: BlockPermutation;
}

/**
 * 描述了有关特定方块被破坏的信息。
 *
 * Contains information regarding a specific block being
 * destroyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 返回此方块在被破坏之前的排列信息。
	 *
	 * Returns permutation information about this block before it
	 * was destroyed.
	 *
	 */
	readonly destroyedBlockPermutation: BlockPermutation;
	/**
	 * @remarks
	 * 破坏此方块的玩家。
	 *
	 * The player that destroyed this block.
	 *
	 */
	readonly player?: Player;
}

/**
 * 包含有关特定方块被交互的信息。
 *
 * Contains information regarding a specific block being
 * interacted with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 被交互的方块面。
	 *
	 * The block face that was interacted with.
	 *
	 */
	readonly face: Direction;
	/**
	 * @remarks
	 * 相对于玩家交互的方块的西北下角的位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block that the player interacted with.
	 *
	 */
	readonly faceLocation?: Vector3;
	/**
	 * @remarks
	 * 交互此方块的玩家。
	 *
	 * The player that interacted with this block.
	 *
	 */
	readonly player?: Player;
}

/**
 * 表示玩家放置方块前的事件信息。
 *
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示取消放置方块事件。
	 *
	 * If set to true, cancels the block place event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 表示被放置的方块面。
	 *
	 * The block face that was placed onto.
	 *
	 */
	readonly face: Direction;
	/**
	 * @remarks
	 * 表示若事件未被取消，将要放置的方块组合。若设置为不同的方块组合，则将放置该组合。
	 *
	 * The block permutation that will be placed if the event is
	 * not cancelled. If set to a different block permutation, that
	 * permutation will be placed instead.
	 *
	 */
	permutationToPlace: BlockPermutation;
	/**
	 * @remarks
	 * 表示正在放置该方块的玩家。
	 *
	 * The player that is placing this block.
	 *
	 */
	readonly player?: Player;
}

/**
 * 描述了关于特定方块随机刻变化的信息。
 *
 * Contains information regarding a specific block randomly
 * ticking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRandomTickEvent extends BlockEvent {
	private constructor();
}

export class BlockComponentRegistry {
	private constructor();
	/**
	 * @remarks
	 *  此函数可在早期模式下被执行。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link BlockCustomComponentAlreadyRegisteredError}
	 *
	 * {@link BlockCustomComponentReloadNewComponentError}
	 *
	 * {@link BlockCustomComponentReloadNewEventError}
	 *
	 * {@link BlockCustomComponentReloadVersionError}
	 *
	 * {@link CustomComponentInvalidRegistryError}
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link NamespaceNameError}
	 */
	registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

/**
 * 描述了实体从特定方块上离开的信息。
 *
 * Contains information regarding an entity stepping off a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示从方块上离开的实体。
	 *
	 * The entity that stepped off the block.
	 *
	 */
	readonly entity?: Entity;
}

/**
 * 描述了实体踩在特定方块上的信息。
 *
 * Contains information regarding an entity stepping onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示踩在该方块上的实体。
	 *
	 * The entity that stepped on the block.
	 *
	 */
	readonly entity?: Entity;
}

/**
 * 描述了一个特定方块的Tick事件。
 *
 * Contains information regarding a specific block ticking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentTickEvent extends BlockEvent {
	private constructor();
}

/**
 * 描述了影响特定方块的事件的信息。
 *
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 此事件影响的方块。
	 *
	 * Block impacted by this event.
	 *
	 */
	readonly block: Block;
	/**
	 * @remarks
	 * 包含此事件相关方块的所在维度。
	 *
	 * Dimension that contains the block that is the subject of
	 * this event.
	 *
	 */
	readonly dimension: Dimension;
}

/**
 * 描述了特定方块发生爆炸的相关信息。
 *
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示发生爆炸的方块的描述。
	 *
	 * Description of the block that has exploded.
	 *
	 */
	readonly explodedBlockPermutation: BlockPermutation;
	/**
	 * @remarks
	 * 爆炸的可选来源。
	 *
	 * Optional source of the explosion.
	 *
	 */
	readonly source?: Entity;
}

/**
 * 管理与爆炸发生时的回调函数，
 * 当爆炸影响到单个方块时触发。
 *
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当爆炸发生时，
	 * 该回调函数会在爆炸影响到单个方块时被调用。
	 *
	 * Adds a callback that will be called when an explosion
	 * occurs, as it impacts individual blocks.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其在爆炸发生时
	 * 不再被调用。
	 *
	 * Removes a callback from being called when an explosion
	 * occurs, as it impacts individual blocks.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}

/**
 * 表示世界中方块的流体容器。像炼药锅这样的方块。
 *
 * Represents the fluid container of a block in the world. Used
 * with blocks like cauldrons.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示流体容器的相对填充水平。
	 *
	 * Relative fill level of the fluid container.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	fillLevel: number;
	/**
	 * @remarks
	 * 表示容器中流体的自定义颜色。
	 *
	 * Custom color of the fluid in the container.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	fluidColor: RGBA;
	static readonly componentId = 'minecraft:fluidContainer';
	/**
	 * @remarks
	 * 向流体中添加染料。染料颜色与任何现有的自定义颜色结合。
	 *
	 * Adds a dye to the fluid. The dye color is combined with any
	 * existing custom color.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	addDye(dye: ItemType): void;
	/**
	 * @remarks
	 * 获取容器中当前的流体类型。
	 *
	 * Gets the current fluid type in the container.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getFluidType(): FluidType;
	/**
	 * @remarks
	 * 设置容器中当前的流体类型。
	 *
	 * Sets the current fluid type in the container.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	setFluidType(fluidType: FluidType): void;
	/**
	 * @remarks
	 * 在容器中设置药水物品。将容器的流体类型更改为药水。
	 *
	 * Sets a potion item in the container. Changes the container's
	 * fluid type to potion.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	setPotion(itemStack: ItemStack): void;
}

/**
 * 表示方块在世界中的库存。用于像箱子这样的方块。
 *
 * * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 *
 * @seeExample placeItemsInChest.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示包含一个 {@link ItemStack} 的容器。
	 *
	 * @throws 使用该属性时可能会抛出异常。
	 */
	readonly container?: Container;
	static readonly componentId = 'minecraft:inventory';
}

/**
 * BlockLocationIterator 返回当前迭代的方块体积内的下一个方块位置。
 * BlockLocationIterator 用于抽象出其来源的方块体积的形状
 * （因此它可以表示构成矩形、立方体、球体、直线和复杂形状的所有方块位置）。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有规定，BlockLocationIterator 将按照以下顺序遍历三维空间：
 * 先按 X 轴递增，然后按 Z 轴递增，最后按 Y 轴递增。
 * （实际上是沿着 XZ 平面逐步移动，当该平面中的所有位置都遍历完后，
 * 再增加 Y 坐标以进入下一个 XZ 切片）
 *
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
	private constructor();
	/**
	 * @remarks
	 * 此函数无法在只读模式下调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	[Symbol.iterator](): Iterator<Vector3>;
	/**
	 * @beta
	 * @remarks
	 * 检查底层的方块体积是否已失效。
	 * 若从创建迭代器到迭代期间，方块体积被修改，将返回 `false`，
	 * 否则返回 `true`。
	 *
	 * Checks if the underlining block volume has been invalidated.
	 * Will return false if the block volume was modified between
	 * creating the iterator and iterating it, and true otherwise.
	 *
	 * @throws 此函数可能抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 */
	isValid(): boolean;
	/**
	 * @remarks
	 * 此函数无法在只读模式下调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	next(): IteratorResult<Vector3>;
}

/**
 * @beta
 * 表示方块在地图上显示的颜色。
 *
 * Represents the color of a block when displayed on a map.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
	private constructor();
	static readonly componentId = 'minecraft:map_color';
	/**
	 * @remarks
	 * 表示该方块定义的基础地图颜色。
	 *
	 * Base map color defined for that block.
	 *
	 * 此函数在只读模式下无法调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	color(): RGBA;
	/**
	 * @remarks
	 * 返回在给定位置下基础颜色与计算得出的色调的乘积。
	 *
	 * Returns the base color multiplied to the evaluated tint at
	 * the given position.
	 *
	 * 此函数在只读模式下无法调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	tintedColor(): RGBA;
	/**
	 * @remarks
	 * 表示应用于颜色的色调类型。
	 *
	 * Type of tint applied to the color.
	 *
	 * 此函数在只读模式下无法调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	tintMethod(): TintMethod;
}

/**
 * 表示一个由 {@link BlockType} 类型和属性（有时也称为方块状态）组成的组合，
 * 用于描述一个方块（但不属于特定的 {@link Block}）。
 * @seeExample addTranslatedSign.ts 604a92ba
 *
 * * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export class BlockPermutation {
	private constructor();
	/**
	 * @remarks
	 * 表示当前组合的 {@link BlockType}。
	 *
	 * The {@link BlockType} that the permutation has.
	 *
	 */
	readonly 'type': BlockType;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块在被液体接触时是否会被移除。
	 *
	 * Returns whether this block is removed when touched by
	 * liquid.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块在被液体接触时是否会被移除。
	 *
	 * Whether this block is removed when touched by liquid.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块是否可以覆盖液体，例如是否可以被水浸透。
	 *
	 * Returns whether this block can have a liquid placed over it,
	 * i.e. be waterlogged.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块是否可以覆盖液体。
	 *
	 * Whether this block can have a liquid placed over it.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	canContainLiquid(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 返回与此方块关联的所有可用的方块状态。
	 *
	 * Returns all available block states associated with this
	 * block.
	 *
	 * @returns
	 * 返回此组合拥有的所有方块状态的列表。
	 *
	 * Returns the list of all of the block states that the
	 * permutation has.
	 */
	getAllStates(): Record<string, boolean | number | string>;
	/**
	 * @remarks
	 * 基于此方块组合检索一个原型物品堆，可用于物品容器/容器槽 API。
	 *
	 * Retrieves a prototype item stack based on this block
	 * permutation that can be used with item
	 * Container/ContainerSlot APIs.
	 *
	 * @param amount
	 * 放置在原型物品堆中的此方块实例的数量。
	 *
	 * Number of instances of this block to place in the prototype
	 * item stack.
	 */
	getItemStack(amount?: number): ItemStack | undefined;
	/**
	 * @remarks
	 * 获取此组合的某个状态。
	 *
	 * Gets a state for the permutation.
	 *
	 * @param stateName
	 * 要获取其值的方块状态的名称。
	 *
	 * Name of the block state who's value is to be returned.
	 * @returns
	 * 若此组合拥有该状态则返回状态值，否则返回 `undefined`。
	 *
	 * Returns the state if the permutation has it, else
	 * `undefined`.
	 */
	getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
		stateName: T,
	): minecraftvanilladata.BlockStateSuperset[T] | undefined;
	/**
	 * @remarks
	 * 创建此组合的副本。
	 *
	 * Creates a copy of the permutation.
	 *
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 检查此组合是否具有特定的标签。
	 *
	 * Checks to see if the permutation has a specific tag.
	 *
	 * @returns
	 * 若此组合具有该标签则返回 `true`，否则返回 `false`。
	 *
	 * Returns `true` if the permutation has the tag, else `false`.
	 * @seeExample checkBlockTags.ts
	 */
	hasTag(tag: string): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块是否阻止液体流动。
	 *
	 * Returns whether this block stops liquid from flowing.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块是否阻止液体流动。
	 *
	 * Whether this block stops liquid from flowing.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	isLiquidBlocking(liquidType: LiquidType): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块在被液体接触时是否会被移除并生成其物品。
	 *
	 * Returns whether this block is removed and spawns its item
	 * when touched by liquid.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块在被液体接触时是否会被移除并生成其物品。
	 *
	 * Whether this block is removed and spawns its item when
	 * touched by liquid.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 返回一个布尔值，指示指定的组合是否与此组合匹配。
	 * 若未指定状态，则匹配会更广泛地检查类型集合。
	 *
	 * Returns a boolean whether a specified permutation matches
	 * this permutation. If states is not specified, matches checks
	 * against the set of types more broadly.
	 *
	 * @param blockName
	 * 一个可选的状态集合，用于进行比较。
	 * An optional set of states to compare against.
	 */
	matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
		blockName: T,
		states?: BlockStateArg<T>,
	): boolean;
	/**
	 * @remarks
	 * 返回具有特定属性设置的派生 BlockPermutation。
	 *
	 * Returns a derived BlockPermutation with a specific property
	 * set.
	 *
	 * @param name
	 * 方块属性的标识符。
	 * Identifier of the block property.
	 * @param value
	 * 方块属性的值。
	 * Value of the block property.
	 * @throws This function can throw errors.
	 */
	withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
		name: T,
		value: minecraftvanilladata.BlockStateSuperset[T],
	): BlockPermutation;
	/**
	 * @remarks
	 * 给定一个类型标识符和一个可选的属性集合，
	 * 将返回一个可在其他方块 API 中使用的 BlockPermutation(方块参数) 对象（例如，block.setPermutation）。
	 *
	 * Given a type identifier and an optional set of properties,
	 * will return a BlockPermutation object that is usable in
	 * other block APIs (e.g., block.setPermutation)
	 *
	 * @param blockName
	 * 要检查的方块的标识符。
	 *
	 * Identifier of the block to check.
	 * @throws This function can throw errors.
	 * @seeExample addBlockColorCube.ts
	 */
	static resolve<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
		blockName: T,
		states?: BlockStateArg<T>,
	): BlockPermutation;
}

/**
 * 当存在时，此方块具有类似活塞的行为。表示
 * 发现方块活塞状态的附加属性。
 *
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 活塞是否处于扩展或收缩的过程中。
	 *
	 * Whether the piston is in the process of expanding or
	 * retracting.
	 *
	 * @throws This property can throw when used.
	 * 此属性在使用时可能会抛出异常。
	 */
	readonly isMoving: boolean;
	/**
	 * @remarks
	 * 活塞的当前状态。
	 *
	 * The current state of the piston.
	 *
	 * @throws This property can throw when used.
	 * 此属性在使用时可能会抛出异常。
	 */
	readonly state: BlockPistonState;
	static readonly componentId = 'minecraft:piston';
	/**
	 * @remarks
	 * 获取与此活塞连接的一组方块。
	 *
	 * Retrieves a set of blocks that this piston is connected
	 * with.
	 *
	 * @throws This function can throw errors.
	 * 此函数可能会抛出错误。
	 */
	getAttachedBlocks(): Block[];
	/**
	 * @remarks
	 * 获取与此活塞连接的一组方块位置。
	 *
	 * Retrieves a set of block locations that this piston is
	 * connected with.
	 *
	 * @throws This function can throw errors.
	 * 此函数可能会抛出错误。
	 */
	getAttachedBlocksLocations(): Vector3[];
}

/**
 * 表示一个可以播放唱片的方块。
 *
 * Represents a block that can play a record.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
	private constructor();
	static readonly componentId = 'minecraft:record_player';
	/**
	 * @remarks
	 * 弹出当前设置的唱片。
	 *
	 * Ejects the currently set record of this record-playing
	 * block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	ejectRecord(): void;
	/**
	 * @remarks
	 * 获取当前设置在此唱片播放方块上的唱片。
	 *
	 * Gets the currently set record of this record-playing block.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getRecord(): ItemStack | undefined;
	/**
	 * @remarks
	 * 若唱片播放方块当前正在播放唱片，则返回 `true`。
	 *
	 * Returns true if the record-playing block is currently
	 * playing a record.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	isPlaying(): boolean;
	/**
	 * @remarks
	 * 暂停当前正在播放的唱片。
	 *
	 * Pauses the currently playing record of this record-playing
	 * block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	pauseRecord(): void;
	/**
	 * @remarks
	 * 播放当前设置在此唱片播放方块上的唱片。
	 *
	 * Plays the currently set record of this record-playing block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	playRecord(): void;
	/**
	 * @remarks
	 * 根据物品类型设置并播放一张唱片。
	 *
	 * Sets and plays a record based on an item type.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

/**
 * 表示一个可以显示文字的方块。
 *
 * Represents a block that can display text on it.
 * @seeExample addSign.ts
 * @seeExample addTwoSidedSign.ts
 * @seeExample updateSignText.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示玩家是否可以编辑告示牌。若告示牌上使用了蜜脾或调用了 `setWaxed` 方法，则玩家无法编辑。
	 *
	 * Whether or not players can edit the sign. This happens if a
	 * sign has had a honeycomb used on it or `setWaxed` was called
	 * on the sign.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isWaxed: boolean;
	static readonly componentId = 'minecraft:sign';
	/**
	 * @remarks
	 * 若使用 `setText` 方法设置了 RawMessage 或 RawText 对象，则返回告示牌的 RawText，否则返回 undefined。
	 *
	 * Returns the RawText of the sign if `setText` was called with
	 * a RawMessage or a RawText object, otherwise returns
	 * undefined.
	 *
	 * @param side
	 * 要读取消息的告示牌面。若未提供，则返回告示牌正面的消息。
	 *
	 * The side of the sign to read the message from. If not
	 * provided, this will return the message from the front side
	 * of the sign.
	 * @throws This function can throw errors.
	 */
	getRawText(side?: SignSide): RawText | undefined;
	/**
	 * @remarks
	 * 若使用 `setText` 方法设置了字符串，则返回告示牌的文本，否则返回 undefined。
	 *
	 * Returns the text of the sign if `setText` was called with a
	 * string, otherwise returns undefined.
	 *
	 * @param side
	 * 要读取消息的告示牌面。若未提供，则返回告示牌正面的消息。
	 *
	 * The side of the sign to read the message from. If not
	 * provided, this will return the message from the front side
	 * of the sign.
	 * @throws This function can throw errors.
	 */
	getText(side?: SignSide): string | undefined;
	/**
	 * @remarks
	 * 获取告示牌文字上的染料颜色，若未染色则返回 undefined。
	 *
	 * Gets the dye that is on the text or undefined if the sign
	 * has not been dyed.
	 *
	 * @param side
	 * 要读取染料的告示牌面。若未提供，则返回告示牌正面的染料。
	 *
	 * The side of the sign to read the dye from. If not provided,
	 * this will return the dye on the front side of the sign.
	 * @throws This function can throw errors.
	 */
	getTextDyeColor(side?: SignSide): DyeColor | undefined;
	/**
	 * @remarks
	 * 设置告示牌组件的文本。
	 *
	 * Sets the text of the sign component.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param message
	 * 要设置在告示牌上的消息。若设置为字符串，则可以通过调用 `getText` 来读取该字符串。若设置为 RawMessage，则调用 `getRawText` 会返回一个 RawText。若设置为 RawText，则调用 `getRawText` 会返回传入的相同对象。
	 *
	 * The message to set on the sign. If set to a string, then
	 * call `getText` to read that string. If set to a RawMessage,
	 * then calling `getRawText` will return a RawText. If set to a
	 * RawText, then calling `getRawText` will return the same
	 * object that was passed in.
	 * @param side
	 * 要设置消息的告示牌面。若未提供，则消息将设置在告示牌正面。
	 *
	 * The side of the sign the message will be set on. If not
	 * provided, the message will be set on the front side of the
	 * sign.
	 * @throws
	 * 若提供的消息长度超过 512 个字符，则抛出错误。
	 *
	 * Throws if the provided message is greater than 512
	 * characters in length.
	 */
	setText(message: RawMessage | RawText | string, side?: SignSide): void;
	/**
	 * @remarks
	 * 设置文字的染料颜色。
	 *
	 * Sets the dye color of the text.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param color
	 * 要应用于告示牌的染料颜色，或者 undefined 以清除告示牌上的染料。
	 *
	 * The dye color to apply to the sign or undefined to clear the
	 * dye on the sign.
	 * @param side
	 * 要设置颜色的告示牌面。若未提供，则颜色将设置在告示牌正面。
	 *
	 * The side of the sign the color will be set on. If not
	 * provided, the color will be set on the front side of the
	 * sign.
	 * @throws This function can throw errors.
	 */
	setTextDyeColor(color?: DyeColor, side?: SignSide): void;
	/**
	 * @remarks
	 * 使玩家无法编辑此告示牌。
	 *
	 * Makes it so players cannot edit this sign.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	setWaxed(waxed: boolean): void;
}

/**
 * 枚举所有的 {@link BlockStateType}。
 *
 * Enumerates all {@link BlockStateType}s.
 */
export class BlockStates {
	private constructor();
	/**
	 * @remarks
	 * 获取特定的方块状态实例。
	 *
	 * Retrieves a specific block state instance.
	 *
	 * @returns
	 * 若找到则返回 {@link Block} 状态实例。若未找到该方块状态实例，则返回 undefined。
	 *
	 * Returns the {@link Block} state instance if it is found. If
	 * the block state instance is not found returns undefined.
	 */
	static get(stateName: string): BlockStateType | undefined;
	/**
	 * @remarks
	 * 获取所有可用的方块状态集合。
	 *
	 * Retrieves a set of all available block states.
	 *
	 */
	static getAll(): BlockStateType[];
}

/**
 * 表示方块实例的一个可配置状态值。
 * 例如，楼梯的朝向可以作为一个方块状态来访问。
 *
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 */
export class BlockStateType {
	private constructor();
	/**
	 * @remarks
	 * 方块属性的标识符。
	 *
	 * Identifier of the block property.
	 *
	 */
	readonly id: string;
	/**
	 * @remarks
	 * 方块属性的一组有效值。
	 *
	 * A set of valid values for the block property.
	 *
	 */
	readonly validValues: (boolean | number | string)[];
}

/**
 * 表示方块的类型（或模板）。不包含除表示方块类型以外的任何排列数据（状态）。
 * 此类型自版本 1.17.10.21 引入。
 *
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
	private constructor();
	/**
	 * @remarks
	 * 方块类型名称，例如 `minecraft:acacia_stairs`。
	 *
	 * Block type name - for example, `minecraft:acacia_stairs`.
	 *
	 */
	readonly id: string;
}

/**
 * 表示当前世界可用的 Minecraft 方块类型目录。
 *
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 */
export class BlockTypes {
	private constructor();
	/**
	 * @remarks
	 * 返回指定标识符对应的 BlockType 对象。
	 *
	 * Returns a BlockType object for the specified identifier.
	 *
	 * @param typeName
	 * 方块类型的标识符。应遵循 namespace:id 模式，例如 minecraft:dirt。
	 *
	 * Identifier of the block type. Should follow a namespace:id
	 * pattern, such as minecraft:dirt.
	 * @returns
	 * BlockType 对象，若当前世界中该方块类型不可用，则返回 undefined。
	 *
	 * BlockType object, or undefined if the block type is not
	 * available within this world.
	 */
	static get(typeName: string): BlockType | undefined;
	/**
	 * @remarks
	 * 返回所有可用方块类型的集合。
	 *
	 * Returns a collection of all available block types.
	 *
	 */
	static getAll(): BlockType[];
}

/**
 * BlockVolume 是一个简单的接口，表示在世界方块位置中具有给定大小（三维方块）的矩形区域。
 * 注意，这些并不等同于“最小值”和“最大值”，因为向量的各个分量顺序并不固定。
 * 此外，这些向量位置不能与 BlockLocation 互换使用。
 * 若需要将此体积表示为 BlockLocation 的范围，可以使用 getBoundingBox 工具函数。
 * 此体积类会保持初始设置的角索引顺序。例如，当你在编辑器中分配每个角并移动角的位置时
 * （可能会颠倒边界的最小值/最大值关系），原本选择的左上角可能会变成右下角。
 * 手动编辑这些体积时，需要在编辑时保持角的标识 - BlockVolume 的工具函数会处理这一点。
 *
 * 需要注意的是，这里测量的是方块的大小（起点到终点）。
 * 一个普通的 AABB (0,0,0) 到 (0,0,0) 传统上大小为 (0,0,0)。
 * 但因为我们测量的是方块，BlockVolume 的大小或跨度实际上为 (1,1,1)。
 *
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
	/**
	 * @remarks
	 * 表示一个三维矩形中某个角的世界方块位置。
	 *
	 * A world block location that represents a corner in a 3D
	 * rectangle
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	'from': Vector3;
	/**
	 * @remarks
	 * 表示一个三维矩形中与另一角相对的世界方块位置。
	 *
	 * A world block location that represents the opposite corner
	 * in a 3D rectangle
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	to: Vector3;
	constructor(from: Vector3, to: Vector3);
	/**
	 * @remarks
	 * 检测给定位置是否直接与 BlockVolume 的外表面相邻。
	 *
	 * Check to see if the given location is directly adjacent to
	 * the outer surface of a BlockVolume.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param pos
	 * 要测试的世界方块位置。
	 *
	 * The world block location to test
	 * @returns
	 * 若位置在内部或距离超过 0 个方块，函数将返回 false。
	 * 若位置直接接触到 BlockVolume 的外表面，函数将返回 true。
	 *
	 * If the location is either inside or more than 0 blocks away,
	 * the function will return false.
	 * If the location is directly contacting the outer surface of
	 * the BlockVolume, the function will return true.
	 */
	doesLocationTouchFaces(pos: Vector3): boolean;
	/**
	 * @remarks
	 * 检测两个方块体积是否直接相邻并且两个面接触。
	 *
	 * Check to see if a two block volumes are directly adjacent
	 * and two faces touch.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param other
	 * 要测试的体积。
	 *
	 * The volume to test
	 * @returns
	 * 若两个方块体积的外表面在任何点相接触并直接相邻，返回 true。
	 *
	 * If the outer faces of both block volumes touch and are
	 * directly adjacent at any point, return true.
	 */
	doesVolumeTouchFaces(other: BlockVolume): boolean;
	/**
	 * @remarks
	 * 返回一个枚举值，表示两个 BlockVolume 对象之间的交集。
	 *
	 * Return an enumeration which represents the intersection
	 * between two BlockVolume objects
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	intersects(other: BlockVolume): BlockVolumeIntersection;
}

/**
 * BlockVolume 的基础类型。
 *
 * Base type for BlockVolumes.
 */
export class BlockVolumeBase {
	private constructor();
	/**
	 * @remarks
	 * 获取一个 {@link BlockLocationIterator}(方块位置迭代器)，表示该体积内所有方块的世界位置。
	 *
	 * Fetch a {@link BlockLocationIterator} that represents all of
	 * the block world locations within the specified volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getBlockLocationIterator(): BlockLocationIterator;
	/**
	 * @beta
	 * @remarks
	 * 返回一个 {@link BoundingBox} 对象，表示该体积经过验证的最小和最大坐标。
	 *
	 * Return a {@link BoundingBox} object which represents the
	 * validated min and max coordinates of the volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getBoundingBox(): BoundingBox;
	/**
	 * @remarks
	 * 返回 BlockVolume 的容量（体积）（宽*深*高）。
	 *
	 * Return the capacity (volume) of the BlockVolume (W*D*H)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getCapacity(): number;
	/**
	 * @remarks
	 * 获取体积的最大角位置（保证 >= 最小值）。
	 *
	 * Get the largest corner position of the volume (guaranteed to
	 * be >= min)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getMax(): Vector3;
	/**
	 * @remarks
	 * 获取体积的最小角位置（保证 <= 最大值）。
	 *
	 * Get the smallest corner position of the volume (guaranteed
	 * to be <= max)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getMin(): Vector3;
	/**
	 * @remarks
	 * 获取一个 {@link Vector3} 对象，其中每个分量表示沿该轴的方块数量。
	 *
	 * Get a {@link Vector3} object where each component represents
	 * the number of blocks along that axis
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getSpan(): Vector3;
	/**
	 * @remarks
	 * 检查给定的世界方块位置是否在 BlockVolume 内。
	 *
	 * Check to see if a given world block location is inside a
	 * BlockVolume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isInside(location: Vector3): boolean;
	/**
	 * @remarks
	 * 按指定的量移动 BlockVolume。
	 *
	 * Move a BlockVolume by a specified amount
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param delta
	 * 移动的方块数量。
	 *
	 * Amount of blocks to move by
	 */
	translate(delta: Vector3): void;
}

/**
 * @beta
 * Bounding Box Utils 是一个实用工具类，提供了许多用于创建和操作 {@link BoundingBox} 对象的实用功能。
 *
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BoundingBox} objects
 */
export class BoundingBoxUtils {
	private constructor();
	/**
	 * @remarks
	 * 创建一个已验证的 {@link BoundingBox} 实例，其中最小值和最大值的组件保证满足 (min <= max)。
	 *
	 * Create a validated instance of a {@link BoundingBox} where
	 * the min and max components are guaranteed to be (min <= max)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param min
	 * 一个角落的世界坐标位置
	 *
	 * A corner world location
	 * @param max
	 * 与之对角相对的世界坐标位置
	 *
	 * A corner world location diametrically opposite
	 */
	static createValid(min: Vector3, max: Vector3): BoundingBox;
	/**
	 * @remarks
	 * 按每个轴上的给定量扩展一个 {@link BoundingBox}。
	 * 大小可以为负数以执行收缩。
	 * 注意：若收缩大小大于跨度，则角点可能会被反转，但最小值/最大值的关系将保持正确。
	 *
	 * Expand a {@link BoundingBox} by a given amount along each
	 * axis.
	 * Sizes can be negative to perform contraction.
	 * Note: corners can be inverted if the contraction size is
	 * greater than the span, but the min/max relationship will
	 * remain correct
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 返回一个新的 {@link BoundingBox} 对象，表示更改后的结果。
	 *
	 * Return a new {@link BoundingBox} object representing the
	 * changes
	 */
	static dilate(box: BoundingBox, size: Vector3): BoundingBox;
	/**
	 * @remarks
	 * 检查两个 {@link BoundingBox} 对象是否完全相同。
	 *
	 * Check if two {@link BoundingBox} objects are identical
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static equals(box: BoundingBox, other: BoundingBox): boolean;
	/**
	 * @remarks
	 * 扩展初始边界框对象的范围以包含第二个边界框参数。
	 * 结果是一个 {@link BoundingBox} 对象，该对象完全包围两个边界框。
	 *
	 * Expand the initial box object bounds to include the 2nd box
	 * argument.  The resultant {@link BoundingBox} object will be
	 * a BoundingBox which exactly encompasses the two boxes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 一个新的 {@link BoundingBox} 实例，表示可以包围两者的最小可能边界框。
	 *
	 * A new {@link BoundingBox} instance representing the smallest
	 * possible bounding box which can encompass both
	 */
	static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
	/**
	 * @remarks
	 * 计算给定 {@link BoundingBox} 对象的中心块。
	 *
	 * Calculate the center block of a given {@link BoundingBox}
	 * object.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 注意，{@link BoundingBox} 对象表示整个方块，因此具有奇数边界的边界框的中心点在数学上并不居中。
	 * 例如，一个 BoundingBox( 0,0,0 -> 3,3,3 ) 的中心点为 (1,1,1)，而不是预期的 (1.5, 1.5, 1.5)。
	 *
	 * Note that {@link BoundingBox} objects represent whole
	 * blocks, so the center of boxes which have odd numbered
	 * bounds are not mathematically centered...
	 * i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of
	 * (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
	 */
	static getCenter(box: BoundingBox): Vector3;
	/**
	 * @remarks
	 * 计算表示两个相交的 {@link BoundingBox} 的交集区域的边界框。
	 *
	 * Calculate the BoundingBox which represents the union area of
	 * two intersecting BoundingBoxes
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
	/**
	 * @remarks
	 * 获取边界框每个轴分量的跨度。
	 *
	 * Get the Span of each of the BoundingBox Axis components
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static getSpan(box: BoundingBox): Vector3;
	/**
	 * @remarks
	 * 检查两个边界框对象是否相交。
	 *
	 * Check to see if two BoundingBox objects intersect
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static intersects(box: BoundingBox, other: BoundingBox): boolean;
	/**
	 * @remarks
	 * 检查给定坐标是否在边界框内。
	 *
	 * Check to see if a given coordinate is inside a BoundingBox
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static isInside(box: BoundingBox, pos: Vector3): boolean;
	/**
	 * @remarks
	 * 检查边界框是否有效（即 min <= max）。
	 *
	 * Check to see if a BoundingBox is valid (i.e. (min <= max))
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static isValid(box: BoundingBox): boolean;
	/**
	 * @remarks
	 * 按给定的增量移动一个边界框。
	 *
	 * Move a BoundingBox by a given amount
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 返回一个新的 BoundingBox 对象，表示更改后的结果。
	 *
	 * Return a new BoundingBox object which represents the change
	 */
	static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}

/**
 * 表示按钮按下后相关的更改信息。
 *
 * Contains information related to changes to a button push.
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 可选的触发按钮按下的来源。
	 *
	 * Optional source that triggered the button push.
	 *
	 */
	readonly source: Entity;
}

/**
 * 管理与按钮被按下时相关的回调函数。
 * 
 * Manages callbacks that are connected to when a button is
 * pushed.
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * 添加一个回调函数，当按钮被按下时将会调用该回调函数。
     * 
     * Adds a callback that will be called when a button is pushed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * 移除一个回调函数，使其不会在按钮被按下时调用。
     * 
     * Removes a callback from being called when a button is pushed.
     *
     * 此函数无法在只读模式下调用。
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

/**
 * 包含与指定玩家的活动摄像机相关的方法。
 *
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @beta
     * @remarks
     * 返回摄像机是否可访问和使用。当摄像机所属的玩家已加载并且自身有效时，摄像机被视为有效。
     *
     * Returns whether the Camera is valid to access and use. A
     * Camera is considered valid when the owning Player of the
     * Camera is loaded and valid itself.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 清除指定玩家的活动摄像机。使指定玩家结束任何正在进行的摄像机视角，包括任何平滑的摄像机运动，并返回到正常视角。
     *
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    clear(): void;
	/**
	 * @remarks
	 * 开始应用一个摄像机的淡入淡出过渡效果。淡入淡出过渡效果是一种全屏颜色的渐入、保持、然后渐出的效果。
	 *
	 * Begins a camera fade transition. A fade transition is a
	 * full-screen color that fades-in, holds, and then fades-out.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param fadeCameraOptions
	 * 有关摄像机淡入淡出操作的附加选项。
	 *
	 * Additional options around camera fade operations.
	 * @throws This function can throw errors.
	 */
	fade(fadeCameraOptions?: CameraFadeOptions): void;
	/**
	 * @remarks
	 * 为指定玩家设置当前活动摄像机。
	 *
	 * Sets the current active camera for the specified player.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param cameraPreset
	 * 在 JSON 中定义的摄像机预设文件的标识符。
	 *
	 * Identifier of a camera preset file defined within JSON.
	 * @param setOptions
	 * 摄像机的附加选项。
	 *
	 * Additional options for the camera.
	 * @throws This function can throw errors.
	 */
	setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraDefaultOptions
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
}

/**
 * @beta
 * 玩家发送聊天信息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 正在广播的消息。
	 *
	 * Message that is being broadcast.
	 *
	 */
	readonly message: string;
	/**
	 * @remarks
	 * 发送聊天消息的玩家。
	 *
	 * Player that sent the chat message.
	 *
	 */
	readonly sender: Player;
	/**
	 * @remarks
	 * 将接收到该消息的玩家的可选列表。若定义了该列表，则此消息是直接发送给一个或多个玩家的（即，不是广播消息到全局）。
	 *
	 * Optional list of players that will receive this message. If
	 * defined, this message is directly targeted to one or more
	 * players (i.e., is not broadcast.)
	 *
	 */
	readonly targets?: Player[];
}

/**
 * @beta
 * 管理与聊天消息发送相关的回调。
 *
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个当新聊天消息发送时会被调用的回调。
	 *
	 * Adds a callback that will be called when new chat messages
	 * are sent.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个当新聊天消息发送时会被调用的回调。
	 *
	 * Removes a callback from being called when new chat messages
	 * are sent.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}

/**
 * @beta
 * 玩家发送聊天消息前触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示在 beforeChat 事件处理器中设置为 true ，此消息不会被广播。
	 *
	 * If set to true in a beforeChat event handler, this message
	 * is not broadcast out.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 正在广播的消息。
	 *
	 * Message that is being broadcast.
	 *
	 */
	readonly message: string;
	/**
	 * @remarks
	 * 发送聊天消息的玩家。
	 *
	 * Player that sent the chat message.
	 *
	 */
	readonly sender: Player;
	/**
	 * @remarks
	 * 将接收此消息的玩家的可选列表。若定义了此列表，则此消息将直接发送给一个或多个玩家（即，不会广播到全局）。
	 *
	 * Optional list of players that will receive this message. If
	 * defined, this message is directly targeted to one or more
	 * players (i.e., is not broadcast.)
	 *
	 */
	readonly targets?: Player[];
}

/**
 * @beta
 * 管理在发送聊天消息之前触发的事件的回调。
 *
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在发送新聊天消息之前会被调用的回调函数。
	 *
	 * Adds a callback that will be called before new chat messages
	 * are sent.
	 * 
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个在发送新聊天消息之前会被调用的回调函数。
	 * 
	 * Removes a callback from being called before new chat
     * messages are sent.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}

/**
 * 描述了客户端实例的设备信息。
 *
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
	private constructor();
	/**
	 * @remarks
	 * 设备的最大渲染距离（以区块为单位）。
	 *
	 * The max render distance for the device in chunks.
	 *
	 */
	readonly maxRenderDistance: number;
	/**
	 * @remarks
	 * 设备的平台类型。
	 *
	 * The platform type of the device.
	 *
	 */
	readonly platformType: PlatformType;
}

/**
 * 表示命令执行结果的返回数据。
 * 
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 若命令针对多个实体、方块或物品进行操作，则返回
     * 此命令成功应用的次数。
     * 
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}

/**
 * Base class for downstream Component implementations.
 */
export class Component {
	private constructor();
	/**
	 * @beta
	 * @remarks
	 * 返回组件是否有效。若组件的拥有者有效，并且组件需要的任何
	 * 额外验证也通过，则该组件被认为是有效的。
	 *
	 * Returns whether the component is valid. A component is
	 * considered valid if its owner is valid, in addition to any
	 * addition to any additional validation required by the
	 * component.
	 *
	 */
	readonly isValid: boolean;
	/**
	 * @remarks
	 * 组件的标识符。
	 * Identifier of the component.
	 *
	 */
	readonly typeId: string;
}

/**
 * @beta
 * 表示复合方块体积，它是由多个单独的方块体积定义组成的集合，作为一个集合，定义了一个较大的（有时是不相邻的）不规则形状的体积。
 * 这个类松散地基于CSG（计算实体几何）的概念，允许用户通过构建体积和空隙的堆栈来创建复杂的体积，从而形成一个更大的单一体积。
 * 例如，通常情况下，创建者会通过为每个面创建6个“墙”面来创建一个空心立方体。
 * 使用复合方块体积，创建者可以通过创建一个单一的外部实心立方体，然后在较大的立方体内定义一个单一的“空”立方体来定义一个空心立方体。
 * 类似地，复合方块体积可以表示不规则形状的体积（例如，一棵树由一个树干和许多不一定连续放置的叶子立方体组成）。
 * 添加到复合方块体积中的每个体积（默认情况下）相对于设置的原点（无论是在构造时还是通过某个设置函数）都是相对的。
 * 但是，也可以将绝对性质的体积推送到复合集合中，这些体积不受原点变化的影响。
 *
 * The Compound Block Volume is a collection of individual
 * block volume definitions which, as a collection, define a
 * larger volume of (sometimes non-contiguous) irregular
 * shapes.
 * This class is loosely based on the concept of CSG
 * (Computational Solid Geometry) and allows a user to create
 * complex volumes by building a stack of volumes and voids to
 * make a larger single volume.
 * For example - normally a creator would create a hollow cube
 * by creating 6 "wall" surfaces for each face.
 * With a Compound Block Volume, a creator can define a hollow
 * cube by creating a single outer solid cube, and then
 * defining a further single 'void' cube inside the larger one.
 * Similarly, the Compound Block Volume can represent irregular
 * shaped volumes (e.g. a tree consists of a trunk and lots of
 * leaf cubes which are not necessarily contiguously placed).
 * Each of the volumes added to the CompoundBlockVolume are (by
 * default) relative to the origin set (either at construction
 * or via one of the set functions).
 * However, it is also possible to push volumes to the compound
 * collection which are absolute in nature and are not affected
 * by origin changes.
 */
export class CompoundBlockVolume {
	/**
	 * @remarks
	 * 返回表示堆栈中体积集合的边界矩形的“容量”
	 *
	 * Return the 'capacity' of the bounding rectangle which
	 * represents the collection of volumes in the stack
	 *
	 */
	readonly capacity: number;
	readonly items: CompoundBlockVolumeItem[];
	readonly itemsAbsolute: CompoundBlockVolumeItem[];
	/**
	 * @remarks
	 * 返回体积堆栈中的体积（正和负）的数量
	 *
	 * Return the number of volumes (positive and negative) in the
	 * volume stack
	 *
	 */
	readonly volumeCount: number;
	/**
	 * @remarks
	 * 创建一个CompoundBlockVolume对象
	 *
	 * Create a CompoundBlockVolume object
	 *
	 * @param origin
	 * 一个可选的世界空间原点，用于将复合体积居中。
	 * 若未指定，原点将设置为(0,0,0)
	 *
	 * An optional world space origin on which to center the
	 * compound volume.
	 * If not specified, the origin is set to (0,0,0)
	 */
	constructor(origin?: Vector3);
	/**
	 * @remarks
	 * 清除体积堆栈的内容
	 *
	 * Clear the contents of the volume stack
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	clear(): void;
	/**
	 * @remarks
	 * 获取复合方块体积的方块位置迭代器。此迭代器将允许创建者遍历较大边界区域内的所有选定体积。
	 * 被减法体积覆盖的区域将不包含在迭代器步骤中。
	 * （即，若你将一个立方体推入堆栈，然后在同一位置推入一个减法体积，那么迭代器将跳过初始体积，因为它被认为是负空间）
	 * 请注意，此迭代器返回的方块位置是绝对世界空间（无论推送的复合体积项是绝对的还是相对的）
	 *
	 * Fetch a Block Location Iterator for the Compound Block
	 * Volume.  This iterator will allow a creator to iterate
	 * across all of the selected volumes within the larger
	 * bounding area.
	 * Areas of a volume which have been overridden by a
	 * subtractive volume will not be included in the iterator
	 * step.
	 * (i.e. if you push a cube to the stack, and then push a
	 * subtractive volume to the same location, then the iterator
	 * will step over the initial volume because it is considered
	 * negative space)
	 * Note that the Block Locations returned by this iterator are
	 * in absolute world space (irrespective of whether the
	 * compound volume items pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getBlockLocationIterator(): BlockLocationIterator;
	/**
	 * @remarks
	 * 获取表示堆栈中所有体积的容器的最大边界框
	 * 请注意，返回的边界框在绝对世界空间中表示（无论推送的复合体积项是绝对的还是相对的）
	 *
	 * Get the largest bounding box that represents a container for
	 * all of the volumes on the stack
	 * Note that the bounding box returned is represented in
	 * absolute world space  (irrespective of whether the compound
	 * volume items pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getBoundingBox(): BoundingBox;
	/**
	 * @remarks
	 * 获取表示堆栈中体积的最外边界矩形的最大方块位置。
	 * 请注意，返回的最大位置在绝对世界空间中（无论推送的复合体积项是绝对的还是相对的）
	 *
	 * Get the max block location of the outermost bounding
	 * rectangle which represents the volumes on the stack.
	 * Note that the max location returned is in absolute world
	 * space (irrespective of whether the compound volume items
	 * pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getMax(): Vector3;
	/**
	 * @remarks
	 * 获取表示堆栈中体积的最外边界矩形的最小方块位置。
	 * 请注意，返回的最小位置在绝对世界空间中（无论推送的复合体积项是绝对的还是相对的）
	 *
	 * Get the min block location of the outermost bounding
	 * rectangle which represents the volumes on the stack.
	 * Note that the min location returned is in absolute world
	 * space (irrespective of whether the compound volume items
	 * pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getMin(): Vector3;
	/**
	 * @remarks
	 * 获取复合体积的世界空间原点
	 *
	 * Fetch the origin in world space of the compound volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getOrigin(): Vector3;
	/**
	 * @remarks
	 * 返回一个布尔值，表示是否有任何体积项推送到体积中
	 *
	 * Return a boolean which signals if there are any volume items
	 * pushed to the volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isEmpty(): boolean;
	/**
	 * @remarks
	 * 返回一个布尔值，表示给定的绝对世界空间方块位置是否在一个正方块体积内。
	 * 例如，若堆栈包含一个大立方体，然后是一个稍小的负立方体，并且测试位置在负立方体内 - 函数将返回false，因为它不在“体积”内部（它在边界矩形内，但不在正定义的位置内）
	 *
	 * Return a boolean representing whether or not a given
	 * absolute world space block location is inside a positive
	 * block volume.
	 * E.g. if the stack contains a large cube followed by a
	 * slightly smaller negative cube, and the test location is
	 * within the negative cube - the function will return false
	 * because it's not 'inside' a volume (it IS inside the
	 * bounding rectangle, but it is not inside a positively
	 * defined location)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isInside(worldLocation: Vector3): boolean;
	/**
	 * @remarks
	 * 检查最后一个推送到体积堆栈的项，而不影响堆栈内容。
	 *
	 * Inspect the last entry pushed to the volume stack without
	 * affecting the stack contents.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param forceRelativity
	 * 决定函数返回的CompoundBlockVolumeItem是强制为相对坐标系还是绝对坐标系。
	 * `true` = 强制返回的项相对于体积原点
	 * `false` = 强制返回的项为绝对世界空间位置
	 *
	 * Determine whether the function returns a
	 * CompoundBlockVolumeItem which is forced into either relative
	 * or absolute coordinate system.
	 * `true` = force returned item to be relative to volume origin
	 * `false` = force returned item to be absolute world space
	 * location
	 *
	 * 若未指定标志，返回的项将保留其推送时的相对性
	 *
	 * If no flag is specified, the item returned retains whatever
	 * relativity it had when it was pushed
	 * @returns
	 * 若堆栈为空，则返回undefined
	 *
	 * Returns undefined if the stack is empty
	 */
	peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
	/**
	 * @remarks
	 * 从体积堆栈中移除最后一个条目。这将使堆栈大小减少一个
	 *
	 * Remove the last entry from the volume stack.  This will
	 * reduce the stack size by one
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	popVolume(): boolean;
	/**
	 * @remarks
	 * 向堆栈推送一个体积项。体积项包含一个“动作”参数，决定这个体积是正空间还是负空间。
	 * 该项还包含一个`locationRelativity`，决定它是相对于复合体积原点的还是绝对的
	 *
	 * Push a volume item to the stack.  The volume item contains
	 * an 'action' parameter which determines whether this volume
	 * is a positive or negative space.
	 * The item also contains a `locationRelativity` which
	 * determines whether it is relative or absolute to the
	 * compound volume origin
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param item
	 * 要推送到堆栈末尾的项
	 *
	 * Item to push to the end of the stack
	 */
	pushVolume(item: CompoundBlockVolumeItem): void;
	/**
	 * @remarks
	 * 若体积堆栈为空，此函数将推送指定项到堆栈。若体积堆栈不为空，此函数将用新项替换堆栈中的最后一项。
	 *
	 * If the volume stack is empty, this function will push the
	 * specified item to the stack.
	 * If the volume stack is NOT empty, this function will replace
	 * the last item on the stack with the new item.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param item
	 * 要添加或替换的项
	 *
	 * Item to add or replace
	 */
	replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
	/**
	 * @remarks
	 * 将复合体积的原点设置为绝对世界空间位置
	 *
	 * Set the origin of the compound volume to an absolute world
	 * space location
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param preserveExistingVolumes
	 * 此可选布尔标志决定相对的`CompoundBlockVolumeItem`是冻结在原地，还是受新原点影响。
	 * 想象一个场景，你在原点周围有一系列相对位置，组成一个球体；所有这些位置范围都在-2到2之间。
	 * 将每个位置作为相对项推送到复合体积中。
	 * 现在，移动原点，代表球体的所有位置都会相应移动。
	 * 但是，假设你想在第一个球体旁边添加第二个球体。
	 * 在这种情况下，设置新原点到几个位置之外，但`preserveExistingVolumes` = true。
	 * 这将设置一个新原点，但现有的球体位置将保持相对于原始原点。
	 * 现在，你可以再次推送相对球体位置（这次它们将相对于新原点）- 结果是两个球体彼此相邻。
	 *
	 * This optional boolean flag determines whether the relative
	 * `CompoundBlockVolumeItem`'s are frozen in place, or are
	 * affected by the new origin.
	 * Imagine a scenario where you have a series of relative
	 * locations around an origin which make up a sphere; all of
	 * these locations are in the range of -2 to 2.
	 * Push each of these locations to the compound volume as
	 * relative items.
	 * Now, move the origin and all of the locations representing
	 * the sphere move accordingly.
	 * However, let's say you want to add a 2nd sphere next to the
	 * 1st.
	 * In this case, set the new origin a few locations over, but
	 * 'preserveExistingVolumes' = true.
	 * This will set a new origin, but the existing sphere
	 * locations will remain relative to the original origin.
	 * Now, you can push the relative sphere locations again (this
	 * time they will be relative to the new origin) - resulting in
	 * 2 spheres next to each other.
	 */
	setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
	/**
	 * @remarks
	 * 类似于{@link CompoundBlockVolume.setOrigin} - 此函数将通过给定的增量将原点平移到新位置
	 *
	 * Similar to {@link CompoundBlockVolume.setOrigin} - this
	 * function will translate the origin by a given delta to a new
	 * position
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param preserveExistingVolumes
	 * 参见{@link CompoundBlockVolume.setOrigin}的参数描述
	 *
	 * See the description for the arguments to {@link
	 * CompoundBlockVolume.setOrigin}
	 */
	translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}

/**
 * 表示一个可以存放物品的容器。用于诸如玩家、矿车箱、羊驼等实体。
 *
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @seeExample containers.ts
 */
export class Container {
	private constructor();
	/**
	 * @remarks
	 * 容器中空槽的数量。
	 *
	 * Count of the slots in the container that are empty.
	 *
	 * @throws
	 * 若容器无效，则抛出异常。
	 *
	 * Throws if the container is invalid.
	 */
	readonly emptySlotsCount: number;
	/**
	 * @beta
	 * @remarks
	 * 返回一个布尔值，表示容器对象（或与此容器关联的实体或方块）在当前上下文中是否仍可用。
	 *
	 * Returns whether a container object (or the entity or block
	 * that this container is associated with) is still available
	 * for use in this context.
	 *
	 */
	readonly isValid: boolean;
	/**
	 * @remarks
	 * 此容器中的槽位数量。例如，一个标准的单格箱子有27个槽位。
	 * 注意，玩家的物品栏容器总共包含36个槽位，包括9个快捷栏槽位和27个物品栏槽位。
	 *
	 * The number of slots in this container. For example, a
	 * standard single-block chest has a size of 27. Note, a
	 * player's inventory container contains a total of 36 slots, 9
	 * hotbar slots plus 27 inventory slots.
	 *
	 * @throws
	 * 若容器无效，则抛出异常。
	 *
	 * Throws if the container is invalid.
	 */
	readonly size: number;
	/**
	 * @remarks
	 * 向容器中添加一个物品。物品将放置在第一个可用槽位中，并可以与相同类型的现有物品堆叠。
	 * 若希望将物品放置在特定槽位中，请使用 {@link Container.setItem}。
	 *
	 * Adds an item to the container. The item is placed in the
	 * first available slot(s) and can be stacked with existing
	 * items of the same type. Note, use {@link Container.setItem}
	 * if you wish to set the item in a particular slot.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param itemStack
	 * 要添加的物品堆。
	 *
	 * The stack of items to add.
	 * @throws 此函数可能抛出错误。
	 * @throws This function can throw errors.
	 */
	addItem(itemStack: ItemStack): ItemStack | undefined;
	/**
	 * @remarks
	 * 清空容器中的所有物品。
	 *
	 * Clears all inventory items in the container.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若容器无效，则抛出异常。
	 *
	 * Throws if the container is invalid.
	 */
	clearAll(): void;
	/**
	 * @remarks
	 * 获取指定槽位中的 {@link ItemStack}。若槽位为空，则返回 `undefined`。
	 * 此方法不会更改或清空指定槽位的内容。要获取某个槽位的引用，请参阅 {@link Container.getSlot}。
	 *
	 * Gets an {@link ItemStack} of the item at the specified slot.
	 * If the slot is empty, returns `undefined`. This method does
	 * not change or clear the contents of the specified slot. To
	 * get a reference to a particular slot, see {@link
	 * Container.getSlot}.
	 *
	 * @param slot
	 * 要从中检索物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to retrieve items from.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 * @seeExample getFirstHotbarItem.ts
	 */
	getItem(slot: number): ItemStack | undefined;
	/**
	 * @remarks
	 * 返回一个容器槽位。这相当于对该容器中给定索引的槽位的引用。
	 *
	 * Returns a container slot. This acts as a reference to a slot
	 * at the given index for this container.
	 *
	 * @param slot
	 * 要返回的槽位的索引。此索引必须在容器范围内。
	 *
	 * The index of the slot to return. This index must be within
	 * the bounds of the container.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 */
	getSlot(slot: number): ContainerSlot;
	/**
	 * @remarks
	 * 将物品从一个槽位移动到另一个槽位，可能跨容器移动。
	 *
	 * Moves an item from one slot to another, potentially across
	 * containers.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param fromSlot
	 * 要从中转移物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to transfer an item from, on
	 * this container.
	 * @param toSlot
	 * 要将物品转移到的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to transfer an item to, on
	 * `toContainer`.
	 * @param toContainer
	 * 要转移到的目标容器。注意，这可以与源容器相同。
	 *
	 * Target container to transfer to. Note this can be the same
	 * container as the source.
	 * @throws
	 * 若此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
	 *
	 * Throws if either this container or `toContainer` are invalid
	 * or if the `fromSlot` or `toSlot` indices out of bounds.
	 * @seeExample moveBetweenContainers.ts
	 */
	moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
	/**
	 * @remarks
	 * 在特定槽位中设置一个物品堆。
	 *
	 * Sets an item stack within a particular slot.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param slot
	 * 要设置物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to set an item at.
	 * @param itemStack
	 * 要放置在指定槽位中的物品堆。将 `itemStack` 设置为 undefined 将清空该槽位。
	 *
	 * Stack of items to place within the specified slot. Setting
	 * `itemStack` to undefined will clear the slot.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 */
	setItem(slot: number, itemStack?: ItemStack): void;
	/**
	 * @remarks
	 * 在容器之间的两个不同槽位交换物品。
	 *
	 * Swaps items between two different slots within containers.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param slot
	 * 要从此容器交换的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to swap from this container.
	 * @param otherSlot
	 * 要交换的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to swap with.
	 * @param otherContainer
	 * 要交换的目标容器。注意，这可以与此源容器相同。
	 *
	 * Target container to swap with. Note this can be the same
	 * container as this source.
	 * @throws
	 * 若此容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 超出范围，则抛出异常。
	 *
	 * Throws if either this container or `otherContainer` are
	 * invalid or if the `slot` or `otherSlot` are out of bounds.
	 */
	swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
	/**
	 * @remarks
	 * 将物品从一个槽位移动到另一个容器，或者移动到同一容器中的第一个可用槽位。
	 *
	 * Moves an item from one slot to another container, or to the
	 * first available slot in the same container.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param fromSlot
	 * 要从中转移物品的槽位的从零开始的索引。
	 *
	 * Zero-based index of the slot to transfer an item from, on
	 * this container.
	 * @param toContainer
	 * 要转移到的目标容器。注意，这可以与源容器相同。
	 *
	 * Target container to transfer to. Note this can be the same
	 * container as the source.
	 * @returns
	 * 一个包含无法转移的物品的物品堆。若所有物品都已转移，则返回 undefined。
	 *
	 * An itemStack with the items that couldn't be transferred.
	 * Returns undefined if all items were transferred.
	 * @throws
	 * 若此容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
	 *
	 * Throws if either this container or `toContainer` are invalid
	 * or if the `fromSlot` or `toSlot` indices out of bounds.
	 * @seeExample transferBetweenContainers.ts
	 */
	transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

/**
 * 表示更大容器中的一个槽位（例如，实体的物品栏）。
 *
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
	private constructor();
	/**
	 * @remarks
	 * 表示物品堆中的物品数量。有效值的范围是1-255。提供的值会被限制在物品的最大堆叠数量内。
	 *
	 * Number of the items in the stack. Valid values range between
	 * 1-255. The provided value will be clamped to the item's
	 * maximum stack size.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若值超出了1-255的范围，会抛出错误。
	 *
	 * Throws if the value is outside the range of 1-255.
	 */
	amount: number;
	/**
	 * @remarks
	 * 返回物品是否可堆叠。一个物品被认为是可堆叠的，若该物品的最大堆叠数大于1并且物品不包含任何自定义数据或属性。
	 *
	 * Returns whether the item is stackable. An item is considered
	 * stackable if the item's maximum stack size is greater than 1
	 * and the item does not contain any custom data or properties.
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly isStackable: boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回ContainerSlot是否有效。若容器存在且已加载，并且槽位索引有效，则容器槽位有效。
	 *
	 * Returns whether the ContainerSlot is valid. The container
	 * slot is valid if the container exists and is loaded, and the
	 * slot index is valid.
	 *
	 */
	readonly isValid: boolean;
	/**
	 * @remarks
	 * 获取或设置物品在死亡时是否保留。
	 *
	 * Gets or sets whether the item is kept on death.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 */
	keepOnDeath: boolean;
	/**
	 * @remarks
	 * 获取或设置物品的锁定模式。默认值是`ItemLockMode.none`。
	 *
	 * Gets or sets the item's lock mode. The default value is
	 * `ItemLockMode.none`.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 */
	lockMode: ItemLockMode;
	/**
	 * @remarks
	 * 表示最大堆叠数量。该值取决于物品的类型。例如，火把的最大堆叠数量是64，而鸡蛋的最大堆叠数量是16。
	 *
	 * The maximum stack size. This value varies depending on the
	 * type of item. For example, torches have a maximum stack size
	 * of 64, while eggs have a maximum stack size of 16.
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly maxAmount: number;
	/**
	 * @remarks
	 * 表示此物品堆的自定义名称。悬停在物品上时会显示名称标签。将名称标签设置为空字符串或`undefined`将移除名称标签。
	 *
	 * Given name of this stack of items. The name tag is displayed
	 * when hovering over the item. Setting the name tag to an
	 * empty string or `undefined` will remove the name tag.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若槽位的容器无效会抛出错误。若长度超过255个字符也会抛出错误。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * the length exceeds 255 characters.
	 */
	nameTag?: string;
	/**
	 * @remarks
	 * 表示物品的类型。
	 *
	 * The type of the item.
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly 'type': ItemType;
	/**
	 * @remarks
	 * 表示物品堆中物品类型的标识符。若没有指定命名空间，则默认使用`minecraft:`。例如，`wheat`或`apple`。
	 *
	 * Identifier of the type of items for the stack. If a
	 * namespace is not specified, 'minecraft:' is assumed.
	 * Examples include 'wheat' or 'apple'.
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 清除在此物品堆上设置的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this
	 * item stack.
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 返回此容器槽位中的物品是否可以被破坏。
	 *
	 * Returns whether the item within this container slot can be
	 * destroyed.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getCanDestroy(): string[];
	/**
	 * @remarks
	 * 返回此容器槽位中的物品是否可以被放置。
	 *
	 * Returns if the item in this container slot can be placed on.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * Throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getCanPlaceOn(): string[];
	/**
	 * @remarks
	 * 返回一个属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @returns
	 * 返回该属性的值，若属性未设置则返回`undefined`。
	 *
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
	/**
	 * @remarks
	 * 返回已在此物品堆上使用的动态属性标识符的可用集合。
	 *
	 * Returns the available set of dynamic property identifiers
	 * that have been used on this item stack.
	 *
	 * @returns
	 * 一个字符串数组，包含在此实体上设置的动态属性。
	 *
	 * A string array of the dynamic properties set on this entity.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicPropertyIds(): string[];
	/**
	 * @remarks
	 * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号很有用——例如，若一个实体有许多兆字节的关联动态属性，可能会在各种设备上加载缓慢。
	 *
	 * Returns the total size, in bytes, of all the dynamic
	 * properties that are currently stored for this entity. This
	 * includes the size of both the key and the value.  This can
	 * be useful for diagnosing performance warning signs - if, for
	 * example, an entity has many megabytes of associated dynamic
	 * properties, it may be slow to load on various devices.
	 *
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicPropertyTotalByteCount(): number;
	/**
	 * @remarks
	 * 创建物品堆的精确副本，包括任何自定义数据或属性。
	 *
	 * Creates an exact copy of the item stack, including any
	 * custom data or properties.
	 *
	 * @returns
	 * 返回槽位中的物品副本。若槽位为空，则返回`undefined`。
	 *
	 * Returns a copy of the item in the slot. Returns undefined if
	 * the slot is empty.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getItem(): ItemStack | undefined;
	/**
	 * @remarks
	 * 返回物品堆的附加文本信息（次要显示字符串）。
	 *
	 * Returns the lore value - a secondary display string - for an
	 * ItemStack.
	 *
	 * @returns
	 * 一个包含附加文本信息的数组。若物品没有附加文本信息，则返回一个空数组。
	 *
	 * An array of lore strings. If the item does not have lore,
	 * returns an empty array.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getLore(): string[];
	/**
	 * @remarks
	 * 返回槽位中物品的所有标签。
	 *
	 * Returns all tags for the item in the slot.
	 *
	 * @returns
	 * 返回槽位中物品的所有标签。若槽位为空，则返回一个空数组。
	 *
	 * Returns all tags for the item in the slot. Return an empty
	 * array if the the slot is empty.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 返回此槽位是否有物品。
	 *
	 * Returns true if this slot has an item.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	hasItem(): boolean;
	/**
	 * @remarks
	 * 返回槽位中的物品是否有给定的标签。
	 *
	 * Returns whether the item in the slot slot has the given tag.
	 *
	 * @param tag
	 * 物品标签。
	 *
	 * The item tag.
	 * @returns
	 * 若槽位为空或槽位中的物品没有给定的标签，则返回`false`。
	 *
	 * Returns false when the slot is empty or the item in the slot
	 * does not have the given tag.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	hasTag(tag: string): boolean;
	/**
	 * @remarks
	 * 返回此物品堆是否可以与给定的`itemStack`堆叠。这是通过比较物品类型和与物品堆叠相关的任何自定义数据和属性来确定的。物品堆叠的数量不予考虑。
	 *
	 * Returns whether this item stack can be stacked with the
	 * given `itemStack`. This is determined by comparing the item
	 * type and any custom data and properties associated with the
	 * item stacks. The amount of each item stack is not taken into
	 * consideration.
	 *
	 * @param itemStack
	 * 被比较的物品堆。
	 *
	 * The ItemStack that is being compared.
	 * @returns
	 * 返回此物品堆是否可以与给定的`itemStack`堆叠。
	 *
	 * Returns whether this item stack can be stacked with the
	 * given `itemStack`.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	isStackableWith(itemStack: ItemStack): boolean;
	/**
	 * @remarks
	 * 表示此物品在冒险模式下可以破坏的方块类型列表。方块名称显示在物品的提示信息中。将值设置为`undefined`将清除列表。
	 *
	 * The list of block types this item can break in Adventure
	 * mode. The block names are displayed in the item's tooltip.
	 * Setting the value to undefined will clear the list.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param blockIdentifiers
	 * 方块标识符列表。
	 *
	 * The list of blocks, given by their identifiers.
	 * @throws
	 * 若槽位的容器无效会抛出错误。若提供的任何方块标识符无效也会抛出错误。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * any of the provided block identifiers are invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setCanDestroy(blockIdentifiers?: string[]): void;
	/**
	 * @remarks
	 * 表示此物品在冒险模式下可以放置的方块类型列表。仅适用于方块物品。方块名称显示在物品的提示信息中。将值设置为`undefined`将清除列表。
	 *
	 * The list of block types this item can be placed on in
	 * Adventure mode. This is only applicable to block items. The
	 * block names are displayed in the item's tooltip. Setting the
	 * value to undefined will clear the list.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param blockIdentifiers
	 * 方块标识符列表。
	 *
	 * The list of blocks, given by their identifiers.
	 * @throws
	 * 若槽位的容器无效会抛出错误。若提供的任何方块标识符无效也会抛出错误。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * any of the provided block identifiers are invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setCanPlaceOn(blockIdentifiers?: string[]): void;
	/**
	 * @beta
	 * @remarks
	 * 设置具有特定值的多个动态属性。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 *
	 * 要设置的动态属性的键值对记录。
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 将指定的属性设置为一个值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @param value
	 * 要设置的属性值。
	 *
	 * Data value of the property to set.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 将给定的ItemStack放入槽位，替换任何现有的物品。
	 *
	 * Sets the given ItemStack in the slot, replacing any existing
	 * item.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param itemStack
	 * 要放入槽位的ItemStack。
	 *
	 * The ItemStack to be placed in the slot.
	 * @throws
	 * 若槽位的容器无效，会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setItem(itemStack?: ItemStack): void;
	/**
	 * @remarks
	 * 设置物品堆的附加文本信息（次要显示字符串）。
	 *
	 * Sets the lore value - a secondary display string - for an
	 * ItemStack.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param loreList
	 * 附加文本信息的列表。将此参数设置为`undefined`将清除附加文本信息。
	 *
	 * A list of lore strings. Setting this argument to undefined
	 * will clear the lore.
	 * @throws
	 * 若槽位的容器无效会抛出错误。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setLore(loreList?: string[]): void;
}

/**
 * 描述了与数据驱动的实体事件触发相关的信息，例如，鸡的 minecraft:ageable_grow_up 事件。
 *
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示触发事件的实体。
	 *
	 * Entity that the event triggered on.
	 *
	 */
	readonly entity: Entity;
	/**
	 * @remarks
	 * 表示被触发的数据驱动事件的名称。
	 *
	 * Name of the data driven event being triggered.
	 *
	 */
	readonly eventId: string;
	/**
	 * @remarks
	 * 表示可更新的组件状态修改列表，这些修改是此触发事件的效果。
	 *
	 * An updateable list of modifications to component state that
	 * are the effect of this triggered event.
	 *
	 */
	getModifiers(): DefinitionModifier[];
}

/**
 * 包含与触发数据驱动实体事件相关的事件注册，例如鸡的 minecraft:ageable_grow_up 事件。
 *
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，该回调函数会在数据驱动实体事件被触发后调用。
	 *
	 * Adds a callback that will be called after a data driven
	 * entity event is triggered.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
		options?: EntityDataDrivenTriggerEventOptions,
	): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，该回调函数会在数据驱动实体事件被触发后调用。
	 *
	 * Removes a callback that will be called after a data driven
	 * entity event is triggered.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}

/**
 * 表示世界中的特定维度（例如，末地）的类。
 *
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
	private constructor();
	/**
	 * @remarks
	 * 维度的高度范围。
	 *
	 * Height range of the dimension.
	 *
	 * @throws This property can throw when used.
	 */
	readonly heightRange: minecraftcommon.NumberRange;

	/**
	 * @remarks
	 * 维度的标识符。
	 *
	 * Identifier of the dimension.
	 *
	 */
	readonly id: string;

	/**
	 * @remarks
	 * 在方块区域中查找满足方块过滤器的方块。
	 *
	 * Searches the block volume for a block that satisfies the block filter.
	 *
	 * @param volume
	 * 要检查的方块区域。
	 *
	 * Volume of blocks that will be checked.
	 *
	 * @param filter
	 * 将会检查方块体积中的每一个方块的方块过滤器。
	 *
	 * Block filter that will be checked against each block in the volume.
	 *
	 * @param allowUnloadedChunks
	 * 若设置为 true 并且部分或全部方块体积在未加载的区块（Chunk）外，则会抑制 UnloadedChunksError。
	 * 将只检查方块体积中加载的区块的位置。
	 *
	 * If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.
	 *
	 * @returns
	 * 若方块体积中至少有一个方块满足过滤器，将返回 true，否则返回 false。
	 *
	 * Returns true if at least one block in the volume satisfies
	 * the filter, false otherwise.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link UnloadedChunksError}
	 */
	containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;

	/**
	 * @remarks
	 * 在指定位置创建一个爆炸。
	 *
	 * Creates an explosion at the specified location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 爆炸的位置。
	 *
	 * The location of the explosion.
	 *
	 * @param radius
	 * 要创建的爆炸半径，单位为方块。
	 *
	 * Radius, in blocks, of the explosion to create.
	 *
	 * @param explosionOptions
	 * 爆炸的附加配置选项。
	 *
	 * Additional configurable options for the explosion.
	 *
	 * @throws
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 * @seeExample createExplosion.ts
     * @seeExample createNoBlockExplosion.ts
     * @seeExample createExplosions.ts
	 */
	createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;

	/**
	 * @remarks
	 * 用特定的方块类型填充一个区域。
	 *
	 * Fills an area of blocks with a specific block type.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param volume
	 * 要填充的方块区域。
	 *
	 * Volume of blocks to be filled.
	 *
	 * @param block
	 * 要用来填充区域的方块类型。
	 *
	 * Type of block to fill the volume with.
	 *
	 * @param options
	 * 额外的选项，例如可用于包括/排除特定方块的方块过滤器。
	 *
	 * A set of additional options, such as a block filter which can be used to include / exclude specific blocks in the fill.
	 *
	 * @returns
	 * 返回包含所有放置的方块的 ListBlockVolume。
	 *
	 * Returns a ListBlockVolume which contains all the blocks that were placed.
	 *
	 * @throws
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 * {@link UnloadedChunksError}
	 */
	fillBlocks(
		volume: BlockVolumeBase | CompoundBlockVolume,
		block: BlockPermutation | BlockType | string,
		options?: BlockFillOptions,
	): ListBlockVolume;

	/**
	 * @beta
	 * @remarks
	 * 查找离特定类型最近的生物群系的位置。
	 * 请注意，findClosestBiome 操作可能需要一些时间才能完成，
	 * 因此避免在特定 tick 内使用大量此类调用。
	 *
	 * Finds the location of the closest biome of a particular type. Note that the findClosestBiome operation can take some time to complete, so avoid using many of these calls within a particular tick.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param pos 起始位置，以开始查找生物群系。
	 *
	 * Starting location to look for a biome to find.
	 *
	 * @param biomeToFind 要查找的生物群系标识符。
	 *
	 * Identifier of the biome to look for.
	 *
	 * @param options 查找生物群系的附加筛选条件。
	 *
	 * Additional selection criteria for a biome search.
	 *
	 * @returns 返回生物群系的位置，若未找到生物群系则返回 undefined。
	 *
	 * Returns a location of the biome, or undefined if a biome could not be found.
	 *
	 * @throws
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 */
	findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;

	/**
	 * @remarks
	 * 返回给定位置的方块实例。
	 *
	 * Returns a block instance at the given location.
	 *
	 * @param location 
	 * 用于返回方块的位置。
	 *
	 * The location at which to return a block.
	 *
	 * @returns
	 * 指定位置的方块，若请求的方块在未加载的区块中，则返回 'undefined'。
	 *
	 * Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.
	 *
	 * @throws
	 *
	 * PositionInUnloadedChunkError: 尝试与不再位于加载和 ticking 区块内的方块对象交互时引发的异常。
	 * 
	 * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
	 * PositionOutOfWorldBoundariesError: 尝试与超出维度高度范围的位置交互时引发的异常。
	 *
	 * PositionOutOfWorldBoundariesError: Exception thrown when
     * trying to interact with a position outside of dimension
     * height range
     *
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getBlock(location: Vector3): Block | undefined;

	/**
	 * @beta
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;

	/**
	 * @beta
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;

	/**
	 * @remarks
	 * 获取从一个位置发出向量射线相交的第一个方块。
	 *
	 * Gets the first block that intersects with a vector emanating from a location.
	 *
	 * @param location
	 * 开始射线检测的位置。
	 *
	 * Location from where to initiate the ray check.
	 *
	 * @param direction
	 * 进行射线检测的向量方向。
	 *
	 * Vector direction to cast the ray.
	 *
	 * @param options
	 * 处理此射线查询的其他选项。
	 *
	 * Additional options for processing this raycast query.
	 *
	 * @throws
	 */
	getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;

	/**
	 * @remarks
	 * 获取区域内满足过滤器的所有方块。
	 *
	 * Gets all the blocks in a volume that satisfy the filter.
	 *
	 * @param volume
	 * 要检查的方块数量。
	 *
	 * Volume of blocks that will be checked.
	 *
	 * @param filter
	 * 将会检查方块体积中的每一个方块的方块过滤器。
	 *
	 * Block filter that will be checked against each block in the volume.
	 *
	 * @param allowUnloadedChunks
	 * 若设置为 true 并且部分或全部方块体积在未加载的区块（Chunk）外，则会抑制 UnloadedChunksError。
	 * 将只检查方块体积中加载的区块的位置。
	 *
	 * If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.
	 *
	 * @returns
	 * 返回包含所有满足方块过滤器的方块位置的 ListBlockVolume。
	 *
	 * Returns the ListBlockVolume that contains all the block locations that satisfied the block filter.
	 *
	 * @throws
	 *
	 * @link Error
	 *
	 * @link UnloadedChunksError
	 */
	getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;

	/**
	 * @remarks
	 * 根据 EntityQueryOptions 里定义的条件，返回一组实体。
	 *
	 * Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
	 *
	 * @param options
	 * 过滤返回的实体的一组附加选项。
	 *
	 * Additional options that can be used to filter the set of entities returned.
	 *
	 * @returns
	 * 一个实体数组。
	 *
	 * An entity array.
     * @throws This function can throw errors.
     * @seeExample bounceSkeletons.ts
     * @seeExample tagsQuery.ts
     * @seeExample testThatEntityIsFeatherItem.ts
     */
	getEntities(options?: EntityQueryOptions): Entity[];
	/**
	 * @remarks
	 * 返回特定位置的一组实体。
	 *
	 * Returns a set of entities at a particular location.
	 *
	 * @param location
	 * 用于返回实体的位置。
	 *
	 * The location at which to return entities.
	 *
	 * @returns
	 * 指定位置的零个或多个实体。
	 *
	 * Zero or more entities at the specified location.
	 */
	getEntitiesAtBlockLocation(location: Vector3): Entity[];

	/**
	 * @remarks
	 * 获取从一个位置发出向量射线相交的实体。
	 *
	 * Gets entities that intersect with a specified vector emanating from a location.
	 *
	 * @param options
	 * 处理此射线查询的其他选项。
	 *
	 * Additional options for processing this raycast query.
	 *
	 * @throws
	 * */
	getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];

	/**
	 * @remarks
	 * 根据 {@link EntityQueryOptions} 里定义的条件，返回一组玩家。
	 *
	 * Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
	 *
	 * @param options
	 * 过滤返回的玩家的一组附加选项。
	 *
	 * Additional options that can be used to filter the set of players returned.
	 *
	 * @returns
	 * 一个玩家数组。
	 *
	 * A player array.
	 *
	 * @throws
	 * */
	getPlayers(options?: EntityQueryOptions): Player[];

	/**
	 * @remarks
	 * 返回给定 XZ 位置的最高方块。
	 *
	 * Returns the highest block at the given XZ location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param locationXZ
	 * 要检索最高方块的位置。
	 *
	 * Location to retrieve the topmost block for.
	 *
	 * @param minHeight
	 * 开始搜索的 Y 坐标。默认为最大维度高度。
	 *
	 * The Y height to begin the search from. Defaults to the
     * maximum dimension height.
     * @throws This function can throw errors.
     */
	getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;

	/**
	 * @beta
	 * @remarks
	 * 返回当前的天气。
	 *
	 * Returns the current weather.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 返回一个 WeatherType，说明当前的天气。
	 *
	 * Returns a WeatherType that explains the broad category of weather that is currently going on.
	 */
	getWeather(): WeatherType;
	/**
     * @beta
     * @remarks
     * 将指定的地形特征放置在维度中的指定位置。
     * 
     * Places the given feature into the dimension at the specified
     * location.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     * 
     * @param featureName
     * 地形特征的字符串标识符。
     * 
     * The string identifier for the feature.
     * @param location
     * 放置地形特征的位置。
     * 
     * Location to place the feature.
     * @param shouldThrow
     * 指定如果无法放置地形特征时是否抛出错误。
     * 注意：如果使用未知的地形特征名称或尝试在未加载的区块中放置，
     * 函数调用将始终抛出错误。
     * 
     * Specifies if the function call will throw an error if the
     * feature could not be placed.
     * Note: The function call will always throw an error if using
     * an unknown feature name or trying to place in a unloaded
     * chunk.
     * @throws
     * 如果地形特征名称无效，将抛出错误。
     * 如果位置在未加载的区块中，将抛出错误。
     * 
     * An error will be thrown if the feature name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * 将指定的地形特征规则放置在维度中的指定位置。
     * 
     * Places the given feature rule into the dimension at the
     * specified location.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     * 
     * @param featureRuleName
     * 地形特征规则的字符串标识符。
     * 
     * The string identifier for the feature rule.
     * @param location
     * 放置地形特征规则的位置。
     * 
     * Location to place the feature rule.
     * @throws
     * 如果地形特征规则名称无效，将抛出错误。
     * 如果位置在未加载的区块中，将抛出错误。
     * 
     * An error will be thrown if the feature rule name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;

	/**
	 * @remarks
	 * 为所有玩家播放声音。
	 *
	 * Plays a sound for all players.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param soundId
	 * 声音的标识符。
	 *
	 * Identifier of the sound.
	 *
	 * @param location
	 * 声音的位置。
	 *
	 * Location of the sound.
	 *
	 * @param soundOptions
	 * 额外的音效配置选项。
	 *
	 * Additional options for configuring additional effects for
     * the sound.
	 * @throws
	 * 若音量小于 0.0，将抛出错误。
	 * 若音频淡入淡出值小于 0.0，则抛出错误。
	 * 若音高小于 0.01，则抛出错误。
	 * 若音量小于 0.0，将抛出错误。
	 *
	 * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     */
	playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;

	/**
	 * @remarks
	 * 使用更宽广维度的上下文同步运行命令。
	 *
	 * Runs a command synchronously using the context of the broader dimenion.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param commandString
	 * 要运行的命令。请注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start with slash.
	 *
	 * @returns
	 * 返回命令结果，包含成功值。
	 *
	 * Returns a command result with a count of successful values from the command.
	 *
	 * @throws
	 * 若命令由于参数或命令语法不正确或命令错误情况而失败，则抛出异常。
	 * 请注意，在许多情况下，若命令不执行（例如，一个目标选择器没有找到匹配），这个方法不会抛出异常。
	 *
	 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
	 *
	 * {@link CommandError}
	 */
	runCommand(commandString: string): CommandResult;

	/**
	 * @attention 注：此方法在最新版已被删除，这里为了兼容性保留
	 * 
	 * @remarks
	 * 从更广泛的维度上下文运行一个特定的命令异步。
	 * 请注意，在给定的 tick 内最大可运行 128 个异步命令。
	 *
	 * Runs a particular command asynchronously from the context of the broader dimension.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
	 *
	 * @param commandString
	 * 要运行的命令。请注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start with slash.
	 *
	 * @returns
	 * 对于返回数据的命令，返回一个 CommandResult，指示命令结果。
	 *
	 * For commands that return data, returns a CommandResult with an indicator of command results.
	 *
	 * @throws
	 * 若命令由于参数或命令语法不正确或命令错误情况而失败，则抛出异常。
	 * 请注意，在许多情况下，若命令不操作（例如，在选择器没有找到匹配），此方法不会抛出异常。
	 *
	 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
	 */
	runCommandAsync(commandString: string): Promise<CommandResult>;

	/**
	 * @remarks
	 * 使用 BlockPermutation（带有特定状态的方块）在世界中设置一个方块。
	 *
	 * Sets a block in the world using a BlockPermutation. BlockPermutations are blocks with a particular state.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 要设置方块的维度位置。
	 *
	 * The location within the dimension to set the block.
	 *
	 * @param permutation
	 * 要设置的方块排列。
	 *
	 * The block permutation to set.
	 *
	 * @throws
	 * 若位置在未加载的块内或超出世界边界，将抛出错误。
	 *
	 * Throws if the location is within an unloaded chunk or outside of the world bounds.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * @link LocationOutOfWorldBoundariesError
	 */
	setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
	/**
	 * @remarks
	 * 在维度内的指定位置设置一个方块。
	 *
	 * Sets a block at a given location within the dimension.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param location
	 * 维度内设置方块的位置。
	 *
	 * The location within the dimension to set the block.
	 * @param blockType
	 * 要设置的方块类型。这可以是一个字符串标识符或 BlockType。默认使用方块排列。
	 *
	 * The type of block to set. This can be either a string
	 * identifier or a BlockType. The default block permutation is
	 * used.
	 * @throws
	 * 若位置在未加载的区块内或在世界边界之外，则抛出错误。
	 *
	 * Throws if the location is within an unloaded chunk or
	 * outside of the world bounds.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setBlockType(location: Vector3, blockType: BlockType | string): void;
	/**
	 * @remarks
	 * 设置维度内的当前天气。
	 *
	 * Sets the current weather within the dimension.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param weatherType
	 * 设置要应用的天气类型。
	 *
	 * Set the type of weather to apply.
	 * @param duration
	 * 设置天气的持续时间（以刻为单位）。若未提供持续时间，则持续时间将设置为 300 到 900 秒之间的随机值。
	 *
	 * Sets the duration of the weather (in ticks). If no duration
	 * is provided, the duration will be set to a random duration
	 * between 300 and 900 seconds.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setWeather(weatherType: WeatherType, duration?: number): void;
	/**
	 * @remarks
	 * 在指定位置创建一个新的实体（例如，一个生物）。
	 *
	 * Creates a new entity (e.g., a mob) at the specified
	 * location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param identifier
	 * 要生成的实体类型的标识符。若未指定命名空间，则假定为 'minecraft:'。
	 *
	 * Identifier of the type of entity to spawn. If no namespace
	 * is specified, 'minecraft:' is assumed.
	 * @param location
	 * 创建实体的位置。
	 *
	 * The location at which to create the entity.
	 * @returns
	 * 在指定位置新创建的实体。
	 *
	 * Newly created entity at the specified location.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 * @seeExample spawnAdultHorse.ts
	 * @seeExample quickFoxLazyDog.ts
	 * @seeExample triggerEvent.ts b473e4eb
	 */
	spawnEntity(identifier: string, location: Vector3, options?: SpawnEntityOptions): Entity;
	/**
	 * @remarks
	 * 在指定位置创建一个新的物品堆作为实体。
	 *
	 * Creates a new item stack as an entity at the specified
	 * location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param location
	 * 创建物品堆的位置。
	 *
	 * The location at which to create the item stack.
	 * @returns
	 * 在指定位置新创建的物品堆实体。
	 *
	 * Newly created item stack entity at the specified location.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 * @seeExample itemStacks.ts
	 * @seeExample spawnFeatherItem.ts
	 */
	spawnItem(itemStack: ItemStack, location: Vector3): Entity;
	/**
	 * @remarks
	 * 在世界的指定位置创建一个新的粒子发射器。
	 *
	 * Creates a new particle emitter at a specified location in
	 * the world.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param effectName
	 * 要创建的粒子的标识符。
	 *
	 * Identifier of the particle to create.
	 * @param location
	 * 创建粒子发射器的位置。
	 *
	 * The location at which to create the particle emitter.
	 * @param molangVariables
	 * 一组可选的、可定制的变量，可为此粒子调整。
	 *
	 * A set of optional, customizable variables that can be
	 * adjusted for this particle.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 * @seeExample spawnParticle.ts 25a384c8
	 */
	spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}

/**
 * 表示一个维度类型。
 *
 * Represents a type of dimension.
 */
export class DimensionType {
	private constructor();
	/**
	 * @remarks
	 * 维度类型的标识符。
	 *
	 * Identifier of the dimension type.
	 *
	 */
	readonly typeId: string;
}

/**
 * 用于访问所有可用的维度类型。
 *
 * Used for accessing all available dimension types.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 使用基于字符串的标识符来获取维度类型。
     *
     * Retrieves a dimension type using a string-based identifier.
     *
     * 这个函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 获取所有维度类型的数组。
     *
     * Retrieves an array of all dimension types.
     *
     * 这个函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    static getAll(): DimensionType[];
}

/**
 * 表示一个附加到实体上的效果，例如中毒。
 *
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
	private constructor();
	/**
	 * @remarks
	 * 获取应用于此效果的放大器值。
	 * 典型的取值范围通常是0到4。例如：效果“跳跃提升 II”的放大器值为1。
	 *
	 * Gets an amplifier that may have been applied to this effect.
	 * Sample values range typically from 0 to 4. Example: The
	 * effect 'Jump Boost II' will have an amplifier value of 1.
	 *
	 * @throws This property can throw when used.
	 */
	readonly amplifier: number;
	/**
	 * @remarks
	 * 获取此效果的玩家友好名称。
	 *
	 * Gets the player-friendly name of this effect.
	 *
	 * @throws This property can throw when used.
	 */
	readonly displayName: string;
	/**
	 * @remarks
	 * 获取此效果的总持续时间（以刻为单位）。每秒有20个刻。使用 {@link TicksPerSecond} 常量在刻与秒之间转换。
	 *
	 * Gets the entire specified duration, in ticks, of this
	 * effect. There are 20 ticks per second. Use {@link
	 * TicksPerSecond} constant to convert between ticks and
	 * seconds.
	 *
	 * @throws This property can throw when used.
	 */
	readonly duration: number;
	/**
	 * @beta
	 * @remarks
	 * 返回此上下文中是否可用效果实例。
	 *
	 * Returns whether an effect instance is available for use in
	 * this context.
	 *
	 */
	readonly isValid: boolean;
	/**
	 * @remarks
	 * 获取此效果的类型ID。
	 *
	 * Gets the type id of this effect.
	 *
	 * @throws This property can throw when used.
	 */
	readonly typeId: string;
}

/**
 * 表示有关效果（如中毒）添加到实体时的变化信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 效果的附加属性和详细信息。
	 *
	 * Additional properties and details of the effect.
	 *
	 */
	readonly effect: Effect;
	/**
	 * @remarks
	 * 效果添加到的实体。
	 *
	 * Entity that the effect is being added to.
	 *
	 */
	readonly entity: Entity;
}

/**
 * 管理连接到实体添加效果时的回调函数。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在实体添加效果时调用的回调函数。
	 *
	 * Adds a callback that will be called when an effect is added
	 * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EffectAddAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EffectAddAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在实体添加效果时调用的回调函数。
	 *
	 * Removes a callback from being called when an effect is added
	 * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}

/**
 * 表示效果（例如中毒）的添加到实体前相关的更改信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示将取消该事件。
	 *
	 * When set to true will cancel the event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 效果持续时间。
	 *
	 * Effect duration.
	 *
	 */
	duration: number;
	/**
	 * @remarks
	 * 正在添加的效果类型。
	 *
	 * The type of the effect that is being added.
	 *
	 */
	readonly effectType: string;
	/**
	 * @remarks
	 * 正在添加效果的实体。
	 *
	 * Entity that the effect is being added to.
	 *
	 */
	readonly entity: Entity;
}

/**
 * 管理当效果被添加到实体时连接的回调函数。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当效果被添加到实体时会调用该回调函数。
     * 
     * Adds a callback that will be called when an effect is added
     * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在效果被添加到实体时调用。
     * 
	 * Removes a callback from being called when an effect is added
     * to an entity.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}

/**
 * 表示一种效果类型，例如中毒，可以应用于实体。
 *
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
	private constructor();
	/**
	 * @remarks
	 * 此效果类型的标识符名称。
	 *
	 * Identifier name of this effect type.
	 *
	 * @returns
	 * 效果类型的标识符。
	 *
	 * Identifier of the effect type.
	 */
	getName(): string;
}

/**
 * 表示一种效果类型 - 例如中毒 - 可以应用于实体。
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectTypes {
	private constructor();
	/**
	 * @remarks
	 * 表示给定标识符的效果类型。
	 * Effect type for the given identifier.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param identifier
	 * 效果的标识符。
	 * The identifier for the effect.
	 * @returns
	 * 给定标识符的效果类型，若效果不存在则返回 undefined。
	 * Effect type for the given identifier or undefined if the
	 * effect does not exist.
	 */
	static get(identifier: string): EffectType | undefined;
	/**
	 * @remarks
	 * 获取所有效果。
	 * Gets all effects.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 所有效果的列表。
	 * A list of all effects.
	 */
	static getAll(): EffectType[];
}

/**
 * 描述了一种附魔类型的信息。
 *
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
	/**
	 * @remarks
	 * 表示附魔类型的名称。
	 *
	 * The name of the enchantment type.
	 *
	 */
	readonly id: string;
	/**
	 * @remarks
	 * 表示此附魔类型可以拥有的最大等级。
	 *
	 * The maximum level this type of enchantment can have.
	 *
	 */
	readonly maxLevel: number;
	/**
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	constructor(enchantmentType: string);
}

/**
 * 包含当前世界中可用的Minecraft附魔类型的目录。
 *
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
	private constructor();
	/**
	 * @remarks
	 * 获取具有指定标识符的附魔。
	 *
	 * Retrieves an enchantment with the specified identifier.
	 *
	 * @param enchantmentId
	 * 附魔的标识符。例如，"minecraft:flame"。
	 *
	 * Identifier of the enchantment.  For example,
	 * "minecraft:flame".
	 * @returns
	 * 若可用，返回一个表示指定附魔的EnchantmentType对象。
	 *
	 * If available, returns an EnchantmentType object that
	 * represents the specified enchantment.
	 */
	static get(enchantmentId: string): EnchantmentType | undefined;
	/**
	 * @remarks
	 * 返回所有可用附魔类型的集合。
	 *
	 * Returns a collection of all available enchantment types.
	 *
	 */
	static getAll(): EnchantmentType[];
}

/**
 * 表示世界中实体（例如生物、玩家或矿车等移动物体）的状态。
 *
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
	private constructor();
	/**
	 * @remarks
	 * 实体当前所在的维度。
	 *
	 * Dimension that the entity is currently within.
	 *
	 * @throws This property can throw when used.
	 */
	readonly dimension: Dimension;
	/**
	 * @remarks
	 * 实体的唯一标识符。此标识符在加载世界实例时保持一致。
	 * 不应从此唯一标识符的值和结构中推断任何意义——不要解析或解释它。
	 * 即使 {@link Entity.isValid} 为 false，此属性也可访问。
	 *
	 * Unique identifier of the entity. This identifier is intended
	 * to be consistent across loads of a world instance. No
	 * meaning should be inferred from the value and structure of
	 * this unique identifier - do not parse or interpret it. This
	 * property is accessible even if {@link Entity.isValid} is
	 * false.
	 *
	 */
	readonly id: string;
	/**
	 * @remarks
	 * 实体是否接触到可攀爬的方块。例如，玩家靠近梯子或蜘蛛靠近石墙。
	 *
	 * Whether the entity is touching a climbable block. For
	 * example, a player next to a ladder or a spider next to a
	 * stone wall.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isClimbing: boolean;
	/**
	 * @remarks
	 * 实体是否具有大于 0 的下落距离，或者在滑翔时是否大于 1。
	 *
	 * Whether the entity has a fall distance greater than 0, or
	 * greater than 1 while gliding.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isFalling: boolean;
	/**
	 * @remarks
	 * 实体的任何部分是否位于水方块内。
	 *
	 * Whether any part of the entity is inside a water block.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isInWater: boolean;
	/**
	 * @remarks
	 * 实体是否位于一个固体方块的顶部。此属性可能会以意外的方式表现。
	 * 当实体首次生成时，此属性始终为 true，若实体没有重力，此属性可能会不正确。
	 *
	 * Whether the entity is on top of a solid block. This property
	 * may behave in unexpected ways. This property will always be
	 * true when an Entity is first spawned, and if the Entity has
	 * no gravity this property may be incorrect.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isOnGround: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示实体当前正在睡觉。
	 *
	 * If true, the entity is currently sleeping.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isSleeping: boolean;
	/**
	 * @remarks
	 * 实体是否处于潜行状态——即移动得更慢且更安静。
	 *
	 * Whether the entity is sneaking - that is, moving more slowly
	 * and more quietly.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isSneaking: boolean;
	/**
	 * @remarks
	 * 实体是否处于冲刺状态。例如，玩家正在使用冲刺动作，豹猫在逃跑，或猪用胡萝卜钓竿加速。
	 *
	 * Whether the entity is sprinting. For example, a player using
	 * the sprint action, an ocelot running away or a pig boosting
	 * with Carrot on a Stick.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isSprinting: boolean;
	/**
	 * @remarks
	 * 实体是否处于游泳状态。例如，玩家使用游泳动作或鱼在水中。
	 *
	 * Whether the entity is in the swimming state. For example, a
	 * player using the swim action or a fish in water.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isSwimming: boolean;
	/**
     * @beta
     * @remarks
	 * 返回实体是否可以被脚本操控。当玩家的 EntityLifetimeState 设置为 Loaded 时，
	 * 被认为是有效的。
	 * 
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     */
    readonly isValid: boolean;
	/**
	 * @remarks
	 * 实体的当前位置。
	 *
	 * Current location of the entity.
	 *
	 * @throws This property can throw when used.
	 */
	readonly location: Vector3;
	/**
	 * @remarks
	 * 实体的自定义名称。
	 *
	 * Given name of the entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	nameTag: string;
	/**
	 * @remarks
	 * 返回表示此实体的计分板身份。即使实体被杀死，该身份仍然有效。
	 *
	 * Returns a scoreboard identity that represents this entity.
	 * Will remain valid when the entity is killed.
	 *
	 */
	readonly scoreboardIdentity?: ScoreboardIdentity;
	/**
	 * @beta
	 * @remarks
	 * 获取或设置一个实体，该实体用作与 AI 相关行为（如攻击）的目标。
	 * 若实体当前没有目标，则返回 undefined。
	 *
	 * Retrieves or sets an entity that is used as the target of
	 * AI-related behaviors, like attacking. If the entity
	 * currently has no target returns undefined.
	 *
	 * @throws This property can throw when used.
	 */
	readonly target?: Entity;
	/**
	 * @remarks
	 * 实体类型的标识符，例如 'minecraft:skeleton'。
	 * 即使 {@link Entity.isValid} 为 false，此属性也可访问。
	 *
	 * Identifier of the type of the entity - for example,
	 * 'minecraft:skeleton'. This property is accessible even if
	 * {@link Entity.isValid} is false.
	 *
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 为实体添加或更新一个效果，例如中毒效果。
	 *
	 * Adds or updates an effect, like poison, to the entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param effectType
	 * 要添加到实体的效果类型。
	 * Type of effect to add to the entity.
	 * @param duration
	 * 效果生效的时间，以刻为单位。每秒有20刻。使用 {@link TicksPerSecond} 常量在刻与秒之间转换。值必须在 [0, 20000000] 范围内。
	 * Amount of time, in ticks, for the effect to apply. There are
	 * 20 ticks per second. Use {@link TicksPerSecond} constant to
	 * convert between ticks and seconds. The value must be within
	 * the range [0, 20000000].
	 * @param options
	 * 效果的附加选项。
	 * Additional options for the effect.
	 * @returns
	 * 若效果成功添加或更新，则不返回任何内容。若持续时间或放大等级超出有效范围，或者效果不存在，则可能会抛出错误。
	 * Returns nothing if the effect was added or updated
	 * successfully. This can throw an error if the duration or
	 * amplifier are outside of the valid ranges, or if the effect
	 * does not exist.
	 * @throws This function can throw errors.
	 * @seeExample spawnPoisonedVillager.ts
	 * @seeExample quickFoxLazyDog.ts
	 */
	addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
	/**
	 * @remarks
	 * 为实体添加一个指定的标签。
	 *
	 * Adds a specified tag to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param tag
	 * 要添加的标签内容。标签必须少于256个字符。
	 * Content of the tag to add. The tag must be less than 256
	 * characters.
	 * @returns
	 * 若标签添加成功，则返回 true。若标签已存在于实体上，则可能会失败。
	 * Returns true if the tag was added successfully. This can
	 * fail if the tag already exists on the entity.
	 * @throws This function can throw errors.
	 * @seeExample tagsQuery.ts
	 */
	addTag(tag: string): boolean;
	/**
	 * @remarks
	 * 对实体造成一定的伤害。
	 *
	 * Applies a set of damage to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param amount
	 * 要造成的伤害量。
	 * Amount of damage to apply.
	 * @param options
	 * 关于伤害来源的附加选项，这可能会对实体产生额外的效果或行为。
	 * Additional options about the source of damage, which may add
	 * additional effects or spur additional behaviors on this
	 * entity.
	 * @returns
	 * 实体是否受到任何伤害。若实体是无敌的，或者施加的伤害小于或等于0，则可能返回 false。
	 * Whether the entity takes any damage. This can return false
	 * if the entity is invulnerable or if the damage applied is
	 * less than or equal to 0.
	 * @throws This function can throw errors.
	 * @seeExample applyDamageThenHeal.ts
	 */
	applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
	/**
	 * @remarks
	 * 将冲量向量应用到实体当前的速度上。
	 *
	 * Applies impulse vector to the current velocity of the
	 * entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param vector
	 * 冲量向量。
	 * Impulse vector.
	 * @throws This function can throw errors.
	 * @seeExample applyImpulse.ts
	 */
	applyImpulse(vector: Vector3): void;
	/**
	 * @remarks
	 * 将冲量向量应用到实体当前的速度上。
	 *
	 * Applies impulse vector to the current velocity of the
	 * entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param verticalStrength
	 * 垂直向量的击退强度。
	 * Knockback strength for the vertical vector.
	 * @throws This function can throw errors.
	 * @seeExample bounceSkeletons.ts
	 */
	applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
	/**
	 * @remarks
	 * 清除已设置在此实体上的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this
	 * entity.
	 *
	 * @throws This function can throw errors.
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 将实体当前的速度设置为零。注意，此方法可能对玩家无效。
	 *
	 * Sets the current velocity of the Entity to zero. Note that
	 * this method may not have an impact on Players.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 * @seeExample applyImpulse.ts
	 */
	clearVelocity(): void;
	/**
	 * @remarks
	 * 若实体着火，熄灭火焰。注意，可以通过调用 getComponent('minecraft:onfire') 检查实体是否着火。
	 *
	 * Extinguishes the fire if the entity is on fire. Note that
	 * you can call getComponent('minecraft:onfire') and, if
	 * present, the entity is on fire.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param useEffects
	 * 是否显示与熄灭相关的视觉效果。
	 * Whether to show any visual effects connected to the
	 * extinguishing.
	 * @returns
	 * 返回实体是否着火。
	 * Returns whether the entity was on fire.
	 * @throws This function can throw errors.
	 * @seeExample setOnFire.ts
	 */
	extinguishFire(useEffects?: boolean): boolean;
	/**
	 * @remarks
	 * 返回实体视线方向上第一个相交的方块。
	 *
	 * Returns the first intersecting block from the direction that
	 * this entity is looking at.
	 *
	 * @param options
	 * 射线投射的附加配置选项。
	 * Additional configuration options for the ray cast.
	 * @returns
	 * 返回实体视线方向上第一个相交的方块。
	 * Returns the first intersecting block from the direction that
	 * this entity is looking at.
	 * @throws This function can throw errors.
	 */
	getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
	/**
	 * @remarks
	 * 获取实体的组件（表示附加能力）。
	 *
	 * Gets a component (that represents additional capabilities)
	 * for an entity.
	 *
	 * @param componentId
	 * 组件的标识符（例如 'minecraft:health'）。若未指定命名空间前缀，则默认使用 'minecraft:'。可用的组件标识符可以在 {@link EntityComponentTypes} 枚举中找到。
	 * The identifier of the component (e.g., 'minecraft:health').
	 * If no namespace prefix is specified, 'minecraft:' is
	 * assumed. Available component IDs can be found as part of the
	 * {@link EntityComponentTypes} enum.
	 * @returns
	 * 若组件存在于实体上，则返回该组件，否则返回 undefined。
	 * Returns the component if it exists on the entity, otherwise
	 * undefined.
	 * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
	 */
	getComponent<T extends keyof EntityComponentTypeMap>(componentId: T): EntityComponentTypeMap[T] | undefined;
	/**
	 * @remarks
	 * 返回此实体上存在且 API 支持的所有组件。
	 *
	 * Returns all components that are both present on this entity
	 * and supported by the API.
	 *
	 * @returns
	 * 返回此实体上存在且 API 支持的所有组件。
	 * Returns all components that are both present on this entity
	 * and supported by the API.
	 * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
	 */
	getComponents(): EntityComponent[];
	/**
	 * @remarks
	 * 返回属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性的标识符。
	 * The property identifier.
	 * @returns
	 * 返回属性的值，若属性未设置则返回 undefined。
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 * @throws This function can throw errors.
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
	/**
	 * @remarks
	 * 返回已在此实体上使用的动态属性标识符的可用集合。
	 *
	 * Returns the available set of dynamic property identifiers
	 * that have been used on this entity.
	 *
	 * @returns
	 * 一个字符串数组，包含此实体上设置的动态属性。
	 *
	 * A string array of the dynamic properties set on this entity.
	 * @throws This function can throw errors.
	 */
	getDynamicPropertyIds(): string[];
	/**
	 * @remarks
	 * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。
	 * 这包括键和值的大小。这对于诊断性能警告可能很有用——例如，
	 * 若一个实体有许多兆字节的关联动态属性，它可能会在各种设备上加载缓慢。
	 *
	 * Returns the total size, in bytes, of all the dynamic
	 * properties that are currently stored for this entity. This
	 * includes the size of both the key and the value.  This can
	 * be useful for diagnosing performance warning signs - if, for
	 * example, an entity has many megabytes of associated dynamic
	 * properties, it may be slow to load on various devices.
	 *
	 * @throws This function can throw errors.
	 */
	getDynamicPropertyTotalByteCount(): number;
	/**
	 * @remarks
	 * 返回实体上指定效果类型的效果，若效果不存在则返回 undefined，
	 * 若效果不存在但尝试获取会抛出错误。
	 *
	 * Returns the effect for the specified EffectType on the
	 * entity, undefined if the effect is not present, or throws an
	 * error if the effect does not exist.
	 *
	 * @param effectType
	 * 效果的标识符。
	 *
	 * The effect identifier.
	 * @returns
	 * 返回指定效果的效果对象，若效果不存在则返回 undefined，
	 * 若效果不存在但尝试获取会抛出错误。
	 *
	 * Effect object for the specified effect, undefined if the
	 * effect is not present, or throws an error if the effect does
	 * not exist.
	 * @throws This function can throw errors.
	 */
	getEffect(effectType: EffectType | string): Effect | undefined;
	/**
	 * @remarks
	 * 返回应用于此实体的一组效果。
	 *
	 * Returns a set of effects applied to this entity.
	 *
	 * @returns
	 * 效果列表。
	 *
	 * List of effects.
	 * @throws This function can throw errors.
	 */
	getEffects(): Effect[];
	/**
	 * @remarks
	 * 通过从此实体的视角进行射线投射，获取该实体正在注视的实体。
	 *
	 * Gets the entities that this entity is looking at by
	 * performing a ray cast from the view of this entity.
	 *
	 * @param options
	 * 射线投射的附加配置选项。
	 *
	 * Additional configuration options for the ray cast.
	 * @returns
	 * 返回该实体注视方向上的一组实体。
	 *
	 * Returns a set of entities from the direction that this
	 * entity is looking at.
	 * @throws This function can throw errors.
	 */
	getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
	/**
	 * @remarks
	 * 返回此实体头部组件的当前位置。
	 *
	 * Returns the current location of the head component of this
	 * entity.
	 *
	 * @returns
	 * 返回此实体头部组件的当前位置。
	 *
	 * Returns the current location of the head component of this
	 * entity.
	 * @throws This function can throw errors.
	 */
	getHeadLocation(): Vector3;
	/**
	 * @remarks
	 * 获取实体属性值。若在同一刻使用 setProperty 函数设置了属性，
	 * 则更新的值不会反映直到下一刻。
	 *
	 * Gets an entity Property value. If the property was set using
	 * the setProperty function within the same tick, the updated
	 * value will not be reflected until the subsequent tick.
	 *
	 * @param identifier
	 * 实体属性的标识符。
	 *
	 * The entity Property identifier.
	 * @returns
	 * 返回当前的属性值。对于枚举属性，返回字符串；对于浮点数和整数属性，
	 * 返回数字；对于未定义的属性，返回 undefined。
	 *
	 * Returns the current property value. For enum properties, a
	 * string is returned. For float and int properties, a number
	 * is returned. For undefined properties, undefined is
	 * returned.
	 * @throws
	 * 若实体无效，则抛出错误。
	 *
	 * Throws if the entity is invalid.
	 */
	getProperty(identifier: string): boolean | number | string | undefined;
	/**
	 * @remarks
	 * 返回此实体当前的旋转组件。
	 *
	 * Returns the current rotation component of this entity.
	 *
	 * @returns
	 * 返回包含此实体旋转角度（以度为单位）的 Vec2。
	 *
	 * Returns a Vec2 containing the rotation of this entity (in
	 * degrees).
	 * @throws This function can throw errors.
	 */
	getRotation(): Vector2;
	/**
	 * @remarks
	 * 返回与该实体相关联的所有标签。
	 *
	 * Returns all tags associated with the entity.
	 *
	 * @returns
	 * 包含所有标签的字符串数组。
	 *
	 * An array containing all tags as strings.
	 * @throws This function can throw errors.
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 返回实体的当前速度向量。
	 *
	 * Returns the current velocity vector of the entity.
	 *
	 * @returns
	 * 返回实体的当前速度向量。
	 *
	 * Returns the current velocity vector of the entity.
	 * @throws This function can throw errors.
	 * @seeExample getFireworkVelocity.ts
	 */
	getVelocity(): Vector3;
	/**
	 * @remarks
	 * 返回实体的当前视线方向。
	 *
	 * Returns the current view direction of the entity.
	 *
	 * @returns
	 * 返回实体的当前视线方向。
	 *
	 * Returns the current view direction of the entity.
	 * @throws This function can throw errors.
	 */
	getViewDirection(): Vector3;
	/**
	 * @remarks
	 * 若此实体上存在指定的组件，则返回 true。
	 *
	 * Returns true if the specified component is present on this
	 * entity.
	 *
	 * @param componentId
	 * 要获取的组件的标识符（例如 'minecraft:rideable'）。
	 * 若未指定命名空间前缀，则默认为 'minecraft:'。
	 *
	 * The identifier of the component (e.g., 'minecraft:rideable')
	 * to retrieve. If no namespace prefix is specified,
	 * 'minecraft:' is assumed.
	 * @returns
	 * 若此实体上存在指定的组件，则返回 true。
	 *
	 * Returns true if the specified component is present on this
	 * entity.
	 * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
	 */
	hasComponent(componentId: string): boolean;
	/**
	 * @remarks
	 * 返回实体是否具有特定标签。
	 *
	 * Returns whether an entity has a particular tag.
	 *
	 * @param tag
	 * 要测试的标签标识符。
	 *
	 * Identifier of the tag to test for.
	 * @returns
	 * 返回实体是否具有特定标签。
	 *
	 * Returns whether an entity has a particular tag.
	 * @throws This function can throw errors.
	 */
	hasTag(tag: string): boolean;
	/**
	 * @remarks
	 * 杀死此实体。实体将正常掉落战利品。
	 *
	 * Kills this entity. The entity will drop loot as normal.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 若实体可以被杀死（即使它已经死亡），则返回 true，否则返回 false。
	 *
	 * Returns true if entity can be killed (even if it is already
	 * dead), otherwise it returns false.
	 * @throws This function can throw errors.
	 * @seeExample tagsQuery.ts
	 */
	kill(): boolean;
	/**
	 * @beta
	 * @remarks
	 * 将实体的旋转设置为面向目标位置。适用时，将同时设置俯仰角和偏航角，
	 * 例如对于俯仰角控制头部倾斜、偏航角控制身体旋转的生物。
	 *
	 * Sets the rotation of the entity to face a target location.
	 * Both pitch and yaw will be set, if applicable, such as for
	 * mobs where the pitch controls the head tilt and the yaw
	 * controls the body rotation.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param targetLocation
	 * 实体应面向/注视的目标位置。
	 *
	 * The target location that this entity should face/look
	 * towards.
	 * @throws This function can throw errors.
	 */
	lookAt(targetLocation: Vector3): void;
	/**
	 * @remarks
	 * 将实体与传入的选项进行匹配。若传入的 EntityQueryOptions 中没有指定位置，则使用实体的位置进行匹配。
	 *
	 * Matches the entity against the passed in options. Uses the
	 * location of the entity for matching if the location is not
	 * specified in the passed in EntityQueryOptions.
	 *
	 * @param options
	 * 要进行匹配的查询选项。
	 *
	 * The query to perform the match against.
	 * @returns
	 * 若实体符合传入的 EntityQueryOptions 的条件，则返回 true；否则返回 false。
	 *
	 * Returns true if the entity matches the criteria in the
	 * passed in EntityQueryOptions, otherwise it returns false.
	 * @throws
	 * 若查询选项配置错误，将抛出异常。
	 *
	 * Throws if the query options are misconfigured.
	 */
	matches(options: EntityQueryOptions): boolean;
	/**
	 * @remarks
	 * 使实体播放指定的动画。
	 *
	 * Cause the entity to play the given animation.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param animationName
	 * 动画标识符，例如 animation.creeper.swelling。
	 *
	 * The animation identifier. e.g. animation.creeper.swelling
	 * @param options
	 * 控制动画播放和过渡的附加选项。
	 *
	 * Additional options to control the playback and transitions
	 * of the animation.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	playAnimation(animationName: string, options?: PlayAnimationOptions): void;
	/**
	 * @remarks
	 * 立即将实体从世界中移除。移除的实体不会执行死亡动画或掉落战利品。
	 *
	 * Immediately removes the entity from the world. The removed
	 * entity will not perform a death animation or drop loot upon
	 * removal.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 * This function can throw errors.
	 */
	remove(): void;
	/**
	 * @remarks
	 * 移除实体上的指定效果类型，若效果不存在则返回 false。
	 *
	 * Removes the specified EffectType on the entity, or returns
	 * false if the effect is not present.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param effectType
	 * 效果标识符。
	 *
	 * The effect identifier.
	 * @returns
	 * 若效果已被移除，则返回 true。若未找到该效果或效果不存在，则返回 false。
	 *
	 * Returns true if the effect has been removed. Returns false
	 * if the effect is not found or does not exist.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	removeEffect(effectType: EffectType | string): boolean;
	/**
	 * @remarks
	 * 从实体中移除指定的标签。
	 *
	 * Removes a specified tag from an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param tag
	 * 要移除的标签内容。
	 *
	 * Content of the tag to remove.
	 * @returns
	 * 返回该标签是否存在于实体上。
	 *
	 * Returns whether the tag existed on the entity.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	removeTag(tag: string): boolean;
	/**
	 * @remarks
	 * 将实体属性重置为其定义中指定的默认值。此属性更改将在下一个 tick 应用。
	 *
	 * Resets an Entity Property back to its default value, as
	 * specified in the Entity's definition. This property change
	 * is not applied until the next tick.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The Entity Property identifier.
	 * @returns
	 * 返回默认属性值。对于枚举属性，返回字符串；对于浮点和整数属性，返回数字；对于未定义的属性，返回 undefined。
	 *
	 * Returns the default property value. For enum properties, a
	 * string is returned. For float and int properties, a number
	 * is returned. For undefined properties, undefined is
	 * returned.
	 * @throws
	 * 若实体无效，将抛出异常。
	 *
	 * Throws if the entity is invalid.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 */
	resetProperty(identifier: string): boolean | number | string;
	/**
	 * @remarks
	 * 在实体上运行同步命令。
	 *
	 * Runs a synchronous command on the entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param commandString
	 * 命令字符串。注意：不应包含前导斜杠:"/"。
	 *
	 * The command string. Note: This should not include a leading
	 * forward slash.
	 * @returns
	 * 包含命令是否成功的结果。
	 *
	 * A command result containing whether the command was
	 * successful.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link CommandError}
	 *
	 * {@link Error}
	 */
	runCommand(commandString: string): CommandResult;
	/**
	 * @attention 注：此方法在最新版已被删除，这里为了兼容性保留
	 * @remarks
	 * 从该实体的上下文中运行特定命令（异步）。注意，在给定的 tick 中最多可以运行 128 个异步命令。
	 *
	 * Runs a particular command asynchronously from the context of
	 * this entity. Note that there is a maximum queue of 128
	 * asynchronous commands that can be run in a given tick.
	 *
	 * @param commandString
	 * 要运行的命令。注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start
	 * with slash.
	 * @returns
	 * 对于返回数据的命令，将返回包含命令响应值的 JSON 结构。
	 *
	 * For commands that return data, returns a JSON structure with
	 * command response values.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	runCommandAsync(commandString: string): Promise<CommandResult>;
	/**
	 * @beta
	 * @remarks
	 * 设置多个动态属性的具体值。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 要设置的动态属性的键值对记录。
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 * @throws 此函数可能会抛出错误。
	 * This function can throw errors.
	 */
	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 将指定属性设置为某个值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @param value
	 * 要设置的属性数据值。
	 *
	 * Data value of the property to set.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 将实体点燃（若不在水中或雨中）。注意，可以调用 getComponent('minecraft:onfire')，若存在，该实体处于燃烧状态。
	 *
	 * Sets an entity on fire (if it is not in water or rain). Note
	 * that you can call getComponent('minecraft:onfire') and, if
	 * present, the entity is on fire.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param seconds
	 * 点燃实体的时间长度。
	 *
	 * Length of time to set the entity on fire.
	 * @param useEffects
	 * 是否应用副作用（例如解冻冻结）以及是否考虑其他条件（如下雨或防火保护）。
	 *
	 * Whether side-effects should be applied (e.g. thawing freeze)
	 * and other conditions such as rain or fire protection should
	 * be taken into consideration.
	 * @returns
	 * 实体是否被点燃。若秒数小于或等于零，实体湿润，或实体免疫火焰，则可能失败。
	 *
	 * Whether the entity was set on fire. This can fail if seconds
	 * is less than or equal to zero, the entity is wet or the
	 * entity is immune to fire.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 * @seeExample setOnFire.ts
	 */
	setOnFire(seconds: number, useEffects?: boolean): boolean;
	/**
	 * @remarks
	 * 将实体属性设置为提供的值。此属性更改将在下一个 tick 应用。
	 *
	 * Sets an Entity Property to the provided value. This property
	 * change is not applied until the next tick.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The Entity Property identifier.
	 * @param value
	 * 属性值。提供的类型必须与实体定义中指定的类型兼容。
	 *
	 * The property value. The provided type must be compatible
	 * with the type specified in the entity's definition.
	 * @throws
	 * 若实体无效，将抛出异常。
	 *
	 * Throws if the entity is invalid.
	 *
	 * 若提供了无效的标识符，将抛出异常。
	 *
	 * Throws if an invalid identifier is provided.
	 *
	 * 若提供的值类型与属性类型不匹配，将抛出异常。
	 *
	 * Throws if the provided value type does not match the
	 * property type.
	 *
	 * 若提供的值超出预期范围（整型、浮点型属性），将抛出异常。
	 *
	 * Throws if the provided value is outside the expected range
	 * (int, float properties).
	 *
	 * 若提供的字符串值与接受的枚举值集合不匹配（枚举属性），将抛出异常。
	 *
	 * Throws if the provided string value does not match the set
	 * of accepted enum values (enum properties)
	 */
	setProperty(identifier: string, value: boolean | number | string): void;
	/**
	 * @remarks
	 * 设置实体的主要旋转角度。
	 *
	 * Sets the main rotation of the entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param rotation
	 * 实体的 x 和 y 旋转角度（以度为单位）。对于大多数生物，x 旋转控制头部倾斜，y 旋转控制身体旋转。
	 *
	 * The x and y rotation of the entity (in degrees). For most
	 * mobs, the x rotation controls the head tilt and the y
	 * rotation controls the body rotation.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setRotation(rotation: Vector2): void;
	/**
	 * @remarks
	 * 将选定的实体传送到新位置。
	 *
	 * Teleports the selected entity to a new location
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 实体的新位置。
	 *
	 * New location for the entity.
	 * @param teleportOptions
	 * 有关传送操作的选项。
	 *
	 * Options regarding the teleport operation.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 * @seeExample teleport.ts
	 * @seeExample teleportMovement.ts
	 */
	teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
	/**
	 * @remarks
	 * 触发实体类型事件。对于每个实体，在实体定义中定义了一些关键行为的事件；例如，爬行者有一个 minecraft:start_exploding 类型事件。
	 *
	 * Triggers an entity type event. For every entity, a number of
	 * events are defined in an entities' definition for key entity
	 * behaviors; for example, creepers have a
	 * minecraft:start_exploding type event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param eventName
	 * 要触发的实体类型事件的名称。若未指定命名空间，则默认为 minecraft:。
	 * Name of the entity type event to trigger. If a namespace is
	 * not specified, minecraft: is assumed.
	 * @throws
	 * 若事件在实体定义中未定义，则会抛出错误。
	 * If the event is not defined in the definition of the entity,
	 * an error will be thrown.
	 * @seeExample triggerEvent.ts e0d38a47
	 * @seeExample triggerEvent.ts b473e4eb
	 */
	triggerEvent(eventName: string): void;
	/**
	 * @remarks
	 * 尝试传送，但可能无法完成传送操作（例如，若目标位置有方块）。
	 *
	 * Attempts to try a teleport, but may not complete the
	 * teleport operation (for example, if there are blocks at the
	 * destination.)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 要传送实体到的位置。
	 *
	 * Location to teleport the entity to.
	 * @param teleportOptions
	 * 有关传送操作的选项。
	 *
	 * Options regarding the teleport operation.
	 * @returns
	 * 返回传送是否成功。若目标区块未加载或传送会与方块相交，则可能失败。
	 *
	 * Returns whether the teleport succeeded. This can fail if the
	 * destination chunk is unloaded or if the teleport would
	 * result in intersecting with blocks.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/**
 * 当添加此组件时，会使实体生成时带有指定类型的骑乘者。
 * 
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示在特定条件下生成该实体时，作为骑乘者添加的实体类型。
     * 
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * 表示当骑乘者为该实体生成时，可选的触发骑乘者的生成事件。
     * 
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}

/**
 * 为实体添加一个成长计时器。可以通过喂给实体它喜欢的物品（由 feedItems 定义）来加速成长。
 * 
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体成长为成年所需的时间，-1 表示永远是幼体。
     * 
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 表示当实体成长为成年时触发的事件。
     * 
     * Event that runs when this entity grows up.
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 表示成功交互后，喂食的物品将转化为的物品。
     * 
     * The feed item used will transform into this item upon
     * successful interaction.
     *
     * @throws This property can throw when used.
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 表示实体成长为成年时掉落的物品列表。
     * 
     * List of items that the entity drops when it grows up.
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 表示可以喂给实体的物品列表。包括物品名称的 'item' 和定义成长时间的 'growth'。
     * 
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

/**
 * 这是一个用于实体组件的基础抽象类，主要用于处理数值类型
 * 并且可以定义最小值、最大值和默认值。
 *
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此实例中该属性的当前值。
	 *
	 * Current value of this attribute for this instance.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly currentValue: number;
	/**
	 * @remarks
	 * 返回该属性定义的默认值。
	 *
	 * Returns the default defined value for this attribute.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly defaultValue: number;
	/**
	 * @remarks
	 * 返回在任何其他环境组件或因素影响下，该属性的有效最大值。
	 *
	 * Returns the effective max of this attribute given any other
	 * ambient components or factors.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly effectiveMax: number;
	/**
	 * @remarks
	 * 返回在任何其他环境组件或因素影响下，该属性的有效最小值。
	 *
	 * Returns the effective min of this attribute given any other
	 * ambient components or factors.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly effectiveMin: number;
	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的默认值。
	 *
	 * Resets the current value of this attribute to the defined
	 * default value.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	resetToDefaultValue(): void;
	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的最大值。
	 *
	 * Resets the current value of this attribute to the maximum
	 * defined value.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	resetToMaxValue(): void;
	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的最小值。
	 *
	 * Resets the current value of this attribute to the minimum
	 * defined value.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	resetToMinValue(): void;
	/**
	 * @remarks
	 * 设置该属性的当前值。提供的值将被限制在该属性的范围内。
	 *
	 * Sets the current value of this attribute. The provided value
	 * will be clamped to the range of this attribute.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	setCurrentValue(value: number): boolean;
}

/**
 * 实体移动事件族的基础类。
 *
 * Base class for a family of entity movement events.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此移动模式下生物的最大转向速度。
	 *
	 * Maximum turn rate for this movement modality of the mob.
	 *
	 * @throws 使用此属性时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly maxTurn: number;
}

/**
 * 定义实体可以在何种方块中呼吸，并赋予它们窒息的能力。
 *
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
	private constructor();
	/**
	 * @beta
	 * @remarks
	 * 表示实体当前的空气供应量。
	 *
	 * The current air supply of the entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若空气供应超出范围 [suffocationTime, maxAirSupply]，将抛出错误。
	 *
	 * Will throw an error if the air supply is out of bounds
	 * [suffocationTime, maxAirSupply].
	 */
	airSupply: number;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在空气中呼吸。
	 *
	 * If true, this entity can breathe in air.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesAir: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在岩浆中呼吸。
	 *
	 * If true, this entity can breathe in lava.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesLava: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在固体方块中呼吸。
	 *
	 * If true, this entity can breathe in solid blocks.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesSolids: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在水中呼吸。
	 *
	 * If true, this entity can breathe in water.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesWater: boolean;
	/**
	 * @beta
	 * @remarks
	 * 若为 `true`，则表示该实体能够呼吸。
	 *
	 * If true, the entity is able to breathe.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly canBreathe: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体在水中时会有可见的气泡。
	 *
	 * If true, this entity will have visible bubbles while in
	 * water.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly generatesBubbles: boolean;
	/**
	 * @remarks
	 * 表示恢复到最大呼吸所需的时间（以秒为单位）。
	 *
	 * Time in seconds to recover breath to maximum.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly inhaleTime: number;
	/**
	 * @remarks
	 * 表示窒息伤害之间的时间间隔（以秒为单位）。
	 *
	 * Time in seconds between suffocation damage.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly suffocateTime: number;
	/**
	 * @remarks
	 * 表示实体可以屏住呼吸的时间（以秒为单位）。
	 *
	 * Time in seconds the entity can hold its breath.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly totalSupply: number;
	static readonly componentId = 'minecraft:breathable';
	/**
	 * @remarks
	 * 表示该实体可以呼吸的方块列表，除了分类的方块属性外。
	 *
	 * List of blocks this entity can breathe in, in addition to
	 * the separate properties for classes of blocks.
	 *
	 * @throws 调用此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	getBreatheBlocks(): BlockPermutation[];
	/**
	 * @remarks
	 * 表示该实体不能呼吸的方块列表。
	 *
	 * List of blocks this entity can't breathe in.
	 *
	 * @throws 调用此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	getNonBreatheBlocks(): BlockPermutation[];
}

/**
 * 当添加此组件时，表示该实体可以攀爬梯子。
 *
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:can_climb';
}

/**
 * 当添加此组件时，表示该实体可以飞行，且寻路器不会被限制在需要下方有固体方块的路径上。
 *
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:can_fly';
}

/**
 * 当添加此组件时，表示该实体可以像Minecraft中的马一样进行蓄力跳跃。
 * 
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}

/**
 * 定义实体的次要颜色。仅适用于某些具有次预定义颜色值的实体（例如热带鱼）。
 *
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此属性表示该次要颜色的具体值。
	 *
	 * Value of this particular color.
	 *
	 * @throws 使用此属性时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly value: PaletteColor;
	static readonly componentId = 'minecraft:color2';
}

/**
 * 定义实体的颜色。仅对某些具有预定义颜色值的实体有效
 * （例如，羊、羊驼、潜影贝）。
 *
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此颜色的具体值。
	 *
	 * Value of this particular color.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = 'minecraft:color';
}

/**
 * 用于下游实体组件的基本类。(所有实体组件的父类。)
 *
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
	private constructor();
	/**
	 * @remarks
	 * 拥有此组件的实体。若该实体已被移除，则为 undefined。
	 *
	 * The entity that owns this component. The entity will be
	 * undefined if it has been removed.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link InvalidEntityError}
	 */
	readonly entity: Entity;
}

/**
 * 作为 Ageable 组件的一部分，表示可以喂食给实体的物品集合，以及这些物品使实体成长的速度。
 *
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
	private constructor();
	/**
	 * @remarks
	 * 表示给实体喂食该物品时，实体的年龄会增加的数值。通常范围在 0 到 1 之间。
	 *
	 * The amount by which an entity's age will increase when fed
	 * this item. Values usually range between 0 and 1.
	 *
	 */
	readonly growth: number;
	/**
	 * @remarks
	 * 表示可以喂食物品类型的标识符。若未指定命名空间，则默认使用 'minecraft:'。例如 'wheat' 或 'golden_apple'。
	 *
	 * Identifier of type of item that can be fed. If a namespace
	 * is not specified, 'minecraft:' is assumed. Example values
	 * include 'wheat' or 'golden_apple'.
	 *
	 */
	readonly item: string;
}

/**
 * 表示游戏中实体死亡后的相关数据。
 *
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 若指定，提供有关导致该实体死亡的伤害来源的更多信息。
	 *
	 * If specified, provides more information on the source of
	 * damage that caused the death of this entity.
	 *
	 */
	readonly damageSource: EntityDamageSource;
	/**
	 * @remarks
	 * 已死亡的实体对象。
	 *
	 * Now-dead entity object.
	 *
	 */
	readonly deadEntity: Entity;
}

/**
 * 支持注册一个事件，该事件会在实体死亡后触发。
 *
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅一个事件，当实体死亡时触发。
     *
     * Subscribes to an event that fires when an entity dies.
     *
     * 此函数不能在只读模式下调用。
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 实体死亡时调用的函数。
     *
     * Function to call when an entity dies.
     * @param options
     * 订阅触发时的额外过滤选项。
     *
     * Additional filtering options for when the subscription
     * fires.
     * @returns
     * 返回一个闭包，可用于后续取消订阅的调用。
     *
     * Returns the closure that can be used in future downstream
     * calls to unsubscribe.
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 停止调用此事件，当实体死亡时不再触发你的函数。
     *
     * Stops this event from calling your function when an entity
     * dies.
     *
     * 此函数不能在只读模式下调用。
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}

/**
 * 提供对生物装备槽的访问。此组件存在于所有生物实体上。
 *
 * Provides access to a mob's equipment slots. This component
 * exists for all mob entities.
 * @seeExample givePlayerElytra.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:equippable';
	/**
	 * @remarks
	 * 获取指定装备槽位中的装备物品。
	 *
	 * Gets the equipped item for the given EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽位，例如 "head"（头部）、"chest"（胸部）、"offhand"（副手）。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand"
	 * @returns
	 * 返回装备在指定装备槽位中的物品。若为空，则返回 undefined。
	 *
	 * Returns the item equipped to the given EquipmentSlot. If
	 * empty, returns undefined.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
	/**
	 * @remarks
	 * 获取与指定装备槽位对应的 ContainerSlot(容器槽位)。
	 *
	 * Gets the ContainerSlot corresponding to the given
	 * EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽位，例如 "head"（头部）、"chest"（胸部）、"offhand"（副手）。
	 * The equipment slot. e.g. "head", "chest", "offhand".
	 * @returns
	 * 返回与指定装备槽位对应的 ContainerSlot(容器槽位)。
	 *
	 * Returns the ContainerSlot corresponding to the given
	 * EquipmentSlot.
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
	/**
	 * @remarks
	 * 替换指定装备槽位中的物品。
	 *
	 * Replaces the item in the given EquipmentSlot.
	 *
	 * 此函数无法在只读模式下调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param equipmentSlot
	 * 装备槽位，例如 "head"（头部）、"chest"（胸部）、"offhand"（副手）。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand".
	 * @param itemStack
	 * 要装备的物品。若为 undefined，则清空该槽位。
	 *
	 * The item to equip. If undefined, clears the slot.
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

/**
 * 当添加此组件时，表示该实体不会受到火焰伤害。
 * 
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}

/**
 * 当添加此组件时，表示该实体可以在液体方块中浮动。
 *
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:floats_in_liquid';
}

/**
 * 表示实体的飞行速度。
 *
 * Represents the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示实体当前的飞行速度数值。
	 *
	 * Current value of the flying speed of the associated entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = 'minecraft:flying_speed';
}

/**
 * 表示摩擦力如何影响该实体。
 *
 * Defines how much friction affects this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体当前的摩擦系数调整值。
	 *
	 * Current value of the friction modifier of the associated
	 * entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = 'minecraft:friction_modifier';
}

/**
 * 设置实体距离地面的偏移量。
 *
 * Sets the offset from the ground that the entity is actually at.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此属性表示当前地面偏移量的值。注意，该值实际上是只读的；设置地面偏移量的值不会对相关实体产生影响。
	 *
	 * Value of this particular ground offset. Note that this value
	 * is effectively read only; setting the ground offset value
	 * will not have an impact on the related entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = 'minecraft:ground_offset';
}

/**
 * 定义了与该实体交互以治疗它的方式。
 *
 * Defines the interactions with this entity for healing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 确定是否可以使用某个物品，即使实体的生命值已满。
	 *
	 * Determines if an item can be used regardless of the entity
	 * being at full health.
	 *
	 * @throws 使用此属性时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly forceUse: boolean;
	static readonly componentId = 'minecraft:healable';
	/**
	 * @remarks
	 * 一组可以专门治疗该实体的物品。
	 *
	 * A set of items that can specifically heal this entity.
	 *
	 * @returns
	 * 与此组件关联的实体。
	 *
	 * Entity that this component is associated with.
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	getFeedItems(): FeedItem[];
}

/**
 * 表示与实体生命值变化相关的信息。警告：不要在此事件中更改实体的生命值，否则会导致无限循环！
 *
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in
 * this event, or it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 生命值发生变化的实体。
	 *
	 * Entity whose health changed.
	 *
	 */
	readonly entity: Entity;
	/**
	 * @remarks
	 * 实体的新生命值。
	 *
	 * New health value of the entity.
	 *
	 */
	readonly newValue: number;
	/**
	 * @remarks
	 * 实体的旧生命值。
	 *
	 * Old health value of the entity.
	 *
	 */
	readonly oldValue: number;
}

/**
 * 管理与实体生命值变化相关的回调函数。
 *
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 */
export class EntityHealthChangedAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当实体的生命值发生变化时会调用该函数。
     * 
	 * Adds a callback that will be called when the health of an
     * entity changes.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 该函数可以在早期执行模式下调用。
	 *
	 * Adds a callback that will be called when the health of an
	 * entity changes.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHealthChangedAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EntityHealthChangedAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体生命值变化时被调用。
     * 
     * Removes a callback from being called when the health of an
     * entity changes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 该函数可以在早期执行模式下调用。
	 *
	 * Removes a callback from being called when the health of an
	 * entity changes.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * 表示实体的生命值属性。
 *
 * Defines the health properties of an entity.
 * @seeExample applyDamageThenHeal.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
	private constructor();
	static readonly componentId = 'minecraft:health';
}

/**
 * 表示实体击中方块相关的信息。
 *
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 被击中的方块的面。
	 *
	 * Face of the block that was hit.
	 */
	readonly blockFace: Direction;
	/**
	 * @remarks
	 * 发起攻击的实体。
	 *
	 * Entity that made the attack.
	 */
	readonly damagingEntity: Entity;
	/**
	 * @remarks
	 * 被攻击击中的方块。
	 *
	 * Block that was hit by the attack.
	 */
	readonly hitBlock: Block;
	/**
	 * @remarks
	 * 被攻击击中的方块状态。
	 *
	 * Block permutation that was hit by the attack.
	 */
	readonly hitBlockPermutation: BlockPermutation;
}

/**
 * 管理与实体撞击方块时触发的回调函数。
 *
 * Manages callbacks that are connected to when an entity hits
 * a block.
 */
export class EntityHitBlockAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当实体撞击方块时会调用该回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可在早期执行模式下调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHitBlockAfterEvent) => void,
		options?: EntityEventOptions
	): (arg0: EntityHitBlockAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体撞击方块时被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可在早期执行模式下调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

/**
 * 表示一个实体击中（近战攻击）另一个实体相关的信息。
 *
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEntityAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示发起击中/近战攻击的实体。
	 *
	 * Entity that made a hit/melee attack.
	 */
	readonly damagingEntity: Entity;
	/**
	 * @remarks
	 * 表示被攻击击中的实体。
	 *
	 * Entity that was hit by the attack.
	 */
	readonly hitEntity: Entity;
}

/**
 * 管理实体对另一个实体进行近战攻击时触发的回调。
 *
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEntityAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当一个实体攻击另一个实体时会调用该回调函数。
     * 
	 * Adds a callback that will be called when an entity hits
     * another entity.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHitEntityAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EntityHitEntityAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体进行近战攻击时被调用。
	 *
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}

/**
 * 表示与实体受伤相关的信息。
 *
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示造成的伤害量。
	 *
	 * Describes the amount of damage caused.
	 *
	 */
	readonly damage: number;
	/**
	 * @remarks
	 * 表示可能造成此伤害的实体的来源信息。
	 *
	 * Source information on the entity that may have applied this
	 * damage.
	 *
	 */
	readonly damageSource: EntityDamageSource;
	/**
	 * @remarks
	 * 表示受伤的实体。
	 *
	 * Entity that was hurt.
	 *
	 */
	readonly hurtEntity: Entity;
}

/**
 * 管理与实体受伤事件相关的回调函数。
 *
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当实体受伤时会调用该回调函数。
     * 
     * Adds a callback that will be called when an entity is hurt.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHurtAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EntityHurtAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体受伤时被调用。
     * 
     * Removes a callback from being called when an entity is hurt.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}

/**
 * 表示一个实体的物品栏属性。
 * 
 * Defines this entity's inventory properties.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
     * 
     * Number of slots that this entity can gain per extra
     * strength.
     *
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
     * 
     * If true, the contents of this inventory can be removed by a
     * hopper.
     *
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 表示实体的容器。若实体已被移除则为 `undefined`。
     * 
     * Defines the container for this entity. The container will be
     * undefined if the entity has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @remarks
     * 表示实体容器的种类。
     * 
     * Type of container this entity has.
     *
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks
     * 表示实体容器的槽位数量。
     * 
     * Number of slots the container has.
     *
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
     * 
     * If true, the entity will not drop it's inventory on death.
     *
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
     * 
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     *
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * 当添加此组件时，表示该实体是一个幼体。
 *
 * When added, this component signifies that this entity is a
 * baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:is_baby';
}

/**
 * When added, this component signifies that this entity is
 * charged.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * When added, this component signifies that this entity is an
 * illager captain.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * When added, this component signifies that this entity is
 * currently sheared.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * When added, this component signifies that this entity can be
 * stacked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}

/**
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     *
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}

/**
 * @beta
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    next(): IteratorResult<Entity>;
}

/**
 * Defines the base movement speed in lava of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:lava_movement';
}

/**
 * Allows the entity to be leashed. Defines the conditions and
 * events for when an entity is leashed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns true if another entity can 'steal' the leashed
     * entity by attaching their own leash to it.
     *
     * @throws This property can throw when used.
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * Distance in blocks at which the leash stiffens, restricting
     * movement.
     *
     * @throws This property can throw when used.
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * Returns true if the entity is leashed.
     *
     * @throws This property can throw when used.
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * Entity that is holding the leash.
     *
     * @throws This property can throw when used.
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * Identifier of entity that is holding the leash.
     *
     * @throws This property can throw when used.
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * Distance in blocks at which the leash breaks.
     *
     * @throws This property can throw when used.
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws
     * Throws if the entity to leash to is over the max distance,
     * and if the player is dead or in spectator mode.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}

/**
 * Contains data related to an entity loaded within the world.
 * This could happen when an unloaded chunk is reloaded, or
 * when an entity changes dimensions.
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that was loaded.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    entity: Entity;
}

/**
 * Registers a script-based event handler for handling what
 * happens when an entity loads.
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity loads.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function that handles the load event.
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}

/**
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the mark variant value for this entity.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * This component accents the movement of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * Defines the general movement speed of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}

/**
 * When added, this move control causes the mob to fly.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}

/**
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}

/**
 * When added, this movement control allows the mob to glide.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Speed in effect when the entity is turning.
     *
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * Start speed during a glide.
     *
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}

/**
 * When added, this move control causes the mob to hover.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}

/**
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}

/**
 * When added, this move control causes the mob to hop as it
 * moves.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}

/**
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Amplitude of the sway motion.
     *
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * Amount of sway frequency.
     *
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}

/**
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}

/**
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     *
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid water when creating a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     *
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     *
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can float.
     *
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump up blocks.
     *
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * Whether a path can be created through a door.
     *
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can start pathing when in the
     * air.
     *
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     *
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     *
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     *
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     *
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     *
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     *
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     *
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
}

/**
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}

/**
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}

/**
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}

/**
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}

/**
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}

/**
 * @beta
 * Adds NPC capabilities to an entity such as custom skin,
 * name, and dialogue interactions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The DialogueScene that is opened when players first interact
     * with the NPC.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * The name of the NPC as it is displayed to players.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    name: string;
    /**
     * @remarks
     * The index of the skin the NPC will use.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}

/**
 * When present on an entity, this entity is on fire.
 * @seeExample setOnFire.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The number of ticks remaining before the fire goes out.
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}

/**
 * The projectile component controls the properties of a
 * projectile entity and allows it to be shot in a given
 * direction.
 * This component is present when the entity has the
 * minecraft:projectile component.
 * @seeExample shootArrow.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The fraction of the projectile's speed maintained every tick
     * while traveling through air.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    airInertia: number;
    /**
     * @remarks
     * If true, the entity will be set on fire when hurt. The
     * default burn duration is 5 seconds. This duration can be
     * modified via the onFireTime property. The entity will not
     * catch fire if immune or if the entity is wet.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * If true, the projectile will spawn crit particles when hit
     * by a player. E.g. Player attacking a Shulker bullet.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * If true, the projectile will be destroyed when it takes
     * damage. E.g. Player attacking a Shulker bullet.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * The gravity applied to the projectile. When the entity is
     * not on the ground, subtracts this amount from the
     * projectile’s change in vertical position every tick. The
     * higher the value, the faster the projectile falls. If
     * negative, the entity will rise instead of fall.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    gravity: number;
    /**
     * @remarks
     * The sound that plays when the projectile hits an entity.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * The sound that plays when the projectile hits a block.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * The particle that spawns when the projectile hits something.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * If true and the weather is thunder and the entity has line
     * of sight to the sky, the entity will be struck by lightning
     * when hit. E.g. A thrown Trident with the Channeling
     * enchantment.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * The fraction of the projectile's speed maintained every tick
     * while traveling through a liquid.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * Duration in seconds that the entity hit will be on fire for
     * when catchFireOnHurt is set to true.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * The owner of the projectile. This is used to determine what
     * the projectile can collide with and damage. It also
     * determines which entity is assigned as the attacker.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * If true, the projectile will bounce off mobs when no damage
     * is taken. E.g. A spawning wither.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * If true, the projectile will stop moving when an entity is
     * hit as thought it had been blocked. E.g. Thrown trident on
     * hit behavior.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * Shoots the projectile with a given velocity. The projectile
     * will be shot from its current location.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param velocity
     * The velocity to fire the projectile. This controls both the
     * speed and direction which which the projectile will be shot.
     * @param options
     * Optional configuration for the shoot.
     * @throws
     * Throws if the component or entity no longer exist.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

/**
 * Sets the distance through which the entity can push through.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the push through distances of this entity.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:push_through';
}

/**
 * Data for an event that happens when an entity is removed
 * from the world (for example, the entity is unloaded because
 * it is not close to players.)
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Id of the entity that was removed.
     *
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * Identifier of the type of the entity removed - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly typeId: string;
}

/**
 * Allows registration for an event that fires when an entity
 * is removed from  the game (for example, unloaded, or a few
 * seconds after they are dead.)
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is removed from
     * the game.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function to call.
     * @param options
     * Additional filtering options for this event.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is removed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

/**
 * Data for an event that happens when an entity is being
 * removed from the world (for example, the entity is unloaded
 * because it is not close to players.)
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * Reference to an entity that is being removed.
     *
     */
    readonly removedEntity: Entity;
}

/**
 * Allows registration for an event that fires when an entity
 * is being removed from  the game (for example, unloaded, or a
 * few seconds after they are dead.)
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is being
     * removed from the game.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function to call.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is being removed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}

/**
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 * @seeExample minibiomes.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * @remarks
     * The max width a mob can be to be a passenger.
     *
     * @throws This property can throw when used.
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * Number of seats for riders defined for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     * @seeExample minibiomes.ts
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @remarks
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

/**
 * This component is added to any entity when it is riding
 * another entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The entity this entity is currently riding on.
     *
     * @throws This property can throw when used.
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}

/**
 * Sets the entity's visual size.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for the scale property set on entities.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:scale';
}

/**
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns the value of the skin Id identifier of the entity.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * Contains data related to an entity spawning within the
 * world.
 * @seeExample logEntitySpawnEvent.ts
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * Initialization cause (Spawned, Born ...).
     *
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * Entity that was spawned.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    entity: Entity;
}

/**
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity spawns.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function that handles the spawn event.
     * @seeExample logEntitySpawnEvent.ts
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}

/**
 * @beta
 * A container for arguments passed to
 * SpawnRulesRegistry.registerEntitySpawnCallback
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class EntitySpawnCallbackArgs {
    private constructor();
    /**
     * @remarks
     * The dimension and location of the spawn.
     *
     */
    readonly dimensionLocation: DimensionLocation;
    /**
     * @remarks
     * The reason for the spawn.
     *
     */
    readonly spawnReason: EntitySpawnReason;
    /**
     * @remarks
     * The entity spawn type.
     *
     */
    readonly spawnType: EntitySpawnType;
}

/**
 * @beta
 * A container for information relating to an entity spawn
 * event.
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class EntitySpawnType {
    private constructor();
    /**
     * @remarks
     * The entity Id.
     *
     */
    readonly entityId: string;
    /**
     * @remarks
     * The height of the entity to spawn.
     *
     */
    readonly height: number;
    /**
     * @remarks
     * Is the entity immune to fire.
     *
     */
    readonly isImmuneFire: boolean;
    /**
     * @remarks
     * Is the entity summonable.
     *
     */
    readonly isSummonable: boolean;
    /**
     * @remarks
     * The category determining the type of spawn.
     *
     */
    readonly spawnCategory: EntitySpawnCategory;
    /**
     * @remarks
     * The width of the entity to spawn.
     *
     */
    readonly width: number;
    /**
     * @remarks
     * Helper to get the AABB for the entity at a given location
     *
     */
    getSpawnAABB(position: Vector3): BoundingBox;
    /**
     * @remarks
     * Is the block being spawned on dangerous.
     *
     */
    isBlockDangerous(block: Block): boolean;
}

/**
 * Defines the entity's ability to carry items. An entity with
 * a higher strength would have higher potential carry capacity
 * and more item slots.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     *
     * @throws This property can throw when used.
     */
    readonly max: number;
    /**
     * @remarks
     * Current value of the strength component that has been set
     * for entities.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}

/**
 * Defines the rules for an entity to be tamed by the player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * @throws This property can throw when used.
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * Returns true if the entity is tamed by player.
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Set this entity as tamed by the given player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(player: Player): boolean;
}

/**
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns true if the entity is tamed.
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * Returns true if the entity is tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * Sets this rideable entity as tamed by the given player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}

/**
 * Represents information about a type of entity.
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly id: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @throws This function can throw errors.
     */
    getTypeFamilies(): string[];
    /**
     * @throws This function can throw errors.
     */
    hasTypeFamily(typeFamily: string): boolean;
}

/**
 * @beta
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    [Symbol.iterator](): Iterator<EntityType>;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    next(): IteratorResult<EntityType>;
}

/**
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     *
     */
    static get(identifier: string): EntityType | undefined;
    /**
     * @remarks
     * Retrieves a set of all entity types within this world.
     *
     */
    static getAll(): EntityType[];
}

/**
 * Defines the general movement speed underwater of this
 * entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:underwater_movement';
}

/**
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for variant for this entity, as specified via
     * components.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}

/**
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}

/**
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where the explosion has occurred.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * A collection of blocks impacted by this explosion event.
     *
     */
    getImpactedBlocks(): Block[];
}

/**
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}

/**
 * Contains information regarding an explosion that has
 * happened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the explosion event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Updates a collection of blocks impacted by this explosion
     * event.
     *
     * @param blocks
     * New list of blocks that are impacted by this explosion.
     */
    setImpactedBlocks(blocks: Block[]): void;
}

/**
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}

/**
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     */
    getEffects(): FeedItemEffect[];
}

/**
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * Gets the duration, in ticks, of this effect.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     *
     */
    readonly name: string;
}

/**
 * @beta
 * Represents a set of filters for when an event should occur.
 */
export class FilterGroup {
    private constructor();
}

/**
 * Represents constants related to fluid containers.
 */
export class FluidContainer {
    private constructor();
    /**
     * @remarks
     * Constant that represents the maximum fill level of a fluid
     * container.
     *
     */
    static readonly maxFillLevel = 6;
    /**
     * @remarks
     * Constant that represents the minimum fill level of a fluid
     * container.
     *
     */
    static readonly minFillLevel = 0;
}

/**
 * Contains information regarding a changed world.gameRules
 * property.
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The rule identifier pertaining to the changed
     * world.gameRules property.
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * The value of the world.gameRules property after being
     * changed.
     *
     */
    readonly value: boolean | number;
}

/**
 * Manages callbacks that are connected to when a
 * world.gameRules property has changed.
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world.gameRules
     * property is changed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world.gameRules
     * property is changed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}

/**
 * Represents the game rules for a world experience.
 */
export class GameRules {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    commandBlockOutput: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    commandBlocksEnabled: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doDayLightCycle: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doEntityDrops: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doFireTick: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doImmediateRespawn: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doInsomnia: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doLimitedCrafting: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doMobLoot: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doMobSpawning: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doTileDrops: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    doWeatherCycle: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    drowningDamage: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    fallDamage: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    fireDamage: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    freezeDamage: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    functionCommandLimit: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    keepInventory: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    maxCommandChainLength: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    mobGriefing: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    naturalRegeneration: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    playersSleepingPercentage: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    projectilesCanBreakBlocks: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    pvp: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    randomTickSpeed: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    recipesUnlock: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    respawnBlocksExplode: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    sendCommandFeedback: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    showBorderEffect: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    showCoordinates: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    showDaysPlayed: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    showDeathMessages: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    showRecipeMessages: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    showTags: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    spawnRadius: number;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    tntExplodes: boolean;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    tntExplosionDropDecay: boolean;
}

/**
 * @rc
 * Contains the input information for a client instance.
 */
export class InputInfo {
    private constructor();
    /**
     * @remarks
     * The last input mode used by the player.
     *
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @remarks
     * Whether the player touch input only affects the touchbar or
     * not.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @rc
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @rc
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}

/**
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Base class for item components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

/**
 * Contains information regarding an item before it is damaged
 * from hitting an entity.
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * The damage applied to the item's durability when the event
     * occurs.
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * The entity being hit.
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    itemStack?: ItemStack;
}

/**
 * Contains information related to a chargeable item completing
 * being charged via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
    private constructor();
}

/**
 * Contains information related to a food item being consumed.
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that was consumed.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * The source entity that consumed the item.
     *
     */
    readonly source: Entity;
}

/**
 * Contains information regarding when an item is used to hit
 * an entity.
 */
export class ItemComponentHitEntityEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * Whether the hit landed or had any effect.
     *
     */
    readonly hadEffect: boolean;
    /**
     * @remarks
     * The entity being hit.
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     */
    readonly itemStack?: ItemStack;
}

/**
 * Contains information regarding the mining of a block using
 * an item.
 */
export class ItemComponentMineBlockEvent {
    private constructor();
    /**
     * @remarks
     * The block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The item stack used to mine the block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The block permutation that was mined.
     *
     */
    readonly minedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The entity that mined the block.
     *
     */
    readonly source: Entity;
}

/**
 * Provides the functionality for registering custom components
 * for items.
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * Registers an item custom component that can be used in item
     * JSON configuration.
     *
     * This function can be called in early-execution mode.
     *
     * @param name
     * The id that represents this custom component. Must have a
     * namespace. This id can be specified in a item's JSON
     * configuration under the 'minecraft:custom_components' item
     * component.
     * @param itemCustomComponent
     * The collection of event functions that will be called when
     * the event occurs on an item using this custom component id.
     * @throws This function can throw errors.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

/**
 * Contains information regarding the use of an item.
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * The item stack when the item was used.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The player who used the item.
     *
     */
    readonly source: Player;
}

/**
 * Contains information regarding the use of an item on a block
 * via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * The entity that used the item on the block.
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * The block permutation that the item was used on.
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}

/**
 * @rc
 * When present, the item can be composted in the composter
 * block if the composting chance is in the range [1 - 100].
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * This is the percent chance of the item composting in the
     * composter block and generating a compost layer. Note this
     * api will also return the composting chance for vanilla items
     * that are compostable but do not use the compostable item
     * component.
     *
     * @throws
     * Throws if value outside the range [1 - 100]
     *
     * {@link Error}
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}

/**
 * 表示物品使用冷却组件。当出现在物品上时，表示该物品被实体使用后会有冷却效果。
 * 注意，若使用后不会进入冷却，原版物品会获取到没有实际作用的该组件。
 * 
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 表示物品的冷却类别。
     * 
     * Represents the cooldown category that this item is
     * associated with.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * 物品冷却所需的时间，单位为刻。
     * 
     * Amount of time, in ticks, it will take this item to
     * cooldown.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * Will return true if the item is the cooldown category passed
     * in and false otherwise.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param cooldownCategory
     * The cooldown category that might be associated with this
     * item.
     * @returns
     * True if the item is the given cooldown category.
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * Will return true if the item is the cooldown category passed
     * in and false otherwise.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param cooldownCategory
     * The cooldown category that might be associated with this
     * item.
     * @returns
     * True if the item is the given cooldown category.
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * 开始物品的冷却周期。
     * 如果物品已在冷却中，将重新开始冷却。
     * 
     * Starts a new cooldown period for this item.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

/**
 * 表示物品耐久组件。当出现在物品上时，表示该物品可以在使用中受到损坏。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 * @seeExample giveHurtDiamondSword.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 此物品当前的损坏值。
     * 物品当前耐久度为 `maxDurability - damage`。
     * 当被设置为 负数，`Infinity`，`NaN` 等值时，值为 0。
     * 
     * Returns the current damage level of this particular item.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    damage: number;
    /**
     * @remarks
     * 表示该物品在损坏前可以承受的损坏值。
     * 
     * Represents the amount of damage that this item can take
     * before breaking.
     *
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回根据 `damageRange` 属性生成的最大损坏概率，
     * 附带一个耐久附魔等级作为可选参数。
     * 
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking
     * enchantment level.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param unbreakingEnchantmentLevel
     * 耐久魔咒等级，在计算损坏概率时受到此参数的影响。
     * 传入的 `unbreakingEnchantmentLevel` 参数必须介于 [0, 3]。
     * 
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be within the
     * range [0, 3].
     * 
     * @returns 使用时的最大损坏概率。
     * @throws
     * 若 `unbreakingEnchantmentLevel` 参数未在范围内时，抛出 `TypeError` 。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 返回用于计算物品损失耐久的概率范围。最终物品损失耐久的概率将落在此范围中。
     * 
     * A range of numbers that is used to calculate the damage
     * chance for an item. The damage chance will fall within this
     * range.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

/**
 * @beta
 * When present on an item, this item can be dyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Sets and returns the current color of the item.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    color?: RGB;
    /**
     * @remarks
     * Returns the default color of the item.
     *
     * @throws This property can throw when used.
     *
     * {@link Error}
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}

/**
 * When present on an item, this item can have enchantments
 * applied to it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * Adds an enchantment to the item stack.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param enchantment
     * The enchantment interface to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if the enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * Adds a list of enchantments to the item stack.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param enchantments
     * The list of enchantments to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if any
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if any enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception
     * thrown if any enchantment is not compatible with the item
     * stack.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * Checks whether an enchantment can be added to the item
     * stack.
     *
     * @param enchantment
     * The enchantment interface to be added.
     * @returns
     * Returns true if the enchantment can be added to the item
     * stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
     * if the enchantment level is outside the allowable range for
     * the given enchantment type.
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Gets the enchantment of a given type from the item stack.
     *
     * @param enchantmentType
     * The enchantment type to get.
     * @returns
     * Returns the enchantment if it exists on the item stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * Gets all enchantments on the item stack.
     *
     * @returns
     * Returns a list of enchantments on the item stack.
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * Checks whether an item stack has a given enchantment type.
     *
     * @param enchantmentType
     * The enchantment type to check for.
     * @returns
     * Returns true if the item stack has the enchantment type.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * Removes an enchantment of the given type.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param enchantmentType
     * The enchantment type to remove.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
     * enchantment type does not exist.
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/**
 * 表示物品食物组件。当出现在物品上时，实体可以消耗此物品。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * 若为 `true` ，则无论饥饿值是否已满，玩家始终可以食用该物品。
     * 
     * If true, the player can always eat this item (even when not
     * hungry).
     *
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * 表示实体在食用该物品后恢复的饥饿值，即营养值。
     * 
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     *
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * @remarks
     * 当一个物品被食用，
     * 将根据公式 `nutrition * saturation_modifier * 2`
     * 来为玩家添加饱和状态。
     * 
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     *
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * 若给出，则使用时将该物品转换为标识符指定的物品。
     * 
     * When specified, converts the active item to the one
     * specified by this property.
     *
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}

/**
 * @beta
 * When present on an item, this item is a potion item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The PotionEffectType associated with the potion item.
     *
     * @throws This property can throw when used.
     */
    readonly potionEffectType: PotionEffectType;
    /**
     * @remarks
     * The PotionLiquidType associated with the potion item.
     *
     * @throws This property can throw when used.
     */
    readonly potionLiquidType: PotionLiquidType;
    /**
     * @remarks
     * The PotionModifierType associated with the potion item.
     *
     * @throws This property can throw when used.
     */
    readonly potionModifierType: PotionModifierType;
    static readonly componentId = 'minecraft:potion';
}

/**
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that triggered this item event.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * Defines a collection of items.
 * @seeExample itemStacks.ts
 * @seeExample givePlayerEquipment.ts
 * @seeExample spawnFeatherItem.ts
 */
export class ItemStack {
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * @param itemType
     * Type of item to create. See the {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
     * a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of this item stack.
     */
    clone(): ItemStack;
    /**
     * @remarks
     * Get the list of block types this item can break in Adventure
     * mode.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * Get the list of block types this item can be placed on in
     * Adventure mode.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food'). If
     * no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link
     * ItemComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the item stack,
     * otherwise undefined.
     * @seeExample giveHurtDiamondSword.ts
     */
    getComponent<T extends keyof ItemComponentTypeMap>(componentId: T): ItemComponentTypeMap[T] | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns a set of tags associated with this item stack.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Checks whether this item stack has a particular tag
     * associated with it.
     *
     * @param tag
     * Tag to search for.
     * @returns
     * True if the Item Stack has the tag associated with it, else
     * false.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration, but for non-stackable items this will always
     * return false.
     *
     * @param itemStack
     * ItemStack to check stacking compatibility with.
     * @returns
     * True if the Item Stack is stackable with the itemStack
     * passed in. False for non-stackable items.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * Version safe way of checking if an item matches.
     *
     * @param itemName
     * Identifier of the item.
     * @param states
     *  Applicable only for blocks. An optional set of states to
     * compare against. If states is not specified, matches checks
     * against the set of types more broadly.
     * @returns
     * Returns a boolean whether the specified item matches.
     */
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param blockIdentifiers
     * String list of block types that the item can destroy.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @seeExample giveDestroyRestrictedPickaxe.ts
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param blockIdentifiers
     * String list of block types that the item can be placed on.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @seeExample givePlaceRestrictedGoldBlock.ts
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @beta
     * @remarks
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * A Record of key value pairs of the dynamic properties to
     * set.
     * @throws This function can throw errors.
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @remarks
     * Sets a specified property to a value. Note: This function
     * only works with non-stackable items.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws
     * Throws if the item stack is stackable.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack. The lore list is cleared if set to an empty
     * string or undefined.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param loreList
     * List of lore lines. Each element in the list represents a
     * new line. The maximum lore line count is 20. The maximum
     * lore line length is 50 characters.
     * @throws This function can throw errors.
     * @seeExample diamondAwesomeSword.ts
     */
    setLore(loreList?: string[]): void;
    /**
     * @beta
     * @remarks
     * Helper function for creating potion items.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    static createPotion(options: PotionOptions): ItemStack;
}

/**
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is starting to be charged.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used on a
 * block. This event fires when a player presses the the Use
 * Item / Place Block button to successfully use an item or
 * place a block. Fires for the first block that is interacted
 * with when performing a build action. Note: This event cannot
 * be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * The impacted item stack that is starting to be used. Can be
     * undefined in some gameplay scenarios like pushing a button
     * with an empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is stopping being charged.
     * ItemStopUseAfterEvent can be called when teleporting to a
     * different dimension and this can be undefined.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
}

/**
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     *
     */
    static getAll(): ItemType[];
}

/**
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers an entity interaction.
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is being used.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}

/**
 * 表示对方块使用物品时触发的后置事件。描述了物品的信息与使用的目标方块。
 * 该事件会在玩家成功触发与方块的交互后发生。
 * 
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers a block interaction.
 */
export class ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品使用的目标方块。
     * 
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品在方块的哪一面被使用。
     * 
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 物品在方块的面上被使用时，交互点相对于方块西北方底部顶点的坐标。
     * 
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * 对方块使用物品时物品所在的物品堆叠。
     * 
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 该事件的触发来源实体。
     * 
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemUseOnAfterEvent) => void): (arg0: ItemUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemUseOnAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used on a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class ItemUseOnBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): (arg0: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): void;
}

/**
 * Contains information regarding the use of an item on a
 * block.
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * The block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that the item was used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block that the item was used on.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack used on the block.
     *
     */
    readonly itemStack: ItemStack;
}

/**
 * Contains information related to changes to a lever
 * activating or deactivating.
 * @seeExample leverActionEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the lever is activated (that is, transmitting
     * power).
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * Optional player that triggered the lever activation.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 * @seeExample leverActionEvent.ts
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

/**
 * Volume composed of an unordered container of unique block
 * locations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * Creates a new instance of ListBlockVolume.
     *
     * @param locations
     * Initial array of block locations that ListBlockVolume will
     * be constructed with.
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * Insert block locations into container.
     *
     * @param locations
     * Array of block locations to be inserted into container.
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * Remove block locations from container.
     *
     * @param locations
     * Array of block locations to be removed from container.
     */
    remove(locations: Vector3[]): void;
}

/**
 * @beta
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * The message identifier.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The message.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * The player who sent the message.
     *
     */
    readonly player: Player;
}

/**
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * Sets a numeric (decimal) value within the Molang variable
     * map.
     *
     * @param variableName
     * Name of the float-based number to set.
     * @param number
     * Value for the Molang-based variable to set.
     * @throws This function can throw errors.
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     *
     * @throws This function can throw errors.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     *
     * @throws This function can throw errors.
     */
    setVector3(variableName: string, vector: Vector3): void;
}

/**
 * @beta
 * A container for arguments passed to
 * SpawnRulesRegistry.registerObstructionCallback
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class ObstructionCallbackArgs {
    private constructor();
    /**
     * @remarks
     * The dimension of the spawn.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * The entity being checked for obstruction.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The entity spawn type.
     *
     */
    readonly spawnType: EntitySpawnType;
}

/**
 * Contains information related to changes to a piston
 * expanding or retracting.
 * @seeExample pistonAfterEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}

/**
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @seeExample pistonAfterEvent.ts
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}

/**
 * Represents a player within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * The player's Camera.
     *
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /**
     * @remarks
     * Contains the player's device information.
     *
     * @throws This property can throw when used.
     *
     * {@link Error}
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @beta
     * @remarks
     * Gets the current graphics mode of the player's client. This
     * can be changed in the Video section of the settings menu
     * based on what hardware is available.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    /**
     * @rc
     * @remarks
     * Contains the player's input information.
     *
     */
    readonly inputInfo: InputInfo;
    /**
     * @remarks
     * Input permissions of the player.
     *
     */
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @remarks
     * If true, the player is currently emoting.
     *
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * Whether the player is flying. For example, in Creative or
     * Spectator mode.
     *
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * Whether the player is gliding with Elytra.
     *
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * Whether the player is jumping. This will remain true while
     * the player is holding the jump action.
     *
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     *
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @remarks
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    selectedSlotIndex: number;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * @returns
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * Adds/removes level to/from the Player and returns the
     * current level of the Player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param amount
     * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
     * @returns
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @beta
     * @remarks
     * Eats an item, providing the item's hunger and saturation
     * effects to the player. Can only be used on food items.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param itemStack
     * The item to eat.
     * @throws
     * Throws if the item is not a food item.
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @beta
     * @remarks
     * The player's aim-assist settings.
     *
     *
     * Required Experiments:
     * - Camera Aim Assist
     *
     */
    getAimAssist(): PlayerAimAssist;
    /**
     * @remarks
     * Retrieves the active gamemode for this player, if specified.
     *
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @remarks
     * Plays a music track that only this particular player can
     * hear.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound that only this particular player can hear.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     * @seeExample playMusicAndSound.ts
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Queues an additional music track that only this particular
     * player can hear. If a track is not playing, a music track
     * will play.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Resets the level of the player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @remarks
     * Sends a message to the player.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @seeExample nestedTranslation.ts
     * @seeExample scoreWildcard.ts
     * @seeExample sendBasicMessage.ts
     * @seeExample sendPlayerMessages.ts
     * @seeExample sendTranslatedMessage.ts
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets a gamemode override for this player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param gameMode
     * Active gamemode.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @beta
     * @remarks
     * Will change the specified players permissions, and whether
     * they are operator or not.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setOp(isOp: boolean): void;
    /**
     * @remarks
     * Sets the current starting spawn point for this particular
     * player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @beta
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world. Only visible to the target player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of optional, customizable variables that can be
     * adjusted for this particle.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnParticle.ts bdc4b9e7
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @remarks
     * Stops any music tracks from playing for this particular
     * player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    stopMusic(): void;
}

/**
 * @beta
 * A container for APIs related to player aim-assist.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class PlayerAimAssist {
    private constructor();
    /**
     * @remarks
     * The player's currently active aim-assist settings, or
     * undefined if not active.
     *
     */
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks
     * Sets the player's aim-assist settings.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param settings
     * Aim-assist settings to activate for the player, if undefined
     * aim-assist will be disabled.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}

/**
 * Contains information regarding an event after a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The item stack that was used to break the block after the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * The item stack that was used to break the block before the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * Player that broke the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to when a player breaks
 * a block.
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player breaks a
     * block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block break event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The item stack that is being used to break the block, or
     * undefined if empty hand.
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * Player breaking the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to before a player
 * breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is broken
     * by a player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}

/**
 * @rc
 * Event data for when a player presses a button.
 */
export class PlayerButtonInputAfterEvent {
    private constructor();
    /**
     * @remarks
     * The button this event is about.
     *
     */
    readonly button: InputButton;
    /**
     * @remarks
     * The state that this button transferred to.
     *
     */
    readonly newButtonState: ButtonState;
    /**
     * @remarks
     * The player that performed the input event.
     *
     */
    readonly player: Player;
}

/**
 * @rc
 * Manages callbacks that are connected to player inputs.
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after the player
     * performs an input.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after the player
     * performs an input.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}

/**
 * Represents the players cursor inventory. Used when moving
 * items between between containers in the inventory UI. Not
 * used with touch controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The ItemStack currently in the players cursor inventory.
     *
     * @throws This property can throw when used.
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * Clears the players cursor inventory.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    clear(): void;
}

/**
 * Contains information related to changes to a player's
 * dimension having been changed.
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The dimension the player is changing from.
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * The location the player was at before changing dimensions.
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * Handle to the player that is changing dimensions.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The dimension that the player is changing to.
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * The location the player will spawn to after changing
     * dimensions.
     *
     */
    readonly toLocation: Vector3;
}

/**
 * Manages callbacks that are connected to successful player
 * dimension changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to a player dimension
     * change after event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from a player dimension
     * change after event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
    private constructor();
    readonly personaPieceId: string;
    readonly player: Player;
}

export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}

/**
 * Contains information regarding an event after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The previous game mode before the change.
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The current game mode after the change.
     *
     */
    readonly toGameMode: GameMode;
}

/**
 * Manages callbacks that are connected to after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a players game
     * mode is changed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a players game
     * mode is changed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the game mode change will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The current game mode.
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The game mode being changed to.
     *
     */
    toGameMode: GameMode;
}

/**
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a players game
     * mode is changed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a players game
     * mode is changed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}

/**
 * @rc
 * Event data for when a player input mode changes.
 */
export class PlayerInputModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The new input mode used by the player.
     *
     */
    readonly newInputModeUsed: InputMode;
    /**
     * @remarks
     * The player that had an input mode change.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The previous input mode used by the player.
     *
     */
    readonly previousInputModeUsed: InputMode;
}

/**
 * @rc
 * Manages callbacks that are connected to player input mode.
 */
export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after the player input
     * mode changes.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after the player input
     * mode changes.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}

/**
 * Contains information regarding an event after a players
 * input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The category of input permissions that have changed.
     *
     */
    readonly category: InputPermissionCategory;
    /**
     * @remarks
     * The enabled/disabled state of the players input permissions.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * The player that has had their input permissions changed.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to after a players
 * input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a players input
     * permissions change.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a players input
     * permissions change.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

/**
 * Contains APIs to enable/disable player input permissions.
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @rc
     * @remarks
     * Returns true if an input permission is enabled.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @rc
     * @remarks
     * Enable or disable an input permission. When enabled the
     * input will work, when disabled will not work.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

/**
 * Contains information regarding an event after a player
 * successfully interacts with a block.
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * The ItemStack before the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * The ItemStack after the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to after a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player
     * interacts with a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/**
 * Contains information regarding an event after a player
 * successfully interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * The ItemStack before the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * The ItemStack after the interaction succeeded, or undefined
     * if hand is empty.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}

/**
 * Manages callbacks that are connected to after a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with an entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player
     * interacts with an entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}

/**
 * Manages callbacks that are connected to before a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with an entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with an entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}

/**
 * @beta
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    next(): IteratorResult<Player>;
}

/**
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that joined the game.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Name of the player that has joined.
     *
     */
    readonly playerName: string;
}

/**
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

/**
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that has left the
     * event.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Player that has left the world.
     *
     */
    readonly playerName: string;
}

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

/**
 * Contains information regarding a player that is leaving the
 * world.
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The leaving player.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called when a player leaves
     * the world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}

/**
 * Contains information regarding an event where a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Player that placed the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The face of the block that the new block is being placed on.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the new block is being placed onto.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The block permutation that is being placed.
     *
     */
    readonly permutationBeingPlaced: BlockPermutation;
    /**
     * @remarks
     * Player that is placing the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to before a block is
 * placed by a player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is placed
     * by a player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an block is
     * placed by a player.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}

/**
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * Object that represents the player that joined the game.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    player: Player;
}

/**
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Registers a new event receiver for this particular type of
     * event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * De-registers an event receiver for the player spawn event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

/**
 * @beta
 * Represents a type of potion effect - like healing or leaping
 * - that can be used with PotionOptions.
 */
export class PotionEffectType {
    private constructor();
    readonly id: string;
}

/**
 * @beta
 * Represents a type of potion liquid - like splash, or
 * lingering - that can be used with PotionOptions.
 */
export class PotionLiquidType {
    private constructor();
    readonly id: string;
}

/**
 * @beta
 * Represents a type of potion modifier - like strong, or long
 * - that can be used with PotionOptions.
 */
export class PotionModifierType {
    private constructor();
    readonly id: string;
}

/**
 * @beta
 * Used for accessing all potion effects, liquids, and
 * modifiers currently available for use within the world.
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * Retrieves a type handle for a specified potion effect id.
     *
     * @param potionEffectId
     * A valid potion effect id. See
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes
     * @returns
     * A type handle wrapping the valid effect id, or undefined for
     * an invalid effect id.
     */
    static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion liquid id.
     *
     * @returns
     * A type handle wrapping the valid liquid id, or undefined for
     * an invalid liquid id.
     */
    static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion modifier id.
     *
     * @returns
     * A type handle wrapping the valid modifier id, or undefined
     * for an invalid modifier id.
     */
    static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined;
}

/**
 * Contains information related to changes to a pressure plate
 * pop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * popped.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * pop.
     *
     */
    readonly redstonePower: number;
}

/**
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}

/**
 * Contains information related to changes to a pressure plate
 * push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * pushed.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * push.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Source that triggered the pressure plate push.
     *
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a pressure
 * plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * pushed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is pushed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

/**
 * Contains information related to a projectile hitting a
 * block.
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit a block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit a block.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about the block that was hit
     * by the projectile.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getBlockHit(): BlockHitInformation;
}

/**
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits a
     * block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

/**
 * Contains information related to a projectile hitting an
 * entity.
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit an entity.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit an entity.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about an entity that was
     * hit.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getEntityHit(): EntityHitInformation;
}

/**
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

/**
 * 表示记分板。其上包含了记分项和分数持有者。
 * 
 * Contains objectives and participants for the scoreboard.
 * @seeExample updateScoreboard.ts
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * 在记分板上添加一个新的记分项。
     * 
     * Adds a new objective to the scoreboard.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     * @param objectiveId 记分项名称。
     * @param displayName 记分项的显示名称。
     * @returns 创建的记分项对象。
     * @throws
     * 若同名记分项已存在时，抛出 `"Failed to add objective 'objectiveId' as it is already being tracked"`。
     * @seeExample updateScoreboard.ts
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks
     * 清除显示位置上正在显示的记分项。
     * 
     * Clears the objective that occupies a display slot.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     * @param displaySlotId 显示位置。
     * @returns 先前正显示的记分项，为空时返回 `null`。
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取名称为 `objectiveId` 的记分项对象。
     * 
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * 记分项名称。
     * 
     * Identifier of the objective.
     * @returns 指定的记分项对象。不存在时返回 `null`。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取位于指定显示位置上的记分项对象与显示配置。
     * 
     * Returns an objective that occupies the specified display
     * slot.
     * @param displaySlotId 显示位置。
     * @returns 位于指定显示位置的记分项显示配置。为空时返回 `null`。
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 获取记分板上的已定义的所有记分项。
     * 
     * Returns all defined objectives.
     * @returns 所有记分项对象组成的数组。
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 获取所有已经定义的分数持有者。
     * 
     * Returns all defined scoreboard identities.
     * @returns 所有分数持有者对象组成的数组。
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板上移除指定的记分项。
     * 
     * Removes an objective from the scoreboard.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     * @param objectiveId 记分项对象或名称。
     * @returns 总是返回 `true`。
     * @throws
     * 若指定的记分项不存在时，抛出 `"Failed to find the objective specified"`。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 设置指定的显示位置显示的记分项与其他显示配置。
     * 
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     * @param displaySlotId 显示位置。
     * @param objectiveDisplaySetting 记分项显示配置。
     * @returns
     * 显示位上先前显示的记分项对象。先前未显示记分项时，返回 `undefined`。
     * 
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws
     * 若记分项无效，抛出 `"Failed to set invalid objective at DisplaySlot"`。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

/**
 * 表示记分板上的分数持有者。
 * 
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 此分数持有者在玩家视角显示的名称。
     * 
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此分数持有者的 ID。
     * 
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @beta
     * @remarks
     * Returns true if the ScoreboardIdentity reference is still
     * valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此分数持有者的类型。
     * 
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 返回此分数持有者对应的实体对象（仅当此分数持有者是一个实体或者玩家时）。
     * 
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     * @returns 对应的实体对象。虚拟玩家类型的分数持有者会返回 `undefined`。
     * @throws
     * 若实体不存在时，抛出。
     */
    getEntity(): Entity | undefined;
}

/**
 * 表示记分板上的记分项。包含了分数持有者和各自的分数。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 此记分项的显示名称。
     * 
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     * @throws
     * 若记分项无效，则抛出。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此记分项的名称。
     * 
     * Identifier of the scoreboard objective.
     *
     * @throws
     * 若记分项无效，则抛出。
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Returns true if the ScoreboardObjective reference is still
     * valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Adds a score to the given participant and objective.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param participant
     * Participant to apply the scoreboard value addition to.
     * @throws This function can throw errors.
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 返回此记分项上已记录的分数持有者。
     * 
     * Returns all objective participant identities.
     * @returns 由分数持有者对象组成的数组。
     * @throws
     * 若记分项无效时，抛出。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 获取指定分数持有者的分数。
     * 
     * Returns a specific score for a participant.
     *
     * @param participant
     * 分数持有者。
     * 
     * Identifier of the participant to retrieve a score for.
     * @returns 指定分数持有者的分数。
     * @throws
     * 若此记分项上未记录分数持有者的分数，抛出 `"Failed to retrieve score for '<participant>'"`。
     * 若记分项无效时，抛出。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 获取记分项上记录的所有分数信息。
     * 
     * Returns specific scores for this objective for all
     * participants.
     * @returns 由分数信息对象组成的数组。
     * @throws
     * 若记分项无效时，抛出。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Returns if the specified identity is a participant of the
     * scoreboard objective.
     *
     * @throws This function can throw errors.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws This function can throw errors.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * 表示分数信息。包含了分数持有者以及它在记分板上的对应的分数。
 * 
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * 分数归属的分数持有者。
     * 
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * 该记分项上分数持有者的分数。
     * 
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}

/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 * @seeExample setTitle.ts
 * @seeExample setTitleAndSubtitle.ts
 * @seeExample countdown.ts
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @beta
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     */
    resetHudElements(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets visibility of a particular element of the heads up
     * display (HUD).
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param visible
     * Whether to set the HUD element to invisible, or to reset it
     * back to its default.
     * @param hudElements
     * Optional list of HUD elements to configure visibility for.
     * @throws This function can throw errors.
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     * @seeExample setTitle.ts
     * @seeExample setTitleAndSubtitle.ts
     * @seeExample countdown.ts
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws This function can throw errors.
     * @seeExample countdown.ts
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * Returns additional data about a /scriptevent command
 * invocation.
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * Identifier of this ScriptEvent command message.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * Optional additional data passed in with the script event
     * command.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: ScriptEventSource;
}

/**
 * Allows for registering an event handler that responds to
 * inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Registers a new ScriptEvent handler.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes a particular handler for a ScriptEvent event.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * Angle in degrees that a rider is allowed to rotate while
     * riding this entity.
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * A maximum number of riders that this seat can support.
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * Physical location of this seat, relative to the entity's
     * location.
     *
     */
    readonly position: Vector3;
    /**
     * @remarks
     * Angle in degrees to rotate riders by.
     *
     */
    readonly seatRotation: number;
}

/**
 * @beta
 * Manages callbacks that are message passing to a server. This
 * event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an internal message
     * is passed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an internal
     * message is passed.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}

/**
 * @beta
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}

/**
 * @beta
 */
export class ShutdownEvent {
    private constructor();
}

/**
 * @beta
 * Container for spawn rules APIs. Allows for registering
 * callbacks to extend the spawner system.
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class SpawnRulesRegistry {
    private constructor();
    /**
     * @remarks
     * Registers an entity spawn callback to the provided key.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param id
     * The Id to associate the callback with.
     * @param callback
     * The callback that will be invoked when a spawner tests for
     * the associated predicate key.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     *
     * {@link SpawnRulesInvalidRegistryError}
     */
    registerEntitySpawnCallback(id: string, callback: (arg0: EntitySpawnCallbackArgs) => boolean): void;
    /**
     * @remarks
     * Registers an obstruction callback to the provided key.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     * @param id
     * The Id to associate the callback with.
     * @param callback
     * The callback that will be invoked when a spawner tests for
     * the associated predicate key.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     *
     * {@link SpawnRulesInvalidRegistryError}
     */
    registerObstructionCallback(id: string, callback: (arg0: ObstructionCallbackArgs) => boolean): void;
}

/**
 * @beta
 */
export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}

/**
 * @beta
 */
export class StartupEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    readonly itemComponentRegistry: ItemComponentRegistry;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     *
     * Required Experiments:
     * - Simplified Spawn Rules
     *
     */
    getSpawnRulesRegistry(): SpawnRulesRegistry;
}

/**
 * Represents a loaded structure template (.mcstructure file).
 * Structures can be placed in a world using the /structure
 * command or the {@link StructureManager} APIs.
 */
export class Structure {
    private constructor();
    /**
     * @remarks
     * The name of the structure. The identifier must include a
     * namespace. For structures created via the /structure command
     * or structure blocks, this namespace defaults to
     * "mystructure".
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Returns whether the Structure is valid. The Structure may
     * become invalid if it is deleted.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * The dimensions of the structure. For example, a single block
     * structure will have a size of {x:1, y:1, z:1}
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * Returns a BlockPermutation representing the block contained
     * within the Structure at the given location.
     *
     * @param location
     * The block location relative to the Structure's origin.
     * @returns
     * Returns a BlockPermutation. Returns undefined if a block
     * does not exist at the given location.
     * @throws
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * Returns whether the block at the given location is
     * waterlogged.
     *
     * @param location
     * The block location relative to the Structure's origin.
     * @returns
     * Returns whether the block at the given location is
     * waterlogged. Returns false if a block does not exist at the
     * given location.
     * @throws
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * Creates a copy of a Structure and saves it with a new name.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param identifier
     * The name of the newly created Structure.
     * @param saveMode
     * Determines how the Structure should be saved. Defaults to
     * saving to the world.
     * @returns
     * Returns the newly created structure.
     * @throws
     * Throws if the identifier is invalid. A valid identifier must
     * include a namespace and must be unique.
     * Throws if the Structure has been deleted.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * Saves a modified Structure to the world file.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @throws
     * Throws if the Structure has been deleted.
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * Sets a BlockPermutation within a Structure.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param location
     * The block location relative to the Structure's origin.
     * @param blockPermutation
     * The BlockPermutation to set.
     * @param waterlogged
     * Specifies whether the block should be waterlogged. Air and
     * undefined blocks cannot be waterlogged.
     * @throws
     * Throws if the type of block is StructureVoid.
     * Throws if the block is undefined and waterlogged is set to
     * true.
     * Throws if the block is air and waterlogged is set to true.
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

/**
 * Manager for Structure related APIs. Includes APIs for
 * creating, getting, placing and deleting Structures.
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * Creates an empty Structure in memory. Use {@link
     * Structure.setBlockPermutation} to populate the structure
     * with blocks and save changes with {@link Structure.saveAs}.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param identifier
     * The name of the structure. A valid identifier must include a
     * namespace and must be unique.
     * @param size
     * The size of the structure. For example, to create a single
     * block structure the size should be {x:1, y:1, z:1}.
     * @param saveMode
     * How the Structure should be saved upon creation. Defaults to
     * StructureSaveMode.Memory.
     * @returns
     * Returns the newly created Structure.
     * @throws
     * Throws if the identifier is invalid. A valid identifier must
     * include a namespace and must be unique.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * Creates a new Structure from blocks in the world. This is
     * functionally equivalent to the /structure save command.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param identifier
     * The name of the structure. A valid identifier must include a
     * namespace and must be unique.
     * @param dimension
     * The dimension where the blocks should be read from.
     * @param options
     * Additional options for creating a structure from the world.
     * @returns
     * Returns the newly created Structure.
     * @throws
     * Throws if the identifier is invalid. A valid identifier must
     * include a namespace and must be unique.
     * Throws if the structure bounds exceed the maximum size.
     * Throws if the structure bounds contains blocks outside the
     * world bounds.
     *
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks
     * Deletes a structure from memory and from the world if it
     * exists.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param structure
     * The structure identifier or Structure object that should be
     * deleted. Note, a Structure object will become invalid after
     * it is deleted.
     * @returns
     * Returns whether the structure was removed.
     * @throws
     * Throws if a structure cannot be removed. For example, a
     * structure loaded from a Behavior Pack.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * Gets a Structure that is saved to memory or the world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param identifier
     * The name of the structure to get.
     * @returns
     * Returns a Structure if it exists, otherwise undefined.
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * Places a structure in the world. Structures placed in
     * unloaded chunks will be queued for loading.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param structure
     * The structure's identifier or a Structure object.
     * @param dimension
     * The dimension where the Structure should be placed.
     * @param location
     * The location within the dimension where the Structure should
     * be placed.
     * @param options
     * Additional options for Structure placement.
     * @throws
     * Throws if the integrity value is outside of the range [0,1]
     * Throws if the integrity seed is invalid.
     * Throws if the placement location contains blocks that are
     * outside the world bounds.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
    /**
     * @beta
     * @remarks
     * Places a partial jigsaw structure in the world. This is
     * useful for debugging connections between jigsaw blocks.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param pool
     * The identifier of the template pool to start from.
     * @param targetJigsaw
     * The name of the jigsaw block to start from. This block must
     * be included in at least one of the starting pool structure
     * templates.
     * @param maxDepth
     * The maximum recursion depth for the jigsaw structure.
     * @param dimension
     * The dimension to place the jigsaw structure in.
     * @param location
     * The location where the jigsaw structure will begin
     * generating relative to the targetJigsaw block.
     * @param options
     * Optional settings to use when generating the jigsaw
     * structure.
     * @returns
     * Returns a {@link BoundingBox} object which represents the
     * maximum bounds of the jigsaw structure.
     * @throws
     * Throws if maxDepth is outside of the range [1,20]
     * Throws if generation fails due to invalid parameters or
     * jigsaw configuration.
     * Throws if the placement location contains blocks that are
     * outside the world bounds.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BoundingBox;
    /**
     * @beta
     * @remarks
     * Places a jigsaw structure in the world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param identifier
     * The identifier of the jigsaw structure.
     * @param dimension
     * The dimension to place the jigsaw structure in.
     * @param location
     * The location where the jigsaw structure will begin
     * generating. Note that the y value will be overridden by the
     * structure's start height unless the
     * ignoreStarJigsawStructurePlaceOptions ignoreStartHeight
     * option is set.
     * @param options
     * Optional settings to use when generating the jigsaw
     * structure.
     * @returns
     * Returns a {@link BoundingBox} object which represents the
     * maximum bounds of the jigsaw structure.
     * @throws
     * Throws if generation fails due to invalid parameters or
     * jigsaw configuration.
     * Throws if the placement location contains blocks that are
     * outside the world bounds.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BoundingBox;
}

/**
 * A class that provides system-level events and functions.
 */
export class System {
    private constructor();
    /**
     * @remarks
     * Returns a collection of after-events for system-level
     * operations.
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @beta
     * @remarks
     * Returns a collection of before-events for system-level
     * operations.
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * Represents the current world tick of the server.
     *
     */
    readonly currentTick: number;
    /**
     * @beta
     * @remarks
     * Returns true if this is a world where the editor is
     * currently loaded, returns false otherwise.
     *
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks
     * Contains the device information for the server.
     *
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks
     * Cancels the execution of a job queued via {@link
     * System.runJob}.
     *
     * This function can be called in early-execution mode.
     *
     * @param jobId
     * The job ID returned from {@link System.runJob}.
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via {@link System.run}.
     *
     * This function can be called in early-execution mode.
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at the next available future time.
     * This is frequently used to implement delayed behaviors and
     * game loops. When run within the context of an event handler,
     * this will generally run the code at the end of the same tick
     * where the event occurred. When run in other code (a
     * system.run callout), this will run the function in the next
     * tick. Note, however, that depending on load on the system,
     * running in the same or next tick is not guaranteed.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Function callback to run at the next game tick.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * @seeExample trapTick.ts
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * Runs a set of code on an interval.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @seeExample every30Seconds.ts
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * Queues a generator to run until completion.  The generator
     * will be given a time slice each tick, and will be run until
     * it yields or completes.
     *
     * This function can be called in early-execution mode.
     *
     * @param generator
     * The instance of the generator to run.
     * @returns
     * An opaque handle that can be used with {@link
     * System.clearJob} to stop the run of this generator.
     * @seeExample cubeGenerator.ts
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @rc
     * @remarks
     * Causes an event to fire within script with the specified
     * message ID and payload.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param id
     * Identifier of the message to send. This is custom and
     * dependent on the kinds of behavior packs and content you may
     * have installed within the world.
     * @param message
     * Data component of the message to send. This is custom and
     * dependent on the kinds of behavior packs and content you may
     * have installed within the world. Message may not exceed 2048
     * characters in length.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks
     * waitTicks returns a promise that resolves after the
     * requested number of ticks.
     *
     * This function can be called in early-execution mode.
     *
     * @param ticks
     * The amount of ticks to wait. Minimum value is 1.
     * @returns
     * A promise that is resolved when the specified amount of
     * ticks have occurred.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}

/**
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/**
 * @beta
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error.
 */
export class SystemBeforeEvents {
    private constructor();
    readonly shutdown: ShutdownBeforeEventSignal;
    readonly startup: StartupBeforeEventSignal;
    /**
     * @remarks
     * Fires when the scripting watchdog shuts down the server. The
     * can be due to using too much memory, or by causing
     * significant slowdown or hang.
     * To prevent shutdown, set the event's cancel property to
     * true.
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

/**
 * Contains device information, like memory tier.
 */
export class SystemInfo {
    private constructor();
    /**
     * @remarks
     * Describes the memory of the device.
     *
     */
    readonly memoryTier: MemoryTier;
}

/**
 * Contains information related to changes to a target block
 * hit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The position where the source hit the block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * The redstone power before the block is hit.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power at the time the block is hit.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Optional source that hit the target block.
     *
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a target block
 * is hit.
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

/**
 * Represents a trigger for firing an event.
 */
export class Trigger {
    /**
     * @remarks
     * Event name of the trigger.
     *
     */
    eventName: string;
    /**
     * @remarks
     * Creates a new trigger.
     *
     */
    constructor(eventName: string);
}

/**
 * Contains information related to changes to a trip wire trip.
 * @seeExample tripWireTripEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Whether or not the block has redstone power.
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * The sources that triggered the trip wire to trip.
     *
     */
    readonly sources: Entity[];
}

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 * @seeExample tripWireTripEvent.ts
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a script watchdog
 * termination.
 */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Contains the reason why a script runtime is to be
     * terminated.
     *
     */
    readonly terminateReason: WatchdogTerminateReason;
}

/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension in which the weather has changed.
     *
     */
    readonly dimension: string;
    /**
     * @remarks
     * The weather type after the weather was changed.
     *
     */
    readonly newWeather: WeatherType;
    /**
     * @remarks
     * The weather type before the weather was changed.
     *
     */
    readonly previousWeather: WeatherType;
}

/**
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}

/**
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the weather change will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Sets the duration of the new weather (in ticks).
     *
     */
    duration: number;
    /**
     * @remarks
     * The type of weather that will be applied.
     *
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * The type of weather that it was prior to the event being
     * fired.
     *
     */
    readonly previousWeather: WeatherType;
}

/**
 * Manages callbacks that are connected to before weather
 * changing.
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before weather changes.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before weather changes.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}

/**
 * 表示一个世界。包含了世界的各种状态，即一系列维度以及 Minecraft 的环境。
 * 
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world.  Event callbacks are called in a deferred
     * manner. Event callbacks are executed in read-write mode.
     *
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world. Event callbacks are called immediately. Event
     * callbacks are executed in read-only mode.
     *
     * @seeExample customCommand.ts
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * @remarks
     * The game rules that apply to the world.
     *
     */
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    /**
     * @remarks
     * 全局的、唯一的记分板对象。
     * 
     * Returns the general global scoreboard that applies to the
     * world.
     *
     */
    readonly scoreboard: Scoreboard;
    /**
     * @remarks
     * Returns the manager for {@link Structure} related APIs.
     *
     */
    readonly structureManager: StructureManager;
    /**
     * @beta
     * @remarks
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param id
     * The message identifier.
     * @param value
     * The message.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Clears the set of dynamic properties declared for this
     * behavior pack within the world.
     *
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * 获取自游戏开始以来流逝的时间（计算公式：`day*24000+daytime`）。
     * 时间的流逝受到游戏规则 `dodaylightcycle` 的影响。
     * 
     * Returns the absolute time since the start of the world.
     * @returns 自游戏开始以来流逝的时间，以刻为单位。
     *
     */
    getAbsoluteTime(): number;
    /**
     * @beta
     * @remarks
     * The aim-assist presets and categories that can be used in
     * the world.
     *
     *
     * Required Experiments:
     * - Camera Aim Assist
     *
     */
    getAimAssist(): AimAssistRegistry;
    /**
     * @remarks
     * 获取一个包含了游戏中所有玩家的对象的数组。
     * 
     * Returns an array of all active players within the world.
     * @returns 返回包含了游戏中所有玩家的对象的数组。
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @remarks
     * Returns the current day.
     *
     * @returns
     * The current day, determined by the world time divided by the
     * number of ticks per day. New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @remarks
     * Returns the default Overworld spawn location.
     *
     * @returns
     * The default Overworld spawn location. By default, the Y
     * coordinate is 32767, indicating a player's spawn height is
     * not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
    /**
     * @remarks
     * 由 `dimensionId` 获取维度对象。
     * 
     * Returns a dimension object.
     *
     * @param dimensionId
     * 要获取的维度的标识符。
     * 
     * The name of the dimension. For example, "overworld",
     * "nether" or "the_end".
     * @returns
     * 与 `dimensionId` 关联的维度对象。
     * 
     * The requested dimension
     * @throws
     * 若 `dimensionId` 不与任何维度关联，抛出 `"Dimension '<dimensionId>' is invalid"`。
     *
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks
     * 获取由 `identifier` 指定的世界中已定义的动态属性的值。
     * 
     * Returns a property value.
     *
     * @param identifier
     * 动态属性的标识符。
     * 
     * The property identifier.
     * @returns
     * 返回动态属性 `identifier` 的值。属性的值尚未设定时，返回 `undefined`。
     * 
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"` 。
     * 
     * Throws if the given dynamic property identifier is not
     * defined.
     * @seeExample incrementDynamicProperty.ts
     * @seeExample incrementDynamicPropertyInJsonBlob.ts
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Gets a set of dynamic property identifiers that have been
     * set in this world.
     *
     * @returns
     * A string array of active dynamic property identifiers.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Gets the total byte count of dynamic properties. This could
     * potentially be used for your own analytics to ensure you're
     * not storing gigantic sets of dynamic properties.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns an entity based on the provided id.
     *
     * @param id
     * The id of the entity.
     * @returns
     * The requested entity object.
     * @throws
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @remarks
     * Returns the MoonPhase for the current time.
     *
     */
    getMoonPhase(): MoonPhase;
    /**
     * @remarks
     * 列出世界上的玩家，可使用 `options` 指定的实体查询选项对其进行筛选。
     * 
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * 可选的参数，用作于筛选指定条件的玩家。
     *
     * 注意，不能使用接口中的 `type`、`location`、`maxDistance`、`minDistance` 或 `volume` 属性。
     * 
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws
     * 若向 `options` 传入的对象含有 `type` 属性，抛出 `"command.generic.invalidPlayerType"`。
     * 
     * 若向 `options` 传入的对象含有 `location`、`maxDistance`、`minDistance` 或 `volume` 属性，抛出 `"EntityQueryOptions property '<property>' is incompatible with function world.getPlayers"`。
     * 
     * Throws if the provided EntityQueryOptions are invalid.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * 返回当前一天中的时间。
     * 
     * Returns the time of day.
     *
     * @returns
     * 当前一天中的时间，以刻为单位，为 `0` 至 `24000` 之间的整数。
     * 
     * The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /**
     * @remarks
     * 停止正在播放的音乐，并开始向玩家播放指定音乐。播放类别不为音乐的声音项目不会有任何效果。
     * 
     * Plays a particular music track for all players.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param trackId 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * @param musicOptions 可选，指定播放音乐使用的附加参数。
     * @throws This function can throw errors.
     * @seeExample playMusicAndSound.ts
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 将音乐添加到播放列表。如果没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按照添加顺序播放（需要更多测试）。
     * 
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param trackId
     * 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * 
     * Identifier of the music track to play.
     * @param musicOptions
     * 可选，指定播放音乐使用的附加参数。
     * 
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * 向所有玩家广播一条消息。
     * 
     * Sends a message to all players.
     *
     * @param message
     * 将要广播的一段消息。
     * 这段消息可能是一段字符串，或者符合 `RawMessage` 接口的对象，或是这两种类型的组合。
     * 
     * The message to be displayed.
     * @throws
     * 该方法在 `message` 格式不正确时会抛出错误。例如 `score` 的 `name` 为空字符串时。
     * 
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets the world time.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param absoluteTime
     * The world time, in ticks.
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks
     * Sets a default spawn location for all players.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param spawnLocation
     * Location of the spawn point. Note that this is assumed to be
     * within the overworld dimension.
     * @throws
     * Throws if the provided spawn location is out of bounds.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * A Record of key value pairs of the dynamic properties to
     * set.
     * @throws This function can throw errors.
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @remarks
     * 为世界动态属性 `identifier` 设置一个值。
     * 
     * Sets a specified property to a value.
     *
     * @param identifier
     * 动态属性的标识符。
     * 
     * The property identifier.
     * @param value
     * 要设定的值，值的类型必须与动态属性注册的类型相同。
     * 
     * Data value of the property to set.
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
     * 
     * 若动态属性的类型不符合值的类型，抛出 `"Type mismatch for dynamic property '<identifier>'"`。
     * 
     * 若动态属性的类型为字符串，且值在使用 UTF-8 编码后的字节长度大于动态属性所允许的最大长度，抛出 `"Maximum string length exceeded (<length>/<maxLength>) for dynamic property '<identifier>'"`。
     * 
     * Throws if the given dynamic property identifier is not
     * defined.
     * @seeExample incrementDynamicProperty.ts
     * @seeExample incrementDynamicPropertyInJsonBlob.ts
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the time of day.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param timeOfDay
     * The time of day, in ticks, between 0 and 24000.
     * @throws
     * Throws if the provided time of day is not within the valid
     * range.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @remarks
     * 停止客户端中正在播放的所有音乐曲目（需要更多测试）。
     * 
     * Stops any music tracks from playing.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    stopMusic(): void;
}

/**
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity dies.
     *
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is loaded.
     *
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a world.gameRules property has
     * changed.
     *
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when an {@link InputButton} state is
     * changed.
     *
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when a player's {@link InputMode} changes.
     *
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a players input permissions change.
     *
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks
     * An event for when a player interacts with a block.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player interacts with an entity.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits a block.
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @remarks
     * A target block was hit.
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks
     * A trip wire was tripped.
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @beta
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}

/**
 * 表示一系列触发于实际动作发生之前的事件。通常来说，即将触发的事件可被修改或取消。
 * 但请注意，在 before 类事件过程中，能够改变游戏状态的 API 将失效，试图调用将会抛出错误。
 * （例如：dimension.spawnEntity）
 * 
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     * @seeExample customCommand.ts
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /**
     * @remarks
     * This event fires before a block is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with a block.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with an entity.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * Fires when a player leaves the game.
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}

/**
 * @beta
 */
export class WorldLoadAfterEvent {
    private constructor();
}

/**
 * @beta
 */
export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}

/**
 * @beta
 * Contains additional options for searches for the
 * dimension.findNearestBiome API.
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * Bounding volume size to look within.
     *
     */
    boundingSize?: Vector3;
}

/**
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * This function will be called before a player places the
     * block.
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity falls onto the
     * block that this custom component is bound to.
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent) => void;
    /**
     * @remarks
     * This function will be called when the block that this custom
     * component is bound to is placed.
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent) => void;
    /**
     * @remarks
     * This function will be called when a player destroys a
     * specific block.
     *
     */
    onPlayerDestroy?: (arg0: BlockComponentPlayerDestroyEvent) => void;
    /**
     * @remarks
     * This function will be called when a player sucessfully
     * interacts with the block that this custom component is bound
     * to.
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent) => void;
    /**
     * @remarks
     * This function will be called when a block randomly ticks.
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps off the
     * block that this custom component is bound to.
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent) => void;
    /**
     * @remarks
     * This function will be called when a block ticks.
     *
     */
    onTick?: (arg0: BlockComponentTickEvent) => void;
}

/**
 * Contains optional parameters for registering a block event.
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted block's type matches this parameter.
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted block's permutation matches this parameter.
     *
     */
    permutations?: BlockPermutation[];
}

/**
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * When specified, the fill operation will include / exclude
     * the blocks added to the block filter.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * When true fillBlocks will not error if part of the fill
     * volume is outside of loaded chunks bounds. Instead it will
     * just fill the blocks that are inside the loaded chunk bounds
     * and ignoring blocks outside.
     *
     */
    ignoreChunkBoundErrors?: boolean;
}

/**
 * Options to include or exclude blocks based on type, tag or
 * permutation. If no include options are added it will select
 * all blocks that are not rejected by the exclude options. If
 * at least one include option is added the block must match
 * one of the include options to not be rejected.
 */
export interface BlockFilter {
    /**
     * @remarks
     * Array of block permutations that the filter should reject if
     * any matches.
     *
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * Array of block tags that the filter should reject if any
     * matches.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Array of block types that the filter should reject if any
     * matches.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * Array of block permutations that the filter should select if
     * at least one matches.
     *
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * Array of block tags that the filter should select if at
     * least one matches.
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * Array of block types that the filter should select if at
     * least one matches.
     *
     */
    includeTypes?: string[];
}

/**
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * Hit location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * Contains additional options for configuring a block raycast
 * query.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link BoundingBoxUtils} utility
 * functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BoundingBox is not a representation of blocks - it has
 * no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 */
export interface BoundingBox {
    /**
     * @remarks
     * A {@link Vector3} that represents the largest corner of the
     * rectangle
     *
     */
    max: Vector3;
    /**
     * @remarks
     * A {@link Vector3} that represents the smallest corner of the
     * rectangle
     *
     */
    min: Vector3;
}

export interface CameraDefaultOptions {
    /**
     * @remarks
     * Sets a set of easing options for the camera.
     *
     */
    easeOptions: CameraEaseOptions;
}

/**
 * Contains options associated with a camera ease operation.
 */
export interface CameraEaseOptions {
    /**
     * @remarks
     * Time for the ease operation.
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * Type of ease operation to use.
     *
     */
    easeType?: EasingType;
}

/**
 * Used to initiate a full-screen color fade.
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * Fade color to use.
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * Time in seconds for the fade-in, hold, and fade-out seconds.
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}

/**
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * Time, in seconds, for a fade-in.
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * Time, in seconds, for a fade-out.
     *
     */
    fadeOutTime: number;
    /**
     * @remarks
     * Time, in seconds, to hold the full screen color.
     *
     */
    holdTime: number;
}

/**
 * @beta
 *
 * Required Experiments:
 * - Third Person Cameras
 *
 */
export interface CameraFixedBoomOptions {
    entityOffset?: Vector3;
    viewOffset?: Vector2;
}

export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

/**
 * Used to target an entity with a free camera.
 */
export interface CameraTargetOptions {
    /**
     * @remarks
     * Set an <x, y, z> offset from the target entity's center.
     *
     */
    offsetFromTargetCenter?: Vector3;
    /**
     * @remarks
     * The singular entity you want to target.
     *
     */
    targetEntity: Entity;
}

/**
 * @beta
 * This interface defines an entry into the {@link
 * CompoundBlockVolume} which represents a volume of positive
 * or negative space.
 *
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * The 'action' defines how the block volume is represented in
     * the compound block volume stack.
     * 'Add' creates a block volume which is positively selected
     * 'Subtract' creates a block volume which represents a hole or
     * negative space in the overall compound block volume.
     *
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * The relativity enumeration determines whether the
     * BlockVolume specified is positioned relative to the parent
     * compound block volume origin, or in absolute world space.
     *
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * The volume of space
     *
     */
    volume: BlockVolume;
}

/**
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * The list of component groups that will be removed via this
     * definition modification.
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * The list of entity definition events that will be fired via
     * this update.
     *
     */
    triggers: Trigger[];
}

/**
 * An exact coordinate within the world, including its
 * dimension and location.
 */
export interface DimensionLocation {
    /**
     * @remarks
     * Dimension that this coordinate is associated with.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * X component of this dimension-location.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this dimension-location.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this dimension-location.
     *
     */
    z: number;
}

/**
 * This interface represents a specific leveled enchantment
 * that is applied to an item.
 */
export interface Enchantment {
    /**
     * @remarks
     * The level of this enchantment instance.
     *
     */
    level: number;
    /**
     * @remarks
     * The enchantment type of this instance.
     *
     */
    type: EnchantmentType;
}

/**
 * Additional options for when damage has been applied via a
 * projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * Optional entity that fired the projectile.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Projectile that caused damage.
     *
     */
    damagingProjectile: Entity;
}

/**
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * Underlying cause of the damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
}

/**
 * Provides information about how damage has been applied to an
 * entity.
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * Cause enumeration of damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Optional projectile that may have caused damage.
     *
     */
    damagingProjectile?: Entity;
}

/**
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     *
     */
    eventTypes?: string[];
}

/**
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * The strength of the effect.
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * If true, will show particles when effect is on the entity.
     *
     */
    showParticles?: boolean;
}

/**
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}

/**
 * Contains options for filtering entities.
 */
export interface EntityFilter {
    /**
     * @remarks
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
    /**
     * @remarks
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * Includes entities with the specified name.
     *
     */
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
}

/**
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity?: Entity;
}

/**
 * Contains options for selecting entities within an area.
 * @seeExample blockConditional.ts
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts
 * @seeExample playSoundChained.ts
 * @seeExample setScoreboardChained.ts
 * @seeExample summonMobChained.ts
 * @seeExample bounceSkeletons.ts
 * @seeExample tagsQuery.ts
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?:
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}

/**
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}

/**
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * Distance from ray origin to entity bounds.
     *
     */
    distance: number;
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity: Entity;
}

/**
 * Contains additional options for an entity raycast operation.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * If true, blocks will not be considered as blocks that 'stop'
     * the raycast.
     *
     */
    ignoreBlockCollision?: boolean;
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * Equal to operator.
 */
export interface EqualsComparison {
    /**
     * @remarks
     * Threshold value compared against.
     *
     */
    equals: boolean | number | string;
}

/**
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 * @seeExample createNoBlockExplosion.ts
 * @seeExample createExplosions.ts
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}

/**
 * Greater than operator.
 */
export interface GreaterThanComparison {
    /**
     * @remarks
     * Threshold value compared against.
     *
     */
    greaterThan: number;
}

/**
 * Greater than or equal to operator.
 */
export interface GreaterThanOrEqualsComparison {
    /**
     * @remarks
     * Threshold value compared against.
     *
     */
    greaterThanOrEquals: number;
}

/**
 * @rc
 * An interface that is passed into {@link
 * @minecraft/Server.PlayerButtonInputAfterEventSignal.subscribe}
 * that filters out which events are passed to the provided
 * callback.
 */
export interface InputEventOptions {
    /**
     * @remarks
     * The buttons the callback should be called for. If undefined,
     * the callback will be called for all buttons.
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * The state the callback should be called for. If undefined,
     * the callback will be called for all button states.
     *
     */
    state?: ButtonState;
}

/**
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is hitting an entity and about to take durability
     * damage.
     *
     */
    onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component's use duration was completed.
     *
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is eaten by an entity.
     *
     */
    onConsume?: (arg0: ItemComponentConsumeEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to hit another entity.
     *
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to mine a block.
     *
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used by a player.
     *
     */
    onUse?: (arg0: ItemComponentUseEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used on a block.
     *
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent) => void;
}

/**
 * @beta
 * Provides additional options for {@link
 * StructureManager.placeJigsaw}.
 */
export interface JigsawPlaceOptions {
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * Whether the jigsaw blocks should be kept when generating the
     * structure. Defaults to false.
     *
     */
    keepJigsaws?: boolean;
}

/**
 * @beta
 * Provides additional options for {@link
 * StructureManager.placeJigsawStructure}.
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * Whether the start height defined in the jigsaw structure
     * definition should be ignored and overridden with the
     * specified y coordinate. Defaults to false.
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * Whether the jigsaw blocks should be kept when generating the
     * structure. Defaults to false.
     *
     */
    keepJigsaws?: boolean;
}

/**
 * Less than operator.
 */
export interface LessThanComparison {
    /**
     * @remarks
     * Threshold value compared against.
     *
     */
    lessThan: number;
}

/**
 * Less than or equal to operator.
 */
export interface LessThanOrEqualsComparison {
    /**
     * @remarks
     * Threshold value compared against.
     *
     */
    lessThanOrEquals: number;
}

/**
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * @remarks
     * Specifies a fade overlap for music at the end of play.
     *
     */
    fade?: number;
    /**
     * @remarks
     * If set to true, this music track will play repeatedly.
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * Relative volume level of the music.
     *
     */
    volume?: number;
}

/**
 * Not equal to operator.
 */
export interface NotEqualsComparison {
    /**
     * @remarks
     * Threshold value compared against.
     *
     */
    notEquals: boolean | number | string;
}

/**
 * Contains additional options for how an animation is played.
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * Amount of time to fade out after an animation stops.
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * Specifies a controller to use that has been defined on the
     * entity.
     *
     */
    controller?: string;
    /**
     * @remarks
     * Specifies the state to transition to.
     *
     */
    nextState?: string;
    /**
     * @remarks
     * A list of players the animation will be visible to.
     *
     */
    players?: string[];
    /**
     * @remarks
     * Specifies a Molang expression for when this animation should
     * complete.
     *
     */
    stopExpression?: string;
}

/**
 * @beta
 * Settings relating to a player's aim-assist targeting.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export interface PlayerAimAssistSettings {
    /**
     * @remarks
     * The view distance limit to use for aim-assist targeting.
     *
     */
    distance?: number;
    /**
     * @remarks
     * The Id of the aim-assist preset to activate. Must have a
     * namespace.
     *
     */
    presetId: string;
    /**
     * @remarks
     * The mode to use for aim-assist targeting.
     *
     */
    targetMode?: AimAssistTargetMode;
    /**
     * @remarks
     * The view angle limit to use for aim-assist targeting.
     *
     */
    viewAngle?: Vector2;
}

/**
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * Location of the sound; if not specified, the sound is played
     * near a player.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * Optional pitch of the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Optional volume of the sound.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Options for use in creating potions. See
 * ItemStack.createPotion.
 */
export interface PotionOptions {
    /**
     * @remarks
     * The type of potion effect to create. See
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes.
     *
     */
    effect: PotionEffectType | string;
    /**
     * @remarks
     * Optional potion liquid, defaults to 'Regular'. See
     * @minecraft/vanilla-data.MinecraftPotionLiquidTypes.
     *
     */
    liquid?: PotionLiquidType | string;
    /**
     * @remarks
     * Optional potion modifier, defaults to 'Normal'. See
     * @minecraft/vanilla-data.MinecraftPotionModifierTypes.
     *
     */
    modifier?: PotionModifierType | string;
}

/**
 * Optional arguments for
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * Controls the accuracy of the shot. A value of 0 is perfect
     * accuracy.
     *
     */
    uncertainty?: number;
}

/**
 * Operator represents a lower/upper bound structure for
 * expressing a potential range of numbers.
 */
export interface RangeComparison {
    /**
     * @remarks
     * Lower bound within a range.
     *
     */
    lowerBound: number;
    /**
     * @remarks
     * Upper bound within a range.
     *
     */
    upperBound: number;
}

/**
 * Defines a JSON structure that is used for more flexible.
 * @seeExample addTranslatedSign.ts 9d3a2d98
 * @seeExample showTranslatedMessageForm.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export interface RawMessage {
    /**
     * @remarks
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * Provides a token that will get replaced with the value of a
     * score.
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * Arguments for the translation token. Can be either an array
     * of strings or RawMessage containing an array of raw text
     * objects.
     *
     */
    with?: string[] | RawMessage;
}

/**
 * Provides a description of a score token to use within a raw
 * message.
 */
export interface RawMessageScore {
    /**
     * @remarks
     * Name of the score value to match.
     *
     */
    name?: string;
    /**
     * @remarks
     * Name of the score value to match.
     *
     */
    objective?: string;
}

/**
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples.
 */
export interface RawText {
    /**
     * @remarks
     * A serialization of the current value of an associated sign.
     *
     */
    rawtext?: RawMessage[];
}

/**
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
    /**
     * @remarks
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}

/**
 * Represents a fully customizable color within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     *
     */
    alpha: number;
}

/**
 * 表示记分项显示位置配置。描述了如何在记分板显示位置上显示记分项。
 * 
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * 要显示的记分项。
     * 
     * Objective to be displayed.
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * 记分项条目的显示排序顺序。
     * 
     * The sort order to display the objective items within.
     *
     */
    sortOrder?: ObjectiveSortOrder;
}

/**
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * Optional list of namespaces to filter inbound script event
     * messages.
     *
     */
    namespaces: string[];
}

/**
 * @beta
 */
export interface SpawnEntityOptions {
    initialPersistence?: boolean;
    initialRotation?: number;
}

/**
 * Provides additional options for {@link
 * StructureManager.createFromWorld}
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * Whether blocks should be included in the structure. Defaults
     * to true.
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * How the Structure should be saved. Defaults to
     * StructureSaveMode.World.
     *
     */
    saveMode?: StructureSaveMode;
}

/**
 * Provides additional options for {@link
 * StructureManager.place}
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * How the Structure should be animated when placed.
     *
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * How many seconds the animation should take.
     *
     */
    animationSeconds?: number;
    /**
     * @remarks
     * Whether blocks should be included in the structure. Defaults
     * to true.
     *
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * What percentage of blocks should be placed. A value of 1
     * will place 100% of the blocks while a value of 0 will place
     * none. The blocks are chosen randomly based on the {@link
     * StructurePlaceOptions.integritySeed}.
     *
     */
    integrity?: number;
    /**
     * @remarks
     * Seed that determines which blocks are randomly chosen to be
     * placed. Defaults to a random seed.
     *
     */
    integritySeed?: string;
    /**
     * @remarks
     * Which axes the Structure should be mirrored on when placed.
     * Defaults to StructureMirrorAxis.None.
     *
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * How the Structure should be rotated when placed. Defaults to
     * AxisAlignedRotation.None.
     *
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * Whether the structure should be waterlogged when placed.
     * Defaults to false. If true, blocks will become waterlogged
     * when placed in water.
     *
     */
    waterlogged?: boolean;
}

/**
 * Contains additional options for teleporting an entity.
 * @seeExample teleport.ts
 * @seeExample teleportMovement.ts
 */
export interface TeleportOptions {
    /**
     * @remarks
     * Whether to check whether blocks will block the entity after
     * teleport.
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * Dimension to potentially move the entity to.  If not
     * specified, the entity is teleported within the dimension
     * that they reside.
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * Location that the entity should be facing after teleport.
     *
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * Whether to retain the entities velocity after teleport.
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * Rotation of the entity after teleport.
     *
     */
    rotation?: Vector2;
}

/**
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * Fade-in duration for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * Fade-out time for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * Amount of time for the title and subtitle to stay in place,
     * in ticks. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * Optional subtitle text.
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * Represents a two-directional vector.
 */
export interface Vector2 {
    /**
     * @remarks
     * X component of the two-dimensional vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of the two-dimensional vector.
     *
     */
    y: number;
}

/**
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * @remarks
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     */
    z: number;
}

export interface VectorXZ {
    x: number;
    z: number;
}

/**
 * Contains additional options for a playSound occurrence.
 */
export interface WorldSoundOptions {
    /**
     * @remarks
     * Pitch of the sound played.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Relative volume and space by which this sound is heard.
     *
     */
    volume?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockCustomComponentReloadVersionError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    reason: CustomComponentNameErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

/**
 * The container slot is invalid. This can occur when the
 * owning container is destroyed or unloaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}

/**
 * @rc
 * The error called when an entity is invalid. This can occur
 * when accessing components on a removed entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * The id of the entity that is now invalid.
     *
     */
    id: string;
    /**
     * @remarks
     * The type of the entity that is now invalid.
     *
     */
    type: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidIteratorError extends Error {
    private constructor();
}

/**
 * Thrown when a Structure is invalid. A structure becomes
 * invalid when it is deleted.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}

/**
 * Thrown when trying to register an item custom component with
 * a name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

/**
 * Thrown after using the /reload command when trying to
 * register a previously unregistered item custom component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

/**
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component that
 * handles a new event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}

/**
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component with
 * a newer API version.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}

/**
 * Thrown when the chunk for provided location or bounding area
 * is not loaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

/**
 * Thrown when a provided location or bounding area is outside
 * the minimum or maximum dimension height.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

/**
 * @rc
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    reason: NamespaceNameErrorReason;
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlaceJigsawError extends Error {
    private constructor();
}

/**
 * @beta
 * Thrown when the SpawnRulesRegistry is accessed outside of
 * ModuleStartupEvent.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SpawnRulesInvalidRegistryError extends Error {
    private constructor();
}

/**
 * Error thrown when the specified area contains one or more
 * unloaded chunks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
/**
 * @remarks
 * Holds the number of MoonPhases
 *
 * 表示月相的数量
 *
 */
export const MoonPhaseCount = 8;
/**
 * @beta
 */
export const TicksPerDay = 24000;
/**
 * @remarks
 * How many times the server ticks per second of real time.
 *
 * 表示服务器每秒钟的真实时间内的刻数。
 *
 */
export const TicksPerSecond = 20;
/**
 * @remarks
 * A class that provides system-level events and functions.
 *
 * 表示提供系统级事件和功能的类。
 *
 */
export const system: System;
/**
 * @remarks
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 *
 * 表示封装世界状态的类，包括一组维度和Minecraft的环境。
 *
 */
export const world: World;
