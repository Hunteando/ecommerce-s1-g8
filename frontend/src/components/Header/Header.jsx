import CustomizedBadges from './Cart/Cart';
import SearchIcon from '@mui/icons-material/Search';
import style from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { openModal } from '@/Utilities/openModal';

export function Header({ showSearch }) {
	function handleOpenModal() {
		openModal();
	}
	return (
		<header className={style.header}>
			<Link to={'/'}>
				<h1>makeup</h1>
			</Link>
			<form>
				<input type='text' placeholder='buscar Productos' />
			</form>
			<div>
				<SearchIcon onClick={showSearch} className={style.search} />
				<div onClick={handleOpenModal}>
					<AccountCircleIcon fontSize='large' />
				</div>
				<article>
					<p>Mi cuenta</p>
					<p>iniciar sesion o registrarme</p>
				</article>
				<CustomizedBadges />
			</div>
		</header>
	);
}
