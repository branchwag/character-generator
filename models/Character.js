const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_gender:{
      type:DataTypes.STRING,
      allowNull:true,
      primaryKey:true,
    },
    eye_color:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
    },
    hair_color:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id',
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'race',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  },
);

module.exports = Character;
