import axios from 'axios';
import 'dotenv/config';
import { EntityTarget, Table } from 'typeorm';
import { AppDataSource } from '../db';
import { Brand } from '../entities/brand.entity';
import { Category } from '../entities/category.entity';
import { Color } from '../entities/color.entity';
import { Product } from '../entities/product.entity';
import { Typepro } from '../entities/Typepro.entity';
const { QUANTITY } = process.env;
interface ApiI {
	name: string;
	price: number;
	image_link: string;
	description: string;
	brand: string;
	category: string;
	product_colors: ColorObj[];
	product_type: string;
	tag_list: string[];
}

interface ProductSave {
	name: string;
	price: number;
	image_link: string;
	description: string;
	brand: number | null;
	category: number | null;
	typepro: number | null;
	tags: ResObj[];
	colors: ColorObj[];
}

type ResObj = {
	id?: number;
	name: string;
};

type ColorObj = {
	hex_value: string;
	colour_name: string;
};

const uniqueArray = (arr: ResObj[] | ColorObj[]) =>
	[...new Set(arr.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));

const getDataApi = async (pType?: string): Promise<ApiI[] | undefined> => {
	try {
		const url = !pType
			? 'http://makeup-api.herokuapp.com/api/v1/products.json'
			: `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${pType}`;
		const { data } = await axios.get(url);
		return data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			console.log('Error axios ->', err);
		} else {
			console.log('Error axios ->', err);
		}
	}
};

// function getRandomInt(min: number, max: number): number {
// 	return Math.trunc(Math.random() * (max - min) + min);
// }

async function downloadComplementsProducts(
	table: string
): Promise<ResObj[] | undefined> {
	let products: ApiI[] = [];
	let unique: ResObj[] | ColorObj[] | ProductSave[] = [];
	try {
		products = (await getDataApi()) as ApiI[];
		const arr: ResObj[] = [];
		products.forEach(async product => {
			// if (i < 50)
			if (table === 'brand') {
				arr.push({
					name: (product.brand as string) || table + ' New',
				});
				unique = uniqueArray(arr);
			} else if (table === 'category') {
				arr.push({
					name: (product.category as string) || table + ' New',
				});
				unique = uniqueArray(arr);
			} else if (table === 'typepro') {
				arr.push({
					name: (product.product_type as string) || table + ' New',
				});
				unique = uniqueArray(arr);
			}
			// else return;
		});

		return unique as ResObj[];
	} catch (error) {
		console.log('Error loading data ->', error);
	}
}

async function getComplementsProducts(
	entity: string,
	name: string
): Promise<number | null> {
	let id = null;
	if (entity === 'brand') {
		const complements = await Brand.findOne({
			where: { name },
			select: { id: true },
		});
		if (!complements) return null;
		id = complements.id;
	} else if (entity === 'category') {
		const complements = await Category.findOne({
			where: { name },
			select: { id: true },
		});
		if (!complements) return null;
		id = complements.id;
	} else if (entity === 'typepro') {
		const complements = await Typepro.findOne({
			where: { name },
			select: { id: true },
		});
		if (!complements) return null;
		id = complements.id;
	}

	return id;
}

async function productConstructor(complement: string) {
	const products = (await getDataApi(complement)) as ApiI[];
	const arrProduct: ProductSave[] = [];
	const quantity = QUANTITY || 10;
	for (let i = 0; i < products.length; i++) {
		if (i <= +quantity - 1) {
			const productoObj: ProductSave = {
				name: products[i].name,
				price: products[i].price > 0 ? products[i].price : 8.5,
				image_link: products[i].image_link,
				description:
					products[i].description.length > 0
						? products[i].description
						: 'This is a description',
				tags: products[i].tag_list.map(tag => ({ name: tag })),
				brand: await getComplementsProducts('brand', products[i].brand),
				category: await getComplementsProducts(
					'category',
					products[i].category
				),
				typepro: await getComplementsProducts(
					'typepro',
					products[i].product_type
				),
				colors: products[i].product_colors,
			};
			arrProduct.push(productoObj);
		} else break;
	}

	return arrProduct;
}

async function uploadDataToTable(name: string, data: ProductSave[] | ResObj[]) {
	let table = null;
	if (name === 'brand') table = Brand;
	else if (name === 'category') table = Category;
	else if (name === 'color') table = Color;
	else if (name === 'typepro') table = Typepro;
	else if (name === 'products') table = Product;

	return await AppDataSource.createQueryBuilder()
		.insert()
		.into(table as EntityTarget<Table>)
		.values(data)
		.execute();
}

async function joindProductsByProductType() {
	const products = [];
	const complements = [
		'lip_liner',
		'lipstick',
		'foundation',
		'eyeliner',
		'eyeshadow',
		'blush',
		'bronzer',
		'mascara',
		'eyebrow',
		'nail_polish',
	];

	for (const complement of complements) {
		products.push(...(await productConstructor(complement)));
	}
	await uploadDataToTable('products', products);
	return products;
}

async function uploadDataToTableAndGetProduct() {
	// Descomentar todo cuando la base de datos esté vacía

	const brand = await downloadComplementsProducts('brand');
	await uploadDataToTable('brand', brand as ResObj[]);
	const category = await downloadComplementsProducts('category');
	await uploadDataToTable('category', category as ResObj[]);
	const typepro = await downloadComplementsProducts('typepro');
	await uploadDataToTable('typepro', typepro as ResObj[]);

	// Esta función solo se debe utilizar siempre y cuando estén
	// cargados en la base de datos los complementos como: brand, category, typepro

	const res = await joindProductsByProductType();
	return res;
}

export { uploadDataToTableAndGetProduct };
