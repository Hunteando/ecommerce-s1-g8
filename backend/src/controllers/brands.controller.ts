import { HTTP_CODE } from '../codes';
import { Brand } from '../entities/brand.entity';

export class BrandsCrud {
	async getBrands() {
		const brands = await Brand.find();
		if (!Object.entries(brands).length)
			throw new Error(`Brands are not avalible | code: ${HTTP_CODE.NOT_FOUND}`);
		return brands;
	}
}
