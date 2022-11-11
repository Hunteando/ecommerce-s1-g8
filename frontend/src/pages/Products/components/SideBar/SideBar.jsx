import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import style from './SideBar.module.css';

export function SideBar() {
	const showOrganize = () => {
		const organize = document.querySelector('.order');
		organize.classList.toggle('is-active-order');
	};
	const showFilter = () => {
		const filter = document.querySelector('.filter');
		filter.classList.toggle('is-active-filter');
	};
	return (
		<section className={style.container}>
			<button onClick={showOrganize}>
				<article>Organize</article>
				<KeyboardArrowDownOutlinedIcon />
			</button>
			<button onClick={showFilter}>
				<article>Filter</article>
				<FilterAltOutlinedIcon />
			</button>
		</section>
	);
}
