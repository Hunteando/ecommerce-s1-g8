import Carousel from 'react-material-ui-carousel';
import { Item } from './Item/Item';

export function Carrusel(props) {
	const items = [
		{
			image:
				'https://centralmakeup.mx/wp-content/uploads/2020/04/maquillaje-de-noche.jpg',
			name: 'title1',
		},
		{
			image:
				'https://i.pinimg.com/550x/81/b5/0c/81b50c23e88a41449ed8acc6153caf02.jpg',
			name: 'title2',
		},
	];
	return (
		<Carousel height={150}>
			{items.map((e, i) => (
				<Item key={i} image={e.image} />
			))}
		</Carousel>
	);
}
