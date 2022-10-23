import { Carrusel } from './components/Carrusel/Carrusel';
import { Header } from '@/components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';
import { getProducts } from '../../Services/getProductos';
import { useEffect, useState } from 'react';

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
	return (
		<div>
			<Header />
			<Carrusel />
			<SideBar />
			<Filter />
			<Organize />

			<Footer />
		</div>
	);
}
