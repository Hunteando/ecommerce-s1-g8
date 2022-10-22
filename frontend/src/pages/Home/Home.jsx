import { Carrusel } from './components/Carrusel/Carrusel';
import { Header } from '@/components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';

export function Home() {
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
