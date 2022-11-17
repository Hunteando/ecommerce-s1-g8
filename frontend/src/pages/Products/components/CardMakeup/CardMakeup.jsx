import { Link } from 'react-router-dom';
import style from './CardMakeup.module.css';
import PropTypes from 'prop-types';
import { Heard } from '@/components/Heard/Heard';
/* redux Isra */
import { useDispatch } from 'react-redux';
import { getCarAdd } from '../../../../redux/store/states/thunks';

export function CardMakeup({ name, image, price, brand, id }) {
	/* uso de redux Isra - Inicio */
	const dispatch = useDispatch();
	const add = id => {
		dispatch(getCarAdd(id));
	};
	/* uso de redux Isra - Final */

	return (
		<div className={style.item_card}>
			<div className={style.heard}>
				<Heard />
			</div>
			<Link to={`/detail/${id}`}>
				<img src={`${image}`} className={style.img} />
				<h4 className={style.name}>{name}</h4>
			</Link>
			<p className={style.brand}>Brand: {`${brand}`}</p>
			<p className={style.price}>$ {`${price === '0.0' ? '55.00' : price}`}</p>
			<div className={style.button}>
				{/* aumente onclick para capturar el producto de isra  */}
				<button onClick={() => add(id)}>comprar</button>
			</div>
		</div>
	);
}
CardMakeup.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string,
	brand: PropTypes.string,
	id: PropTypes.number,
};
CardMakeup.defaultProps = {
	name: 'nombre por defecto',
	image:
		'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383',
	brand: 'rejuva minerals',
	price: '$3500',
};
