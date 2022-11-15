import 'dotenv/config';
import { Request, Response, Router } from 'express';
import { EntityTarget, Table } from 'typeorm';
import { AppDataSource } from '../db';
import { Brand } from '../entities/brand.entity';
import { Category } from '../entities/category.entity';
import { Color } from '../entities/color.entity';
import { Product } from '../entities/product.entity';
import { Typepro } from '../entities/Typepro.entity';
import { loadTablesAPI } from '../libs/load_data';

const { QUANTITY } = process.env;

const router: Router = Router();
type BrandObj = {
	name: string;
};

router.get('/:name', async (req: Request, res: Response) => {
	const { name } = req.params;
	const quantityProducts = QUANTITY || 30;
	const data = (await loadTablesAPI(
		String(name),
		+quantityProducts
	)) as BrandObj[];
	let table = null;
	if (name === 'brand') table = Brand;
	else if (name === 'category') table = Category;
	else if (name === 'color') table = Color;
	else if (name === 'typepro') table = Typepro;
	else if (name === 'upload-products') {
		for (const d of data) {
			const newRegister = Product.create({ ...d });
			await Product.save(newRegister);
		}
	}

	await AppDataSource.createQueryBuilder()
		.insert()
		.into(table as EntityTarget<Table>)
		.values(data)
		.execute();
	// console.log(data);

	res.json({ data });
});

export default router;
