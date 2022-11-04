import 'dotenv/config';
import { Sequelize } from 'sequelize';

import config from '../config';

export const sequelize = new Sequelize(
	config.db_name,
	config.db_user,
	config.db_password,
	{
		host: config.db_password,
		dialect: 'postgres',
		logging: false,
		native: false,
	}
);
