import { Home } from './pages/Home/Home';
import { Detail } from './pages/Detail/Detail';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Formreg from './pages/Formreg/Formreg';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/login' element={<Login />} />
				<Route path='/formreg' element={<Formreg />} />
				<Route path='/detail' element={<Detail />} />
				<Route path='*' element={<>NOT FOUND</>} />
			</Routes>
		</div>
	);
}

export default App;
