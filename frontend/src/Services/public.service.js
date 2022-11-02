import { loadAbort } from '../Utilities';
import axios from 'axios';
const URL = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

export async function getByTypeProducts(products) {
	let { data } = await axios(`${URL}product_type=${products}`);
	data = data.slice(0, 5);
	return data;
}

export const getCoolTypeProducts = product => {
	const controller = loadAbort();
	return {
		call: axios.get(`${URL}product_type=${product}`, {
			signal: controller.signal,
		}),
		controller,
	};
};
