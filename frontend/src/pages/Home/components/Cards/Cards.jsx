import { useProducts } from '../../../../hook';
import { CardMakeup } from '../Card/CardMakeup';
import style from './Cards.module.css';

export function Cards() {

	const { products, loading } = useProducts();
	console.log(products, loading);


	if (loading) return <>Cargando Productos....</>;

	return (
		<section className={style.container_cards}>
			{products.map(e => (
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
