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
  const { value, checked, color; disabled, name, size, onChange } = props;
  return (
    <CutomRadio value={value} color={color} name={name} onChange={onChange} size={size} disabled={disabled} checked={chec/>
  );
}

export default Radio;
