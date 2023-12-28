//priority:170
const qube = Company.constructor("qube", "qube").hasSeal()

const qubeAngry = Agreement.constructor(qube, "Angry")
  .setTask([
    bhbWheatFixedRates.item,
  ])
  .setReward([
    "minecraft:air",
  ])
  .setRecurrence(1)
  .create()
