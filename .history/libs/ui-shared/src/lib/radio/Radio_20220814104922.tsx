import { Radio as CutomRadio } from '@mui/material';

import './Radio.css';

/* eslint-disable-next-line */
export interface RadioProps {
  value?: string;
  checked?: boolean;
  color?: 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  disabled?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'small'
}

export function Radio(props: RadioProps) {
  const { value, checked, color; disa} = props;
  return (
    <CutomRadio />
  );
}

export default Radio;
