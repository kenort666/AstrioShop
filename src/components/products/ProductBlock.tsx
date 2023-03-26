import React from 'react';
import { IProducts } from '../../@types/products.type';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductBlock: React.FC<IProducts> = (item) => {
	const dispatch = useAppDispatch();
	const cartItem = useAppSelector((state) =>
		state.cart.cart.find((obj) => obj.id === item.id)
	);

	const addedQty = cartItem ? cartItem.quantity : null;

	return (
		<div className="products">
			<div className="products__wrapper">
				<div className="products__image">
					<img src={`${item.image}`} alt="" />
				</div>
				<div className="products__title">{item.title}</div>
				<div className="products__brand">Brand {item.brand}</div>
				<div className="products__bottom">
					<div className="products__price">${item.regular_price.value}</div>
					<button
						className="products__btn btn"
						onClick={() => dispatch(addToCart(item))}
					>
						Добавить
						{addedQty && (
							<span className="products__btn--plusItem">{addedQty}</span>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductBlock;
