import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProducts } from '../../@types/products.type';

export const fetchProducts = createAsyncThunk<
	IProducts[],
	number | null,
	{ rejectValue: string }
>(
	'products/fetchProducts',
	async (brand: number | null, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<IProducts[]>(
				`http://localhost:3001/products?${
					null !== brand ? `brand=${brand + 1}` : ''
				}`
			);
			return data;
		} catch (err: any) {
			return rejectWithValue(err.message);
		}
	}
);

type productsState = {
	products: IProducts[];
	loading: boolean;
	error: string | null | undefined;
};

const initialState: productsState = {
	products: [],
	loading: true,
	error: null
};

const productsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {
		addProducts: (state: productsState, action: PayloadAction<IProducts[]>) => {
			state.products = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
			state.products = [];
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.products = [];
		});
	}
});

export default productsSlice.reducer;
export const { addProducts } = productsSlice.actions;
