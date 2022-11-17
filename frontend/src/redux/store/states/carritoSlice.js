import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
	name: 'car',
	initialState: {
		carrito: [],
	},
	reducers: {
		getCar: (state, action) => {
			state.carrito.push(action.payload);
		},
		deleteCar: (state, action) => {
			// const itemFind = state.carrito.find(item =>  item.id === action.payload)
			// console.log(itemFind)
		},
	},
});

export const { getCar, deleteCar } = carSlice.actions;
export default carSlice.reducer;
