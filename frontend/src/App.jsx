import { Products } from './pages/Products/Products';
import { Detail } from './pages/Detail/Detail';
import { Route } from 'react-router-dom';
// import Login from './pages/Login/Login';
import Formreg from './pages/Formreg/Formreg';
// import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrivateRoutes, PublicRoutes } from './Utilities/routes';
import GuardAuth from './guards/GuardAuth';
import { lazy, useState } from 'react';
import './App.css';
import { Private } from './pages/Private/Private';
import { RoutesWithNotFound } from './Utilities/RoutesWithNotFound';
import { Home } from './pages/Home/Home';
import Car from './pages/cars/Car';
import { Header } from './components/Header/Header';
import { SearchMobile } from './components/SearchMobile/SearchMobile';
import { Menu } from './components/Menu/Menu';
import RecoveryP from './pages/RecoveryPassword/RecoveryPassword';
import MailRecovery from './pages/MailRecovery/MailRecovery';
import UserInfo from './pages/userInfo/UserInfo'
const Login = lazy(() => import('./pages/Login/Login'));
// const Detail = lazy(() => import('./pages/Detail/Detail'));

function App() {
	const [search, setSearch] = useState(false);
	const showSearch = () => {
		setSearch(true);
	};
	if (search) return <SearchMobile setSearch={setSearch} />;
	return (
		<div className='App'>
			<Header showSearch={showSearch} search={search} />
			<Menu />
			<RoutesWithNotFound>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/products/:product' element={<Products />} />
				<Route exact path='/detail/:id' element={<Detail />} />
				<Route exact path='/car' element={<Car />} />
				<Route path={PublicRoutes.LOGIN} element={<Login />} />
				<Route path='/signup' element={<Formreg />} />
				<Route path='/recovery' element={<RecoveryP />} />
				<Route path='/mailRecovery' element={<MailRecovery />} />
				<Route path='/userInfo' element={<UserInfo />} />
				<Route element={<GuardAuth />}>
					<Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
				</Route>
			</RoutesWithNotFound>
		</div>
	);
}

export default App;
