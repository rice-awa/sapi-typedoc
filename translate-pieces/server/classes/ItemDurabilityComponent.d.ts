/* IMPORT */ import { ItemComponent, minecraftcommon } from '../index';

/**
 * @beta
 * 表示物品耐久组件。当出现在物品上时，表示该物品可以在使用中受到损坏。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
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
     * This property can't be edited in read-only mode.
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
     * using the damageRange property, given an unbreaking level.
     *
     * This function can't be called in read-only mode.
     *
     * @param unbreakingEnchantmentLevel
     * 耐久魔咒等级，在计算损坏概率时受到此参数的影响。
     * 传入的 `unbreakingEnchantmentLevel` 参数必须大于等于 0。
     * 
     * @returns 使用时的最大损坏概率。
     * @throws
     * 若 `unbreakingEnchantmentLevel` 参数小于 0，抛出 `TypeError` 。
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks
     * 返回物品损失耐久的概率范围。
     * 
     * 公式：`几率 = (最小值 + ((最大值 - 最小值) / (耐久等级 + 1)))`
     * 
     * Returns the min and max variables used by the damage chance
     * formula:
     * chance = (min + ((max - min) / (unbreaking + 1)))
     * 
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}