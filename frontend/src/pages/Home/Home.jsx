import { Carrusel } from './components/Carrusel/Carrusel';
import Header from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filtros } from './components/Filter/Filter';
import { Organize } from './components/Organize/Organize';
export function Home() {
	return (
		<>
			<Header />
			<Carrusel />
			<SideBar />
			<Filtros />
			<Organize />
		</>
	);
}
