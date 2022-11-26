import { useState } from 'react';
import style from './Counter.module.css';

export function Counter() {
	const [state, setState] = useState(1);
	const next = () => {
		setState(prev => prev + 1);
	};
	const prev = () => {
		setState(prev => prev - 1);
	};
	return (
		<div className={style.container_button}>
			<span onClick={prev}>-</span>
			<span>{state}</span>
			<span onClick={next}>+</span>
		</div>
	);
}
