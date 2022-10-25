export function CardMakeup({ name, image, price, rand }) {
	return (
		<>
			<img src={`${image}`} />
			<h4>{name}</h4>
			<p> {`${rand}`}</p>
			<p>${`${price === '0.0' ? '55.00' : price}`}</p>
			<button>comprar</button>
		</>
	);
}

CardMakeup.defaultProps = {
	name: 'nombre por defecto',
	image:
		'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383',
	rand: 'rejuva minerals',
	price: '$3500',
};
