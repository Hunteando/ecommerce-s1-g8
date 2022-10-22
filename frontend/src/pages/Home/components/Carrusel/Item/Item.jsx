import { Paper } from '@mui/material';

// eslint-disable-next-line react/prop-types
export function Item({ image }) {
	return (
		<Paper autoPlay={true}>
			<img src={image} alt='maquillaje' />
		</Paper>
	);
}
