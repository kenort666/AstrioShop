import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts } from '../../redux/slices/productsSlice';
import ProductBlock from './ProductBlock';
import SkeletonProduct from './SkeletonProduct';

const Products: React.FC = () => {
	const { products, error, loading } = useAppSelector(
		(state) => state.products
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProducts(null));
	}, []);

	if (error) return <div className="products__error">{error}</div>;

	return (
		<div className="content">
			<div className="catalog">
				<h2 className="catalog__title">Catalog</h2>
				<div className="productBlock">
					{loading ? (
						[...new Array(9)].map((_, index) => <SkeletonProduct key={index} />)
					) : products.length >= 1 ? (
						products.map((item) => <ProductBlock {...item} key={item.id} />)
					) : (
						<h3>Данного бренда нету в наличии!</h3>
					)}
				</div>
			</div>
		</div>
	);
};

export default Products;
