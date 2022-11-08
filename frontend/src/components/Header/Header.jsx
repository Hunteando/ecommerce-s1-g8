// import CustomizedBadges from './Cart/Cart';
// import SearchIcon from '@mui/icons-material/Search';
// import style from './Header.module.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';

// import { useState } from 'react';

// export function Header({ showSearch }) {
// 	const [state, setState] = useState(false);
// 	const [login, setLogin] = useState(false);

// 	window.addEventListener('scroll', () => {
// 		const ejeY = window.scrollY;
// 		if (ejeY > 70) {
// 			setState(true);
// 		} else {
// 			setState(false);
// 		}
// 	});
// 	return (
// 		<div
// 			className={style.contenedor}
// 			style={{ background: state ? '#01010199' : '' }}
// 		>
// 			<header className={style.header}>
// 				<Link to={'/'}>
// 					<h1 style={{ color: state ? '#ffffff' : '' }}>makeup</h1>
// 				</Link>
// 				<label>
// 					{/* <input type='text' placeholder='buscar Productos' /> */}
// 					<SearchIcon
// 						onClick={showSearch}
// 						className={style.search}
// 						style={{ color: state ? '#010101' : '' }}
// 					/>
// 				</label>
// 				<div className={style.loginCarrito}>
// 					{/* <div>
// 						<AccountCircleIcon
// 							fontSize='large'
// 							style={{ color: state ? '#ffff' : '' }}
// 						/>
// 					</div>

// 					<article style={{ color: state ? '#ffff' : '' }}>
// 						<p>Mi cuenta</p>
// 						<p>iniciar sesion o registrarme</p>
// 					</article>
// 					<Link to='/car'>
// 						<CustomizedBadges />
// 					</Link> */}

// 					<Link to={'/login'}>
// 						<div>
// 							<AccountCircleIcon
// 								fontSize='large'
// 								style={{ color: state ? '#ffff' : '' }}
// 							/>
// 						</div>
// 					</Link>
// 					<Link to={'/login'}>
// 						<article style={{ color: state ? '#ffff' : '' }}>
// 							{login ? (
// 								<>Cerrar sesion</>
// 							) : (
// 								<>
// 									<p>Mi cuenta</p>
// 									<p>iniciar sesion o registrarme</p>
// 								</>
// 							)}
// 						</article>
// 					</Link>
// 					<CustomizedBadges />
// 				</div>
// 			</header>
// 		</div>
// 	);
// }
import CustomizedBadges from './Cart/Cart';
import SearchIcon from '@mui/icons-material/Search';
import style from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Header({ showSearch }) {
	const [login, setLogin] = useState(true);

	return (
		<header className={style.header}>
			<Link to={'/'}>
				<h1>makeup</h1>
			</Link>
			<form className={style.form}>
				<input type='text' placeholder='buscar Productos' />
				<SearchIcon className={style.lens} />
			</form>
			<div>
				<SearchIcon onClick={showSearch} className={style.search} />
				<Link to={'/login'} className={style.login}>
					<AccountCircleIcon fontSize='large' />
					<article>
						{login ? (
							<div className={style.logout}>Cerrar sesion</div>
						) : (
							<>
								<p>Mi cuenta</p>
								<p>iniciar sesion o registrarme</p>
							</>
						)}
					</article>
				</Link>
				<Link to='/car' className={style.card}>
					<CustomizedBadges />
				</Link>
			</div>
		</header>
	);
}
