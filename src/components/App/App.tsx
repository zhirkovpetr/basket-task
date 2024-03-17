import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { getProducts } from '../../store';
import { useAppDispatch, useAppSelector } from '../../utilities';
import { ProductsCardsColumn } from '../ProductsCardsColumn';
import { TotalColumn } from '../TotalColumn';

import { appGridItemStyled, appStyled, boxStyled, gridBasketTitleStyled, topographyStyled } from './styled.ts';

export const App: React.FC = () => {
  const { isLoading, error } = useAppSelector(state => state.productsSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box sx={boxStyled}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" component="h2" sx={topographyStyled}>
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={appStyled}>
      <Grid item sx={appGridItemStyled}>
        <Typography variant="h6" component="h2" sx={gridBasketTitleStyled}>
          Ваша корзина
        </Typography>
        <Grid container spacing={2}>
          <ProductsCardsColumn />
          <TotalColumn />
        </Grid>
      </Grid>
    </Box>
  );
};
