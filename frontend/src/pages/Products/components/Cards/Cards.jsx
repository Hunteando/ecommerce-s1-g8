import { CardMakeup } from '../CardMakeup/CardMakeup';
import { LoadingCard } from '@/components/LoadingCard/LoadingCard';
import style from './Cards.module.css';
import PropTypes from 'prop-types';
import { useProducts } from '@/hook/useProducts';

export function Cards({ product }) {
	const cardsLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const { products, loading } = useProducts(product);

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
Cards.propTypes = {
	product: PropTypes.string,
};
