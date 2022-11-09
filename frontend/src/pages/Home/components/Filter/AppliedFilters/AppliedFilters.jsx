import PropTypes from 'prop-types';
import style from './AppliedFilters.module.css';
export function AppliedFilters({ filter, title }) {
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
									<b className={style.x}> x </b>
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
};
