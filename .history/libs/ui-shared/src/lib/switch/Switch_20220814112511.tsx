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
  className?: string;
}

export function Switch(props: SwitchProps) {
  const { value, checked, color, disabled, className size, onChange } = props;
  return (
    <CustomSwitch className={className} value={value} checked={checked} color={color} disabled={disabled} size={size} onChange={onChange} />
  );
}

export default Switch;
