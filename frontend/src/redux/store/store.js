import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './states/products';
import { userSlice } from './states/user';

export default configureStore({
	reducer: {
		products: productsSlice.reducer,
		user: userSlice.reducer,
	},
});
