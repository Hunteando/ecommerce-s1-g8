import axios from 'axios';

// const URL = `https://makeup-api.herokuapp.com/api/v1/products.json?`;

export async function getByTypeProducts(products = 'foundation') {
	console.log(products);
	const options = {
		method: 'GET',
		url: 'https://makeup.p.rapidapi.com/products.json',
		params: { product_type: `${products}` },
		headers: {
			'X-RapidAPI-Key': '1dfb82d53emshf412d934c3fc7d4p178bf6jsnc307783b8b01',
			'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
		},
	};
	let { data } = await axios(options);
	data = data.slice(0, 9);
	console.log(data);
	return data;
}
