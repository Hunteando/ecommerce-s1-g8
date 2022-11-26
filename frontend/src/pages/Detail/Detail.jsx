import { Footer } from '@/components/Footer/Footer';
import { Counter } from './Components/Counter/Counter';
import { Color } from './Components/Colors/Color';
import style from './Detail.module.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hook/useProduct';
import { Container, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export function Detail({ image, brand, name, price, description, colors }) {
	// https://makeup-api.herokuapp.com/api/v1/products/1035
	const { id } = useParams();
	const { product, loading } = useProduct(id);
console.log(product);
	if (loading) return <>Cargando.....</>;

	return (
		<>
			<Container className={style.container}>
				<Grid container>
					<Grid item xs={12} sm={6} md={6} className={style.container_detail}>
						<div className={style.img}>
							<img src={`${product.image}`} alt='producto' />
						</div>
						<div className={style.desktop}>
							<h4>Description: </h4>
							<p>{product.description}</p>
						</div>
						<div className={style.logoImage}>
							<img src={`${product.image}`} alt='producto' />
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} className={style.gridDos}>
						<div className={style.ticket}>
							<h2>{product.name}</h2>
							<h4> {product.brand}</h4>

							<span className={style.free}>free bag</span>
							<div className={style.star}>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<span className={style.starText}>¡Evalúa ahora!</span>
							</div>
							<p className={style.price}>${` ${product.price}`}</p>
							<Color colors={product.colors} />
							<div className={style.amount}>
								<h5>Amount</h5>
								<div className={style.buy}>
									<Counter />
									<button>
										TO BAY{' '}
										<span>
											<LocalMallOutlinedIcon />
										</span>
									</button>
								</div>
							</div>
						</div>
					</Grid>
					<div className={style.mobile}>
						<h4>Description: </h4>
						<p>{product.description}</p>
					</div>
				</Grid>
			</Container>
			<Footer />
		</>
	);
}

Detail.defaultProps = {
	name: 'nombre por defecto',
	image:
		'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383',
	brand: 'rejuva minerals',
	price: '3500',
	description:
		"Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED&#x2122; and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
	colors: ['#E1BFC0', '#D7A7A3', '#E6C3CB'],
};
Detail.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string,
	brand: PropTypes.string,
	description: PropTypes.string,
	colors: PropTypes.array,
};
