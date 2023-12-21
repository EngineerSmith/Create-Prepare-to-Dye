// function getTradeNbtNameFilter(item) {
//   console.log(`getting trade nbt name filter for ${item.getNbt()}`)
//   return Item.of(item.id).withName(item.nbt.get("display").get("Name")).weakNBT();
// }
// addMixing(
//   "stick",
//   getTradeNbtNameFilter(
//     Item.of("minecraft:stick", 2, "{Damage:0}").withName("Trading Transceiver")
//   )
// );

let company = global.company

const bcfPlates = Agreement.constructor(company.bcf, "Plates")
  .setTask([ // This is the cost of the trade
    "64x create:iron_sheet",
  ])
  .setReward([ // This is the result of the trade
    "32x minecraft:andesite",
    "10x create:cogwheel",
    "8x create:belt_connector",
  ])
  .setRecurrence(3) // This is how many times the trade is done, until the deal is complete
  .create()

const bcfPlates2 = Agreement.constructor(company.bcf, "Plates2")
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

const bfcPlatesPermanent = Agreement.constructor(company.bcf, "PlatesPermanent")
  .setTask([
    "64x create:iron_sheet",
    "64x create:iron_sheet",
  ])
  .setReward([
    "64x andesite",
    "32x minecraft:andesite",
  ])
  .create()

const bfcPickaxes = Agreement.constructor(company.bfc, "Pickaxes")
  .setTask([
    "16x #forge:tools/pickaxes",
  ])
  .setReward([
    "32x create:track",
    "8x ptdye:locomotive_device",
  ])
  .setRecurrence(2)
  .create()

const bfcHelmets = Agreement.constructor(company.bfc, "Helmets")
  .setTask([
    "16x minecraft:iron_helmet",
  ])
  .setReward([
    "16x ptdye:locomotive_device",
    "16x create:track",
  ])
  .setRecurrence(2)
  .create()

const mlcEndstoneFixed = Agreement.constructor(company.mlc, "EndstoneFixed")
  .setTask([
    "32x minecraft:end_stone",
  ])
  .setReward([
    "16x quark:chorus_fruit_block",
  ])
  .create()

const mlcSand = Agreement.constructor(company.mlc, "Sand")
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

const mlcSand2 = Agreement.constructor(company.mlc, "Sand2")
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

