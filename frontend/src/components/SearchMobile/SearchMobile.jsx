import SearchIcon from '@mui/icons-material/Search';
import style from './SearchMobile.module.css';
// eslint-disable-next-line react/prop-types
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
