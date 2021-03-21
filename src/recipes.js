// satisfactory
import _ from 'lodash'


let recipes = [{
    name: 'cable',
    ingredients: [{name: 'copperWire', quantity: 2}],
},{
    name: 'aiLimiter',
    ingredients: [{name: 'copperSheet', quantity: 5},{name: 'quickWire', quantity: 20}],
},{
    name: 'adaptiveControlUnit',
    ingredients: [{name: 'automatedWiring', quantity: 7.5},{name: 'circuitBoard', quantity: 5},{name: 'heavyModularFrame', quantity: 1},{name: 'computer', quantity: 1}],
},{
    name: 'alcladAluminumSheet',
    ingredients: [{name: 'aluminumIngot', quantity: 2},{name: 'copperIngot', quantity: 3/4}],
},{
    name: 'aluminaSolution',
    ingredients: [{name: 'bauxite', quantity: 7/8},{name: 'water', quantity: 5/4}],
},{
    name: 'aluminumIngot',
    ingredients: [{name: 'aluminumScrap', quantity: 3},{name: 'silica', quantity: 7/4}],
},{
    name: 'aluminumScrap',
    ingredients: [{name: 'aluminaSolution', quantity: 2/3},{name: 'petroleumCoke', quantity: 1/6}],
},{
    name: 'automatedWiring',
    ingredients: [{name: 'stator', quantity: 1},{name: 'cable', quantity: 20}],
},{
    name: 'battery',
    ingredients: [{name: 'alcladAluminumSheet', quantity: 8/3},{name: 'copperWire', quantity: 16/3},{name: 'sulfur', quantity: 20/3},{name: 'plastic', quantity: 8/3}],
},{
    name: 'bauxite',
    ingredients: [],
},{
    name: 'blackPowder',
    ingredients: [{name: 'coal', quantity: 1},{name: 'sulfur', quantity: 2}],
},{
    name: 'cateriumOre',
    ingredients: [],
},{
    name: 'cateriumIngot',
    ingredients: [{name: 'cateriumOre', quantity: 3}],
},{
    name: 'circuitBoard',
    ingredients: [{name: 'copperSheet', quantity: 2},{name: 'plastic', quantity: 4}],
},{
    name: 'coal',
    ingredients: [],
},{
    name: 'computer',
    ingredients: [{name: 'circuitBoard', quantity: 10},{name: 'cable', quantity: 9},{name: 'plastic', quantity:18},{name: 'screw', quantity: 130}],
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
    name: 'crudeOil',
    ingredients: [],
},{
    name: 'crystalOscillator',
    ingredients: [{name: 'quartzCrystal', quantity: 18},{name: 'cable', quantity: 14},{name: 'reinforcedIronPlate', quantity: 2.5}],
},{
    name: 'encasedIndustrialBeam',
    ingredients: [{name: 'concrete', quantity: 5},{name: 'steelBeam', quantity: 4}],
},{
    name: 'heatSink',
    ingredients: [{name: 'alcladAluminumSheet', quantity: 4},{name: 'rubber', quantity: 7}],
},{
    name: 'heavyModularFrame',
    ingredients: [{name: 'modularFrame', quantity: 5},{name: 'steelPipe', quantity: 15},{name: 'encasedIndustrialBeam', quantity: 5},{name: 'screw', quantity: 100}],
},{
    name: 'highSpeedConnector',
    ingredients: [{name: 'quickWire', quantity: 56},{name: 'cable', quantity: 10},{name: 'circuitBoard', quantity: 1}],
},{
    name: 'heavyOilResidue',
    ingredients: [{name: 'crudeOil', quantity: 3}],
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
    name: 'modularEngine',
    ingredients: [{name: 'engine', quantity: 2},{name: 'rubber', quantity: 15},{name: 'smartPlating', quantity: 2}],
},{
    name: 'modularFrame',
    ingredients: [{name: 'ironRod', quantity: 6},{name: 'reinforcedIronPlate', quantity: 3/2}],
},{
    name: 'motor',
    ingredients: [{name: 'rotor', quantity: 2},{name: 'stator', quantity: 2}],
},{
    name: 'petroleumCoke',
    ingredients: [{name: 'heavyOilResidue', quantity: 1/3}],
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
    name: 'silica',
    ingredients: [{name: 'rawQuartz', quantity: 3/5}],
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
    name: 'sulfur',
    ingredients: [],
},{
    name: 'versatileFramework',
    ingredients: [{name: 'modularFrame', quantity: 1/2},{name: 'steelBeam', quantity: 6}],
},{
    name: 'water',
    ingredients: [],
}]



export {recipes}