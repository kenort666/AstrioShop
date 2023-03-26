import { IProducts } from './../@types/products.type';

export const calcTotalPrice = (cart: IProducts[]) => {
	return cart.reduce((sum, obj) => {
		return obj.regular_price.value * obj.quantity + sum;
	}, 0);
};
