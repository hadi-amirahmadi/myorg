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
  size?: 'medium' | 'small';
  className?: string;
}

export function Radio(props: RadioProps) {
  const { value, checked, color, disabled, name, size, onChange, className } = props;
  return (
    <CutomRadio className={} value={value} color={color} name={name} onChange={onChange} size={size} disabled={disabled} checked={checked} />
  );
}

export default Radio;
