import { Request, Response, Router } from 'express';
import { EntityTarget, Table } from 'typeorm';
import { AppDataSource } from '../db';
import { Brand } from '../entities/brand.entity';
import { Category } from '../entities/category.entity';
import { Color } from '../entities/color.entity';
import { loadTablesAPI } from '../libs/load_data';

const router: Router = Router();
type BrandObj = {
	name: string;
};

router.get('/:name', async (req: Request, res: Response) => {
	const { name } = req.params;
	let table = null;
	if (name === 'brand') table = Brand;
	else if (name === 'category') table = Category;
	else if (name === 'color') table = Color;

	const data = (await loadTablesAPI(name)) as BrandObj[];
	await AppDataSource.createQueryBuilder()
		.insert()
		.into(table as EntityTarget<Table>)
		.values(data)
		.execute();
	// console.log(data);

	res.json({ data });
});

export default router;
