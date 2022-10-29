import { useEffect, useState } from 'react';

export const usefetchAndLoad = () => {
	const [loading, setLoading] = useState(false);
	let controller;

	const callEndpoint = async axiosCall => {
		if (axiosCall.controller) controller = axiosCall.controller;
		setLoading(true);
		let result = {};
		try {
			result = await axiosCall.call;
		} catch (error) {
			// esto no se porque se hace
			// setLoading(false);
			// throw error;
		}
		setLoading(false);
		return result;
	};
	const cancelEndpoint = () => {
		setLoading(false);
		controller && controller.abort();
	};
	useEffect(() => {
		return () => {
			cancelEndpoint();
		};
	}, []);
	return { loading, callEndpoint };
};
