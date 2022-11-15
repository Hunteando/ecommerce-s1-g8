import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function BtnAmburger() {
	const handleMenu = () => {
		const $menu = document.querySelector('#menu');
		if ($menu.classList.contains('is-hide-menu')) {
			$menu.classList.remove('is-hide-menu');
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
