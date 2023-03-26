import React from 'react';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App: React.FC = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<div className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
