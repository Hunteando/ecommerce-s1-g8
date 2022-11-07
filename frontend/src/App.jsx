import { Home } from './pages/Home/Home';
import { Detail } from './pages/Detail/Detail';
import { Route } from 'react-router-dom';
// import Login from './pages/Login/Login';
import Formreg from './pages/Formreg/Formreg';
// import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrivateRoutes, PublicRoutes } from './Utilities/routes';
import GuardAuth from './guards/GuardAuth';
import { lazy } from 'react';
import './App.css';
import { Private } from './pages/Private/Private';
import { RoutesWithNotFound } from './Utilities/RoutesWithNotFound';
import Car from './pages/cars/Car';

const Login = lazy(() => import('./pages/Login/Login'));
// const Detail = lazy(() => import('./pages/Detail/Detail'));

function App() {
	return (
		<div className='App'>
			<RoutesWithNotFound>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/car' element={<Car/>} />
				<Route path={PublicRoutes.LOGIN} element={<Login />} />
				<Route path='/formreg' element={<Formreg />} />
				<Route element={<GuardAuth />}>
					<Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
				</Route>
			</RoutesWithNotFound>
		</div>
	);
}

export default App;
			
