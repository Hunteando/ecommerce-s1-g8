import 'dotenv/config';
const { PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, NODE_ENV } = process.env;

export default {
	db_name: DB_NAME || '',
	db_user: DB_USER || '',
	db_password: DB_PASSWORD || '',
	db_host: DB_HOST || '',
	port: PORT || 3000,
	enviroment: NODE_ENV || 'development',
};
