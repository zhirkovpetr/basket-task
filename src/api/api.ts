import { IProducts } from '../store/products/products-slice.ts';

export const productsAPI = {
  async getProducts(): Promise<IProducts[]> {
    const res = await fetch('assets/data.json');
    return await res.json();
  },
};
