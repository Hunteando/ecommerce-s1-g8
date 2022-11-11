import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import style from './Organize.module.css';

export function Organize() {
	return (
		<section className={`${style.container_order} order`}>
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
					<FormControlLabel value='a-z' control={<Radio />} label='A-Z' />
					<FormControlLabel value='z-a' control={<Radio />} label='Z-A' />
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
		</section>
	);
}
