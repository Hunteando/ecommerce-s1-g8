import { Carrusel } from '@/components/Carrusel/Carrusel';
import { Menu } from '@/components/Menu/Menu';
import style from './Home.module.css';

export function Home() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];

	return (
		<div className={style.conateiner_home}>
			<Menu />
			<Carrusel images={images} autoplay={false} showbuttons={false} />
		</div>
	);
}
