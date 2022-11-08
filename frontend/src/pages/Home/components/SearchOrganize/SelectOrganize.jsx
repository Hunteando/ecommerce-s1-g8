import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import style from './Search.module.css';

const SelectOrganize = () => {
	const [value, setValue] = useState('click Aquí');
	const [open, setOpen] = useState(false);

	const handleChange = e => {
		e.preventDefault();
		setValue(e.target.value);
	};

	window.addEventListener('scroll', () => {
		const scroll = window.scrollY;

		if (scroll > 0) {
			setOpen(false);
		}
	});

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div className={style.menuSelect}>
			<Button variant='texto' color='secondary' onClick={handleOpen}>
				Ordenar por :
			</Button>
			<FormControl sx={{ minWidth: 200, margin: 0, padding: 0 }}>
				<Select
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={value}
					onChange={handleChange}
				>
					<MenuItem value={'Más Vendidos'}>Más Vendidos</MenuItem>
					<MenuItem value={'A-Z'}>A-Z</MenuItem>
					<MenuItem value={'Z-A'}>Z-A</MenuItem>
					<MenuItem value={'Precios más bajos'}>Precios más bajos</MenuItem>
					<MenuItem value={'Precios más altos'}>Precios más altos</MenuItem>
					<MenuItem value={'Mayor Descuento'}>Mayor Descuento</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectOrganize;
