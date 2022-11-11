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
import { BtnAmburger } from '../BtnAmburger/BtnAmburger';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SearchDesk } from '../SearchDesk.jsx/SearchDesk';
import Favorite from '@mui/icons-material/Favorite';
import { BtnLogin } from '../BtnLogin/BtnLogin';

export function Header({ showSearch }) {
	const [login, setLogin] = useState(true);

	return (
		<section className={style.container_header}>
			<header className={style.header}>
				<article className={style.container_BtnAmburger}>
					<BtnAmburger />
				</article>
				<article className={style.container_title}>
					<Link to={'/'}>
						<h2>Makeup</h2>
					</Link>
				</article>

				<article className={style.container_searchDesk}>
					<SearchDesk />
				</article>

				<article className={style.container_loginMobile} id={'loginMobile'}>
					<Link to={'/login'}>
						<AccountCircleIcon fontSize='large' />
					</Link>
				</article>
				<article className={style.container_loginDesk}>
					<Link to={'/login'}>
						<BtnLogin />
					</Link>
				</article>
				<article className={style.container_searchMobile} id={'searchMobile'}>
					<SearchIcon onClick={showSearch} />
				</article>
				<article className={style.container_car} id={'car'}>
					<Link to='/car'>
						<CustomizedBadges />
					</Link>
				</article>
				<article className={style.container_favorite}>
					<Link>
						<Favorite />
					</Link>
				</article>
				<article className={style.container_xMobile}>
					<button>x</button>
				</article>
			</header>
		</section>
	);
}
