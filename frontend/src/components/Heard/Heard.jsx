import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { purple } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Heard() {
	return (
		<div>
			<Checkbox
				{...label}
				icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
				sx={{
					'& .MuiSvgIcon-root': {
						fontSize: 30,
						color: purple[300],
					},
				}}
			/>
		</div>
	);
}
