import { useState } from 'react';

export function Carrusel() {
	const items = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(items[0]);

	const selectnewImage = (index, image, next = true) => {
		const condicion = next ? selectedIndex - 1 : items.length - 1;
		const nextIndex = next
			? condicion
				? selectedIndex + 1
				: 0
			: condicion
			? selectedIndex - 1
			: items.length - 1;
		setSelectedImage(items[nextIndex]);
		setSelectedIndex(nextIndex);
	};

	const previous = () => {
		// const condicion = selectedIndex > 0;
		// const nextIndex = condicion ? selectedIndex - 1 : items.length - 1;
		// setSelectedImage(items[nextIndex]);
		// setSelectedIndex(nextIndex);
		selectnewImage(selectedImage, items, false);
	};
	const next = () => {
		// const condicion = selectedIndex < items.length;
		// const nextIndex = condicion ? selectedIndex + 1 : 0;
		// setSelectedImage(items[nextIndex]);
		// setSelectedIndex(nextIndex);
		selectnewImage(selectedImage, items, true);
	};

	return (
		<section>
			<img
				src={require(`.assets/img/${selectedImage}`).default}
				alt='maquillaje'
			/>
		</section>
	);
}
