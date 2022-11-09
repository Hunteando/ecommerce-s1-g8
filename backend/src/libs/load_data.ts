import axios from 'axios';
interface ApiI {
	brand: string;
	category: string;
	product_colors: ColorObj[];
}

type ResObj = {
	name: string;
};

type ColorObj = {
	hex_value: string;
	colour_name: string;
};

const uniqueArray = (arr: ResObj[] | ColorObj[]) =>
	[...new Set(arr.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));

async function loadTablesAPI(table: string): Promise<ResObj[] | undefined> {
	let products: ApiI[] = [];
	let unique: ResObj[] | ColorObj[] = [];
	try {
		const { data } = await axios.get(
			`http://makeup-api.herokuapp.com/api/v1/products.json`
		);
		products = data;
		const arr: ResObj[] = [];
		const arrColor: ColorObj[] = [];
		products.forEach(product => {
			// if (i < 50)
			if (table === 'brand') {
				arr.push({
					name: product.brand || table + ' New',
				});
				unique = uniqueArray(arr);
			} else if (table === 'category') {
				arr.push({
					name: product.category || table + ' New',
				});
				unique = uniqueArray(arr);
			} else if (table === 'color') {
				// FIXME:No carga los colores en la base de datos
				product.product_colors.forEach(color =>
					arrColor.push({
						hex_value: color.hex_value || '#A15638',
						colour_name: color.colour_name || 'Nude',
					})
				);
				unique = uniqueArray(arrColor);
			}

			// else return;
		});

		return unique as ResObj[];
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log(error);
			error;
		} else {
			console.log(error);
		}
	}
}

export { loadTablesAPI };
