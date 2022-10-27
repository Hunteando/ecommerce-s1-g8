import { useState, useEffect } from 'react';
import { CardMakeup } from '../Card/CardMakeup';
import style from './Cards.module.css';
import { createProductAdapter } from '@/adapters';
import { usefetchAndLoad, useAsyn } from '@/hook';
import {
	getCoolTypeProducts,
	getByTypeProducts,
} from '@/Services/public.service';

// import Skeleton from '@mui/material/Skeleton';
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
	console.log(product);

	/* segunda opcion */

	// const { loading, callEndpoint } = usefetchAndLoad();
	// const [product, setProducts] = useState([]);
	// const getApiData = async () =>
	// 	await callEndpoint(getCoolTypeProducts('Blush'));
	// const adaptersproduct = data => {
	// 	setProducts(createProductAdapter(data.slice(0, 8)));
	// };
	// useAsyn(getApiData, adaptersproduct, () => {}, []);

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
