import { combineReducers, configureStore } from '@reduxjs/toolkit';

import productsSlice from './products/products-slice.ts';

export const rootReducer = combineReducers({
  productsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
