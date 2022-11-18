import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './Organize.module.css';
import { useContext } from 'react';
import { DataContex } from '../../Context/ProductsProvider';

export function Organize() {
	const showOrganize = () => {
		const organize = document.querySelector('.order');
		organize.classList.toggle('is-active-order');
	};
	const { products, setProducts } = useContext(DataContex);

	function orderName(e) {
		if (e.target.defaultValue === 'az') {
			const order = products.sort((a, b) => {
				if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
				if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
				return 0;
			});

			setProducts(order);
		}
		if (e.target.defaultValue === 'za') {
			const order = products.sort((a, b) => {
				if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
				if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
				return 0;
			});
			setProducts(order);
		}
		console.log(products);
	}

	return (
		<section className={`${style.container_order} order`}>
			<div className={style.container}>
				<FormControl>
					<FormLabel id='demo-radio-buttons-group-label'>Sort by:</FormLabel>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue='vendidos'
						name='radio-buttons-group'
					>
						<FormControlLabel
							value='vendidos'
							control={<Radio />}
							label='Best sellers'
						/>
						<FormControlLabel
							value='az'
							control={<Radio />}
							label='A-Z'
							onClick={orderName}
						/>
						<FormControlLabel
							value='za'
							control={<Radio />}
							label='Z-A'
							onClick={orderName}
						/>
						<FormControlLabel
							value='preciobajo'
							control={<Radio />}
							label='Lower prices'
						/>
						<FormControlLabel
							value='precioalto'
							control={<Radio />}
							label='Higher prices'
						/>
					</RadioGroup>
				</FormControl>
			</div>
			<button onClick={showOrganize}>Back</button>
		</section>
	);
}
