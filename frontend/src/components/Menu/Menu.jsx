import { makeup } from '@/Utilities';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';
export function Menu() {
	const handleProduct = e => {
		console.log(e.target.getAttribute('name'));
		const $menu = document.querySelector('#menu');
		console.log($menu.classList.contains('.is-active-menu'));
		console.log($menu.classList);
		if (!$menu.classList.contains('is-active-menu')) {
			console.log('entro');
			$menu.classList.remove('is-active-menu');
		}
	};
	const handleMenu = () => {
		const $menu = document.querySelector('#menu');
		console.log('ocultar menu');
		$menu.classList.add('is-active-menu');
	};
	return (
		<section className={`${style.container} is-active-menu`} id={'menu'}>
			<div className={`${style.container_menu}`}>
				<article className={style.container_header}>
					<h2>Makeup</h2>
					<div onClick={handleMenu}>x</div>
				</article>
				<article className={style.session}>
					<article>Sign in</article>
					<article>log in</article>
				</article>
				{makeup.productTypes &&
					makeup.productTypes.map(e => (
						<Link to={`/products/${e}`} key={e}>
							<article
								key={e}
								className={style.productTypes}
								name={e}
								onClick={handleProduct}
							>
								{e}
							</article>
						</Link>
					))}
			</div>
		</section>
	);
}
