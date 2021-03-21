<template>
  <div>
    <h2>Satisfactory Recipes</h2>
    <table class="condensed">
      <tr>
        <th>Material</th>
        <th>Starting Recipe</th>
        <th>Converted Recipe</th>
      </tr>
      <tr v-for="(recipe, index) in state.recipes" :key="index">
        <td>
          <div>{{recipe.name}}</div>
        </td>
        <td>
          <ul class="m-0">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
              {{round(ingredient.quantity, 2)}} x {{ingredient.name}}
            </li>
          </ul>
        </td>
        <td>
          <ul class="m-0">
            <li v-for="ingredient in convertedRecipes[index].ingredients" :key="ingredient.name">
              {{round(ingredient.quantity, 2)}} x {{ingredient.name}}
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import 'marx-css/css/marx.css'
import {recipes} from './recipes'
import {reactive, computed} from 'vue'
import _ from 'lodash'

export default {
  setup() {
    let state = reactive({
      recipes: recipes,
      consolidate: true,
    })

    let convertedRecipes = computed(() => {

      let baseRecipes = state.recipes.map((recipe) => {
        let baseRecipe = _.cloneDeep(recipe)
        let oldIngredients = baseRecipe.ingredients
        for (let i=0; i<10; i++) {

          let newIngredients = oldIngredients.map((ingredient) => {
            let nextRecipe = _.find(recipes, {name: ingredient.name})
            if (!nextRecipe) {
              console.log({recipe, ingredient})
              debugger
            }
            if (nextRecipe.ingredients.length === 0) {
              return ingredient
            }
            return nextRecipe.ingredients.map((ing) => {
              return {name: ing.name, quantity: ingredient.quantity*ing.quantity}
            })
          })

          newIngredients = _.flatMap(newIngredients)

          oldIngredients = newIngredients

        }
        return {name: recipe.name, ingredients: oldIngredients}
      })

      // Consolidate
      if (state.consolidate) {

        baseRecipes = baseRecipes.map((recipe) => {
          let newIngredients = []
          recipe.ingredients.forEach((ingredient) => {
            let index = _.findIndex(newIngredients, {name: ingredient.name})
            if (index === -1) {
              newIngredients.push(ingredient)
            } else {
              newIngredients[index].quantity += ingredient.quantity
            }
          })
          return Object.assign(recipe, {ingredients: newIngredients})
        })
      }

      return baseRecipes
    })


    function round(value, digits = 0) {
      return Math.round(value*10**digits)/10**digits
    }

    return {state, round, convertedRecipes}
  }
}
</script>

<style>
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.m-0 {
  margin: 0;
}

.condensed th,
.condensed td {
  padding: 0.25rem;
}

</style>
