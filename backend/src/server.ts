import cors from 'cors';
import 'dotenv/config';
import express, {
	Application,
	json,
	NextFunction,
	Request,
	Response,
} from 'express';
import morgan from 'morgan';
import { HTTP_CODE } from './codes';
import routes from './routes';

const { PORT } = process.env;

class Server {
	private app: Application;
	private port: number | string;

	constructor() {
		this.app = express();
		this.port = PORT || 3000;
		this.views();
		this.middlewares();
		this.router();
		this.handleError();
	}

	views() {
		this.app.set('view engine', 'ejs');
		this.app.set('views', __dirname + '/views');
	}

	middlewares() {
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(json());
	}

	router() {
		this.app.use('/api/v1', routes);
		this.app.use((_, res) => {
			res
				.status(404)
				.render('404.ejs', { title: 'Page not found', status: '404' });
		});
	}

	handleError() {
		this.app.use(
			(error: Error, req: Request, res: Response, next: NextFunction) => {
				console.log('Error ->', error.message);
				res.status(HTTP_CODE.SERVER_ERROR).send({
					code: HTTP_CODE.SERVER_ERROR,
					message: 'An internal server error occurred',
				});
				next();
			}
		);
	}

	listen() {
		this.app.listen(this.port, async () => {
			console.log('Server is running on port:', +this.port);
		});
	}
}

export default Server;
