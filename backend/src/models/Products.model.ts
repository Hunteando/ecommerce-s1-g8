import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { Brands } from './Brands.model';

const REGEX = /^[a-zA-Z0-9-()-: .]+$/;

// export const Products = sequelize.define('Products', {
// 	id: {
// 		type: DataTypes.INTEGER,
// 		primaryKey: true,
// 		autoIncrement: true,
// 	},
// 	name: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 		unique: true,
// 	},
// 	price: {
// 		type: DataTypes.FLOAT,
// 		allowNull: false,
// 	},
// 	brand: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 	},
// 	image_link: {
// 		type: DataTypes.JSON,
// 		allowNull: false,
// 	},
// 	description: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 		validate: {
// 			isEven: (value: string) => {
// 				if (!REGEX.test(value) || value.length > 255 || !value.trim().length)
// 					return { msg: 'Invalid description' };
// 			},
// 		},
// 	},
// 	tag: {},
// 	category: {},
// 	color: {},
// });

class Products extends Model {}
Products.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},

		image_link: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEven: (value: string) => {
					if (!REGEX.test(value) || value.length > 255 || !value.trim().length)
						return { msg: 'Invalid description' };
				},
			},
		},
	},
	{
		sequelize,
		modelName: 'products',
	}
);

Products.belongsToMany(Brands, {
	through: 'products_brands',
	timestamps: false,
});
// One to Many
// Brands.hasMany(Products);

export { Products };
