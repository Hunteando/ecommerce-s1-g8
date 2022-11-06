import { HTTP_CODE } from '../codes';
import { Brands } from '../models/Brands.model';
import { Products } from '../models/Products.model';

export class ProductsCrud {
	async getProducts() {
		const products = await Products.findAll({
			include: {
				model: Brands,
				attributes: ['name'],
			},
			attributes: {
				exclude: ['createdAt', 'updatedAt', 'brandId'],
			},
		});
		if (!Object.entries(products).length)
			throw new Error(
				`Products are not avalible | code: ${HTTP_CODE.NOT_FOUND}`
			);
		return products;
	}

	async getProduct(id: number) {
		const product = await Products.findByPk(id);
		if (!product)
			throw new Error(`Product not found | code: ${HTTP_CODE.NOT_FOUND}`);
		return product;
	}

	// async updateProduct(id: number, product: any) {

	// }
}
