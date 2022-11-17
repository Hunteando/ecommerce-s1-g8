import { NextFunction, Request, Response, Router } from 'express';
import { uploadDataToTableAndGetProduct } from '../libs/load_data';

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await uploadDataToTableAndGetProduct();
		res.json({ data });
	} catch (err) {
		next(err);
	}
});

export default router;
