const { Race } = require('../models');

const raceData = [
  {
    race_name: 'Aarakocra',
  },
  {
    race_name: 'Aasimar',
  },
  {
    race_name: 'Bugbear',
  },
  {
    race_name: 'Centaur',
  },
  {
    race_name: 'Changeling',
  },
  {
    race_name: 'Dragonborn',
  },
  {
    race_name: 'Dwarf',
  },
  {
    race_name: 'Elf',
  },
  {
    race_name: 'Firbolg',
  },
  {
    race_name: 'Genasi',
  },
  {
    race_name: 'Gith',
  },
  {
    race_name: 'Gnome',
  },
  {
    race_name: 'Goblin',
  },
  {
    race_name: 'Goliath',
  },
  {
    race_name: 'Half-Elf',
  },
  {
    race_name: 'Half-Orc',
  },
  {
    race_name: 'Halfling',
  },
  {
    race_name: 'Hexblood Lineage',
  },
  {
    race_name: 'Hobgoblin',
  },
  {
    race_name: 'Human',
  },
  {
    race_name: 'Kalashtar',
  },
  {
    race_name: 'Kenku',
  },
  {
    race_name: 'Kobold',
  },
  {
    race_name: 'Leonin',
  },
  {
    race_name: 'Lizardfolk',
  },
  {
    race_name: 'Loxodon',
  },
  {
    race_name: 'Minotaur',
  },
  {
    race_name: 'Orc',
  },
  {
    race_name: 'Reborn Lineage',
  },
  {
    race_name: 'Satyr',
  },
  {
    race_name: 'Shifter',
  },
  {
    race_name: 'Simic Hybrid',
  },
  {
    race_name: 'Tabaxi',
  },
  {
    race_name: 'Tiefling',
  },
  {
    race_name: 'Tortle',
  },
  {
    race_name: 'Triton',
  },
  {
    race_name: 'Vedalken',
  },
  {
    race_name: 'Verdan',
  },
  {
    race_name: 'Warforged',
  },
  {
    race_name: 'Yuan-Ti Pureblood',
  },
];

const seedRace = () => Race.bulkCreate(raceData);

module.exports = seedRace;
