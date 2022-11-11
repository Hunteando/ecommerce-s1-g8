import axios from 'axios';
interface ApiI {
	name: string;
	price: number;
	image_link: string;
	description: string;
	brand: number | string;
	category: number | string;
	product_colors: ColorObj[];
	product_type: number | string;
	tag_list: string[];
}

interface ProductSave {
	name: string;
	price: number;
	image_link: string;
	description: string;
	brand: number;
	category: number;
	typepro: number;
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

const getDataApi = async (): Promise<ApiI[] | undefined> => {
	try {
		const { data } = await axios.get(
			`http://makeup-api.herokuapp.com/api/v1/products.json`
		);
		return data;
	} catch (err) {
		if (axios.isAxiosError(err)) {
			console.log('Error axios ->', err);
		} else {
			console.log('Error axios ->', err);
		}
	}
};

function getRandomInt(min: number, max: number): number {
	return Math.trunc(Math.random() * (max - min) + min);
}

// const queryProperties = async (table: string, name: string) => {
// 	try {
// 		let res: ResObj | null = null;
// 		if (table === 'brand') {
// 			res = await Brand.findOneBy({ name: name });
// 			if (!res) return 1;
// 		} else if (table === 'category') {
// 			res = await Category.findOneBy({ name: name });
// 			if (!res) return 1;
// 		} else if (table === 'typepro') {
// 			res = await Typepro.findOneBy({ name: name });
// 			if (!res) return 1;
// 		}

// 		return res?.id;
// 	} catch (err) {
// 		console.log('Error queryProperties ->', err);
// 	}
// };

async function loadTablesAPI(table: string): Promise<ResObj[] | undefined> {
	let products: ApiI[] = [];
	let unique: ResObj[] | ColorObj[] | ProductSave[] = [];
	try {
		products = (await getDataApi()) as ApiI[];
		const arr: ResObj[] = [];
		const arrColor: ColorObj[] = [];
		const arrProduct: ProductSave[] = [];
		products.forEach(async (product, i) => {
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
			} else if (table === 'color') {
				product.product_colors.forEach(color =>
					arrColor.push({
						hex_value: color.hex_value || '#A15638',
						colour_name: color.colour_name || 'Nude',
					})
				);
				unique = uniqueArray(arrColor);
			} else if (table === 'typepro') {
				arr.push({
					name: (product.product_type as string) || table + ' New',
				});
				unique = uniqueArray(arr);
			} else if (table === 'upload-products') {
				if (i < 10) {
					let arrTag: ResObj[] = [];
					// const arrColor: ColorObj[] = [];

					// const b = await queryProperties('brand', product.brand as string);

					// const c = await queryProperties('category', product.category as string);
					// const p = await queryProperties('typepro', product.product_type as string);

					arrTag = product.tag_list.map(tag => ({ name: tag }));

					const productoObj: ProductSave = {
						name: product.name,
						price: product.price || 50.0,
						image_link: product.image_link,
						description: product.description,
						tags: arrTag,
						brand: getRandomInt(1, 58),
						category: getRandomInt(1, 15),
						typepro: getRandomInt(1, 10),
						colors: product.product_colors,
					};
					arrProduct.push(productoObj);
				}
				unique = arrProduct;
			}

			// else return;
		});

		return (unique as ResObj[]) || arrProduct;
	} catch (error) {
		console.log('Error loading data ->', error);
	}
}

export { loadTablesAPI };
