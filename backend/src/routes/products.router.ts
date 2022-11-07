import { NextFunction, Request, Response, Router } from 'express';
import { ProductsCrud } from '../controllers/products.controller';
import { CreateProductDto, ProductSchema } from '../dto/create-product.dto';

const router: Router = Router();
const productCrud = new ProductsCrud();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const product: CreateProductDto = ProductSchema.parse(req.body);
		await productCrud.createProduct(product);
		res.json({ message: 'Product successfully created' });
	} catch (err) {
		next(err);
	}
});

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
