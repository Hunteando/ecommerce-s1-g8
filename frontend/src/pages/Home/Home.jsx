import { Carrusel } from './components/Carrusel/Carrusel';
import Header from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Filtros } from './components/Filtros/Filtros';

export function Home() {
	return (
		<>
			<Header />
			<Carrusel />
			<SideBar />
			<Filtros />
		</>
	);
}
