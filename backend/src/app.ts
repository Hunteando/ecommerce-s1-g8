import cors from 'cors';
import express, { Application, json } from 'express';
import morgan from 'morgan';
import { PORT } from './config';
import routes from './routes';
const app: Application = express();
// Settings
app.set('port', PORT || 3000);

// Views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(json());

// Routes
app.use('/api/v1', routes);
app.use((_, res) =>
	res.status(404).render('404.ejs', { title: 'Page not found', status: '404' })
);

export default app;
