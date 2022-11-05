import { Request, Response, Router } from 'express';
import { ProductsCrud } from '../controllers/products.controller';

const router: Router = Router();
const productCrud = new ProductsCrud();

router.get('/', async (_, res: Response) => {
	try {
		const products = await productCrud.getAllProducts();
		res.json({ data: products });
	} catch (err) {
		res.status(404).json({ error: (err as Error).message });
	}
});

router.get('/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const product = await productCrud.getProduct(+id);
		res.json({ data: product });
	} catch (err) {
		res.status(404).json({ error: (err as Error).message });
	}
});

export default router;
