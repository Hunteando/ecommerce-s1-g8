import { createSlice } from '@reduxjs/toolkit';

const empatyUserState = {
	id: 0,
	name: '',
	email: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: empatyUserState,
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
