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
    character_gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eye_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hair_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'class',
        key: 'id',
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'race',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    backstory: {
      type: DataTypes.TEXT,
      allowNull: true,
      length: 'medium',
    },
    image_link: {
      type: DataTypes.TEXT,
      allowNull: true,
      length: 'medium',
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
