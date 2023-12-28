//priority:170
const bhb = Company.constructor("black_hole_bagels_llc", "bhb").hasSeal()

const bhbCheese = Agreement.constructor(bhb, "Cheese")
  .setTask([
    "32x kubejs:fermented_blob",
  ])
  .setReward([
    "1x botania:gourmaryllis",
    "1x minecraft:water_bucket",
    "1x minecraft:water_bucket",
    "8x minecraft:sugar_cane",
  ])
  .setRecurrence(3)
  .create()

const bhbCheeseFixed = Agreement.constructor(bhb, "CheeseFixed")
  .setTask([
    "64x kubejs:fermented_blob",
  ])
  .setReward([
    "32x supplementaries:soap",
  ])
  .create()

const bhbFurnaces = Agreement.constructor(bhb, "Furnaces")
  .setTask([
    "64x minecraft:furnace"
  ])
  .setReward([
    "8x minecraft:clay",
    "8x copper_ingot",
    "8x botania:manasteel_ingot",
  ])
  .setRecurrence(2)
  .create()

const bhbWheat = Agreement.constructor(bhb, "Wheat")
  .setTask([
    "64x wheat",
  ])
  .setReward([
    "32x botania:livingwood_log",
    "water_bucket",
  ])
  .setRecurrence(2)
  .create()

const bhbWheatFixedRates = Agreement.constructor(bhb, "WheatFixedRates")
  .setTask([
    "64x wheat",
    "64x wheat",
  ])
  .setReward([
    "32x clay",
  ])
  .create()
