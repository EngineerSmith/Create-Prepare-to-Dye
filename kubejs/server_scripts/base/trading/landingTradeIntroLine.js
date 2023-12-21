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

const bnwRedstoneFixedRates = Agreement.constructor(company.bnw, "RedstoneFixedRates")
  .setTask([
    "64x minecraft:redstone",
    "64x minecraft:redstone",
  ])
  .setReward([
    "4x ae2:fluix_smart_cable",
  ])
  .create()

const bnwManasteel = Agreement.constructor(company.bnw, "Manasteel")
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

const bnwManasteelFixedRates = Agreement.constructor(company.bnw, "ManasteelFixedRates")
  .setTask([
    "64x botania:manasteel_ingot",
    "32x botania:manasteel_ingot",
  ])
  .setReward([
    "8x ptdye:logic_device",
  ])
  .create()

const bnwQuartz = Agreement.constructor(company.bnw, "Quartz")
  .setTask([
    "64x minecraft:quartz",
  ])
  .setReward([
    "8x ptdye:smart_device",
    "8x minecraft:gold_ingot",
    "2x ptdye:logic_device",
  ])
  .setReward(2)
  .create()

const bnwCogs = Agreement.constructor(company.bnw, "Cogs")
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

const bnwPolishedRoseQuartz = Agreement.constructor(company.bnw, "PolishedRoseQuartz")
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

const qubeAngry = Agreement.constructor(company.qube, "Angry")
  .setTask([
    bhbWheatFixedRates.item,
  ])
  .setReward([
    "minecraft:air",
  ])
  .setRecurrence(1)
  .create()

const gbdSticks = Agreement.constructor(company.gbd, "Sticks")
  .setTask([
    "64x minecraft:stick",
    "64x minecraft:stick",
    "64x minecraft:stick",
  ])
  .setReward([
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
  ])
  .setRecurrence(1)
  .create()

const gdbLead = Agreement.constructor(company.gbd, "Lead")
  .setTask([
    "32x minecraft:lead",
  ])
  .setReward([
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ])
  .setRecurrence(2)
  .create()

const gdbLeadFriend = Agreement.constructor(company.gdb, "LeadFriend")
  .setTask([
    "32x minecraft:lead",
  ])
  .setReward([
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ])
  .setRecurrence(6)
  .create()

const sssHelmets = Agreement.constructor(company.sss, "Helmets")
  .setTask([
    "16x botania:manasteel_helmet"
  ])
  .setReward([
    "minecraft:air",
  ])
  .setRecurrence(2)
  .create()

const sssHelmetsFixedRates = Agreement.constructor(company.sss, "HelmetsFixedRates")
  .setTask([
    "32x botania:manasteel_helmet"
  ])
  .setReward([
    "minecraft:air",
  ])
  .create()

// cccRawWhiteOld
const cccRawWhite = Agreement.constructor(company.ccc, "RawWhite")
  .setTask([
    "64x minecraft:raw_iron",
    "16x minecraft:raw_iron",
  ])
  .setReward(
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "8x slime_ball",
    "8x create:cogwheel",
    "2x createdieselgenerators:basin_lid",
    "2x create:weighted_ejector",
  )
  .setRecurrence(3)
  .create()

const cccIronBars = Agreement.constructor(company.ccc, "IronBars")
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

global.starterDeals = [cccRawWhite, mlcSand, bhbCheese];
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
