import CustomizedBadges from './Cart/Cart';
import SearchIcon from '@mui/icons-material/Search';
import style from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Header() {
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
			<h1>makeup</h1>
			<form>
				<input type='text' placeholder='buscar Productos' />
			</form>
			<SearchIcon className={style.search} />
			<AccountCircleIcon fontSize='large' className={style.user} />

			<article>
				<p>Mi cuenta</p>
				<p>iniciar sesion o registrarme</p>
			</article>
			<div>
				<CustomizedBadges />
			</div>
		</header>
	);
}
