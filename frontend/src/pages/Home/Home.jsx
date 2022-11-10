import { Header } from '@/components/Header/Header';
import { Carrusel } from '@/components/Carrusel/Carrusel';
import { Menu } from '@/components/Menu/Menu';

export function Home() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];
	return (
		<div>
			<Header />
			<Menu />
			<Carrusel images={images} autoplay={false} showbuttons={false} />
		</div>
	);
}
