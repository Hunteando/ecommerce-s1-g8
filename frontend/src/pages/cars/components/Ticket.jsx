import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import style from '../cars.module.css';

const Ticket = () => {
	return (
		<Table className={style.ticket}>
			<TableBody>
				<TableRow>
					<TableCell className={style.row}>VALOR DE LA COMPRA</TableCell>
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
					<TableCell align='right' className={style.iconoArrow}>
						<KeyboardArrowDownOutlinedIcon />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default Ticket;
