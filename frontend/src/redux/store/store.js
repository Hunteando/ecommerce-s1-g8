import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './states/products';
import { userSlice } from './states/user';

// import carReducer de Isra
import  car from  './states/carritoSlice'

export default configureStore({
	reducer: {
		products: productsSlice.reducer,
		user: userSlice.reducer,
		car
	},
});
