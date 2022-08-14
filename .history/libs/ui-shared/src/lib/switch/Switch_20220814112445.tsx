import { Switch as CustomSwitch } from '@mui/material';

import './Switch.css';

/* eslint-disable-next-line */
export interface SwitchProps {
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'small',
  className
}

export function Switch(props: SwitchProps) {
  const { value, checked, color, disabled, size, onChange } = props;
  return (
    <CustomSwitch value={value} checked={checked} color={color} disabled={disabled} size={size} onChange={onChange} />
  );
}

export default Switch;
