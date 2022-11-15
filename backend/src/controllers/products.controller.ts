import { HTTP_CODE } from '../codes';
import { CreateProductDto } from '../dto/product/create-product.dto';
import { UpdateProductDto } from '../dto/product/update-product.dto';
import { Product } from '../entities/product.entity';

export class ProductsCrud {
	async getProducts(): Promise<UpdateProductDto[]> {
		const products = await Product.find();
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
