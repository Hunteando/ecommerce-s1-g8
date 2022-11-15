import style from './SliderCards.module.css';
import { useProducts } from '@/hook/useProducts';
import { CardMakeup } from '../../../Products/components/CardMakeup/CardMakeup';
import { useEffect } from 'react';

export function SliderCards() {
	const { products } = useProducts();

	useEffect(() => {
		const $carrusel = document.getElementById('slider');
		const start = () => {
			setInterval(() => {
				if ($carrusel.scrollLeft === 1200) $carrusel.scrollLeft = 0;
				$carrusel.scrollLeft += 400;
			}, 10000);
		};
		start();
	}, []);

	return (
		<section className={style.container}>
			<h3>Offers</h3>
			<article className={style.container_slider} id={'slider'}>
				{products.map(e => (
					<div key={e.id} className={style.container_cards}>
						<CardMakeup
							id={e.id}
							name={e.name}
							image={e.image}
							price={e.price}
							brand={e.brand}
						/>
					</div>
				))}
			</article>
		</section>
	);
}
