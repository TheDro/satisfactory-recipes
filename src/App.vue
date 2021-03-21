<template>
  <h2>Satisfactory Recipes</h2>
  <table>
    <tr>
      <th>Starting Recipes</th>
    </tr>
    <tr v-for="(recipe, index) in state.recipes" :key="index">
      <td>{{recipe.name}}</td>
    </tr>
  </table>
</template>

<script>
import 'marx-css/css/marx.css'
import {recipes} from './recipes'
import {reactive} from 'vue'

export default {
  setup() {
    let state = reactive({
      recipes: recipes
    })


    return {state}
  }
}
</script>

<style>

</style>
