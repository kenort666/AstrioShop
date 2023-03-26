import React from 'react';
import Brands from '../components/brands/Brands';
import Products from '../components/products/Products';
import Header from '../components/header/Header';

const Home: React.FC = () => {
	return (
		<div className="HomeMain">
			<Header />
			<div className="Home">
				<Brands />
				<Products />
			</div>
		</div>
	);
};

export default Home;
