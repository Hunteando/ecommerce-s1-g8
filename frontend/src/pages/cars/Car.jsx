import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './cars.module.css';
import { Footer } from '../../components/Footer/Footer';

// redux (Isra)
import { useSelector } from 'react-redux';

// import de componentes hijos
import ItemDetail from './components/ItemDetail';
import Ticket from './components/Ticket';

export default function BasicTable() {
	// uso del estado redux
	const { carrito } = useSelector(state => state.car);

	return (
		<div>
			<Container className={style.car}>
				{carrito.length > 0 ? (
					<>
						<h1>MI CARRITO DE COMPRAS</h1>
						<Grid container>
							<Grid item xs={12} md={7}>
								<ItemDetail />
							</Grid>
							<Grid item xs={12} md={5}>
								<Container>
									<Box className={style.table}>
										<Ticket />
										<button className={style.btn}>FINALIZAR COMPRA</button>
										<Link to={'/'}>
											<span className={style.compra}>Seguir comprando</span>
										</Link>
									</Box>
								</Container>
							</Grid>
						</Grid>
					</>
				) : (
					<div className={style.carVacio}>
						<h1>carrito vacio</h1>
						<img
							src='https://adela1900.com/images/placeholders/empty-cart.png'
							alt='carritoVacio'
						/>
						<Link to={'/'}> Ir a Comprar</Link>
					</div>
				)}
			</Container>
			<Footer />
		</div>
	);
}
