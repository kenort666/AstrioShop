interface RegularPrice {
	currency: string;
	value: number;
}

export interface IProducts {
	type?: string;
	id: number;
	sku?: string;
	title: string;
	regular_price: RegularPrice;
	image: string;
	brand: number;
	quantity: number;
}
