import CustomizedBadges from './Cart/Cart';
import SearchIcon from '@mui/icons-material/Search';
import style from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { openModal } from '@/Utilities/openModal';
import { useState } from 'react';

export function Header({ showSearch }) {
	const [state, setState] = useState(false);

	function handleOpenModal() {
		openModal();
	}

	window.addEventListener('scroll', () => {
		const ejeY = window.scrollY;
		if (ejeY > 70) {
			setState(true);
		} else {
			setState(false);
		}
	});
	return (
		<div
			className={style.contenedor}
			style={{ background: state ? '#01010199' : '' }}
		>
			<header className={style.header}>
				<Link to={'/'}>
					<h1 style={{ color: state ? '#ffffff' : '' }}>makeup</h1>
				</Link>
				<label>
					<input type='text' placeholder='buscar Productos' />
					<SearchIcon
						onClick={showSearch}
						className={style.search}
						style={{ color: state ? '#010101' : '' }}
					/>
				</label>
				<div className={style.loginCarrito}>
					<div onClick={handleOpenModal}>
						<AccountCircleIcon
							fontSize='large'
							style={{ color: state ? '#ffff' : '' }}
						/>
					</div>

					<article style={{ color: state ? '#ffff' : '' }}>
						<p>Mi cuenta</p>
						<p>iniciar sesion o registrarme</p>
					</article>
					<CustomizedBadges />
				</div>
			</header>
		</div>
	);
}
