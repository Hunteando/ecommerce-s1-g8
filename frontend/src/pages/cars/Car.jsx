import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './cars.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Footer } from '../../components/Footer/Footer';

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const eliminar = () => {
	alert('click');
};

export default function BasicTable() {
	return (
		<div>
			<Container className={style.car}>
				<h1>MI CARRITO DE COMPRAS</h1>
				<Grid container>
					<Grid item xs={7}>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 360 }} aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>PRODUCTO</TableCell>
										<TableCell align='right'>CANTIDAD</TableCell>
										<TableCell align='right'>VALOR($)</TableCell>
										<TableCell align='right'>TOTAL</TableCell>
										<TableCell align='right'></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map(row => (
										<TableRow
											key={row.name}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{row.name}
											</TableCell>
											<TableCell align='right'>
												<span className={style.cantidad}>
													<AddIcon className={style.add} />
													<span>1</span>
													<RemoveIcon className={style.add} />
												</span>
											</TableCell>
											<TableCell align='right'>{row.fat}</TableCell>
											<TableCell align='right'>{row.carbs}</TableCell>
											<TableCell align='right' onClick={eliminar}>
												<DeleteForeverIcon />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
					<Grid item xs={5}>
						<Container>
							<Box className={style.table}>
								<Table>
									<TableBody>
										<TableRow>
											<TableCell className={style.row}>
												VALOR DE LA COMPRA
											</TableCell>
											<TableCell className={style.row} align='right'>
												3200
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className={style.row}>DESCUENTO</TableCell>
											<TableCell className={style.row} align='right'>
												3200
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className={style.row}>SUB TOTAL</TableCell>
											<TableCell className={style.row} align='right'>
												3200
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<span className={style.total}>TOTAL</span>
											</TableCell>
											<TableCell align='right'>
												<span className={style.total}>3200</span>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align='left'>
												<div className={style.cupon}>
													<ConfirmationNumberOutlinedIcon />
													<span>TENGO UN CUPÓN DE DESCUENTO</span>
												</div>
											</TableCell>
											<TableCell align='right'>
												<KeyboardArrowDownOutlinedIcon />
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>

								<button className={style.btn}>FINALIZAR COMPRA</button>
								<Link to={'/'}>
									<span className={style.compra}>Seguir comprando</span>
								</Link>
							</Box>
						</Container>
					</Grid>
				</Grid>
			</Container>
			<Footer/>
		</div>
	);
}
