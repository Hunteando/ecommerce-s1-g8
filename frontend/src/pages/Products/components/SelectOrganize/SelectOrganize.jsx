import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import style from './SelectOrganze.module.css';

const SelectOrganize = () => {
	const [value, setValue] = useState('Más Vendidos');
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
			<label>Sort by :</label>
			<FormControl sx={{ minWidth: 200 }}>
				<Select
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={value}
					onChange={handleChange}
					className={style.select}
				>
					<MenuItem value={'Más Vendidos'}>Best sellers</MenuItem>
					<MenuItem value={'A-Z'}>A-Z</MenuItem>
					<MenuItem value={'Z-A'}>Z-A</MenuItem>
					<MenuItem value={'Precios más bajos'}>Lower prices</MenuItem>
					<MenuItem value={'Precios más altos'}>Higher prices</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectOrganize;
