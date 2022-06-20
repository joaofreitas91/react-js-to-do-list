import { styled } from '@stitches/react';

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gray700',
  fontSize: '2rem',
  color: '$purple',
});

export const ImageContainer = styled('div', {
  width: '126px',
  height: '48px',

  marginTop: '72px',
  marginBottom: '80px',
});
