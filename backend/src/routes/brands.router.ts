import { NextFunction, Request, Response, Router } from 'express';
import { BrandsCrud } from '../controllers/brands.controller';

const router: Router = Router();
const brandsCrud = new BrandsCrud();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const brands = await brandsCrud.getBrands();
		res.json({ data: brands });
	} catch (err) {
		next(err);
	}
});

export default router;
