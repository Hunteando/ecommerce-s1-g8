import { Home } from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail' element={<Detail />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
