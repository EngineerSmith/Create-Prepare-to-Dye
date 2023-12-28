//priority:170
const mlc = Company.constructor("magical_landscaping_co", "mlc").hasSeal()

const mlcEndstoneFixed = Agreement.constructor(mlc, "EndstoneFixed")
  .setTask([
    "32x minecraft:end_stone",
  ])
  .setReward([
    "16x quark:chorus_fruit_block",
  ])
  .create()

const mlcSand = Agreement.constructor(mlc, "Sand")
  .setTask([
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
  ])
  .setReward([
    // "botania:manasteel_shovel",
    Item.of("minecraft:golden_pickaxe", 2, "{Damage:0}"),
    "2x botania:hopperhock",
    "2x botania:mana_pool",
    "dirt",
    "botania:mana_spreader",
  ])
  .setRecurrence(2)
  .create()

const mlcSand2 = Agreement.constructor(mlc, "Sand2")
  .setTask([
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ])
  .setReward([
    Item.of("minecraft:golden_pickaxe", 4, "{Damage:0}"),
    "32x dirt",
    "16x supplementaries:jar",
    "8x ptdye:smart_device",
    "ptdye:trading_transceiver",
  ])
  .setRecurrence(3)
  .create()

const mlcSandFixed = Agreement.constructor(mlc, "SandFixed")
  .setTask([
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ])
  .setReward([
    Item.of("minecraft:golden_pickaxe", 16, "{Damage:0}"),
    "64x minecraft:cobblestone",
  ])
  .setRecurrence(5)
  .create()
