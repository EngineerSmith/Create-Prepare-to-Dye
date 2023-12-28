//priority:180

const Agreement = {
  constructor: function(company, agreementName) {
    return Object.assign({
        company: company,
        agreementId: `${company.abbreviation}${agreementName}`,
        ordered: 0
      }, Agreement)
  },

  setTask: function(itemStack) {
    this.taskItems = itemStackToNbt(itemStack)
    return this
  },

  setReward: function(itemStack) {
    this.rewardItems = itemStackToNbt(itemStack)
    return this
  },

  setRecurrence: function(amount) {
    if (amount === null || amount === undefined)
      return
    this.ordered = amount
    return this
  },

  setParent: function(...parents) {
    this.parents = parents
  },

  create: function() {
    if (this.taskItems === null || this.rewardItems === null)
      console.error("Can't create agreement without task or reward items")

    const nbt = {
      id: this.agreementId,
      // Agreement Info
      ordered: NBT.intTag(this.ordered),
      requestedItems: this.taskItems,
      paymentItems: this.rewardItems,
      // Company Info
      buyerName: `{"text":"${Text.translate(`company.ptdye.${this.company.abbreviation}`)}", "color":"#409D9"}`,
      title: `{"text":"${Text.translate(`agreement.ptdye.${this.agreementId}.title`)}"}`,
      message: `{"text":"${Text.translate(`agreement.ptdye.${this.agreementId}.message`)}"}`,
      seal: this.company.seal
    }

    let completedNbt = Object.assign({
        isCompleted: NBT.b(1),
        delivered: NBT.intTag(this.ordered)
      }, nbt)

    const agreementName = Text.translate("agreement.ptdye.item.displayName", Text.translate(`company.ptdye.${this.company.abbreviation}`), Text.translate(`agreement.ptdye.${this.agreementId}.title`)).gold().italic(false)

    const incompleteAgreement = Item.of("wares:delivery_agreement", nbt).withName(agreementName)
    const completedAgreement = Item.of("wares:completed_delivery_agreement", completedNbt).withName(agreementName)

    global.allAgreements = global.allAgreements
      .filter((f) => f.nbt !== incompleteAgreement.nbt)
      .concat([incompleteAgreement])
    if (this.ordered != 0)
      global.allAgreements = global.allAgreements
        .filter((f) => f.nbt !== completedAgreement.nbt)
        .concat([completedAgreement])

    this.item = incompleteAgreement
    this.completedItem = completedAgreement

    return this
  }
}

function itemStackToNbt(itemStack) {
  if (!Array.isArray(itemStack)) itemStack = [itemStack];
  return itemStack.map((item_obj) => {
    let item = item_obj;
    if (typeof item_obj === "string") {
      item = Item.of(item);
    }
    let nbt = item.toNBT();
    nbt.Count = item.count;
    if (typeof item_obj === "string" && item_obj.includes("#")) {
      delete nbt.tag;
      //support for tags
      if (item_obj.includes("x ")) item_obj = item_obj.split("x ")[1];
      let tag = (
        Ingredient.of(item_obj).values[0].serialize().get("tag") + ""
      ).replaceAll('"', "");
      nbt.id = `#${tag}`;
    }
    return nbt;
  });
}