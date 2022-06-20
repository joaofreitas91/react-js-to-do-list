import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$gray500',
    fontFamily: 'Inter, sans-serif',
  },
});
