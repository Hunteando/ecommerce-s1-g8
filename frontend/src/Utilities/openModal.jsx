// import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Modal } from '../components/Modal/Modal';

export function openModal() {
	// const Modal = lazy(() => import('../components/Modal/Modal'));
	const ModalSection = document.createElement('div');
	ModalSection.id = 'modal';
	document.body.appendChild(ModalSection);
	const root = createRoot(ModalSection);
	root.render(
		// <Suspense fallback={<>cargandooo...</>}>
		<Modal root={root} title='modal de prueba'>
			contenido de modal
		</Modal>
		// </Suspense>
	);
}
