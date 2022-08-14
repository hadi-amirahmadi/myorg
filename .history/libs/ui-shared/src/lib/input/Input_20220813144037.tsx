import { TextField } from '@mui/material';
import './Input.css';

/* eslint-disable-next-line */
export interface InputProps {
  value: string | number;
  onChange: (event ) => void
}

export function Input(props: InputProps) {
  return (
    <TextField label="Outlined" variant="outlined" />
  );
}

export default Input;
