import { Route, Routes } from 'react-router-dom';
export function RoutesWithNotFound({ children }) {
	return (
		<Routes>
			{children}
			<Route path='*' element={<>NOT FOUND</>} />
		</Routes>
	);
}
