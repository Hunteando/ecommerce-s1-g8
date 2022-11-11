import { Footer } from '../../components/Footer/Footer';

import style from './cars.module.css';

const Car = () => {
	return (
		<>
			<div className={style.car}>
				<h1>CARRITO VACIO</h1>
			</div>
			<Footer />
		</>
	);
};

export default Car;
