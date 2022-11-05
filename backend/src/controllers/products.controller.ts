import { Products } from '../models/Products.model';

export class ProductsCrud {
	async getAllProducts() {
		const products = await Products.findAll();
		if (!Object.entries(products).length)
			throw new Error('Products are not avalible');
		return products;
	}

	async getProduct(id: number) {
		const product = await Products.findByPk(id);
		if (!product) throw new Error('Products not found');
		return product;
	}
}
