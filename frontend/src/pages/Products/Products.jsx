import { Carrusel } from '@/components/Carrusel/Carrusel';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';
import { Cards } from './components/Cards/Cards';
import style from './Products.module.css';
import SelectOrganize from './components/SelectOrganize/SelectOrganize';
import { ProductsProvider } from './Context/ProductsProvider';

export function Products() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];

	return (
		<ProductsProvider>
			<section>
				<Carrusel images={images} autoplay={false} showbuttons={false} />
				<SideBar />
				<article className={style.container_organize}>
					<Organize />
					<div className={style.menuSelect}>
						<SelectOrganize />
					</div>
					<div className={style.container_filter_and_card}>
						<Filter />
						<Cards />
					</div>
				</article>
				<Footer />
			</section>
		</ProductsProvider>
	);
}
