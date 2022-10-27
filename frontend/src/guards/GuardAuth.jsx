import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { PublicRoutes } from '../Utilities/routes';

// Se va a ejecutar cada que se trate de ingresar a una ruta privada
export default function GuardAuth() {
	const userState = useSelector(state => state.user);
	return userState.name ? (
		<Outlet />
	) : (
		<Navigate replace to={PublicRoutes.LOGIN} />
	);
}
