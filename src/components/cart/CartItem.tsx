import React from 'react';
import { IProducts } from '../../@types/products.type';
import { useAppDispatch } from '../../hooks/hooks';
import {
	minusItem,
	removeFromCart,
	addToCart
} from '../../redux/slices/cartSlice';

const CartItem: React.FC<IProducts> = (data: IProducts) => {
	const dispatch = useAppDispatch();

	const onClickMin = () => {
		dispatch(minusItem(data.id));
	};

	const onClickPlus = () => {
		dispatch(addToCart(data));
	};

	return (
		<div className="cartBlock">
			<div className="cartItem__left">
				<div className="cartItem__img">
					<img src={`${data.image}`} alt="" />
				</div>
				<div className="cartItem__description--min">
					<h2 className="cartItem__name">Brand / Item {data.brand}</h2>
					<div className="cartItem__color">
						Color: <span>Black</span>
					</div>
					<div className="cartItem__size">
						Size: <span>L</span>
					</div>
				</div>
			</div>
			<div className="cartItem__right">
				<div className="cartItem__price">${data.regular_price.value}</div>
				<div className="cartItem__qty">
					<button className="cartItem__plus" onClick={onClickPlus}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-plus-circle"
							viewBox="0 0 16 16"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
						</svg>
					</button>
					<div className="cartItem__number">{data.quantity}</div>
					<button
						disabled={data.quantity === 1}
						className="cartItem__minus"
						onClick={onClickMin}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-dash-circle"
							viewBox="0 0 16 16"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
						</svg>
					</button>
				</div>
				<div className="cartItem__total">
					$
					{data.quantity &&
						(data.quantity * data.regular_price.value).toFixed(2)}
				</div>
				<div className="cartItem__delete">
					<button onClick={() => dispatch(removeFromCart(data))}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColo"
							className="bi bi-trash3"
							viewBox="0 0 16 16"
						>
							<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
