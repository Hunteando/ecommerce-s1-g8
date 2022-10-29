import { useEffect, useState } from 'react';
import style from './Color.module.css';

export function Color({ colors }) {
	const [colorpalettes, setColorpalettes] = useState([]);

	useEffect(() => {
		setColorpalettes(colors);
	}, []);

	return (
		<section className={style.container_colors}>
			<h4>Colors: </h4>
			{colorpalettes &&
				colorpalettes.map(e => (
					<div
						key={e}
						style={{ backgroundColor: `${e}` }}
						className={style.colors}
					></div>
				))}
		</section>
	);
}
