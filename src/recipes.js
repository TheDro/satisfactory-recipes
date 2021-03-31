
let recipes = [{
    name: 'aiLimiter',
    ingredients: [{name: 'copperSheet', quantity: 5},{name: 'quickwire', quantity: 20}],
},{
    name: 'adaptiveControlUnit',
    ingredients: [{name: 'automatedWiring', quantity: 7.5},{name: 'circuitBoard', quantity: 5},{name: 'heavyModularFrame', quantity: 1},{name: 'computer', quantity: 1}],
},{
    name: 'alcladAluminumSheet',
    ingredients: [{name: 'aluminumIngot', quantity: 1},{name: 'copperIngot', quantity: 1/3}],
},{
    name: 'aluminaSolution',
    ingredients: [{name: 'bauxite', quantity: 1},{name: 'water', quantity: 1.5},{name: 'silica', quantity: -5/12}],
},{
    name: 'aluminumCasing',
    ingredients: [{name: 'aluminumIngot', quantity: 1.5}],
},{
    name: 'aluminumIngot',
    ingredients: [{name: 'aluminumScrap', quantity: 1.5},{name: 'silica', quantity: 5/4}],
},{
    name: 'aluminumScrap',
    ingredients: [{name: 'aluminaSolution', quantity: 2/3},{name: 'coal', quantity: 1/3},{name: 'water', quantity: -1/3}],
},{
    name: 'assemblyDirectorSystem',
    ingredients: [{name: 'adaptiveControlUnit', quantity: 2},{name: 'supercomputer', quantity: 1}],
},{
    name: 'automatedWiring',
    ingredients: [{name: 'stator', quantity: 1},{name: 'cable', quantity: 20}],
},{
    name: 'battery',
    ingredients: [{name: 'sulfuricAcid', quantity: 3},{name: 'aluminaSolution', quantity: 2},{name: 'aluminumCasing', quantity: 1}],
},{
    name: 'bauxite',
    ingredients: [],
},{
    name: 'biomass',
    ingredients: [],
},{
    name: 'blackPowder',
    ingredients: [{name: 'coal', quantity: 1},{name: 'sulfur', quantity: 2}],
},{
    name: 'cable',
    ingredients: [{name: 'copperWire', quantity: 2}],
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
    name: 'coolingSystem',
    ingredients: [{name: 'heatSink', quantity: 2},{name: 'rubber', quantity: 2},{name: 'water', quantity: 5},{name: 'nitrogenGas', quantity: 25}],
},{
    name: 'copperOre',
    ingredients: [],
},{
    name: 'copperIngot',
    ingredients: [{name: 'copperOre', quantity: 1}],
},{
    name: 'copperPowder',
    ingredients: [{name: 'copperIngot', quantity: 6}],
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
    name: 'electromagneticControlRod',
    ingredients: [{name: 'stator', quantity: 3/2},{name: 'aiLimiter', quantity: 1}],
},{
    name: 'encasedIndustrialBeam',
    ingredients: [{name: 'concrete', quantity: 5},{name: 'steelBeam', quantity: 4}],
},{
    name: 'fusedModularFrame',
    ingredients: [{name: 'heavyModularFrame', quantity: 1},{name: 'aluminumCasing', quantity: 50},{name: 'nitrogenGas', quantity: 25}],
},{
    name: 'heatSink',
    ingredients: [{name: 'alcladAluminumSheet', quantity: 4},{name: 'copperSheet', quantity: 9/2}],
},{
    name: 'heavyModularFrame',
    ingredients: [{name: 'modularFrame', quantity: 5},{name: 'steelPipe', quantity: 15},{name: 'encasedIndustrialBeam', quantity: 5},{name: 'screw', quantity: 100}],
},{
    name: 'highSpeedConnector',
    ingredients: [{name: 'quickwire', quantity: 56},{name: 'cable', quantity: 10},{name: 'circuitBoard', quantity: 1}],
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
    name: 'magneticFieldGenerator',
    ingredients: [{name: 'versatileFramework', quantity: 5/2},{name: 'electromagneticControlRod', quantity: 1},{name: 'battery', quantity: 5}],
},{
    name: 'modularEngine',
    ingredients: [{name: 'motor', quantity: 2},{name: 'rubber', quantity: 15},{name: 'smartPlating', quantity: 2}],
},{
    name: 'modularFrame',
    ingredients: [{name: 'ironRod', quantity: 6},{name: 'reinforcedIronPlate', quantity: 3/2}],
},{
    name: 'motor',
    ingredients: [{name: 'rotor', quantity: 2},{name: 'stator', quantity: 2}],
},{
    name: 'nitrogenGas',
    ingredients: [],
},{
    name: 'nuclearPasta',
    ingredients: [{name: 'copperPowder', quantity: 200},{name: 'pressureConversionCube', quantity: 1}],
},{
    name: 'petroleumCoke',
    ingredients: [{name: 'heavyOilResidue', quantity: 1/3}],
},{
    name: 'plastic',
    ingredients: [{name: 'crudeOil', quantity: 3/2}],
},{
    name: 'pressureConversionCube',
    ingredients: [{name: 'fusedModularFrame', quantity: 1},{name: 'radioControlUnit', quantity: 2}],
},{
    name: 'radioControlUnit',
    ingredients: [{name: 'heatSink', quantity: 4},{name: 'rubber', quantity: 16},{name: 'crystalOscillator', quantity: 1},{name: 'computer', quantity: 1}],
},{
    name: 'rubber',
    ingredients: [{name: 'crudeOil', quantity: 3/2}],
},{
    name: 'sulfuricAcid',
    ingredients: [{name: 'sulfur', quantity: 0.5},{name: 'water', quantity: 0.5}],
},{
    name: 'supercomputer',
    ingredients: [{name: 'computer', quantity: 2},{name: 'aiLimiter', quantity: 2},{name: 'highSpeedConnector', quantity: 3},{name: 'plastic', quantity: 28}],
},{
    name: 'thermalPropulsionRocket',
    ingredients: [{name: 'modularEngine', quantity: 2.5},{name: 'turboMotor', quantity: 1},{name: 'coolingSystem', quantity: 3},{name: 'fusedModularFrame', quantity: 1}],
},{
    name: 'turboMotor',
    ingredients: [{name: 'coolingSystem', quantity: 4},{name: 'radioControlUnit', quantity: 2},{name: 'motor', quantity: 4},{name: 'rubber', quantity: 24}],
},{
    name: 'quartzCrystal',
    ingredients: [{name: 'rawQuartz', quantity: 5/3}],
},{
    name: 'quickwire',
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
},
  ////////////////////////// ALTERNATE RECIPES //////////////////////////////////////////////////
{
  name: 'aluminaSolution',
  altName: 'Sloppy Alumina',
  ingredients: [{name: 'bauxite', quantity: 150/180}, {name: 'water', quantity: 150/180}]
},{
  name: 'aluminumCasing',
  altName: 'Alclad Casing',
  ingredients: [{name: 'aluminumIngot', quantity: 112.5/112.5}, {name: 'copperIngot', quantity: 75/112.5}]
},{
  name: 'aluminumIngot',
  altName: 'Pure Aluminum Ingot',
  ingredients: [{name: 'aluminumScrap', quantity: 54/27}]
},{
  name: 'aluminumScrap',
  altName: 'Electrode - Aluminum Scrap',
  ingredients: [{name: 'aluminaSolution', quantity: 90/240}, {name: 'petroleumCoke', quantity: 30/240}]
},{
  name: 'aluminumScrap',
  altName: 'Instant Scrap',
  ingredients: [{name: 'bauxite', quantity: 150/300}, {name: 'coal', quantity: 100/300}, {name: 'sulfuricAcid', quantity: 50/300}, {name: 'water', quantity: 110/300}]
},{
  name: 'automatedWiring',
  altName: 'High-Speed Wiring',
  ingredients: [{name: 'stator', quantity: 3.8/7.5}, {name: 'copperWire', quantity: 75/7.5}, {name: 'highSpeedConnector', quantity: 1.9/7.5}]
},{
  name: 'battery',
  altName: 'Classic Battery',
  ingredients: [{name: 'sulfur', quantity: 45/30}, {name: 'alcladAluminumSheet', quantity: 52.5/30}, {name: 'plastic', quantity: 60/30}, {name: 'copperWire', quantity: 90/30}]
},{
  name: 'beacon',
  altName: 'Signal Beacon',
  ingredients: [{name: 'steelBeam', quantity: 2/10}, {name: 'steelPipe', quantity: 8/10}, {name: 'crystalOscillator', quantity: 0.5/10}]
},{
  name: 'blackPowder',
  altName: 'Fine Black Powder (Gun Powder)',
  ingredients: [{name: 'sulfur', quantity: 7.5/15}, {name: 'compactedCoal', quantity: 3.8/15}]
},{
  name: 'cable',
  altName: 'Coated Cable',
  ingredients: [{name: 'copperWire', quantity: 37.5/67.5}, {name: 'heavyOilResidue', quantity: 15/67.5}]
},{
  name: 'cable',
  altName: 'Insulated Cable (Rubber Cable)',
  ingredients: [{name: 'copperWire', quantity: 45/100}, {name: 'rubber', quantity: 30/100}]
},{
  name: 'cable',
  altName: 'Quickwire Cable',
  ingredients: [{name: 'quickwire', quantity: 7.5/27.5}, {name: 'rubber', quantity: 5/27.5}]
},{
  name: 'cateriumIngot',
  altName: 'Pure Caterium Ingot',
  ingredients: [{name: 'cateriumOre', quantity: 24/12}, {name: 'water', quantity: 24/12}]
},{
  name: 'circuitBoard',
  altName: 'Electrode Circuit Board',
  ingredients: [{name: 'rubber', quantity: 30/5}, {name: 'petroleumCoke', quantity: 45/5}]
},{
  name: 'circuitBoard',
  altName: 'Caterium Circuit Board',
  ingredients: [{name: 'plastic', quantity: 12.5/8.8}, {name: 'quickwire', quantity: 37.5/8.8}]
},{
  name: 'circuitBoard',
  altName: 'Silicone Circuit Board',
  ingredients: [{name: 'copperSheet', quantity: 27.5/12.5}, {name: 'silica', quantity: 27.5/12.5}]
},{
  name: 'coal',
  altName: 'Biocoal',
  ingredients: [{name: 'biomass', quantity: 37.5/45}]
},{
  name: 'coal',
  altName: 'Charcoal',
  ingredients: [{name: 'wood', quantity: 15/150}]
},{
  name: 'compactedCoal',
  altName: 'Compacted Coal',
  ingredients: [{name: 'coal', quantity: 25/25}, {name: 'sulfur', quantity: 25/25}]
},{
  name: 'computer',
  altName: 'Caterium Computer',
  ingredients: [{name: 'circuitBoard', quantity: 26.3/3.8}, {name: 'quickwire', quantity: 105/3.8}, {name: 'rubber', quantity: 45/3.8}]
},{
  name: 'computer',
  altName: 'Crystal Computer',
  ingredients: [{name: 'circuitBoard', quantity: 7.5/2.8}, {name: 'crystalOscillator', quantity: 2.8/2.8}]
},{
  name: 'concrete',
  altName: 'Fine Concrete',
  ingredients: [{name: 'silica', quantity: 7.5/25}, {name: 'limestone', quantity: 30/25}]
},{
  name: 'concrete',
  altName: 'Wet Concrete',
  ingredients: [{name: 'limestone', quantity: 120/80}, {name: 'water', quantity: 100/80}]
},{
  name: 'concrete',
  altName: 'Rubber Concrete',
  ingredients: [{name: 'limestone', quantity: 50/45}, {name: 'rubber', quantity: 10/45}]
},{
  name: 'coolingSystem',
  altName: 'Cooling Device',
  ingredients: [{name: 'heatSink', quantity: 3.8/3.8}, {name: 'motor', quantity: 1.9/3.8}, {name: 'nitrogenGas', quantity: 45/3.8}]
},{
  name: 'copperIngot',
  altName: 'Copper Alloy Ingot',
  ingredients: [{name: 'copperOre', quantity: 50/100}, {name: 'ironOre', quantity: 25/100}]
},{
  name: 'copperIngot',
  altName: 'Pure Copper Ingot',
  ingredients: [{name: 'copperOre', quantity: 15/37.5}, {name: 'water', quantity: 10/37.5}]
},{
  name: 'copperSheet',
  altName: 'Steamed Copper Sheet',
  ingredients: [{name: 'copperIngot', quantity: 22.5/22.5}, {name: 'water', quantity: 22.5/22.5}]
},{
  name: 'crystalOscillator',
  altName: 'Insulated Crystal Oscillator',
  ingredients: [{name: 'quartzCrystal', quantity: 18.8/1.9}, {name: 'rubber', quantity: 13.1/1.9}, {name: 'aiLimiter', quantity: 1.9/1.9}]
},{
  name: 'electromagneticControlRod',
  altName: 'Electromagnetic Connection Rod',
  ingredients: [{name: 'stator', quantity: 8/8}, {name: 'highSpeedConnector', quantity: 4/8}]
},{
  name: 'emptyCanister',
  altName: 'Coated Iron Canister',
  ingredients: [{name: 'ironPlate', quantity: 30/60}, {name: 'copperSheet', quantity: 15/60}]
},{
  name: 'emptyCanister',
  altName: 'Steel Canister',
  ingredients: [{name: 'steelIngot', quantity: 60/40}]
},{
  name: 'encasedIndustrialBeam',
  altName: 'Encased Industrial Pipe',
  ingredients: [{name: 'steelPipe', quantity: 28/4}, {name: 'concrete', quantity: 20/4}]
},{
  name: 'encasedPlutoniumCell',
  altName: 'Instant Plutonium Cell',
  ingredients: [{name: 'nonFissileUranium', quantity: 75/25}, {name: 'aluminumCasing', quantity: 25/25}, {name: 'nitrogenGas', quantity: 25/25}]
},{
  name: 'encasedUraniumCell',
  altName: 'Infused Uranium Cell',
  ingredients: [{name: 'uraniumPellet', quantity: 15/22.5}, {name: 'silica', quantity: 22.5/22.5}, {name: 'sulfur', quantity: 30/22.5}, {name: 'quickwire', quantity: 37.5/22.5}]
},{
  name: 'fabric',
  altName: 'Polyester Fabric',
  ingredients: [{name: 'polymerResin', quantity: 80/5}, {name: 'water', quantity: 50/5}]
},{
  name: 'fuel',
  altName: 'Diluted Fuel',
  ingredients: [{name: 'heavyOilResidue', quantity: 50/100}, {name: 'water', quantity: 100/100}]
},{
  name: 'fusedModularFrame',
  altName: 'Heat-Fused Frame',
  ingredients: [{name: 'heavyModularFrame', quantity: 3/3}, {name: 'aluminumIngot', quantity: 150/3}, {name: 'nitricAcid', quantity: 24/3}, {name: 'fuel', quantity: 30/3}]
},{
  name: 'heatSink',
  altName: 'Heat Exchanger',
  ingredients: [{name: 'aluminumCasing', quantity: 15/10}, {name: 'rubber', quantity: 20/10}]
},{
  name: 'heavyModularFrame',
  altName: 'Heavy Encased Frame',
  ingredients: [{name: 'modularFrame', quantity: 7.5/2.8}, {name: 'encasedIndustrialBeam', quantity: 9.4/2.8}, {name: 'steelPipe', quantity: 33.8/2.8}, {name: 'concrete', quantity: 20.6/2.8}]
},{
  name: 'heavyModularFrame',
  altName: 'Heavy Flexible Frame',
  ingredients: [{name: 'modularFrame', quantity: 18.8/3.8}, {name: 'encasedIndustrialBeam', quantity: 11.3/3.8}, {name: 'rubber', quantity: 75/3.8}, {name: 'screw', quantity: 390/3.8}]
},{
  name: 'heavyOilResidue',
  altName: 'Heavy Oil Residue',
  ingredients: [{name: 'crudeOil', quantity: 30/40}]
},{
  name: 'ironIngot',
  altName: 'Iron Alloy Ingot',
  ingredients: [{name: 'ironOre', quantity: 20/50}, {name: 'copperOre', quantity: 20/50}]
},{
  name: 'ironIngot',
  altName: 'Pure Iron Ingot',
  ingredients: [{name: 'ironOre', quantity: 35/65}, {name: 'water', quantity: 20/65}]
},{
  name: 'ironPlate',
  altName: 'Coated Iron Plate',
  ingredients: [{name: 'ironIngot', quantity: 50/75}, {name: 'plastic', quantity: 10/75}]
},{
  name: 'ironPlate',
  altName: 'Steel Coated Plate',
  ingredients: [{name: 'steelIngot', quantity: 7.5/45}, {name: 'plastic', quantity: 5/45}]
},{
  name: 'ironRod',
  altName: 'Steel Rod',
  ingredients: [{name: 'steelIngot', quantity: 12/48}]
},{
  name: 'modularFrame',
  altName: 'Bolted Frame',
  ingredients: [{name: 'reinforcedIronPlate', quantity: 7.5/5}, {name: 'screw', quantity: 140/5}]
},{
  name: 'modularFrame',
  altName: 'Steeled Frame',
  ingredients: [{name: 'reinforcedIronPlate', quantity: 2/3}, {name: 'steelPipe', quantity: 10/3}]
},{
  name: 'motor',
  altName: 'Rigour Motor',
  ingredients: [{name: 'rotor', quantity: 3.8/7.5}, {name: 'stator', quantity: 3.8/7.5}, {name: 'crystalOscillator', quantity: 1.3/7.5}]
},{
  name: 'motor',
  altName: 'Electric Motor',
  ingredients: [{name: 'electromagneticControlRod', quantity: 3.8/7.5}, {name: 'rotor', quantity: 7.5/7.5}]
},{
  name: 'nobelisk',
  altName: 'Seismic Nobelisk',
  ingredients: [{name: 'blackPowder', quantity: 12/6}, {name: 'steelPipe', quantity: 12/6}, {name: 'crystalOscillator', quantity: 1.5/6}]
},{
  name: 'nonFissileUranium',
  altName: 'Fertile Uranium',
  ingredients: [{name: 'uranium', quantity: 25/100}, {name: 'nuclearWaste', quantity: 50/100}, {name: 'nitricAcid', quantity: 75/100}, {name: 'sulfuricAcid', quantity: 75/100}]
},{
  name: 'nuclearFuelRod',
  altName: 'Nuclear Fuel Unit',
  ingredients: [{name: 'encasedUraniumCell', quantity: 20/0.6}, {name: 'electromagneticControlRod', quantity: 2/0.6}, {name: 'crystalOscillator', quantity: 0.6/0.6}, {name: 'beacon', quantity: 1.2/0.6}]
},{
  name: 'packagedFuel',
  altName: 'Diluted Packaged Fuel',
  ingredients: [{name: 'heavyOilResidue', quantity: 30/60}, {name: 'packagedWater', quantity: 60/60}]
},{
  name: 'plastic',
  altName: 'Recycled Plastic',
  ingredients: [{name: 'rubber', quantity: 30/60}, {name: 'fuel', quantity: 30/60}]
},{
  name: 'polymerResin',
  altName: 'Polymer Resin',
  ingredients: [{name: 'crudeOil', quantity: 60/130}]
},{
  name: 'portableMiner',
  altName: 'Automated Miner',
  ingredients: [{name: 'motor', quantity: 1/1}, {name: 'steelPipe', quantity: 4/1}, {name: 'ironRod', quantity: 4/1}, {name: 'ironPlate', quantity: 2/1}]
},{
  name: 'quartzCrystal',
  altName: 'Pure Quartz Crystal',
  ingredients: [{name: 'rawQuartz', quantity: 67.5/52.5}, {name: 'water', quantity: 37.5/52.5}]
},{
  name: 'quickwire',
  altName: 'Fused Quickwire',
  ingredients: [{name: 'cateriumIngot', quantity: 7.5/90}, {name: 'copperIngot', quantity: 37.5/90}]
},{
  name: 'radioControlUnit',
  altName: 'Radio Control System',
  ingredients: [{name: 'crystalOscillator', quantity: 1.5/4.5}, {name: 'circuitBoard', quantity: 15/4.5}, {name: 'aluminumCasing', quantity: 67.5/4.5}, {name: 'rubber', quantity: 45/4.5}]
},{
  name: 'radioControlUnit',
  altName: 'Radio Connection Unit',
  ingredients: [{name: 'heatSink', quantity: 15/3.8}, {name: 'highSpeedConnector', quantity: 7.5/3.8}, {name: 'quartzCrystal', quantity: 45/3.8}]
},{
  name: 'reinforcedIronPlate',
  altName: 'Bolted Iron Plate',
  ingredients: [{name: 'ironPlate', quantity: 90/15}, {name: 'screw', quantity: 250/15}]
},{
  name: 'reinforcedIronPlate',
  altName: 'Stitched Iron Plate',
  ingredients: [{name: 'ironPlate', quantity: 18.8/5.6}, {name: 'copperWire', quantity: 37.5/5.6}]
},{
  name: 'reinforcedIronPlate',
  altName: 'Adhered Iron Plate',
  ingredients: [{name: 'ironPlate', quantity: 11.3/3.8}, {name: 'rubber', quantity: 3.8/3.8}]
},{
  name: 'rotor',
  altName: 'Copper Rotor',
  ingredients: [{name: 'copperSheet', quantity: 22.5/11.3}, {name: 'screw', quantity: 195/11.3}]
},{
  name: 'rotor',
  altName: 'Steel Rotor',
  ingredients: [{name: 'steelPipe', quantity: 10/5}, {name: 'copperWire', quantity: 30/5}]
},{
  name: 'rubber',
  altName: 'Recycled Rubber',
  ingredients: [{name: 'plastic', quantity: 30/60}, {name: 'fuel', quantity: 30/60}]
},{
  name: 'screw',
  altName: 'Casted Screw',
  ingredients: [{name: 'ironIngot', quantity: 12.5/50}]
},{
  name: 'screw',
  altName: 'Steel Screw',
  ingredients: [{name: 'steelBeam', quantity: 5/260}]
},{
  name: 'silica',
  altName: 'Cheap Silica',
  ingredients: [{name: 'rawQuartz', quantity: 11.3/26.3}, {name: 'limestone', quantity: 18.8/26.3}]
},{
  name: 'smartPlating',
  altName: 'Plastic Smart Plating',
  ingredients: [{name: 'reinforcedIronPlate', quantity: 2.5/5}, {name: 'rotor', quantity: 2.5/5}, {name: 'plastic', quantity: 7.5/5}]
},{
  name: 'stator',
  altName: 'Quickwire Stator',
  ingredients: [{name: 'steelPipe', quantity: 16/8}, {name: 'quickwire', quantity: 60/8}]
},{
  name: 'steelIngot',
  altName: 'Solid Steel Ingot',
  ingredients: [{name: 'ironIngot', quantity: 40/60}, {name: 'coal', quantity: 40/60}]
},{
  name: 'steelIngot',
  altName: 'Compacted Steel Ingot',
  ingredients: [{name: 'ironOre', quantity: 22.5/37.5}, {name: 'compactedCoal', quantity: 11.3/37.5}]
},{
  name: 'steelIngot',
  altName: 'Coke Steel Ingot',
  ingredients: [{name: 'ironOre', quantity: 75/100}, {name: 'petroleumCoke', quantity: 75/100}]
},{
  name: 'supercomputer',
  altName: 'OC Supercomputer',
  ingredients: [{name: 'radioControlUnit', quantity: 9/3}, {name: 'coolingSystem', quantity: 9/3}]
},{
  name: 'supercomputer',
  altName: 'Super-State Computer',
  ingredients: [{name: 'computer', quantity: 3.6/2.4}, {name: 'electromagneticControlRod', quantity: 2.4/2.4}, {name: 'battery', quantity: 24/2.4}, {name: 'copperWire', quantity: 54/2.4}]
},{
  name: 'turboMotor',
  altName: 'Turbo Rigour Motor',
  ingredients: [{name: 'motor', quantity: 6.6/2.8}, {name: 'radioControlUnit', quantity: 4.7/2.8}, {name: 'electromagneticControlRod', quantity: 6.6/2.8}, {name: 'rotor', quantity: 8.4/2.8}]
},{
  name: 'turboMotor',
  altName: 'Turbo Pressure Motor',
  ingredients: [{name: 'motor', quantity: 7.5/3.8}, {name: 'pressureConversionCube', quantity: 3.8/3.8}, {name: 'packagedNitrogenGas', quantity: 56.3/3.8}, {name: 'stator', quantity: 22.5/3.8}]
},{
  name: 'turbofuel',
  altName: 'Turbo Blend Fuel',
  ingredients: [{name: 'fuel', quantity: 15/45}, {name: 'heavyOilResidue', quantity: 30/45}, {name: 'sulfur', quantity: 22.5/45}, {name: 'petroleumCoke', quantity: 22.5/45}]
},{
  name: 'turbofuel',
  altName: 'Turbo Heavy Fuel',
  ingredients: [{name: 'heavyOilResidue', quantity: 37.5/30}, {name: 'compactedCoal', quantity: 30/30}]
},{
  name: 'turbofuel',
  altName: 'Turbofuel',
  ingredients: [{name: 'fuel', quantity: 22.5/18.8}, {name: 'compactedCoal', quantity: 15/18.8}]
},{
  name: 'versatileFramework',
  altName: 'Flexible Framework',
  ingredients: [{name: 'modularFrame', quantity: 3.8/7.5}, {name: 'steelBeam', quantity: 22.5/7.5}, {name: 'rubber', quantity: 30/7.5}]
},{
  name: 'copperWire',
  altName: 'Caterium Wire',
  ingredients: [{name: 'cateriumIngot', quantity: 15/120}]
},{
  name: 'copperWire',
  altName: 'Fused Wire',
  ingredients: [{name: 'copperIngot', quantity: 12/90}, {name: 'cateriumIngot', quantity: 3/90}]
},{
  name: 'copperWire',
  altName: 'Iron Wire',
  ingredients: [{name: 'ironIngot', quantity: 12.5/22.5}]
},{
  name: 'highSpeedConnector',
  altName: 'Silicone High-Speed Connector',
  ingredients: [{name: 'quickwire', quantity: 90/3}, {name: 'silica', quantity: 37.5/3},{name: 'circuitBoard', quantity: 3/3}]
}]



export {recipes}