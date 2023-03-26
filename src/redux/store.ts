import { combineReducers, configureStore } from '@reduxjs/toolkit';
import brandsSlice from './slices/brandsSlice';
import cartSlice from './slices/cartSlice';
import productsSlice from './slices/productsSlice';

const rootReducer = combineReducers({
	brands: brandsSlice,
	products: productsSlice,
	cart: cartSlice
});

export const store = configureStore({
	reducer: rootReducer
});

export type typeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
