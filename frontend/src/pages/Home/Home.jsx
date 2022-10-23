import { Carrusel } from './components/Carrusel/Carrusel';
import { Header } from '@/components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filter } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
import { Footer } from '@/components/Footer/Footer';
import { CardMakeup } from '../../components/Card/Card';

export function Home() {
	return (
		<div>
			<Header />
			<Carrusel />
			<SideBar />
			<Filter />
			<Organize />
			<CardMakeup />
			<Footer />
		</div>
	);
}
