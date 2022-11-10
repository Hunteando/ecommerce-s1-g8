import axios from 'axios';
const URL = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

export async function getByTypeProducts(products) {
	let { data } = await axios(`${URL}product_type=${products}`);
	data = data.slice(0, 9);
	return data;
}
