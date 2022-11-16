import { Carrusel } from '@/components/Carrusel/Carrusel';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';
import { Cards } from './components/Cards/Cards';
import style from './Products.module.css';
import SelectOrganize from './components/SelectOrganize/SelectOrganize';
import { useParams } from 'react-router-dom';

export function Products() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];

	const { product } = useParams();

	return (
		<section>
			<Carrusel images={images} autoplay={false} showbuttons={false} />
			<SideBar />
			<article className={style.container_organize}>
				<Organize />
				<div className={style.menuSelect}>
					<SelectOrganize />
				</div>
				<section className={style.container_filter_and_card}>
					<article>
						<Filter product={product} />
					</article>
					<article>
						<Cards product={product} />
					</article>
				</section>
			</article>
			<Footer />
		</section>
	);
}
