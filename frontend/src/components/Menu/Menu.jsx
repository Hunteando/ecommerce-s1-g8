import { makeup } from '@/Utilities';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';
export function Menu() {
	const handleProduct = e => {
		console.log(e.target.getAttribute('name'));
	};
	return (
		<section className={style.container_menu}>
			<div>
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
