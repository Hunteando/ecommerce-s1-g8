import { createSlice } from '@reduxjs/toolkit';

const empatyUserState = {
	name: '',
	email: '',
	jwt: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: empatyUserState,
	reducers: {
		createUser: (state, action) => {
			return action.payload;
		},
		updateUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		resetUser: () => empatyUserState,
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
