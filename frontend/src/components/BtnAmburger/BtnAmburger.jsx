import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function BtnAmburger() {
	const handleMenu = () => {
		const $menu = document.querySelector('#menu');
		if ($menu.classList.contains('is-active-menu')) {
			console.log('mostrar menu');
			$menu.classList.remove('is-active-menu');
		}
	};
	return (
		<div onClick={handleMenu}>
			<IconButton
				size='large'
				edge='start'
				color='inherit'
				aria-label='menu'
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>
		</div>
	);
}
