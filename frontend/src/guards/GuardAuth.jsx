import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { PublicRoutes } from '../Utilities/routes';

// Se va a ejecutar cada vez que se trate de ingresar a una ruta privada
export default function GuardAuth() {
	// vamos a buscar al usuario al store
	const userState = useSelector(state => state.user);
	// si existe le devolvemos el outlet y en caso contrario lo dirijo al login
	return userState.name ? (
		<Outlet />
	) : (
		<Navigate replace to={PublicRoutes.LOGIN} />
	);
}
