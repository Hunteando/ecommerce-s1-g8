import 'dotenv/config';
import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const sequelize = new Sequelize(
	DB_NAME || '',
	DB_USER || '',
	DB_PASSWORD || '',
	{
		host: DB_HOST,
		dialect: 'postgres',
		logging: false,
		native: false,
	}
);
