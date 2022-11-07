import { useState, useEffect } from 'react';
import { CardMakeup } from '../Card/CardMakeup';
import style from './Cards.module.css';
import { createProductAdapter } from '@/adapters';
import { getByTypeProducts } from '@/Services/public.service';

export function Cards() {
	// Primera opcion
	const [product, setProducts] = useState([]);
	const getApiproduct = async () => {
		try {
			const result = await getByTypeProducts('Blush');
			setProducts(createProductAdapter(result));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getApiproduct();
	}, []);

	return (
		<section className={style.container_cards}>
			{product &&
				product.map(e => (
					<div key={e.id} className={style.item_card}>
						<CardMakeup
							id={e.id}
							name={e.name}
							image={e.image}
							price={e.price}
							brand={e.brand}
						/>
					</div>
				))}
		</section>
	);
}
