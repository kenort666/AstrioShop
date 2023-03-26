import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { brandState, IBrands } from '../../@types/brands.types';

export const fetchBrands = createAsyncThunk<
	IBrands[],
	undefined,
	{ rejectValue: string }
>('brands/fetchBrands', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<IBrands[]>('http://localhost:3001/brands');

		return data;
	} catch (err: any) {
		return rejectWithValue(err.message);
	}
});

const initialState: brandState = {
	brands: [],
	loading: false,
	error: null
};

const brandsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {
		addBrands: (state: brandState, action: PayloadAction<IBrands[]>) => {
			state.brands = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBrands.pending, (state: brandState) => {
			state.loading = true;
		});
		builder.addCase(
			fetchBrands.fulfilled,
			(state: brandState, action: PayloadAction<IBrands[]>) => {
				state.brands = action.payload;
				state.loading = false;
			}
		);
		builder.addCase(
			fetchBrands.rejected,
			(state: brandState, action: PayloadAction<any>) => {
				state.error = action.payload;
				state.loading = false;
			}
		);
	}
});

export default brandsSlice.reducer;
export const { addBrands } = brandsSlice.actions;
