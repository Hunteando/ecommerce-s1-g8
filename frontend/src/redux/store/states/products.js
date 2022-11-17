import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
	},

	reducers: {
		setProducts: (state, action) => {
			return action.payload;
		},
	},
});
export const { setProducts } = productsSlice.actions;
