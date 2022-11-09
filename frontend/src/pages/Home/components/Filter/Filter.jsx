import { TypesOfFilters } from './TypesOfFilters/TypesOfFilters';
import style from './Filter.module.css';
import { makeup } from '@/Utilities';
import { useState } from 'react';
import { AppliedFilters } from './AppliedFilters/AppliedFilters';

export function Filter() {
	const [tags, setTags] = useState([]);
	const [brands, setBrands] = useState([]);
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [accordion, setAccordion] = useState('');

	const showFilter = () => {
		const filter = document.querySelector('.filter');
		filter.classList.toggle('is-active-filter');
	};

	const handlerClearfilter = () => {
		setTags([]);
		setBrands([]);
		setCategory([]);
		setProducts([]);
	};

	return (
		<section className={`${style.container_filter} filter`}>
			<button onClick={showFilter}> &lt; Filters</button>
			{(tags.length > 0 ||
				brands.length > 0 ||
				products.length > 0 ||
				category.length > 0) && (
				<>
					<article>
						<h3 onClick={handlerClearfilter}>Clear filter</h3>
						<AppliedFilters filter={tags} title={'Tags List'} />
						<AppliedFilters filter={brands} title={'Brands List'} />
						<AppliedFilters filter={products} title={'Product Types'} />
						<AppliedFilters filter={category} title={'Category'} />
					</article>
				</>
			)}

			<TypesOfFilters
				filterList={makeup.tagslist}
				typeFilter={'Tags List'}
				setFilter={setTags}
				disable={accordion !== 'Tags List' && accordion !== '' && true}
				setAccordion={setAccordion}
				accordion={accordion}
				checked={tags}
			/>
			<TypesOfFilters
				filterList={makeup.brandsList}
				typeFilter={'Brands List'}
				setFilter={setBrands}
				disable={accordion !== 'Brands List' && accordion !== '' && true}
				setAccordion={setAccordion}
				accordion={accordion}
				checked={brands}
			/>
			<TypesOfFilters
				filterList={makeup.productTypes}
				typeFilter={'Product Types'}
				setFilter={setProducts}
				disable={accordion !== 'Product Types' && accordion !== '' && true}
				setAccordion={setAccordion}
				accordion={accordion}
				checked={products}
			/>
			<TypesOfFilters
				filterList={makeup.category}
				typeFilter={'Category'}
				setFilter={setCategory}
				disable={accordion !== 'Category' && accordion !== '' && true}
				setAccordion={setAccordion}
				accordion={accordion}
				checked={category}
			/>
		</section>
	);
}
