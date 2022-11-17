import { makeup } from '@/Utilities';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';
export function Menu() {
	const handleProduct = e => {
		const $menu = document.querySelector('#menu');

		if (!$menu.classList.contains('is-hide-menu')) {
			$menu.classList.add('is-hide-menu');
		}
	};

	const handleMenu = () => {
		const $menu = document.querySelector('#menu');

		$menu.classList.add('is-hide-menu');
	};

	return (
		<section className={`${style.container} is-hide-menu`} id={'menu'}>
			<div className={`${style.container_menu}`}>
				<article className={style.container_header}>
					<h2>Makeup</h2>
					<div onClick={handleMenu}>x</div>
				</article>
				<article className={style.session}>
					<Link exact to='/signup'>
						<article onClick={handleProduct}>Sign in</article>
					</Link>
					<Link exact to={'/login'}>
						<article onClick={handleProduct}>log in</article>
					</Link>
				</article>
				{makeup.productTypes &&
					makeup.productTypes.map(e => (
						<Link to={`/products/${e}`} key={e}>
							<article
								key={e}
								className={`${style.productTypes} trigger`}
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
