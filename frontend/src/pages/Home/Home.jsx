import { Carrusel } from './components/Carrusel/Carrusel';
import { Header } from '@/components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';
import { Search } from '../../components/search/Search';
import { useState } from 'react';
// import { getProducts } from '../../Services/getProductos';
// import { useEffect, useState } from 'react';

export function Home() {
	// const [product, setProducts] = useState([]);

	// useEffect(() => {
	// 	async function pepe() {
	// 		const data = await getProducts('Blush');
	// 		setProducts(data);
	// 	}
	// 	pepe();
	// }, []);
	// console.log('aca', product);

	const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
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
					<Filter />
					<Organize />
					<Footer />
				</>
			)}
		</div>
	);
}
