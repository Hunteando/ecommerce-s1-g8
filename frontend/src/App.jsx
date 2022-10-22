import { Home } from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
