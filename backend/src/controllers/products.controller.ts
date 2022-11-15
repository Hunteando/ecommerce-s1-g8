import { HTTP_CODE } from '../codes';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { UpdateProductDto } from '../dto/product/update-product.dto';
import { Product } from '../entities/product.entity';

export class ProductsCrud {
	async getProducts(
		page_size: number,
		page: number
	): Promise<UpdateProductDto[]> {
		if (isNaN(page_size) || isNaN(page))
			throw new Error('Paging queries must be numeric');
		const skip = page * page_size;
		const products = await Product.find({
			take: page_size,
			order: {
				created_at: 'DESC',
			},
			skip,
		});
		if (!Object.entries(products).length)
			throw new Error(
				`Products are not avalible | code: ${HTTP_CODE.NOT_FOUND}`
			);
		return products;
	}

	async getProduct(id: number): Promise<UpdateProductDto> {
		const product = await Product.findOneBy({ id });
		if (!product)
			throw new Error(`Product not found | code: ${HTTP_CODE.NOT_FOUND}`);
		return product;
	}

	async createProduct(product: CreateProductDto) {
		const newProduct = Product.create({ ...product });
		return await Product.save(newProduct);
	}

	// async updateProduct(id: number, product: any) {

	// }
}
