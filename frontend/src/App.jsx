import { Home } from './pages/Home/Home';
// import { Detail } from './pages/Detail/Detail';
import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login/Login';
import Formreg from './pages/Formreg/Formreg';
// import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrivateRoutes, PublicRoutes } from './Utilities/routes';
import GuardAuth from './guards/GuardAuth';
import { lazy } from 'react';

const Login = lazy(() => import('./pages/Login/Login'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path={PublicRoutes.LOGIN} element={<Login />} />
				<Route path='/formreg' element={<Formreg />} />
				<Route path='/detail' element={<Detail />} />
				<Route element={<GuardAuth />}>
					<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
				</Route>
				<Route path='*' element={<>NOT FOUND</>} />
			</Routes>
		</div>
	);
}

export default App;
