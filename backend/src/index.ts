import 'dotenv/config';
import 'reflect-metadata';
import { AppDataSource } from './db';
import Server from './server';

const server = new Server();

(async () => {
	try {
		await AppDataSource.initialize();
		console.log('Connection has been established successfully');
		server.listen();
	} catch (err) {
		console.log('Error ->', err);
	}
})();
