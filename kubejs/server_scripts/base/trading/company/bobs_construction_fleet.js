//priority:170
const bcf = Company.constructor("bobs_construction_fleet", "bcf").hasSeal()

const bcfHelmets = Agreement.constructor(bcf, "Helmets")
  .setTask([
    "16x minecraft:iron_helmet",
  ])
  .setReward([
    "16x ptdye:locomotive_device",
    "16x create:track",
  ])
  .setRecurrence(2)
  .create()

const bcfPickaxes = Agreement.constructor(bcf, "Pickaxes")
  .setTask([
    "16x #forge:tools/pickaxes",
  ])
  .setReward([
    "32x create:track",
    "8x ptdye:locomotive_device",
  ])
  .setRecurrence(2)
  .create()

const bcfPlates2 = Agreement.constructor(bcf, "Plates2")
  .setTask([
    "64x create:iron_sheet",
    "64x create:iron_sheet",
    "64x create:iron_sheet",
  ])
  .setReward([
    "16x minecraft:andesite",
    "16x ptdye:sealed_device",
    "10x ae2:flawed_budding_quartz",
    "16x ptdye:mechanical_device",
    "16x ptdye:smart_device",
    "create:super_glue",
  ])
  .setRecurrence(2)
  .create()

const bcfPlatesPermanent = Agreement.constructor(bcf, "PlatesPermanent")
  .setTask([
    "64x create:iron_sheet",
    "64x create:iron_sheet",
  ])
  .setReward([
    "64x andesite",
    "32x minecraft:andesite",
  ])
  .create()
