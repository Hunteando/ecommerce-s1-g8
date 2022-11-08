// import fetch, { Response } from 'node-fetch';
import axios from 'axios';

// async function getProducts(brand: string) {
// 	const response: Response = await fetch(
// 		`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
// 	);
// 	if (!response.ok)
// 		throw new Error(`Failed to get products: ${response.status}`);
// 	const data = await response.json();

// 	const products = JSON.stringify(data);
// 	products;
// }

// getProducts('maybelline');
interface Product {
	name: string;
}

async function getProductsAPI(brand: string) {
	let products: Product[] = [];
	try {
		const arr: Product[] = [];
		const { data } = await axios.get(
			`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
		);
		products = data;
		products.forEach((product, i) => {
			if (i < 2) arr.push(product);
			else return;
		});
		return arr;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log(error);
			error;
		} else {
			console.log(error);
		}
	}
}

export default getProductsAPI;
