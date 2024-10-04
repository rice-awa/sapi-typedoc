import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run tellraw @a { "rawtext": [{"translate": "hello.world" }] }

// Equivalent scripting code would be:
function sendMessagesToPlayers(dimension: Dimension) {
    const targetPlayers = dimension.getPlayers();
    const originEntities = dimension.getEntities({
        type: 'armor_stand',
        name: 'myArmorStand',
        tags: ['dummyTag1'],
        excludeTags: ['dummyTag2'],
    });

    originEntities.forEach(entity => {
        targetPlayers.forEach(player => {
            player.sendMessage({ rawtext: [{ translate: 'hello.world' }] });
        });
    });
}
