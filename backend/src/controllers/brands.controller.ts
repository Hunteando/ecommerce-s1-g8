import { HTTP_CODE } from '../codes';
import { Brands } from '../models/Brands.model';
import { Products } from '../models/Products.model';

export class BrandsCrud {
	async getBrands() {
		const brands = await Brands.findAll({
			include: {
				model: Products,
			},
		});
		if (!Object.entries(brands).length)
			throw new Error(`Brands are not avalible | code: ${HTTP_CODE.NOT_FOUND}`);
		return brands;
	}
}
