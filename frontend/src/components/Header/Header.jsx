import CustomizedBadges from './Cart/Cart';
import SearchIcon from '@mui/icons-material/Search';
import style from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BtnAmburger } from '../BtnAmburger/BtnAmburger';
import { Link } from 'react-router-dom';
import { SearchDesk } from '../SearchDesk.jsx/SearchDesk';
import Favorite from '@mui/icons-material/Favorite';
import { BtnLogin } from '../BtnLogin/BtnLogin';
import PropTypes from 'prop-types';
export function Header({ showSearch }) {
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
Header.propTypes = {
	showSearch: PropTypes.func,
};
