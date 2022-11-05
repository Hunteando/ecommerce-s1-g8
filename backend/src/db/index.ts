import 'dotenv/config';
import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, NODE_ENV } = process.env;

export const sequelize = new Sequelize(
	DB_NAME || '',
	DB_USER || '',
	DB_PASSWORD || '',
	{
		host: DB_HOST,
		dialect: 'postgres',
		logging: false,
		native: false,
		dialectOptions:
			NODE_ENV === 'production'
				? {
						ssl: {
							require: true,
							rejectUnauthorized: false,
						},
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  }
				: {},
	}
);
