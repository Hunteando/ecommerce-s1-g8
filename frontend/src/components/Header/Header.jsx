import CustomizedBadges from './Cart/Cart';
import SearchIcon from '@mui/icons-material/Search';
import style from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export function Header({ showSearch }) {
	return (
		<header className={style.header}>
			{/* <button
				className={`panel-btn hamburger hamburger--vortex ${style.amburguese}`}
				type='button'
			>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button> */}
			<Link to={'/'}>
				<h1>makeup</h1>
			</Link>
			<form>
				<input type='text' placeholder='buscar Productos' />
			</form>
			<div>
				<SearchIcon onClick={showSearch} className={style.search} />
				<AccountCircleIcon fontSize='large' />
				<article>
					<p>Mi cuenta</p>
					<p>iniciar sesion o registrarme</p>
				</article>
				<CustomizedBadges />
			</div>
		</header>
	);
}
