import { styled } from '@stitches/react';

export const MainContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  gap: '.75rem',

  borderRadius: '8px',

  padding: '1rem',
  marginBottom: '.75rem',

  background: '$gray500',

});

export const CheckboxContainer = styled('div', {
  width: '16px',
  height: '16px',
});

export const InputCheckbox = styled('input', {
  appearance: 'none',

  cursor: 'pointer',

  borderRadius: '50%',
  width: '16px',
  height: '16px',

  border: '2px solid $blue',

  transition: '.600s all linear',
  marginRight: '5px',

  position: 'relative',
  top: '2px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:checked': {
    border: '2px solid $purple',
    background: '$purple',
  },

  '&:checked&:before': {
    content: ' ',
    width: '16px',
    height: '16px',
    color: '#fff',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'7\' viewBox=\'0 0 10 7\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z\' fill=\'%23F2F2F2\'/%3E%3C/svg%3E")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
});

export const TextTask = styled('span', {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  textAlign: 'start',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '50px',
  flex: '1',

  display: 'inline-block',

  variants: {
    Text: {
      sublinhado: {
        textDecoration: 'line-through',
        color: '$gray300',
      },
      normal: {
        textDecoration: 'none',
        color: '$gray100',
      },
    },
  },
});

export const DeleteButton = styled('button', {
  padding: '5px',

  border: 'none',
  borderRadius: '8px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: '$gray300',
  backgroundColor: 'transparent',

  cursor: 'pointer',

  fontSize: '1.1rem',

  '&:hover': {
    color: '$danger',
    backgroundColor: '$gray400',
  },
});
