import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchBrands } from '../../redux/slices/brandsSlice';
import { fetchProducts } from '../../redux/slices/productsSlice';
import { IBrands } from '../../@types/brands.types';

const Brands: React.FC = () => {
	const { brands, error } = useAppSelector((state) => state.brands);
	let [brandNumber, setBrandNumber] = useState<null | number>(null);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchBrands());
	}, []);

	const setBrand = (brand: null | number) => {
		setBrandNumber(brand);
		dispatch(fetchProducts(brand));
	};

	return (
		<div className="brands">
			<div className="brands__wrapper">
				<div className="brands__left">
					<ul className="brands-list">
						<li
							className={classNames('brands-list__all', {
								'brands-list__active': brandNumber === null
							})}
							onClick={() => setBrand(null)}
						>
							All brands
						</li>
						{error ? (
							<h2>{error}</h2>
						) : (
							brands.map((brand: IBrands, index: number) => (
								<li
									onClick={() => setBrand(index)}
									className={classNames('brands-list__title', {
										'brands-list__active': brandNumber === index
									})}
									key={brand.id}
								>
									{brand.title}
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Brands;
