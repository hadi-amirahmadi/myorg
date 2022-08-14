import { Button as CustomButton } from '@mui/material';

import './Button.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { children }
  return (
    <CustomButton>

    </CustomButton>
  );
}

export default Button;
