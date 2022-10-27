import { useEffect } from 'react';

export const useAsyn = (
	asyncFn,
	successFunction,
	returnFunction,
	dependencies = []
) => {
	useEffect(() => {
		let isActive = true; // inicio el componenete osea que ya esta montado
		asyncFn().then(result => {
			if (isActive) successFunction(result.data);
		});
		return () => {
			returnFunction && returnFunction();
			isActive = false;
		};
	}, dependencies);
};
