import { Request, Response, Router } from 'express';
import api from '../libs/load_data';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
	const data = await api('maybelline');
	res.json({ data });
});

export default router;
