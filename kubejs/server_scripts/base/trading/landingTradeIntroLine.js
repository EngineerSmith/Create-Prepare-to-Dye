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
