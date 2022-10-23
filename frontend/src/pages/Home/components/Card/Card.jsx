import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Box from '@mui/material/box';

export function CardMakeup() {
	return (
		<Box textAlign='center'>
			<Card sx={{ maxWidth: 345 }}>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
				</CardActions>
				<CardMedia
					component='img'
					height='194'
					image='https://www.cosmeticosvogue.com.ar/-/media/Feature/Products/LABIOS/DETALLE/Labial-LIquido-Resist/TONOS-RESIST/APASIONADA/APASIONADA-AR/APASIONADA-FRONTALpsd.jpg'
					alt='Paella dish'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex ab
						vitae, facilis dolorum quas eveniet ipsum eligendi vel sed qui,
						eaque hic omnis porro error rerum ut nesciunt animi.
					</Typography>
				</CardContent>
				<Typography variant='h5' component='div'>
					$1.259
				</Typography>
				<Button variant='outlined'>comprar</Button>
			</Card>
		</Box>
	);
}
