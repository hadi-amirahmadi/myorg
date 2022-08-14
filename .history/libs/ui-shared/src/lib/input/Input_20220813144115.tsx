import { TextField } from '@mui/material';
import './Input.css';

/* eslint-disable-next-line */
export interface InputProps {
  value: string | number;
  onChange: (event: object) => void;
  type: string;
  placeholder?: string;
}

export function Input(props: InputProps) {
  return (
    <TextField label="Outlined" variant="outlined" />
  );
}

export default Input;
