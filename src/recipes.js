// satisfactory
import _ from 'lodash'


let recipes = [{
    name: 'ironIngot',
    ingredients: [{name: 'ironOre', quantity: 1}],
    base: false
},{
    name: 'ironOre',
    ingredients: [],
    base: true
},{
    name: 'coal',
    ingredients: [],
    base: true
},{
    name: 'steelIngot',
    ingredients: [{name: 'ironOre', quantity: 1}, {name: 'coal', quantity: 1}],
    base: false
},{
    name: 'copperOre',
    ingredients: [],
    base: true
},{
    name: 'copperIngot',
    ingredients: [{name: 'copperOre', quantity: 1}],
    base: false
},{
    name: 'copperWire',
    ingredients: [{name: 'copperIngot', quantity: 0.5}],
    base: false
},{
    name: 'copperSheet',
    ingredients: [{name: 'copperIngot', quantity: 2}],
    base: false
},{
    name: 'cable',
    ingredients: [{name: 'copperWire', quantity: 2}],
    base: false
},{
    name: 'ironPlate',
    ingredients: [{name: 'ironIngot', quantity: 3/2}],
    base: false
},{
    name: 'ironRod',
    ingredients: [{name: 'ironIngot', quantity: 1}],
    base: false
},{
    name: 'screw',
    ingredients: [{name: 'ironRod', quantity: 1/4}],
    base: false
},{
    name: 'reinforcedIronPlate',
    ingredients: [{name: 'ironPlate', quantity: 6},{name: 'screw', quantity: 12}],
    base: false
},{
    name: 'rotor',
    ingredients: [{name: 'ironRod', quantity: 5},{name: 'screw', quantity: 25}],
    base: false
},{
    name: 'rawQuartz',
    ingredients: [],
    base: true
},{
    name: 'quartzCrystal',
    ingredients: [{name: 'rawQuartz', quantity: 5/3}],
    base: false
},{
    name: 'crystalOscillator',
    ingredients: [{name: 'quartzCrystal', quantity: 18},{name: 'cable', quantity: 14},{name: 'reinforcedIronPlate', quantity: 2.5}],
    base: false
},{
    name: 'modularFrame',
    ingredients: [{name: 'ironRod', quantity: 6},{name: 'reinforcedIronPlate', quantity: 3/2}],
    base: false
},{
    name: 'smartPlating',
    ingredients: [{name: 'reinforcedIronPlate', quantity: 1},{name: 'rotor', quantity: 1}],
    base: false
},{
    name: 'steelBeam',
    ingredients: [{name: 'steelIngot', quantity: 4}],
    base: false
},{
    name: 'steelPipe',
    ingredients: [{name: 'steelIngot', quantity: 3/2}],
    base: false
},{
    name: 'limestone',
    ingredients: [],
    base: true
},{
    name: 'concrete',
    ingredients: [{name: 'limestone', quantity: 3}],
    base: false
},{
    name: 'encasedIndustrialBeam',
    ingredients: [{name: 'concrete', quantity: 5},{name: 'steelBeam', quantity: 4}],
    base: false
},{
    name: 'heavyModularFrame',
    ingredients: [{name: 'modularFrame', quantity: 5},{name: 'steelPipe', quantity: 15},{name: 'encasedIndustrialBeam', quantity: 5},{name: 'screw', quantity: 100}],
    base: false
}]

// // Convert to base resources
// let baseRecipes = recipes.map((recipe) => {
//     let baseRecipe = _.cloneDeep(recipe)
//     let oldIngredients = baseRecipe.ingredients
//     for (let i=0; i<10; i++) {

//         let newIngredients = oldIngredients.map((ingredient) => {
//             let nextRecipe = _.find(recipes, {name: ingredient.name})
//             if (!nextRecipe) {
//                 console.log({recipe, ingredient})
//                 debugger
//             }
//             if (nextRecipe.ingredients.length === 0) {
//                 return ingredient
//             }
//             return nextRecipe.ingredients.map((ing) => {
//                 return {name: ing.name, quantity: ingredient.quantity*ing.quantity}
//             })
//         })

//         newIngredients = _.flatMap(newIngredients)

//         oldIngredients = newIngredients

//     }
//     return {name: recipe.name, ingredients: oldIngredients}
// })

// // Consolidate
// baseRecipes = baseRecipes.map((recipe) => {
//     let newIngredients = []
//     recipe.ingredients.forEach((ingredient) => {
//         let index = _.findIndex(newIngredients, {name: ingredient.name})
//         if (index === -1) {
//             newIngredients.push(ingredient)
//         } else {
//             newIngredients[index].quantity += ingredient.quantity
//         }
//     })
//     return Object.assign(recipe, {ingredients: newIngredients})
// })



// window.recipes = recipes
// window.baseRecipes = baseRecipes

// console.log(JSON.stringify(baseRecipes, null, 2))


export {recipes}