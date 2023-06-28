const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		race_name: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'race',
	}
);

module.exports = Race;