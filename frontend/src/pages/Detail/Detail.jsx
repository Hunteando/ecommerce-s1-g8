import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Counter } from './Components/Counter/Counter';
import { Color } from './Components/Colors/Color';
import { Search } from '@/components/search/Search';
import style from './Detail.module.css';
import { useState } from 'react';

export function Detail({ image, brand, name, price, description, colors }) {
	const [search, setSearch] = useState(false);
	const showSearch = () => {
		setSearch(true);
	};

	return (
		<>
			{search ? (
				<Search setSearch={setSearch} />
			) : (
				<>
					<Header showSearch={showSearch} search={search} />
					<div className={style.container}>
						<section className={style.container_detail}>
							<img src={`${image}`} alt='producto' />
							<article>
								<h3> {`${brand}`}</h3>
								<h4>{name}</h4>
								<p>${`${price === '0.0' ? '55.00' : price}`}</p>
								<Color colors={colors} />
								<div>
									<Counter />
									<button>comprar</button>
								</div>
							</article>
						</section>
						<section>
							<h4>Description: </h4>
							<p>{description}</p>
						</section>
					</div>
					<Footer />
				</>
			)}
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
