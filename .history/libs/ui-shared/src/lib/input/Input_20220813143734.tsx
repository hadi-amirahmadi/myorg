import { TextField } from '@mui/material';
import './Input.css';

/* eslint-disable-next-line */
export interface InputProps {}

export function Input(props: InputProps) {
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  );
}

export default Input;
