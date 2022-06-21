import { styled } from '@stitches/react';

export const MainContainer = styled('div', {
  maxWidth: '736px',
  width: '100%',

  marginTop: '-1.7rem',
});

export const FormInputTask = styled('form', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
});

export const InputTask = styled('input', {
  flex: '1',
  borderRadius: '8px',
  padding: '1rem',
  backgroundColor: '$gray500',
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.4rem',

  '&:focus': {
    outline: '1px solid $purpleDark',
  },
});

export const ButtonSendTask = styled('button', {
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',

  padding: '1rem',

  fontSize: '0.875rem',
  fontFamily: '700',

  border: 'none',
  borderRadius: '8px',

  backgroundColor: '$blueDark',

  '&:hover': {
    backgroundColor: '$blue',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$blueDark',
    opacity: '0.7',
  },
});

export const TasksContainer = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const HeaderTasks = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const TasksDescription = styled('span', {
  fontSize: '.875rem',
  fontWeight: '700',

  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  variants: {
    color: {
      blue: {
        color: '$blue',
      },
      purple: {
        color: '$purple ',
      },
    },
  },
});

export const TasksCounter = styled('strong', {
  backgroundColor: '$gray400',
  color: '$gray200',

  fontSize: '.75rem ',
  fontWeight: '700',

  borderRadius: '12px',
  padding: '2px 8px',
});

export const TasksListContainer = styled('div', {
  marginTop: '1.5rem',
  borderRadius: '8px',
  borderTop: '1px solid $gray400',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const NoTasks = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const NoTasksImageContainer = styled('div', {
  width: '56px',
  marginBottom: '1rem',
});

export const NoTasksText = styled('span', {
  display: 'block',
  color: '$gray300',
});
