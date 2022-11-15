import axios from 'axios';

// const URL = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

export async function getByTypeProducts(product = 'foundation', signal) {
	// TODO: Preguntar a edwin como pasar signal por aca
	// const options = {
	// 	method: 'GET',
	// 	url: 'https://makeup.p.rapidapi.com/products.json',
	// 	params: { product_type: `${product}` },
	// 	headers: {
	// 		'X-RapidAPI-Key': '1dfb82d53emshf412d934c3fc7d4p178bf6jsnc307783b8b01',
	// 		'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
	// 	},
	// };

	try {
		let { data } = await axios(
			`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`,
			{ signal }
		);
		data = data.slice(0, 9);
		return data;
	} catch (error) {
		console.log(error.message);
	}
}
