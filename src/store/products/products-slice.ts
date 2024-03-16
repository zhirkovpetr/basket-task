import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProducts } from './products-thunk.ts';

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count: number;
}

export interface IProductsSlice extends IProducts {
  totalPrice: number;
}

interface IProductsSliceState {
  products: IProductsSlice[];
  totalsPrice: number;
  isLoading: boolean;
  error: string | undefined;
}

export const initialState: IProductsSliceState = {
  products: [],
  totalsPrice: 0,
  isLoading: true,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    minusQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const product: IProductsSlice | undefined = state.products.find(
        p => p.id === action.payload.id,
      );
      if (product) {
        product.count = product.count - 1;
      }
    },
    plusQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const product: IProductsSlice | undefined = state.products.find(
        p => p.id === action.payload.id,
      );
      if (product) {
        product.count = product.count + 1;
      }
    },
    totalPriceProduct: (state, action: PayloadAction<{ id: number }>) => {
      const product: IProductsSlice | undefined = state.products.find(
        p => p.id === action.payload.id,
      );
      if (product) {
        product.totalPrice = product.count * product.price;
      }
    },
    totalsPriceAllProducts: state => {
      return {
        ...state,
        totalsPrice: state.products.reduce((acc, cur) => acc + cur.totalPrice, 0),
      };
    },

    removeProduct: (state, action: PayloadAction<{ id: number }>) => ({
      ...state,
      products: state.products.filter(p => p.id !== action.payload.id),
    }),
    changeProductCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      const product: IProductsSlice | undefined = state.products.find(
        p => p.id === action.payload.id,
      );
      if (product) {
        product.count = action.payload.count;
      }
    },
    setError: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      error: action.payload.error,
    }),
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.products = [];
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.map(p => ({ ...p, totalPrice: p.price * p.count }));
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = action.error.message;
    });
  },
});

export const {
  minusQuantity,
  plusQuantity,
  totalPriceProduct,
  totalsPriceAllProducts,
  removeProduct,
  changeProductCount,
  setError,
} = productsSlice.actions;
export default productsSlice.reducer;
