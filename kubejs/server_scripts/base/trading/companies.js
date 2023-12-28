//priority:190

const Company = {
  seal:  "default",

  constructor: function(name, abbreviation) {
    abbreviation = abbreviation != null ? abbreviation : name

    const self = Object.assign({
        name: name,
        abbreviation: abbreviation,
      }, Company)
    
    self.setDeterministicColor(abbreviation)
    return self
  },

  hasSeal: function() {
    this.seal = this.name
    return this
  },
}
