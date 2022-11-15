import SearchIcon from '@mui/icons-material/Search';
import style from './SearchMobile.module.css';
import PropTypes from 'prop-types';
export function SearchMobile({ setSearch }) {
	return (
		<section className={style.container}>
			<form>
				<SearchIcon />
				<input type='text' placeholder='buscar producto' />
				<div
					onClick={() => {
						setSearch(false);
					}}
				>
					x
				</div>
			</form>
		</section>
	);
}
SearchMobile.propTypes = {
	setSearch: PropTypes.func,
};
