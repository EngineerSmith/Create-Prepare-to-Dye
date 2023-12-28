//priority:170
const ccc = Company.constructor("cosmic_cuisine_collective", "ccc").hasSeal()

const cccIronBars = Agreement.constructor(ccc, "IronBars")
  .setTask([
    "64x minecraft:iron_bars",
    "64x minecraft:iron_bars",
  ])
  .setReward([
    Item.of("botania:mana_tablet", "{mana:10000}"),
    "16x minecraft:leather",
  ])
  .setRecurrence(4)
  .create()

const cccRawWhite = Agreement.constructor(ccc, "RawWhite")
  .setTask([
    "64x minecraft:raw_iron",
    "16x minecraft:raw_iron",
  ])
  .setReward([
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "8x slime_ball",
    "8x create:cogwheel",
    "2x createdieselgenerators:basin_lid",
    "2x create:weighted_ejector",
  ])
  .setRecurrence(3)
  .create()
