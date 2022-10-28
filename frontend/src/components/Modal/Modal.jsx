import { useRef } from 'react';
// import Login from '../../pages/Login/Login';
import style from './Modal.module.css';

export function Modal({ title, root }) {
	const refModal = useRef(null);
	function callback(e) {
		root.unmount();
		document.querySelector('#modal').remove();
		// ver porque me tirra error esta linea
		// refModal.current.removeEventListener('animationend', callback);
	}

	function handleClick() {
		refModal.current.classList.add(style.fadeOut);
		refModal.current.addEventListener('animationend', callback, {
			once: true,
		});
	}
	return (
		<section ref={refModal} className={style.modalContainer}>
			<div className={style.modalView}>
				<header className={style.modalHeader}>
					<h1>{title}</h1>
					<article>
						<button className={style.claseButton} onClick={handleClick}>
							x
						</button>
					</article>
				</header>
				<article>{/* <Login /> */}</article>
			</div>
		</section>
	);
}
