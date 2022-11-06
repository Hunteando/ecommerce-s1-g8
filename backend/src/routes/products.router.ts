import { NextFunction, Request, Response, Router } from 'express';
import { ProductsCrud } from '../controllers/products.controller';

const router: Router = Router();
const productCrud = new ProductsCrud();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await productCrud.getProducts();
		res.json({ data: products });
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const product = await productCrud.getProduct(+id);
		res.json({ data: product });
	} catch (err) {
		next(err);
	}
});

export default router;
