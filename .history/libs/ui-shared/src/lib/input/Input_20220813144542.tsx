import { TextField } from '@mui/material';
import './Input.css';

/* eslint-disable-next-line */
export interface InputProps {
  value: string | number;
  onChange: (event: object) => void;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  size?: 'medium' | 'small';
}

export function Input(props: InputProps) {
  const { onChange, value, type, name, label, size, disabled, placeholder} = props;
  return (
    <TextField label={label} onChange={onChange} type={type} size={size} placeholder={placeholder} name={name} value= />
  );
}

export default Input;
