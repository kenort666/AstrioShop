import React from 'react';
import { IProducts } from '../@types/products.type';
import { useAppSelector } from '../hooks/hooks';
import CartItem from '../components/cart/CartItem';
import Header from '../components/header/Header';

const Cart: React.FC = () => {
	const { cart, totalPrice } = useAppSelector((state) => state.cart);

	return (
		<div>
			<Header />
			{cart.length > 0 ? (
				<div>
					<div className="cart">
						<h1 className="cart__title">Shopping cart</h1>
						<div className="cart__top">
							<div className="cart__item">Item</div>
							<div className="cart__price">Price</div>
							<div className="cart__qty">Qty</div>
							<div className="cart__total">Total</div>
							<div className="cart__delete">Remove</div>
						</div>
						<div className="cart__body">
							{cart.map((data: IProducts) => (
								<>
									<div className="cart__top">
										<div className="cartMain__itemDesc">
											<div className="cartItem__description">
												<h2 className="cartItem__name">
													Brand / Item {data.brand}
												</h2>
												<div className="cartItem__color">
													Color: <span>Black</span>
												</div>
												<div className="cartItem__size">
													Size: <span>L</span>
												</div>
											</div>
										</div>
									</div>
									<div className="cart__merge">
										<div className="cartMain__bottom">
											<div className="cart__item">Item</div>
											<div className="cart__price">Price</div>
											<div className="cart__qty">Qty</div>
											<div className="cart__total">Total</div>
											<div className="cart__delete">Remove</div>
										</div>
										<CartItem {...data} key={data.id} />
									</div>
								</>
							))}
						</div>
					</div>

					<div className="subtotal">
						<div className="subtotal__price">
							Total Price: $<span>{totalPrice.toFixed(2)}</span>
						</div>
						<button className="subtotal__button btn">Checkout</button>
					</div>
				</div>
			) : (
				<div className="cart__isEmpty">Your cart is empty!</div>
			)}
		</div>
	);
};

export default Cart;

{
	/* <div className="cartMain__top"> */
}
{
	/* <div className="cart__item">Item</div> */
}
