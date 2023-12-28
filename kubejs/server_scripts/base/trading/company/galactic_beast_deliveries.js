//priority:170
const gbd = Company.constructor("galactic_beast_deliveries", "gbd").hasSeal()

const gbdLead = Agreement.constructor(gbd, "Lead")
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

const gbdLeadFriend = Agreement.constructor(gbd, "LeadFriend")
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

const gbdSticks = Agreement.constructor(gbd, "Sticks")
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
