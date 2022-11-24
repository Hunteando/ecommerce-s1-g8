export const createProductAdapter = product => {
	const priceFormatter = price => {
		if (price === '0.0') {
			price = '35.00';
		}
		if (!price) {
			price = '35.00';
		}
		price = price.split('.');

		if (price[1].length === 1) {
			price[1] = price[1] + '0';
		}
		price = price.join('.');
		return price;
	};

	const formateColor = color => {
		const colors = color.map(e => e.hex_value);
		return colors;
	};
	const formattedProduct = {
		id: product.id,
		name: product.name,
		image: product.api_featured_image,
		price: priceFormatter(product.price),
		description: product.description,
		colors: formateColor(product.product_colors),
		brand:product.brand
	};
	return formattedProduct;
};
