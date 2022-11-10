import { Carrusel } from '@/components/Carrusel/Carrusel';
import { Header } from '@/components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';
import { useState } from 'react';
import { Cards } from './components/Cards/Cards';
import { Menu } from '@/components/Menu/Menu';
import { Search } from '@/components/search/Search';
import style from './Products.module.css';
import SelectOrganize from './components/SelectOrganize/SelectOrganize';
import { useParams } from 'react-router-dom';

export function Products() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];

	const [search, setSearch] = useState();
	const showSearch = () => {
		setSearch(true);
	};
	const { product } = useParams();

	return (
		<section>
			{search ? (
				<Search setSearch={setSearch} />
			) : (
				<>
					<article className={style.header_desk}>
						<Header showSearch={showSearch} search={search} />
						<Menu />
					</article>
					<Carrusel images={images} autoplay={false} showbuttons={false} />
					<SideBar />
					<article className={style.container_organize}>
						<Organize />
						<div className={style.menuSelect}>
							<SelectOrganize />
						</div>
						<section className={style.container_filter_and_card}>
							<article>
								<Filter />
							</article>
							<article>
								<Cards product={product} />
							</article>
						</section>
					</article>
					<Footer />
				</>
			)}
		</section>
	);
}

// import { Carrusel } from './components/Carrusel/Carrusel';
// import { Header } from '@/components/Header/Header';
// import { SideBar } from './components/SideBar/SideBar';
// import { Filter } from './components/Filter/Filter';
// import { Organize } from './components/Organize/Organize';
// import { Footer } from '@/components/Footer/Footer';
// import { Search } from '../../components/search/Search';
// import { useState } from 'react';

// export function Home() {
// 	const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
// 	const [search, setSearch] = useState(false);
// 	const showSearch = () => {
// 		setSearch(true);
// 	};

// 	return (
// 		<div>
// 			{search ? (
// 				<Search setSearch={setSearch} />
// 			) : (
// 				<>
// 					<Header showSearch={showSearch} search={search} />
// 					<Carrusel images={images} autoplay={false} showbuttons={false} />
// 					<SideBar />
// 					<Filter />
// 					<Organize />
// 					<Footer />
// 				</>
// 			)}
// 		</div>
// 	);
// }
