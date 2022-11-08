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
	color_name: string;
};

const uniqueArray = (arr: ResObj[]) =>
	[...new Set(arr.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));

async function loadTablesAPI(table: string): Promise<ResObj[] | undefined> {
	let products: ApiI[] = [];
	try {
		const { data } = await axios.get(
			`http://makeup-api.herokuapp.com/api/v1/products.json`
		);
		products = data;
		const arr: ResObj[] = [];
		const arrColor: ColorObj[] = [];
		products.forEach((product, i) => {
			// if (i < 50)
			if (table === 'brand') {
				arr.push({
					name: product.brand || table + ' New',
				});
			} else if (table === 'category') {
				arr.push({
					name: product.category || table + ' New',
				});
			} else if (table === 'color') {
				// FIXME:No carga los colores en la base de datos
				const obj = {
					hex_value: product?.product_colors[i]?.hex_value || '#FB8684',
					color_name: product?.product_colors[i]?.color_name || 'Deep Coral',
				};
				arrColor.push(obj);
			}

			// else return;
		});
		const unique: ResObj[] = uniqueArray(arr);
		return unique;
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
