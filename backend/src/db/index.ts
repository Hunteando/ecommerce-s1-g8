import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Product } from '../entities/product.entity';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	port: !DB_PORT ? 5432 : +DB_PORT,
	database: DB_NAME,
	entities: [Product],
	synchronize: true,
});
