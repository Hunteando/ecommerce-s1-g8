import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './states/products';
export const Store = configureStore({
	reducer: {
		products: productsSlice.reducer,
	},
});
