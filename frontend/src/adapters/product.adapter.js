export const createProductAdapter = product => {
	const formattedProduct = product.map(e => ({
		id: e.id,
		name: e.name,
		image: e.api_featured_image,
		price: e.price,
		brand: e.brand,
		rating: e.rating,
		productType: e.productType,
		tagList: e.tag_list,
	}));
	return formattedProduct;
};
