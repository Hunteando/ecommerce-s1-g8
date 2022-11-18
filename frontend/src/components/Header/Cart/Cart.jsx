import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// redux (Isra)
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function Cart() {
	// uso del estado en redux del carrito para mostrar la cantidad(Isra)
	const { carrito } = useSelector(state => state.car);
	const num = String(carrito.length);

	return (
		<IconButton aria-label='cart' style={{ color: 'var(--second-color)' }}>
			<StyledBadge badgeContent={num} color='secondary'>
				<ShoppingCartIcon
					style={{ color: 'var(--second-color)', fontSize: '30px' }}
				/>
			</StyledBadge>
		</IconButton>
	);
}
