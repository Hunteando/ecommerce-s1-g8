import { TypesOfFilters } from './TypesOfFilters/TypesOfFilters';
import style from './Filter.module.css';
import { makeupFitler } from '../../../../Utilities/index';
import { useEffect, useState, useContext } from 'react';
import { AppliedFilters } from './AppliedFilters/AppliedFilters';

import { DataContex } from '../../Context/ProductsProvider';

export function Filter() {
	const [leakedTags, setLeakedTags] = useState([]);
	const [leakedCategory, setLeakedCategory] = useState([]);
	const [filterListTag, setFilterListTag] = useState([]);
	const [filterListCategory, setFilterListCategory] = useState([]);
	const [accordion, setAccordion] = useState('');

	const { product } = useContext(DataContex);

	const showFilter = () => {
		const filter = document.querySelector('.filter');
		filter.classList.toggle('is-active-filter');
	};

	const handlerClearfilter = () => {
		setLeakedTags([]);

		setLeakedCategory([]);
	};

	useEffect(() => {
		// segun el tipo de producto vamos a buscar las tag lis y las categorias
		const tags = makeupFitler[product].tag;
		console.log(tags);
		setFilterListTag(tags);
		const categorys = makeupFitler[product].category;
		console.log(categorys);
		setFilterListCategory(categorys);
	}, [product]);

	return (
		<section className={`${style.container_filter} filter`}>
			<button onClick={showFilter}> &lt; Filters</button>
			{(leakedTags.length > 0 || leakedCategory.length > 0) && (
				<>
					<article>
						<h3 onClick={handlerClearfilter}>Clear filter</h3>
						<AppliedFilters
							filter={leakedTags}
							title={'Tags List'}
							setFilter={setLeakedTags}
						/>
						<AppliedFilters
							filter={leakedCategory}
							title={'Category'}
							setFilter={setLeakedCategory}
						/>
					</article>
				</>
			)}

			<TypesOfFilters
				filterList={filterListTag}
				typeFilter={'Tags List'}
				setFilter={setLeakedTags}
				disable={accordion !== 'Tags List' && accordion !== '' && true}
				setAccordion={setAccordion}
				accordion={accordion}
				checked={leakedTags}
			/>
			<TypesOfFilters
				filterList={filterListCategory}
				typeFilter={'Category'}
				setFilter={setLeakedCategory}
				disable={accordion !== 'Category' && accordion !== '' && true}
				setAccordion={setAccordion}
				accordion={accordion}
				checked={leakedCategory}
			/>
		</section>
	);
}
