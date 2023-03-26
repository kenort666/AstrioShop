import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '../../@types/products.type';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

interface cartItems {
	cart: IProducts[];
	totalPrice: number;
	totalValue: number;
}

const initialState: cartItems = {
	cart: [],
	totalPrice: 0,
	totalValue: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: cartItems, action: PayloadAction<IProducts>) => {
			const findItem = state.cart.find((item) => item.id === action.payload.id);

			if (findItem) {
				findItem.quantity++;
			} else {
				state.cart.push({
					...action.payload,
					quantity: 1
				});
			}

			state.totalPrice = calcTotalPrice(state.cart);
		},
		removeFromCart: (state: cartItems, action: PayloadAction<IProducts>) => {
			state.cart = state.cart.filter((obj) => obj.id !== action.payload.id);

			state.totalPrice = calcTotalPrice(state.cart);
		},
		minusItem: (state: cartItems, action: PayloadAction<number>) => {
			let findId = state.cart.find((item) => item.id === action.payload);

			findId && findId.quantity--;

			if (findId?.quantity === 0)
				state.cart = state.cart.filter((obj) => obj.id !== action.payload);

			state.totalPrice = calcTotalPrice(state.cart);
		}
	}
});

export const selectCartData = (state: cartItems) => state;

export const { addToCart, removeFromCart, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
