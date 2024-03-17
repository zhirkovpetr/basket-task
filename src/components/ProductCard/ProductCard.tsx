import React, { useEffect } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { removeProduct, totalPriceProduct } from '../../store';
import { useAppDispatch } from '../../utilities';
import { Counter } from '../Counter';

import {
  buttonStyled,
  cardMediaStyled,
  cardsStyled,
  gridDescriptionStyled,
  gridItemStyled,
  gridMediaStyled,
  gridStyled,
  gridTotalPriceStyled,
  paperStyled,
  titleStyled,
  typographyDeskStyled,
  typographyStyled,
} from './styled.ts';

interface IProductCard {
  id: number;
  title: string;
  price: number;
  img: string;
  desc: string;
  count: number;
  totalPrice: number;
}

export const ProductCard: React.FC<IProductCard> = ({ id, desc, img, price, title, count, totalPrice }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(totalPriceProduct({ id }));
  }, [count, dispatch, id]);

  const onRemoveHandler = (): void => {
    dispatch(removeProduct({ id }));
  };

  return (
    <Paper sx={paperStyled}>
      <Card sx={cardsStyled}>
        <Grid item sx={gridMediaStyled}>
          <CardMedia component="img" alt="Product Image" image={img} title="Product Image" sx={cardMediaStyled} />
        </Grid>
        <Grid item sx={gridDescriptionStyled}>
          <Typography variant="h6" component="h2" sx={titleStyled}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" sx={typographyDeskStyled}>
            {desc}
          </Typography>
        </Grid>
        <Grid item sx={gridItemStyled}>
          <Grid item sx={gridTotalPriceStyled}>
            <Typography variant="h5" component="h2" sx={typographyStyled}>
              {totalPrice}₽
            </Typography>
          </Grid>
          <Counter id={id} count={count} price={price} totalPrice={totalPrice} />
          <Grid item sx={gridStyled}>
            <Button
              size="small"
              color="primary"
              aria-label="add"
              variant="contained"
              sx={buttonStyled}
              onClick={onRemoveHandler}
            >
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
};
