import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableBody, TableCell, TableRow } from '@mui/material';
import style from '../cars.module.css';

// uso del estado de redux (Isra)
import { useSelector, useDispatch } from 'react-redux';
import { deleteCar } from '../../../redux/store/states/carritoSlice';

export const Detail = () => {
	// carrito tiene todos los items
	const { carrito } = useSelector(state => state.car);
	const dispatch = useDispatch()

	const eliminar = (id) => {
		alert('click');
		dispatch(deleteCar(id))
	};
	return (
		<TableBody>
			{carrito.map((item, index) => (
				<TableRow
					key={index}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
					<TableCell component='th' scope='row'>
						<div className={style.detailCel}>
							<img
								className={style.img}
								src={item.api_featured_image}
								alt={item.name}
							/>
							<span>{item.name}</span>
						</div>
					</TableCell>
					<TableCell align='right'>
						<span className={style.cantidad}>
							<AddIcon className={style.add} />
							<span>1</span>
							<RemoveIcon className={style.add} />
						</span>
					</TableCell>
					<TableCell align='right'>precio</TableCell>
					<TableCell align='right'>cantidad</TableCell>
					<TableCell align='right' onClick={() => eliminar(item.id)}>
						<DeleteForeverIcon />
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
