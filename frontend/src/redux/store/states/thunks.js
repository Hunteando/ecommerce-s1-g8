// este archivo esta creada para manejar el action de getCar
// es importado en pages/products/components/CardMakeup
import { getCar } from './carritoSlice';
import axios from 'axios';

export const getCarAdd = id => {
	return async (dispatch) => {
		const api = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
       
		await axios.get(api)
        .then((res) => {
            dispatch(getCar({...res.data, precio:2500}))
        })
	};
};
