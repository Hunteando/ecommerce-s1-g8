import { Carrusel } from './components/Carrusel/Carrusel';
import { Header } from '@/components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import {Organize} from "./components/Organize/Organize"
import { Footer } from '@/components/Footer/Footer';

import { useState } from 'react';
import { Cards } from './components/Cards/Cards';
import style from './Home.module.css';
import Search from './components/Organize/Search';

export function Home() {
	const images = ['1.jpg', '2.jpg', '3.jpg'];

	const [search, setSearch] = useState(false);
	const showSearch = () => {
		setSearch(true);
	};

	return (
		<div>
			{search ? (
				<Search setSearch={setSearch} />
			) : (
				<>
					<Header showSearch={showSearch} search={search} />
					<Carrusel images={images} autoplay={false} showbuttons={false} />
					<SideBar />
					<div className={style.container_desk}>
						<Organize/>
						<Search />
						<Filter />
						<Cards />
					</div>

					<Footer />
				</>
			)}
		</div>
	);
}

