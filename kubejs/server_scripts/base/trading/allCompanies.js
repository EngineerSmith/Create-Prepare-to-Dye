const Company = {
  seal:  "default",
  color: "#409D9B",

  constructor: function(name, abbreviation) {
    abbreviation = abbreviation != null ? abbreviation : name

    const self = Object.assign({
        name: name,
        abbreviation: abbreviation
      }, Company)

    global.company[abbreviation] = self

    return self
  },

  hasSeal: function() {
    this.seal = this.name
    return this
  },

  setColor: function(color) {
    this.color = color
    return this
  }
}

Company.constructor("magical_landscaping_co", "mlc").hasSeal()
Company.constructor("black_hole_bagels_llc", "bhb").hasSeal()
Company.constructor("boards_and_wires", "bnw").hasSeal()
Company.constructor("bobs_construction_fleet", "bcf").hasSeal()
Company.constructor("qube").hasSeal()
Company.constructor("stellar_sigil_syndicate", "sss").hasSeal()
Company.constructor("cosmic_cuisine_collective", "ccc").hasSeal()
Company.constructor("galactic_beast_deliveries", "gbd").hasSeal()
Company.constructor("interstellar_livestock_logistics", "ill").hasSeal()
Company.constructor("wood_strike_and_co", "wsc")