const mlcSandFixed = Agreement.constructor(company.mlc, "SandFixed")
  .setTask([
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

const bhbCheese = Agreement.constructor(company.bhb, "Cheese")
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

const bhbCheeseFixed = Agreement.constructor(company.bhb, "CheeseFixed")
  .setTask([
    "64x kubejs:fermented_blob",
  ])
  .setReward([
    "32x supplementaries:soap",
  ])
  .create()

const bhbWheat = Agreement.constructor(company.bhb, "Wheat")
  .setTask([
    "64x wheat",
  ])
  .setReward([
    "32x botania:livingwood_log",
    "water_bucket",
  ])
  .setRecurrence(2)
  .create()

const bhbWheatFixedRates = Agreement.constructor(company.bhb, "WheatFixedRates")
  .setTask([
    "64x wheat",
    "64x wheat",
  ])
  .setReward([
    "32x clay",
  ])
  .create()

const bhbFurnaces = Agreement.constructor(company.bhb, "Furnaces")
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

const wscAxes = Agreement.constructor(company.wsc, "Axes")
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

const wscBread = Agreement.constructor(company.wsc, "Bread")
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

const wscBreadAndAxesFixed = Agreement.constructor(company.wsc, "BreadAndAxesFixed")
  .setTask([
    "64x minecraft:bread",
    "16x #forge:tools/axes",
  ])
  .setReward([
    "8x minecraft:birch_log",
  ])
  .create()

const bnwRedstone = Agreement.constructor(company.bnw, "Redstone")
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
const bnwRedstone = getAgreement("bnwRedstone", {
  paymentItems: [
    
  ],
  requestedItems: [],
  title: "Redstone from the red planet",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "Causing quite the stir there arnt you? Your horrific red planet was empty for eons, hope you know what you are doing landing there so spectacularly. Anyways we heard your planet is red because it's made of redstone, so we want to buy some",
});
const bnwRedstoneFixedRates = getAgreement("bnwRedstoneFixedRates", {
  paymentItems: ["4x ae2:fluix_smart_cable"],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Fixed rates redstone > cables",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Alright, you seem to be reliable, I believe it is time we made it official, lets start a fixed rates agreement. Your redstone is high quality, we make great cables, simple as that",
});
const bnwManasteel = getAgreement("bnwManasteel", {
  paymentItems: [
    "4x ae2:storage_monitor",
    Item.of(
      "ae2:energy_cell",
      1,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "8x minecraft:lever",
    "8x minecraft:gold_ingot",
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
  ],
  title: "New material",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "Hello again, we are experimenting with new types of processors based on a more conductive material, if you can get us some we can continue this research, we can't pay a lot now, but if this works out we will require much more and our budget will be higher too if you catch my drift",
});
const bnwManasteelFixedRates = getAgreement("bnwManasteelFixedRates", {
  paymentItems: ["8x ptdye:logic_device"],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "32x botania:manasteel_ingot",
  ],
  title: "Fixed rates blue > cells",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Well, well, seems that this blue stuff is working really well for us, we are going to need a lot more, lets fix our rates, we can supply you with energy cells, you can supply us with this new material",
});
const bnwQuartz = getAgreement("bnwQuartz", {
  paymentItems: [
    "8x ptdye:smart_device",
    "8x minecraft:gold_ingot",
    "2x ptdye:logic_device",
  ],
  requestedItems: ["64x minecraft:quartz"],
  title: "Need raw materials for silicon",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are great partners, you and me, its great to have a reliable source for once. Anyways, we are working on a new batch of silicon, we need some raw material, counting on you. Sidenote, ive talked about you to a few friends of mine, lets just say they are keeping an eye on you, the good kind of eye, dont worry",
});
const bnwCogs = getAgreement("bnwCogs", {
  paymentItems: [
    "8x ptdye:smart_device",
    "8x ae2:fluix_smart_cable",
    "5x ae2:storage_bus",
    "2x ae2:toggle_bus",
  ],
  requestedItems: ["64x create:cogwheel"],
  title: "Assembly expansion",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const bnwPolishedRoseQuartz = getAgreement("bnwPolishedRoseQuartz", {
  paymentItems: [
    "8x ae2:fluix_smart_cable",
    "4x create:mechanical_arm",
    "4x ae2:storage_bus",
    "4x ptdye:logic_device",
  ],
  requestedItems: ["64x create:polished_rose_quartz"],
  title: "Assembly expansion",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const qubeAngry = getAgreement("qubeAngry", {
  paymentItems: ["minecraft:air"],
  requestedItems: [bhbWheatFixedRates.item],
  title: "Who do you think you are?!",
  orderedAmount: 1,
  company: "qube",
  message:
    "You sun of a squid, thought we woudnt find out? Who do you think you are? Waltzing over to our system and changing things around, this is unacceptable. Know this, if you want ANY trade from REAL companies around here give up this contract NOW and you will be forgiven, we may talk then",
});

const gbdSticks = getAgreement("gbdSticks", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:1.0499999999999998d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.020354872569441795d,8.017524960450828E-4d,-0.02206386998295784d],OnGround:0b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.1876d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:squid"},Name:"Squid",Scale:0.6944444f,UUID:[I;488746606,1876312093,-1582293357,2139790907]}},RepairCost:0,display:{Name:\'{"text":"Kraken of the depths!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.25d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:16.0d,Modifiers:[{Amount:-0.028267175516417276d,Name:"Random spawn bonus",Operation:1,UUID:[I;904579365,1095388434,-2079221910,56613228]}],Name:"minecraft:generic.follow_range"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:8.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.06663110395805134d,-0.0784000015258789d,0.0011508201133065817d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],"forge:spawn_type":"SPAWN_EGG",id:"minecraft:silverfish"},Name:"Silverfish",Scale:0.9615385f,UUID:[I;913707991,1000820097,-1560499399,-304684093]}},RepairCost:0,display:{Name:\'{"text":"Silver stone-dweller of DOOM!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x minecraft:stick",
    "64x minecraft:stick",
    "64x minecraft:stick",
  ],
  title: "Interested in exotic creatures?",
  orderedAmount: 1,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, fellow trade mesh body! We here at gbd supply THE BEST of BEASTS. We heard you are an amazing supplier and we currently need some incentive devices to help our employees work harder, nothing special mind you, and of course in return you will get to see some our most EXCLUSIVE AMAZING BEASTS! What do you say?",
});
const gdbLead = getAgreement("gdbLead", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "Leftovers from nether exhibition",
  orderedAmount: 2,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, we are excited to offer you an incredible opportunity! We have a few leftover beasts from our nether exhibition, the highest quality stock around! We need a few leads for our future endeavors, lets strike a deal!",
});
const gdbLeadFriend = getAgreement("gdbLeadFriend", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "EXCLUSIVE Leftovers from nether exhibition",
  orderedAmount: 6,
  company: "galactic_beast_deliveries",
  message:
    "As our most VALUABLE customer, we are excited to offer you a once in a lifetime opportunity! We have a few leftover beasts from our nether exhibition, and we are willing to part with them for a small fee. What do you say?",
});

