import 'dotenv/config';
import { sequelize } from './db';
import Server from './server';

const server = new Server();

(async () => {
	try {
		await sequelize.sync({ force: true });
		console.log('Connection has been established successfully');

		server.listen();
	} catch (err) {
		console.log(err);
	}
})();
