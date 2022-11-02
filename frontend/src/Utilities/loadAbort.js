// AbortController: este objeto nos permite cancelar llamadas a una api
export const loadAbort = () => {
	const controller = new AbortController();
	return controller;
};
