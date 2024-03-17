import { CSSProperties } from 'react';

export const gridBlockStyled = {
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto 0',
  alignItems: 'center',
  position: 'relative',
};
export const gridContainerStyled = {
  display: 'block',
  margin: 'auto 0',
  textAlign: 'center',
  marginTop: 'auto',
  ['@media (max-width: 815px)']: {
    textAlign: 'left',
  },
};
export const textFieldStyled = {
  maxWidth: '58px',
  maxHeight: '38px',
  minWidth: '58px',
  minHeight: '38px',
};
export const buttonStyled = {
  maxWidth: '38px',
  maxHeight: '38px',
  minWidth: '38px',
  minHeight: '38px',
  margin: 'auto 0',
};
export const typographyStyled = {
  position: 'absolute',
  top: '38px',
  ['@media (max-width: 973px)']: {
    display: 'none',
  },
};
export const centerStyled: CSSProperties = { textAlign: 'center' };
