<template>
  <div class="container">
    <h2>Satisfactory Recipes</h2>
    <input type="checkbox" v-model="state.consolidate" />
    <label>consolidate ingredients</label>
    <input type="checkbox" v-model="state.alternates" />
    <label>include alternates</label>

    <table class="condensed">
      <tr>
        <th>Material</th>
        <th>Starting Recipe</th>
        <th>Converted Recipe</th>
      </tr>
      <tr v-for="(recipe, index) in state.recipes" :key="index">
        <td>
          <input type="checkbox" v-model="recipe.active" />
          <span>{{formatName(recipe.name)}}</span>
        </td>
        <td>
          <ul class="m-0">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
              {{round(ingredient.quantity, 2)}} x {{formatName(ingredient.name)}}
            </li>
          </ul>
        </td>
        <td>
          <ul class="m-0">
            <li :class="{error: !!ingredient.warning}"
              v-for="ingredient in convertedRecipes[index].ingredients" :key="ingredient.name">
              {{round(ingredient.quantity, 2)}} x {{formatName(ingredient.name)}}
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

recipes.forEach((recipe) => {
  recipe.active = true
})

export default {
  setup() {
    let state = reactive({
      recipes: recipes,
      consolidate: true,
      alternates: false
    })

    let convertedRecipes = computed(() => {

      let baseRecipes = state.recipes.map((recipe) => {
        let baseRecipe = _.cloneDeep(recipe)
        let oldIngredients = baseRecipe.ingredients
        for (let i=0; i<10; i++) {

          let newIngredients = oldIngredients.map((ingredient) => {
            let nextRecipe = _.find(recipes, {name: ingredient.name, active: true})
            if (!nextRecipe) {
              ingredient.warning = "Couldn't find match"
              return ingredient
            }
            if (nextRecipe.ingredients.length === 0) { //|| ingredient.quantity < 0
              return ingredient
            }
            return nextRecipe.ingredients.map((ing) => {
              return {name: ing.name, quantity: ingredient.quantity*ing.quantity}
            })
          })

          newIngredients = _.flatMap(newIngredients)

          oldIngredients = newIngredients

          if (state.consolidate) {
            oldIngredients = consolidate(oldIngredients)
          }

        }
        return {name: recipe.name, ingredients: oldIngredients}
      })



      return baseRecipes
    })

    function consolidate(ingredients) {
      let newIngredients = []
      ingredients.forEach((ingredient) => {
        let index = _.findIndex(newIngredients, {name: ingredient.name})
        if (index === -1) {
          newIngredients.push(ingredient)
        } else {
          newIngredients[index].quantity += ingredient.quantity
        }
      })
      return newIngredients
    }


    function formatName(name) {
      return _.capitalize(_.lowerCase(name))
    }

    function round(value, digits = 0) {
      return Math.round(value*10**digits)/10**digits
    }

    return {state, round, convertedRecipes, formatName}
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

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.condensed th,
.condensed td {
  padding: 0.25rem;
}

.error {
  color: #f66;
}

* {
  background-color: #333;
  color: #eee;
}

th, td {
  border-bottom: 1px solid #ccc;
}

input[type="checkbox"] {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.container {
  margin: auto;
  max-width: 768px; /*md*/
}

</style>
