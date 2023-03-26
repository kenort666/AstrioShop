export interface IBrands {
	id: number;
	title: string;
	sort: string;
	code: string;
}

export interface brandState {
	brands: IBrands[];
	loading: boolean;
	error: null | string;
}
