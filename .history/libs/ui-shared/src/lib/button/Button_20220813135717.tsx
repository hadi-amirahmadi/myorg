import { Button as CustomButton } from '@mui/material';

import './Button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  variant?:'contained'
  | 'outlined'
  | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
  className?: string;
  size?: 'small'
  | 'medium'
  | 'large';
  onClick?: () => void;
  disa
}

export function Button(props: ButtonProps) {
  const { children, className, color, endIcon, size, startIcon, variant, onClick } = props;
  return (
    <CustomButton onClick={onClick} fullWidth className={className} color={color} variant={variant} size={size} startIcon={startIcon} endIcon={endIcon}>
      {children}
    </CustomButton>
  );
}

export default Button;
