import { TextField } from '@mui/material';
import './Input.css';

/* eslint-disable-next-line */
export interface InputProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  size?: 'medium' | 'small';
  className?: string;
  variant?: 'filled'
  | 'outlined' 
  | 'standard'
}

export function Input(props: InputProps) {
  const { onChange, value, className, type, name, label, size, disabled, placeholder, variant } = props;
  
  return (
    <TextField
      className={className}
      label={label}
      onChange={onChange}
      type={type}
      size={size}
      placeholder={placeholder}
      name={name}
      value={value} 
      disabled={disabled} 
      variant
    />
  );
}

export default Input;
