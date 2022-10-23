import axios from 'axios';
const URL = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

export async function getProducts(products) {
	const { data } = await axios(`${URL}product_type=${products}`);

	return data;
}
