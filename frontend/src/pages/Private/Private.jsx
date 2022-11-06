import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../Utilities/routes';
import { RoutesWithNotFound } from '../../Utilities/RoutesWithNotFound';
// import { Dashboard } from './Dashboard/Dashboard';
// import { HomePrivate } from './HomePrivate/HomePrivate';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const HomePrivate = lazy(() => import('./HomePrivate/HomePrivate'));
export function Private() {
	return (
		<RoutesWithNotFound>
			<Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
			<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
			<Route path={PrivateRoutes.HOMEPRIVATE} element={<HomePrivate />} />
		</RoutesWithNotFound>
	);
}
