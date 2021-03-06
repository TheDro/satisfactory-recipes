import _ from 'lodash'
import JSON5 from 'json5'
window.JSON5 = JSON5

let altRecipes = [
{altName: "Copper Alloy Ingot", recipeName: "Copper Ingot", ingredients: [{name: "Copper Ore", quantity: 50.0},{name: "Iron Ore", quantity: 25.0}], production: 100.0 },
{altName: "Fine Black Powder (Gun Powder)", recipeName: "Black Powder", ingredients: [{name: "Sulfur", quantity: 7.5},{name: "Compacted Coal", quantity: 3.8}], production: 15.0 },
{altName: "Caterium Wire", recipeName: "Wire", ingredients: [{name: "Caterium Ingot", quantity: 15.0}], production: 120.0 },
{altName: "Fused Quickwire", recipeName: "Quickwire", ingredients: [{name: "Caterium Ingot", quantity: 7.5},{name: "Copper Ingot", quantity: 37.5}], production: 90.0 },
{altName: "Fused Wire", recipeName: "Wire", ingredients: [{name: "Copper Ingot", quantity: 12.0},{name: "Caterium Ingot", quantity: 3.0}], production: 90.0 },
{altName: "Fine Concrete", recipeName: "Concrete", ingredients: [{name: "Silica", quantity: 7.5},{name: "Limestone", quantity: 30.0}], production: 25.0 },
{altName: "Radio Control System", version: "Stable", recipeName: "Radio Control Unit", ingredients: [{name: "Heat Sink", quantity: 12.5},{name: "Supercomputer", quantity: 1.3},{name: "Quartz Crystal", quantity: 37.5}], production: 3.8 },
{altName: "Cheap Silica", recipeName: "Silica", ingredients: [{name: "Raw Quartz", quantity: 11.3},{name: "Limestone", quantity: 18.8}], production: 26.3 },
{altName: "Seismic Nobelisk", recipeName: "Nobelisk", ingredients: [{name: "Black Powder", quantity: 12.0},{name: "Steel Pipe", quantity: 12.0},{name: "Crystal Oscillator", quantity: 1.5}], production: 6.0 },
{altName: "Turbo Blend Fuel", version: "Experimental", recipeName: "Turbofuel", ingredients: [{name: "Fuel", quantity: 15.0},{name: "Heavy Oil Residue", quantity: 30.0},{name: "Sulfur", quantity: 22.5},{name: "Petroleum Coke", quantity: 22.5}], production: 45.0 },
{altName: "Casted Screw", recipeName: "Screw", ingredients: [{name: "Iron Ingot", quantity: 12.5}], production: 50.0 },
{altName: "Iron Wire", recipeName: "Wire", ingredients: [{name: "Iron Ingot", quantity: 12.5}], production: 22.5 },
{altName: "Iron Alloy Ingot", recipeName: "Iron Ingot", ingredients: [{name: "Iron Ore", quantity: 20.0},{name: "Copper Ore", quantity: 20.0}], production: 50.0 },
{altName: "Bolted Iron Plate", recipeName: "Reinforced Iron Plate", ingredients: [{name: "Iron Plate", quantity: 90.0},{name: "Screw", quantity: 250.0}], production: 15.0 },
{altName: "Stitched Iron Plate", recipeName: "Reinforced Iron Plate", ingredients: [{name: "Iron Plate", quantity: 18.8},{name: "Wire", quantity: 37.5}], production: 5.6 },
{altName: "Bolted Frame", recipeName: "Modular Frame", ingredients: [{name: "Reinforced Iron Plate", quantity: 7.5},{name: "Screw", quantity: 140.0}], production: 5.0 },
{altName: "Copper Rotor", recipeName: "Rotor", ingredients: [{name: "Copper Sheet", quantity: 22.5},{name: "Screw", quantity: 195.0}], production: 11.3 },
{altName: "Steel Rod", recipeName: "Iron Rod", ingredients: [{name: "Steel Ingot", quantity: 12.0}], production: 48.0 },
{altName: "Steeled Frame", recipeName: "Modular Frame", ingredients: [{name: "Reinforced Iron Plate", quantity: 2.0},{name: "Steel Pipe", quantity: 10.0}], production: 3.0 },
{altName: "Steel Rotor", recipeName: "Rotor", ingredients: [{name: "Steel Pipe", quantity: 10.0},{name: "Wire", quantity: 30.0}], production: 5.0 },
{altName: "Steel Screw", recipeName: "Screw", ingredients: [{name: "Steel Beam", quantity: 5.0}], production: 260.0 },
{altName: "Solid Steel Ingot", recipeName: "Steel Ingot", ingredients: [{name: "Iron Ingot", quantity: 40.0},{name: "Coal", quantity: 40.0}], production: 60.0 },
{altName: "Compacted Steel Ingot", recipeName: "Steel Ingot", ingredients: [{name: "Iron Ore", quantity: 22.5},{name: "Compacted Coal", quantity: 11.3}], production: 37.5 },
{altName: "Signal Beacon", recipeName: "Beacon", ingredients: [{name: "Steel Beam", quantity: 2.0},{name: "Steel Pipe", quantity: 8.0},{name: "Crystal Oscillator", quantity: 0.5}], production: 10.0 },
{altName: "Biocoal", recipeName: "Coal", ingredients: [{name: "Biomass", quantity: 37.5}], production: 45.0 },
{altName: "Charcoal", recipeName: "Coal", ingredients: [{name: "Wood", quantity: 15.0}], production: 150.0 },
{altName: "Wet Concrete", recipeName: "Concrete", ingredients: [{name: "Limestone", quantity: 120.0},{name: "Water", quantity: 100.0}], production: 80.0 },
{altName: "Pure Copper Ingot", recipeName: "Copper Ingot", ingredients: [{name: "Copper Ore", quantity: 15.0},{name: "Water", quantity: 10.0}], production: 37.5 },
{altName: "Steamed Copper Sheet", recipeName: "Copper Sheet", ingredients: [{name: "Copper Ingot", quantity: 22.5},{name: "Water", quantity: 22.5}], production: 22.5 },
{altName: "Pure Iron Ingot", recipeName: "Iron Ingot", ingredients: [{name: "Iron Ore", quantity: 35.0},{name: "Water", quantity: 20.0}], production: 65.0 },
{altName: "Pure Caterium Ingot", recipeName: "Caterium Ingot", ingredients: [{name: "Caterium Ore", quantity: 24.0},{name: "Water", quantity: 24.0}], production: 12.0 },
{altName: "Pure Quartz Crystal", recipeName: "Quartz Crystal", ingredients: [{name: "Raw Quartz", quantity: 67.5},{name: "Water", quantity: 37.5}], production: 52.5 },
{altName: "Compacted Coal", recipeName: "Compacted Coal", ingredients: [{name: "Coal", quantity: 25.0},{name: "Sulfur", quantity: 25.0}], production: 25.0 },
{altName: "Encased Industrial Pipe", recipeName: "Encased Industrial Beam", ingredients: [{name: "Steel Pipe", quantity: 28.0},{name: "Concrete", quantity: 20.0}], production: 4.0 },
{altName: "High-Speed Wiring", recipeName: "Automated Wiring", ingredients: [{name: "Stator", quantity: 3.8},{name: "Wire", quantity: 75.0},{name: "highSpeedConnector", quantity: 1.9}], production: 7.5 },
{altName: "Quickwire Stator", recipeName: "Stator", ingredients: [{name: "Steel Pipe", quantity: 16.0},{name: "Quickwire", quantity: 60.0}], production: 8.0 },
{altName: "Rigour Motor", recipeName: "Motor", ingredients: [{name: "Rotor", quantity: 3.8},{name: "Stator", quantity: 3.8},{name: "Crystal Oscillator", quantity: 1.3}], production: 7.5 },
{altName: "Coated Iron Canister", recipeName: "Empty Canister", ingredients: [{name: "Iron Plate", quantity: 30.0},{name: "Copper Sheet", quantity: 15.0}], production: 60.0 },
{altName: "Steel Canister", recipeName: "Empty Canister", ingredients: [{name: "Steel Ingot", quantity: 60.0}], production: 40.0 },
{altName: "Heavy Encased Frame", recipeName: "Heavy Modular Frame", ingredients: [{name: "Modular Frame", quantity: 7.5},{name: "Encased Industrial Beam", quantity: 9.4},{name: "Steel Pipe", quantity: 33.8},{name: "Concrete", quantity: 20.6}], production: 2.8 },
{altName: "Heavy Flexible Frame", recipeName: "Heavy Modular Frame", ingredients: [{name: "Modular Frame", quantity: 18.8},{name: "Encased Industrial Beam", quantity: 11.3},{name: "Rubber", quantity: 75.0},{name: "Screw", quantity: 390.0}], production: 3.8 },
{altName: "Automated Miner", version: "Experimental", recipeName: "Portable Miner", ingredients: [{name: "Motor", quantity: 1.0},{name: "Steel Pipe", quantity: 4.0},{name: "Iron Rod", quantity: 4.0},{name: "Iron Plate", quantity: 2.0}], production: 1.0 },
{altName: "Caterium Computer", recipeName: "Computer", ingredients: [{name: "Circuit Board", quantity: 26.3},{name: "Quickwire", quantity: 105.0},{name: "Rubber", quantity: 45.0}], production: 3.8 },
{altName: "Crystal Computer", recipeName: "Computer", ingredients: [{name: "Circuit Board", quantity: 7.5},{name: "Crystal Oscillator", quantity: 2.8}], production: 2.8 },
{altName: "Coated Cable", recipeName: "Cable", ingredients: [{name: "Wire", quantity: 37.5},{name: "Heavy Oil Residue", quantity: 15.0}], production: 67.5 },
{altName: "Insulated Cable (Rubber Cable)", recipeName: "Cable", ingredients: [{name: "Wire", quantity: 45.0},{name: "Rubber", quantity: 30.0}], production: 100.0 },
{altName: "Electrode Circuit Board", recipeName: "Circuit Board", ingredients: [{name: "Rubber", quantity: 30.0},{name: "Petroleum Coke", quantity: 45.0}], production: 5.0 },
{altName: "Rubber Concrete", recipeName: "Concrete", ingredients: [{name: "Limestone", quantity: 50.0},{name: "Rubber", quantity: 10.0}], production: 45.0 },
{altName: "Heavy Oil Residue", recipeName: "Heavy Oil Residue", ingredients: [{name: "Crude Oil", quantity: 30.0}], production: 40.0 },
{altName: "Coated Iron Plate", recipeName: "Iron Plate", ingredients: [{name: "Iron Ingot", quantity: 50.0},{name: "Plastic", quantity: 10.0}], production: 75.0 },
{altName: "Steel Coated Plate", recipeName: "Iron Plate", ingredients: [{name: "Steel Ingot", quantity: 7.5},{name: "Plastic", quantity: 5.0}], production: 45.0 },
{altName: "Recycled Plastic", recipeName: "Plastic", ingredients: [{name: "Rubber", quantity: 30.0},{name: "Fuel", quantity: 30.0}], production: 60.0 },
{altName: "Polymer Resin", recipeName: "Polymer Resin", ingredients: [{name: "Crude Oil", quantity: 60.0}], production: 130.0 },
{altName: "Adhered Iron Plate", recipeName: "Reinforced Iron Plate", ingredients: [{name: "Iron Plate", quantity: 11.3},{name: "Rubber", quantity: 3.8}], production: 3.8 },
{altName: "Recycled Rubber", recipeName: "Rubber", ingredients: [{name: "Plastic", quantity: 30.0},{name: "Fuel", quantity: 30.0}], production: 60.0 },
{altName: "Plastic Smart Plating", recipeName: "Smart Plating", ingredients: [{name: "Reinforced Iron Plate", quantity: 2.5},{name: "Rotor", quantity: 2.5},{name: "Plastic", quantity: 7.5}], production: 5.0 },
{altName: "Coke Steel Ingot", recipeName: "Steel Ingot", ingredients: [{name: "Iron Ore", quantity: 75.0},{name: "Petroleum Coke", quantity: 75.0}], production: 100.0 },
{altName: "Flexible Framework", recipeName: "Versatile Framework", ingredients: [{name: "Modular Frame", quantity: 3.8},{name: "Steel Beam", quantity: 22.5},{name: "Rubber", quantity: 30.0}], production: 7.5 },
{altName: "Quickwire Cable", recipeName: "Cable", ingredients: [{name: "Quickwire", quantity: 7.5},{name: "Rubber", quantity: 5.0}], production: 27.5 },
{altName: "Caterium Circuit Board", recipeName: "Circuit Board", ingredients: [{name: "Plastic", quantity: 12.5},{name: "Quickwire", quantity: 37.5}], production: 8.8 },
{altName: "Silicone High-Speed Connector", ingredients: [{name: "High-Speed Connector"},{name: "Quickwire", quantity: 90.0},{name: "Silica", quantity: 37.5},{name: "Circuit Board", quantity: 3.0}], production: 3.0 },
{altName: "Polyester Fabric", recipeName: "Fabric", ingredients: [{name: "Polymer Resin", quantity: 80.0},{name: "Water", quantity: 50.0}], production: 5.0 },
{altName: "Insulated Crystal Oscillator", recipeName: "Crystal Oscillator", ingredients: [{name: "Quartz Crystal", quantity: 18.8},{name: "Rubber", quantity: 13.1},{name: "A.I. Limiter", quantity: 1.9}], production: 1.9 },
{altName: "Silicone Circuit Board", recipeName: "Circuit Board", ingredients: [{name: "Copper Sheet", quantity: 27.5},{name: "Silica", quantity: 27.5}], production: 12.5 },
{altName: "Diluted Packaged Fuel", recipeName: "Packaged Fuel", ingredients: [{name: "Heavy Oil Residue", quantity: 30.0},{name: "Packaged Water", quantity: 60.0}], production: 60.0 },
{altName: "Turbo Heavy Fuel", recipeName: "Turbofuel", ingredients: [{name: "Heavy Oil Residue", quantity: 37.5},{name: "Compacted Coal", quantity: 30.0}], production: 30.0 },
{altName: "Turbofuel", recipeName: "Turbofuel", ingredients: [{name: "Fuel", quantity: 22.5},{name: "Compacted Coal", quantity: 15.0}], production: 18.8 },
{altName: "Heat Exchanger", version: "Stable", recipeName: "Heat Sink", ingredients: [{name: "Alclad Aluminum Sheet", quantity: 37.5},{name: "Copper Sheet", quantity: 56.3}], production: 13.1 },
{altName: "Turbo Rigour Motor", version: "Stable", recipeName: "Turbo Motor", ingredients: [{name: "Motor", quantity: 6.6},{name: "Radio Control Unit", quantity: 4.7},{name: "A.I. Limiter", quantity: 8.4},{name: "Stator", quantity: 6.6}], production: 2.8 },
{altName: "Classic Battery", version: "Experimental", recipeName: "Battery", ingredients: [{name: "Sulfur", quantity: 45.0},{name: "Alclad Aluminum Sheet", quantity: 52.5},{name: "Plastic", quantity: 60.0},{name: "Wire", quantity: 90.0}], production: 30.0 },
{altName: "Electric Motor", version: "Experimental", recipeName: "Motor", ingredients: [{name: "Electromagnetic Control Rod", quantity: 3.8},{name: "Rotor", quantity: 7.5}], production: 7.5 },
{altName: "OC Supercomputer", version: "Experimental", recipeName: "Supercomputer", ingredients: [{name: "Radio Control Unit", quantity: 9.0},{name: "Cooling System", quantity: 9.0}], production: 3.0 },
{altName: "Super-State Computer", version: "Experimental", recipeName: "Supercomputer", ingredients: [{name: "Computer", quantity: 3.6},{name: "Electromagnetic Control Rod", quantity: 2.4},{name: "Battery", quantity: 24.0},{name: "Wire", quantity: 54.0}], production: 2.4 },
{altName: "Sloppy Alumina", version: "Experimental", recipeName: "Alumina Solution", ingredients: [{name: "Bauxite", quantity: 150.0},{name: "Water", quantity: 150.0}], production: 180.0 },
{altName: "Alclad Casing", version: "Experimental", recipeName: "Aluminum Casing", ingredients: [{name: "Aluminum Ingot", quantity: 112.5},{name: "Copper Ingot", quantity: 75.0}], production: 112.5 },
{altName: "Pure Aluminum Ingot", version: "Stable", recipeName: "Aluminum Ingot", ingredients: [{name: "Aluminum Scrap", quantity: 144.0}], production: 36.0 },
{altName: "Pure Aluminum Ingot", version: "Experimental", recipeName: "Aluminum Ingot", ingredients: [{name: "Aluminum Scrap", quantity: 54.0}], production: 27.0 },
{altName: "Electrode - Aluminum Scrap", version: "Stable", recipeName: "Aluminum Scrap", ingredients: [{name: "Alumina Solution", quantity: 90.0},{name: "Coal", quantity: 30.0}], production: 150.0 },
{altName: "Electrode - Aluminum Scrap", version: "Experimental", recipeName: "Aluminum Scrap", ingredients: [{name: "Alumina Solution", quantity: 90.0},{name: "Petroleum Coke", quantity: 30.0}], production: 240.0 },
{altName: "Diluted Fuel", version: "Experimental", recipeName: "Fuel", ingredients: [{name: "Heavy Oil Residue", quantity: 50.0},{name: "Water", quantity: 100.0}], production: 100.0 },
{altName: "Radio Control System", version: "Experimental", recipeName: "Radio Control Unit", ingredients: [{name: "Crystal Oscillator", quantity: 1.5},{name: "Circuit Board", quantity: 15.0},{name: "Aluminum Casing", quantity: 67.5},{name: "Rubber", quantity: 45.0}], production: 4.5 },
{altName: "Instant Scrap", version: "Experimental", recipeName: "Aluminum Scrap", ingredients: [{name: "Bauxite", quantity: 150.0},{name: "Coal", quantity: 100.0},{name: "Sulfuric Acid", quantity: 50.0},{name: "Water", quantity: 110.0}], production: 300.0 },
{altName: "Radio Connection Unit", version: "Experimental", recipeName: "Radio Control Unit", ingredients: [{name: "Heat Sink", quantity: 15.0},{name: "High-Speed Connector", quantity: 7.5},{name: "Quartz Crystal", quantity: 45.0}], production: 3.8 },
{altName: "Electromagnetic Connection Rod", version: "Stable", recipeName: "Electromagnetic Control Rod", ingredients: [{name: "Stator", quantity: 10.0},{name: "High-Speed Connector", quantity: 5.0}], production: 10.0 },
{altName: "Infused Uranium Cell", version: "Stable", recipeName: "Encased Uranium Cell", ingredients: [{name: "Uranium Pellet", quantity: 20.0},{name: "Sulfur", quantity: 22.5},{name: "Silica", quantity: 22.5},{name: "Quickwire", quantity: 37.5}], production: 17.5 },
{altName: "Nuclear Fuel Unit", version: "Stable", recipeName: "Nuclear Fuel Rod", ingredients: [{name: "Encased Uranium Cell", quantity: 10.0},{name: "Electromagnetic Control Rod", quantity: 2.0},{name: "Crystal Oscillator", quantity: 0.6},{name: "Beacon", quantity: 1.2}], production: 0.6 },
{altName: "Cooling Device", version: "Experimental", recipeName: "Cooling System", ingredients: [{name: "Heat Sink", quantity: 3.8},{name: "Motor", quantity: 1.9},{name: "Nitrogen Gas", quantity: 45.0}], production: 3.8 },
{altName: "Heat Exchanger", version: "Experimental", recipeName: "Heat Sink", ingredients: [{name: "Aluminum Casing", quantity: 15.0},{name: "Rubber", quantity: 20.0}], production: 10.0 },
{altName: "Heat-Fused Frame", version: "Experimental", recipeName: "Fused Modular Frame", ingredients: [{name: "Heavy Modular Frame", quantity: 3.0},{name: "Aluminum Ingot", quantity: 150.0},{name: "Nitric Acid", quantity: 24.0},{name: "Fuel", quantity: 30.0}], production: 3.0 },
{altName: "Turbo Rigour Motor", version: "Experimental", recipeName: "Turbo Motor", ingredients: [{name: "Motor", quantity: 6.6},{name: "Radio Control Unit", quantity: 4.7},{name: "Electromagnetic Control Rod", quantity: 6.6},{name: "Rotor", quantity: 8.4}], production: 2.8 },
{altName: "Electromagnetic Connection Rod", version: "Experimental", recipeName: "Electromagnetic Control Rod", ingredients: [{name: "Stator", quantity: 8.0},{name: "High-Speed Connector", quantity: 4.0}], production: 8.0 },
{altName: "Infused Uranium Cell", version: "Experimental", recipeName: "Encased Uranium Cell", ingredients: [{name: "Uranium Pellet", quantity: 15.0},{name: "Silica", quantity: 22.5},{name: "Sulfur", quantity: 30.0},{name: "Quickwire", quantity: 37.5}], production: 22.5 },
{altName: "Nuclear Fuel Unit", version: "Experimental", recipeName: "Nuclear Fuel Rod", ingredients: [{name: "Encased Uranium Cell", quantity: 20.0},{name: "Electromagnetic Control Rod", quantity: 2.0},{name: "Crystal Oscillator", quantity: 0.6},{name: "Beacon", quantity: 1.2}], production: 0.6 },
{altName: "Instant Plutonium Cell", version: "Experimental", recipeName: "Encased Plutonium Cell", ingredients: [{name: "Non-fissile Uranium", quantity: 75.0},{name: "Aluminum Casing", quantity: 25.0},{name: "Nitrogen Gas", quantity: 25.0}], production: 25.0 },
{altName: "Fertile Uranium", version: "Experimental", recipeName: "Non-fissile Uranium", ingredients: [{name: "Uranium", quantity: 25.0},{name: "Nuclear Waste", quantity: 50.0},{name: "Nitric Acid", quantity: 75.0},{name: "Sulfuric Acid", quantity: 75.0}], production: 100.0 },
{altName: "Turbo Pressure Motor", version: "Experimental", recipeName: "Turbo Motor", ingredients: [{name: "Motor", quantity: 7.5},{name: "Pressure Conversion Cube", quantity: 3.8},{name: "Packaged Nitrogen Gas", quantity: 56.3},{name: "Stator", quantity: 22.5}], production: 3.8 },
]


let recipes = _.sortBy(altRecipes, 'recipeName')

recipes = recipes
.filter((recipe) => {
  return recipe.version !== "Stable"
})
.map((recipe) => {
  return {
    name: _.camelCase(recipe.recipeName),
    altName: recipe.altName,
    ingredients: recipe.ingredients.map((ingredient) => {
      return {name: _.camelCase(ingredient.name), quantity: `${recipe.production}/${ingredient.quantity}`}
    })
  }
})

window.recipes = recipes
console.log({recipes})
console.log(JSON5.stringify(recipes))

export {altRecipes}