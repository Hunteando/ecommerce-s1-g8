import { useState, useEffect } from 'react';
import { getByTypeProducts } from '../../../../Services/getByTypeProductos';
import { CardMakeup } from '../Card/CardMakeup';
import style from './Cards.module.css';

export function Cards() {
	const [product, setProducts] = useState([]);
	useEffect(() => {
		async function pepe() {
			const data = await getByTypeProducts('Blush');
			setProducts(data);
		}
		pepe();
	}, []);
	console.log(product);
	return (
		<section className={style.container_cards}>
			{product &&
				product.map(e => (
					<div key={e.id} className={style.item_card}>
						<CardMakeup
							name={e.name}
							image={e.api_featured_image}
							price={e.price}
							brand={e.brand}
						/>
					</div>
				))}
		</section>
	);
}
