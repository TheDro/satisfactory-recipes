// satisfactory
import _ from 'lodash'


let recipes = [{
    name: 'cable',
    ingredients: [{name: 'copperWire', quantity: 2}],
},{
    name: 'aiLimiter',
    ingredients: [{name: 'copperSheet', quantity: 5},{name: 'quickWire', quantity: 20}],
},{
    name: 'cateriumOre',
    ingredients: [],
},{
    name: 'cateriumIngot',
    ingredients: [{name: 'cateriumOre', quantity: 3}],
},{
    name: 'coal',
    ingredients: [],
},{
    name: 'concrete',
    ingredients: [{name: 'limestone', quantity: 3}],
},{
    name: 'copperOre',
    ingredients: [],
},{
    name: 'copperIngot',
    ingredients: [{name: 'copperOre', quantity: 1}],
},{
    name: 'copperWire',
    ingredients: [{name: 'copperIngot', quantity: 0.5}],
},{
    name: 'copperSheet',
    ingredients: [{name: 'copperIngot', quantity: 2}],
},{
    name: 'crystalOscillator',
    ingredients: [{name: 'quartzCrystal', quantity: 18},{name: 'cable', quantity: 14},{name: 'reinforcedIronPlate', quantity: 2.5}],
},{
    name: 'encasedIndustrialBeam',
    ingredients: [{name: 'concrete', quantity: 5},{name: 'steelBeam', quantity: 4}],
},{
    name: 'heavyModularFrame',
    ingredients: [{name: 'modularFrame', quantity: 5},{name: 'steelPipe', quantity: 15},{name: 'encasedIndustrialBeam', quantity: 5},{name: 'screw', quantity: 100}],
},{
    name: 'ironPlate',
    ingredients: [{name: 'ironIngot', quantity: 3/2}],
},{
    name: 'ironIngot',
    ingredients: [{name: 'ironOre', quantity: 1}],
},{
    name: 'ironOre',
    ingredients: [],
},{
    name: 'ironRod',
    ingredients: [{name: 'ironIngot', quantity: 1}],
},{
    name: 'limestone',
    ingredients: [],
},{
    name: 'modularFrame',
    ingredients: [{name: 'ironRod', quantity: 6},{name: 'reinforcedIronPlate', quantity: 3/2}],
},{
    name: 'motor',
    ingredients: [{name: 'rotor', quantity: 2},{name: 'stator', quantity: 2}],
},{
    name: 'quartzCrystal',
    ingredients: [{name: 'rawQuartz', quantity: 5/3}],
},{
    name: 'quickWire',
    ingredients: [{name: 'cateriumIngot', quantity: 1/5}],
},{
    name: 'reinforcedIronPlate',
    ingredients: [{name: 'ironPlate', quantity: 6},{name: 'screw', quantity: 12}],
},{
    name: 'rotor',
    ingredients: [{name: 'ironRod', quantity: 5},{name: 'screw', quantity: 25}],
},{
    name: 'rawQuartz',
    ingredients: [],
},{
    name: 'screw',
    ingredients: [{name: 'ironRod', quantity: 1/4}],
},{
    name: 'smartPlating',
    ingredients: [{name: 'reinforcedIronPlate', quantity: 1},{name: 'rotor', quantity: 1}],
},{
    name: 'steelIngot',
    ingredients: [{name: 'ironOre', quantity: 1}, {name: 'coal', quantity: 1}],
},{
    name: 'stator',
    ingredients: [{name: 'steelPipe', quantity: 3},{name: 'copperWire', quantity: 8}],
},{
    name: 'steelBeam',
    ingredients: [{name: 'steelIngot', quantity: 4}],
},{
    name: 'steelPipe',
    ingredients: [{name: 'steelIngot', quantity: 3/2}],
},{
    name: 'versatileFramework',
    ingredients: [{name: 'modularFrame', quantity: 1/2},{name: 'steelBeam', quantity: 6}],
}]

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



export {recipes}