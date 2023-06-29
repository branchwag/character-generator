// const User = require('./User');
const Character = require('./Character');
const Race = require('./Race');
const Class = require('./Class');

Class.hasMany(Character, {
  foreignKey: 'class_id',
});

Character.belongsTo(Class, {
  foreignKey: 'class_id'
})

Race.hasMany(Character, {
  foreignKey: 'race_id',
});

Character.belongsTo(Race, {
  foreignKey: 'race_id'
});

module.exports = { Character, Race, Class };
