import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$gray600',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
  },

  img: {
    display: 'block',
    width: '100%',
  },

  button: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
  },

  input: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
  },

});