const sssHelmets = getAgreement("sssHelmets", {
  paymentItems: ["air"],
  requestedItems: ["16x botania:manasteel_helmet"],
  title: "The syndicate needs YOU!",
  orderedAmount: 2,
  company: "stellar_sigil_syndicate",
  message:
    "We are the syndicate, we know you have heard of us, we are here to make the world a better place, and we want you to be a part of that! We need some helmets for our new recruits, if you help us out with this, you can enjoy the feeling of being a part of something bigger than yourself!",
});
const sssHelmetsFixedRates = getAgreement("sssHelmetsFixedRates", {
  paymentItems: ["air"],
  requestedItems: ["32x botania:manasteel_helmet"],
  title: "Making the world a better place!",
  orderedAmount: 0,
  company: "stellar_sigil_syndicate",
  message:
    "Amazing! Its so great to have you with us brother, or sister, or whatever you are. We always require more recruits, and so we always require more helmets!",
});
const cccRawWhiteOld = getAgreement("cccRawWhiteOld", {
  paymentItems: [
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "2x createdieselgenerators:basin_lid",
    "2x create:weighted_ejector",
  ],
  requestedItems: ["64x minecraft:raw_iron", "16x minecraft:raw_iron"],
  title: "Supplements required",
  orderedAmount: 3,
  company: "cosmic_cuisine_collective",
  message:
    "We have been receiving complaints from customers which we have not managed to deal with violently yet. Looking into a different approach. People are experiencing extreme deficiency in white minerals on our CCC Diet Plus program. We want to acquire some additives that can solve this.",
});
const cccRawWhite = getAgreement("cccRawWhite", {
  paymentItems: [
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "8x slime_ball",
    "8x create:cogwheel",
    "2x createdieselgenerators:basin_lid",
    "2x create:weighted_ejector",
  ],
  requestedItems: ["64x minecraft:raw_iron", "16x minecraft:raw_iron"],
  title: "Supplements required",
  orderedAmount: 3,
  company: "cosmic_cuisine_collective",
  message:
    "We have been receiving complaints from customers which we have not managed to deal with violently yet. Looking into a different approach. People are experiencing extreme deficiency in white minerals on our CCC Diet Plus program. We want to acquire some additives that can solve this.",
});
const cccIronBars = getAgreement("cccIronBars", {
  paymentItems: [
    "16x minecraft:leather",
    Item.of("botania:mana_tablet", "{mana:10000}"),
  ],
  requestedItems: ["64x minecraft:iron_bars", "64x minecraft:iron_bars"],
  title: "Building cells, supplies needed URGENTLY",
  orderedAmount: 4,
  company: "cosmic_cuisine_collective",
  message:
    "We are currently dealing with multiple class action lawsuits about poisonings. We have apprehended a few of those scoundrels and are currently in need of new holding cells, fast",
});
global.starterDeals = [cccRawWhite, mlcSand, bhbCheese, bcfDave];
tradeBranch([bcfPlates2, bnwRedstone], [bcfPlates]);
tradeBranch([cccIronBars, bcfPlates], [cccRawWhite]);
tradeBranch([cccIronBars, bcfPlates], [cccRawWhiteOld]);
tradeBranch(bnwManasteel, bnwRedstone);
tradeBranch([bnwQuartz, bnwManasteelFixedRates], bnwManasteel);
tradeBranch([bnwCogs, bnwQuartz], [bnwManasteel, bfcPickaxes]);
tradeBranch(
  [bfcPlatesPermanent, bfcPickaxes, mlcSand2], //The next trades in line
  [bcfPlates2, mlcSand] //The trades that need to be completed and process for that
);
tradeBranch([mlcEndstoneFixed, mlcSandFixed], mlcSand2);
tradeBranch([bhbWheat, wscAxes, bhbCheeseFixed], bhbCheese);
tradeBranch([wscBread], wscAxes);
tradeBranch([wscBreadAndAxesFixed], wscBread);
tradeBranch([bhbFurnaces, sssHelmets], bhbWheat);
tradeBranch(sssHelmetsFixedRates, sssHelmets);
tradeBranch([bhbWheatFixedRates, qubeAngry, gbdSticks], bhbFurnaces);
tradeBranch([bnwPolishedRoseQuartz, gdbLeadFriend], [bnwQuartz, gbdSticks]);
tradeBranch([bnwPolishedRoseQuartz, gdbLead], [bnwQuartz, bnwCogs]);

ServerEvents.commandRegistry((event) => {
  const {
    commands: Commands,
    arguments: Arguments,
    builtinSuggestions: Suggestions,
  } = event;
  event.register(
    Commands.literal("starterDeals").executes((context) => {
      global.starterDeals.forEach((deal) =>
        context.getSource().getPlayer().give(deal.item)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("starterDealCompleted").executes((context) => {
      global.starterDeals.forEach((deal) =>
        context.getSource().getPlayer().give(deal.completedItem)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("allAgreements").executes((context) => {
      global.allAgreements.forEach((deal) =>
        context.getSource().getPlayer().give(deal)
      );
      return 0;
    })
  );
});
