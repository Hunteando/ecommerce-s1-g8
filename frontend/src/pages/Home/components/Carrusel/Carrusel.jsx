/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarruselImg = styled.img`
	width: 100vw;
	height: 20vh;
	opacity: 0;
	transition: 1s;

	&.loaded {
		opacity: 1;
	}
	@media (min-width: 768px) {
		height: 40vh;
	}
	@media (min-width: 991px) {
		height: 50vh;
	}
`;
const CarruselButtonPrev = styled.button`
	background-color: green;
`;
const CarruselButtonNext = styled.button`
	background-color: red;
`;

export function Carrusel(props) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(props.images[0]);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (props.autoplay || !props.showbuttons) {
			const interval = setInterval(() => {
				selectnewImage(selectedIndex, props.images);
			}, 2000);
			return () => {
				clearInterval(interval);
			};
		}
	});

	const selectnewImage = (index, image, next = true) => {
		setLoaded(false);
		setTimeout(() => {
			const condicion = next
				? selectedIndex < props.images.length - 1
				: selectedIndex > 0;
			const nextIndex = next
				? condicion
					? selectedIndex + 1
					: 0
				: condicion
				? selectedIndex - 1
				: props.images.length - 1;
			setSelectedImage(props.images[nextIndex]);
			setSelectedIndex(nextIndex);
		}, 500);
	};

	const previous = () => {
		// const condicion = selectedIndex > 0;
		// const nextIndex = condicion ? selectedIndex - 1 : images.length - 1;
		// setSelectedImage(images[nextIndex]);
		// setSelectedIndex(nextIndex);
		selectnewImage(selectedImage, props.images, false);
	};
	const next = () => {
		// const condicion = selectedIndex < images.length;
		// const nextIndex = condicion ? selectedIndex + 1 : 0;
		// setSelectedImage(images[nextIndex]);
		// setSelectedIndex(nextIndex);
		selectnewImage(selectedImage, props.images, true);
	};

	return (
		<section style={{ marginTop: '70px' }}>
			<CarruselImg
				src={`../../../src/assets/img/${selectedImage}`}
				alt='maquillaje'
				className={loaded ? 'loaded' : ''}
				onLoad={() => {
					setLoaded(true);
				}}
			/>
			{props.showbuttons ? (
				<>
					<CarruselButtonPrev onClick={previous}>{'<'}</CarruselButtonPrev>
					<CarruselButtonNext button onClick={next}>
						{'>'}
					</CarruselButtonNext>
				</>
			) : (
				<></>
			)}
		</section>
	);
}
