import { Checkbox as CustomCheckbox } from '@mui/material';

import './Checkbox.css';

/* eslint-disable-next-line */
export interface CheckboxProps {
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
  size?: 'medium' | 'small'
}

export function Checkbox(props: CheckboxProps) {
  const { value, checked, color, disabled, size, onChange } = props;
  return (
    <CustomCheckbox value={value} checked={checked} color />
  );
}

export default Checkbox;
