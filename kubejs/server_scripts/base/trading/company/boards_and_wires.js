//priority:170
const bnw = Company.constructor("boards_and_wires", "bnw").hasSeal()

const bnwCogs = Agreement.constructor(bnw, "Cogs")
  .setTask([
    "64x create:cogwheel",
  ])
  .setReward([
    "8x ptdye:smart_device",
    "8x ae2:fluix_smart_cable",
    "5x ae2:storage_bus",
    "2x ae2:toggle_bus",
  ])
  .setRecurrence(2)
  .create()

const bnwManasteel = Agreement.constructor(bnw, "Manasteel")
  .setTask([
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
  ])
  .setReward([
    Item.of(
      "ae2:energy_cell",
      1,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "4x ae2:storage_monitor",
    "8x minecraft:lever",
    "8x minecraft:gold_ingot",
    "ptdye:trading_transceiver",
  ])
  .setRecurrence(1)
  .create()

const bnwManasteelFixedRates = Agreement.constructor(bnw, "ManasteelFixedRates")
  .setTask([
    "64x botania:manasteel_ingot",
    "32x botania:manasteel_ingot",
  ])
  .setReward([
    "8x ptdye:logic_device",
  ])
  .create()

const bnwPolishedRoseQuartz = Agreement.constructor(bnw, "PolishedRoseQuartz")
  .setTask([
    "64x create:polished_rose_quartz"
  ])
  .setReward([
    "8x ae2:fluix_smart_cable",
    "4x create:mechanical_arm",
    "4x ae2:storage_bus",
    "4x ptdye:logic_device",
  ])
  .setRecurrence(1)
  .create()

const bnwQuartz = Agreement.constructor(bnw, "Quartz")
  .setTask([
    "64x minecraft:quartz",
  ])
  .setReward([
    "8x ptdye:smart_device",
    "8x minecraft:gold_ingot",
    "2x ptdye:logic_device",
  ])
  .setRecurrence(2)
  .create()

const bnwRedstone = Agreement.constructor(bnw, "Redstone")
  .setTask([
    "64x minecraft:redstone",
    "64x minecraft:redstone",
  ])
  .setReward([
    Item.of(
      "ae2:energy_cell",
      2,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "8x ae2:fluix_smart_cable",
    "4x ptdye:logic_device",
  ])
  .setRecurrence(2)
  .create()

const bnwRedstoneFixedRates = Agreement.constructor(bnw, "RedstoneFixedRates")
  .setTask([
    "64x minecraft:redstone",
    "64x minecraft:redstone",
  ])
  .setReward([
    "4x ae2:fluix_smart_cable",
  ])
  .create()
