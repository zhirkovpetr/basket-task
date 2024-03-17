export const paperStyled = { margin: '0 0 5px 0' };
export const cardsStyled = { display: 'flex', justifyContent: 'space-around' };
export const gridStyled = { display: 'flex' };
export const gridMediaStyled = {
  minWidth: '68px',
  maxWidth: '68px',
  minHeight: '75px',
  maxHeight: '75px',
  display: 'flex',
};
export const cardMediaStyled = {
  margin: 'auto',
  width: '80px',
  height: '70px',
  maxWidth: '100%',
  objectFit: 'contain',
  alignItems: 'center',
};
export const gridDescriptionStyled = {
  width: '400px',
  display: 'block',
  textAlign: 'left',
  margin: 'auto 0',
  ['@media (max-width: 949px)']: {
    display: 'inline-block',
    flexWrap: 'wrap',
  },
};
export const titleStyled = { fontSize: '15px', fontWeight: '600', lineHeight: '18px' };
export const gridTotalPriceStyled = { display: 'flex' };
export const typographyStyled = {
  backgroundColor: '#1f8ee5',
  color: 'white',
  borderRadius: '3px',
  margin: 'auto 0',
};
export const buttonStyled = {
  maxWidth: '38px',
  maxHeight: '38px',
  minWidth: '38px',
  minHeight: '38px',
  margin: 'auto 0',
};
export const typographyDeskStyled = {
  fontSize: '12px',
  lineHeight: '15px',
};

export const gridItemStyled = {
  display: 'flex',
  width: '300px',
  justifyContent: 'space-around',
  ['@media (max-width: 815px)']: {
    display: 'block',
    justifyContent: 'center',
    margin: '0 auto',
  },
};
