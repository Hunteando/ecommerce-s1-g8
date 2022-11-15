import { Carrusel } from '@/components/Carrusel/Carrusel';
import { SliderCards } from './components/SliderCards/SliderCards';
import { Footer } from '../../components/Footer/Footer';

import style from './Home.module.css';

export function Home() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];

	return (
		<div className={style.conateiner_home}>
			<Carrusel images={images} autoplay={false} showbuttons={false} />
			<SliderCards />
			<Footer />
		</div>
	);
}
