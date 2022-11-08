import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { Category } from '../entities/category.entity';
import { Color } from '../entities/color.entity';
import { Product } from '../entities/product.entity';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	port: !DB_PORT ? 5432 : +DB_PORT,
	database: DB_NAME,
	entities: [Product, Brand, Category, Color],
	synchronize: true,
});
