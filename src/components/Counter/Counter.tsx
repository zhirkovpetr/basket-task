import React, { ChangeEvent } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { PayloadAction } from '@reduxjs/toolkit';

import { changeProductCount, minusQuantity, plusQuantity } from '../../store';
import { useAppDispatch } from '../../utilities';

import './Counter.css';

import {
  buttonStyled,
  centerStyled,
  gridBlockStyled,
  gridContainerStyled,
  textFieldStyled,
  typographyStyled,
} from './styled.ts';

interface ICounter {
  id: number;
  count: number;
  price: number;
  totalPrice: number;
}

export const Counter: React.FC<ICounter> = ({ id, count, totalPrice, price }) => {
  const dispatch = useAppDispatch();
  const onMinusHandler = (): PayloadAction<{ id: number }> => dispatch(minusQuantity({ id }));
  const onPlusHandler = (): PayloadAction<{ id: number }> => dispatch(plusQuantity({ id }));
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (+e.currentTarget.value > 0 && +e.currentTarget.value < 11) {
      dispatch(changeProductCount({ id, count: +e.currentTarget.value }));
    }
  };

  return (
    <Grid item sx={gridBlockStyled}>
      <Grid container sx={gridContainerStyled}>
        <Button
          size="small"
          color="primary"
          aria-label="add"
          variant="contained"
          sx={buttonStyled}
          onClick={onMinusHandler}
          disabled={count < 2}
        >
          <RemoveIcon />
        </Button>
        <TextField
          id="mui-theme-provider-standard-input"
          size="small"
          sx={textFieldStyled}
          inputProps={{
            style: centerStyled,
          }}
          value={count}
          onChange={onChangeHandler}
        />
        <Button
          size="small"
          color="primary"
          aria-label="add"
          variant="contained"
          sx={buttonStyled}
          onClick={onPlusHandler}
          disabled={count > 9}
        >
          <AddIcon />
        </Button>
      </Grid>
      {+price !== +totalPrice && (
        <Typography variant="subtitle2" color="textSecondary" sx={typographyStyled} className="typographyPrice">
          {price}₽ / шт
        </Typography>
      )}
    </Grid>
  );
};
