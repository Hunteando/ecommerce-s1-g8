import PropTypes from 'prop-types';
import style from './AppliedFilters.module.css';

export function AppliedFilters({ filter, title, setFilter }) {
	const handleCleanFilter = e => {
		const currentIndex = filter.indexOf(e.target.getAttribute('name'));
		const newFilter = [...filter];
		newFilter.splice(currentIndex, 1);
		setFilter(newFilter);
	};
	return (
		<>
			{filter.length > 0 && (
				<>
					<h4 className={style.title}>{title}</h4>
					<>
						{filter.map(e => (
							<span key={e} className={style.filter}>
								<span>
									{e}
									<b className={style.x} onClick={handleCleanFilter} name={e}>
										x
									</b>
								</span>
							</span>
						))}
					</>
				</>
			)}
		</>
	);
}

AppliedFilters.propTypes = {
	filter: PropTypes.array,
	title: PropTypes.string,
	setFilter: PropTypes.func,
};
