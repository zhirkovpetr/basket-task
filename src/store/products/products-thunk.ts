import { createAsyncThunk } from '@reduxjs/toolkit';

import { productsAPI } from '../../api/api.ts';
import { errorMessage } from '../../utilities';

import { IProducts } from './products-slice.ts';

export const getProducts = createAsyncThunk<IProducts[]>(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await productsAPI.getProducts();
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
