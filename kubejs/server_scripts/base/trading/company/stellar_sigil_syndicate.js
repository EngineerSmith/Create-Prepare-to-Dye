//priority:170
const sss = Company.constructor("stellar_sigil_syndicate", "sss").hasSeal()

const sssHelmets = Agreement.constructor(sss, "Helmets")
  .setTask([
    "16x botania:manasteel_helmet"
  ])
  .setReward([
    "minecraft:air",
  ])
  .setRecurrence(2)
  .create()

const sssHelmetsFixedRates = Agreement.constructor(sss, "HelmetsFixedRates")
  .setTask([
    "32x botania:manasteel_helmet"
  ])
  .setReward([
    "minecraft:air",
  ])
  .create()
