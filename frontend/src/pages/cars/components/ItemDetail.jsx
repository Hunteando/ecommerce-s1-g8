// Materia UI
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Table, TableCell, TableRow } from '@mui/material';

// import de componente Detail
import { Detail } from './Detail';

const ItemDetail = () => {
	return (
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
                <Detail/>
			</Table>
		</TableContainer>
	);
};

export default ItemDetail;
