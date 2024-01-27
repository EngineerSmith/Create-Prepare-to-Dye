let indestructibleItems = [
    'wares:delivery_agreement',
    'wares:completed_delivery_agreement',
    'wares:sealed_delivery_agreement',
    "create:brass_casing",
    "create:copper_casing",
    "create:andesite_casing",
    "ptdye:cobblestone_casing",
    "ptdye:redstone_casing",
    "create:controller_rail",
    "create:railway_casing"
]
EntityEvents.spawned(event => {
    if (!event.entity.item) return
    if (indestructibleItems.includes(event.entity.item.id) || Ingredient.of('#forge:indestructible').itemIds.entries && Ingredient.of('#forge:indestructible').itemIds.contains(event.entity.item.id)) {
        event.entity.age = 2147483647;
    }
})

ItemEvents.rightClicked("create:super_glue", (event) => {
    event.item.setDamageValue(0)
})

BlockEvents.rightClicked((event) => {
    if (event.getItem().id != "create:super_glue")
        return
    event.server.scheduleInTicks(2, (_) => {
        event.item.setDamageValue(0)
    })
})