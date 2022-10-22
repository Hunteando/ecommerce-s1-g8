import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import style from './SideBar.module.css';
export function SideBar() {
	return (
		<section className={style.container}>
			<article>ordenar</article>
			<KeyboardArrowDownOutlinedIcon />
			<article>filtrar</article>
			<FilterAltOutlinedIcon />
		</section>
	);
}
