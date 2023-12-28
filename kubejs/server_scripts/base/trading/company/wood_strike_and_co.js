//priority:170
const wsc = Company.constructor("wood_strike_and_co", "wsc")

const wscAxes = Agreement.constructor(wsc, "Axes")
  .setTask([
    "16x #forge:tools/axes",
  ])
  .setReward([
    "16x minecraft:oak_log",
    "10x storagedrawers:oak_full_drawers_1",
    "2x minecraft:chest",
    "ptdye:trading_transceiver",
  ])
  .setRecurrence(1)
  .create()

const wscBread = Agreement.constructor(wsc, "Bread")
  .setTask([
    "64x minecraft:bread",
  ])
  .setReward([
    "8x minecraft:birch_log",
    "minecraft:chest",
    "4x storagedrawers:oak_full_drawers_1",
  ])
  .setRecurrence(2)
  .create()

const wscBreadAndAxesFixed = Agreement.constructor(wsc, "BreadAndAxesFixed")
  .setTask([
    "64x minecraft:bread",
    "16x #forge:tools/axes",
  ])
  .setReward([
    "8x minecraft:birch_log",
  ])
  .create()
