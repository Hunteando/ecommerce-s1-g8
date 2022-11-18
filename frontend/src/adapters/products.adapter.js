export const createProductsAdapter = product => {
	const priceFormatter = price => {
		if (price === '0.0') {
			price = '35.00';
		}
		if (!price) {
			price = '35.00';
		}
		price = price.split('.');
		if (price[0].length === 1) {
			price[0] = '0' + price[0];
		}

		if (price[1].length === 1) {
			price[1] = price[1] + '0';
		}
		price = price.join('.');

		return price;
	};
	const formattedProduct = product.map(e => ({
		id: e.id,
		name: e.name,
		image: e.api_featured_image,
		price: priceFormatter(e.price),
		brand: e.brand,
		rating: e.rating,
		productType: e.productType,
		tagList: e.tag_list,
	}));
	return formattedProduct;
};
// let nro = '22.0';

// const nuevo = nro.split('.');
// nuevo(2)[('22', '0')];
