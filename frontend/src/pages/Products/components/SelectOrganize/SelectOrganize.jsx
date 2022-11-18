import { FormControl, MenuItem, Select } from '@mui/material';
import { useState, useContext } from 'react';
import style from './SelectOrganze.module.css';
import { DataContex } from '../../Context/ProductsProvider';

const SelectOrganize = () => {
	const [value, setValue] = useState('best');
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

	const { products, setProducts, setOrder, copia } = useContext(DataContex);

	function bestSellers(e) {
		console.log('soy la copia', copia);
		setProducts(copia);
		setOrder('best');
	}

	function orderName(e) {
		if (e.target.dataset.value === 'az') {
			const order = products.sort((a, b) => {
				if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
				if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
				return 0;
			});
			setProducts(order);
			setOrder('az');
		}
		if (e.target.dataset.value === 'za') {
			const order = products.sort((a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
				if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
				return 0;
			});
			setProducts(order);
			setOrder('za');
		}
	}

	function orderRating(e) {
		if (e.target.dataset.value === 'asc') {
			const order = products.sort((a, b) => {
				if (a.price > b.price) return 1;
				if (b.price > a.price) return -1;
				return 0;
			});

			setProducts(order);
			setOrder('asc');
		}
		if (e.target.dataset.value === 'des') {
			const order = products.sort((a, b) => {
				if (a.price < b.price) return 1;
				if (b.price < a.price) return -1;
				return 0;
			});

			setProducts(order);
			setOrder('des');
		}
		console.log(products);
	}

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
					defaultValue='best'
				>
					<MenuItem value={'best'} onClick={bestSellers}>
						Best sellers
					</MenuItem>
					<MenuItem value='az' onClick={orderName}>
						A-Z
					</MenuItem>
					<MenuItem value='za' onClick={orderName}>
						Z-A
					</MenuItem>
					<MenuItem value={'asc'} onClick={orderRating}>
						Lower prices
					</MenuItem>
					<MenuItem value={'des'} onClick={orderRating}>
						Higher prices
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectOrganize;
