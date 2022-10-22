import { Filter1 } from './Acordion/Accordion';

export function Filter() {
	const marcas = ['marca1', 'marca2', 'marca3'];
	const Productos = ['producto1', 'producto2', 'producto3'];

	return (
		<div>
			<Filter1 lista={Productos} tipoDeFiltro={'Productos'} />
			<Filter1 lista={marcas} tipoDeFiltro={'Marcas'} />
		</div>
	);
}
