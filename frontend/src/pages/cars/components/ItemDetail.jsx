// Materia UI
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Table, TableCell, TableRow } from '@mui/material';
import style from '../cars.module.css';

// import de componente Detail
import { Item } from './Item';

const ItemDetail = () => {
	return (
		<TableContainer component={Paper}>
		<h2>MI CARRITO DE COMPRAS</h2>
			<Table sx={{ minWidth: 360 }} aria-label='simple table'>
				<TableHead>
					<TableRow className={style.desktop}>
						<TableCell>PRODUCTO</TableCell>
						<TableCell align='right'>CANTIDAD</TableCell>
						<TableCell align='right'>VALOR($)</TableCell>
						<TableCell align='right'>TOTAL</TableCell>
						<TableCell align='right'></TableCell>
					</TableRow>
				</TableHead>
				<Item />
			</Table>
		</TableContainer>
	);
};

export default ItemDetail;
