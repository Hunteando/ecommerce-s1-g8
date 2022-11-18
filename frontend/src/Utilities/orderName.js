export function orderName(action, state) {
	if (action.payload === 'az') {
		const order = state.allVideogame.sort((a, b) => {
			if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
			if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
			return 0;
		});
		return order;
	}
	if (action.payload === 'za') {
		const order = state.allVideogame.sort((a, b) => {
			if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
			if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
			return 0;
		});
		return order;
	}
}
