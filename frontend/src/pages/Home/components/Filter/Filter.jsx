import { Filter1 } from './Acordion/Accordion';
import style from './Filter.module.css';

export function Filter() {
	const marcas = ['marca1', 'marca2', 'marca3'];
	const Productos = ['producto1', 'producto2', 'producto3'];

	return (
		<section className={`${style.container_filter} filter`}>
			<Filter1 lista={Productos} tipoDeFiltro={'Productos'} />
			<Filter1 lista={marcas} tipoDeFiltro={'Marcas'} />
		</section>
	);
}
