import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class Brands extends Model {}
Brands.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'brands',
	}
);

// One to Many
// Brans.hasMany(Products);
