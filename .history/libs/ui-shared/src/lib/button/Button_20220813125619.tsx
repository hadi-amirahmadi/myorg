import { Button as CustomButton } from '@mui/material';

import './Button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  varian
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
