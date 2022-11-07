import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import style from './cars.module.css';

const Car = () => {
	return (
		<>
			<Header />
			<div className={style.car}>
				<h1>CARRITO VACIO</h1>
			</div>
			<Footer />
		</>
	);
};

export default Car;
