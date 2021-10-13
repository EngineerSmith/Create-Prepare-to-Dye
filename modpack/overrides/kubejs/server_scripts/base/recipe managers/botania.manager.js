// priority: 100
function solveStateResult(block) {
    return solveStateBlock(block, true)
}
function solveStateIngredient(block) {
    return solveStateBlock(block, false)
}
function solveStateBlock(block, basic) {
    if (!block) return
    if (!block.includes('[')) {
        if (basic)
            return { name: block }
        else
            return block.startsWith('#')
                ? { type: 'tag', tag: block.slice(1) }
                : { type: 'block', block: block }
    } else {
        let properties = {}
        block.split('[')[1].replace(']', '').split(',').forEach(property => {
            properties[property.split('=')[0]] = property.split('=')[1]
        })
        return {
            type: 'state',
            name: block.split('[')[0],
            properties: properties
        }
    }
}
/**
 * @param {result} output
 * @param {ingredient} input
 * @param {number} mana Amount of mana the recipe uses, defaults to 1000
 * @param {block} catalyst
 */
function addInfusion(output, input, mana, catalyst) {
    if (!mana) mana = 1000
    addModpackRecipe({
        type: 'botania:mana_infusion',
        input: solveLimitedIngredient(input),
        output: solveResult(output),
        mana: mana,
        catalyst: solveStateIngredient(catalyst)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 * @param {number} mana Amount of mana the recipe uses. default(2500)
 */
function addAltar(output, inputs, mana) {
    if (!mana) mana = 2500
    addModpackRecipe({
        type: 'botania:runic_altar',
        output: solveResult(output),
        mana: mana,
        ingredients: solveLimitedIngredients(inputs)
    })
}
/**
 * @param {block} output
 * @param {block} input
 * @param {number} time amount of time in ticks default(150)
 */
function addPurify(output, input, time) {
    addModpackRecipe({
        type: 'botania:pure_daisy',
        input: solveStateIngredient(input),
        output: solveStateResult(output),
        time: time
    });
}
/**
 * @param {result[]} outputs
 * @param {ingredient[]} inputs
 */
function addElvenTrade(outputs, inputs) {
    addModpackRecipe({
        type: 'botania:elven_trade',
        ingredients: solveLimitedIngredients(inputs),
        output: solveResults(outputs)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 */
function addApothecary(output, inputs) {
    addModpackRecipe({
        type: 'botania:petal_apothecary',
        output: solveResult(output),
        ingredients: solveLimitedIngredients(inputs)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 * @param {number} mana default(100000)
 */
function addTerraPlate(output, inputs, mana) {
    (!mana) ? mana = 100000 :
        addModpackRecipe({
            type: 'botania:terra_plate',
            result: solveResult(output),
            ingredients: solveLimitedIngredients(inputs),
            mana: mana
        })
}
/**
 * 
 * @param {string} output 'botania:absorption' 
 * @param {ingredient[]} input 
 */
function addBrew(output, input) {
    addModpackRecipe({
        type: 'botania:brew',
        brew: output,
        ingredients: solveLimitedIngredients(input)
    })
}