import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableBody, TableCell, TableRow } from '@mui/material';
import style from '../cars.module.css';

// alert de material ui(modo prueba)
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// uso del estado de redux (Isra)
import { useSelector, useDispatch } from 'react-redux';
import { deleteCar } from '../../../redux/store/states/carritoSlice';
import { useState } from 'react';

export const Item = () => {
	const [alerts, setAlerts] = useState(false);
	// carrito tiene todos los items
	const { carrito } = useSelector(state => state.car);
	const dispatch = useDispatch();

	const alertItem = () => {
		setAlerts(!alerts);
		setTimeout(() => {
			setAlerts(false);
		}, 1000);
	};
	const eliminar = id => {
		dispatch(deleteCar(id));
		alertItem();
	};

	return (
		<TableBody>
			{alerts ? (
				<Stack sx={{ width: '100%' }} className={style.aler}>
					<Alert severity='error'>Producto eliminado...</Alert>
				</Stack>
			) : (
				<></>
			)}
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
					<TableCell align='right' className={style.desktop}>
						cantidad
					</TableCell>
					<TableCell align='right' onClick={() => eliminar(item.id)}>
						<DeleteForeverIcon color='error' className={style.delete} />
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
