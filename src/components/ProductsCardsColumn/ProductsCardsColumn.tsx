import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useAppSelector } from '../../utilities';
import { ProductCard } from '../ProductCard';

import { notProductsStyled } from './styled.ts';

export const ProductsCardsColumn: React.FC = () => {
  const { products } = useAppSelector(state => state.productsSlice);

  return (
    <Grid item xs={9}>
      {!products.length ? (
        <Typography variant="h6" component="h2" sx={notProductsStyled}>
          Товары в корзине отсутствуют!
        </Typography>
      ) : (
        products.map(prod => {
          return (
            <ProductCard
              key={prod.id}
              id={prod.id}
              img={prod.image}
              title={prod.title}
              desc={prod.description}
              price={prod.price}
              count={prod.count}
              totalPrice={prod.totalPrice}
            />
          );
        })
      )}
    </Grid>
  );
};
