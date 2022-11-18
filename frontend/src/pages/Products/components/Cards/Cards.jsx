import { CardMakeup } from '../CardMakeup/CardMakeup';
import { LoadingCard } from '@/components/LoadingCard/LoadingCard';
import style from './Cards.module.css';
import { useContext, useEffect } from 'react';
import { DataContex } from '../../Context/ProductsProvider';

export function Cards() {
	const { products, loading, order } = useContext(DataContex);
	const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	useEffect(() => {
		console.log('se ordeno');
	}, [order]);

	if (loading)
		return (
			<section className={style.container_cards_loading}>
				{cardsLoading.map(e => (
					<div className={style.item_card_loading} key={e}>
						<LoadingCard />
					</div>
				))}
			</section>
		);

	return (
		<section className={style.container_cards}>
			{products.map(e => (
				<div key={e.id}>
					<CardMakeup
						id={e.id}
						name={e.name}
						image={e.image}
						price={e.price}
						brand={e.brand}
						productType={e.productType}
					/>
				</div>
			))}
		</section>
	);
}
