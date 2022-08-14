import { Button as CustomButton } from '@mui/material';

import './Button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  variant?:'contained'
  | 'outlined'
  | 'text'
  | string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | string;
  className?:
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <CustomButton >
      {children}
    </CustomButton>
  );
}

export default Button;
