// const User = require('./User');
const Character = require('./Character');
const Race = require('./Race');
const Class = require('./Class');
const User = require('./User');

Class.hasMany(Character, {
  foreignKey: 'class_id',
});

Character.belongsTo(Class, {
  foreignKey: 'class_id',
  onDelete: 'CASCADE',
});

Race.hasMany(Character, {
  foreignKey: 'race_id',
});

Character.belongsTo(Race, {
  foreignKey: 'race_id',
  onDelete: 'CASCADE',
});

User.hasMany(Character, {
  foreignKey: 'user_id'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { Character, Race, Class, User };
