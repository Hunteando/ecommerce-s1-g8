import { NextFunction, Request, Response, Router } from 'express';
import { ProductsCrud } from '../controllers/products.controller';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { schemaValidation } from '../middlewares/schemaValidation.middleware';
import { ProductQueryParams, ProductSchema } from '../schemas/product.schema';

const router: Router = Router();
const productCrud = new ProductsCrud();

/**
 * @openapi
 * /products:
 *   post:
 *     tags:
 *       - products
 *     summary: Create Product
 *     description: Agrega productos a la base de datos.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/product"
 *     responses:
 *       '200':
 *         description: (ok) Retorna el producto ingresado
 */
// TODO: crear dto's para las propiedades faltantes de product
router.post(
	'/',
	schemaValidation(ProductSchema),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product: CreateProductDto = req.body;
			await productCrud.createProduct(product);
			res.json({ message: 'Product successfully created' });
		} catch (err) {
			next(err);
		}
	}
);

/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - products
 *     summary: Listar productos
 *     description: Obtiene todos los productos con un paginado de 9 productos por sección y puede ser utilizado con los filtros.
 *     responses:
 *       '200':
 *         description: Retorna la lista de productos
 *       '500':
 *         description: Posiblemente no haya registros en la base de datos
 */
router.get(
	'/',
	schemaValidation(ProductQueryParams),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { page_size, page, product_type } = req.query;

			const products = await productCrud.getProducts(
				Number(page_size || 9),
				Number(page || 0),
				String(product_type)
			);
			res.json({ data: products });
		} catch (err) {
			next(err);
		}
	}
);

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
