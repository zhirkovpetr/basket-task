import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { totalsPriceAllProducts } from '../../store';
import { pluralize, useAppDispatch, useAppSelector } from '../../utilities';

import {
  cardStyled,
  gridBasketStyled,
  gridBasketTitleStyled,
  gridPriceStyled,
  gridStyled,
  gridTitleStyled,
  gridTotalCostStyled,
  gridTotalsPriceStyled,
  typographyStyled,
} from './styled.ts';

export const TotalColumn: React.FC = () => {
  const { totalsPrice, products } = useAppSelector(state => state.productsSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(totalsPriceAllProducts());
  }, [dispatch, products]);

  return (
    <Grid item xs={3} sx={gridStyled}>
      <Paper
        sx={{
          ['@media (max-width: 900px)']: {
            display: 'flex',
          },
        }}
      >
        <Card sx={cardStyled}>
          <Grid item sx={gridBasketStyled}>
            <Typography variant="h6" component="h2" sx={gridBasketTitleStyled}>
              Ваша корзина
            </Typography>
            <Grid item sx={gridTotalsPriceStyled}>
              <Typography variant="body2" component="p" sx={typographyStyled}>
                {pluralize(products.length, ['товар', 'товара', 'товаров'])}
              </Typography>
              <Typography variant="body2" component="p" sx={typographyStyled}>
                {totalsPrice}₽
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={gridTotalCostStyled}>
            <Typography variant="h6" component="h2" sx={gridPriceStyled}>
              Общая стоимость
            </Typography>
            <Typography variant="h6" component="h2" sx={gridTitleStyled}>
              {totalsPrice}₽
            </Typography>
          </Grid>
        </Card>
      </Paper>
    </Grid>
  );
};
