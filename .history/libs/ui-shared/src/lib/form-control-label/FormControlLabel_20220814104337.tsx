import { FormControlLabel as CustomForm } from '@mui/material';

import './FormControlLabel.css';

/* eslint-disable-next-line */
export interface FormControlLabelProps {
  control: React.ReactElement;
  label?: string;
  value?: string;
  disabled?: boolean
}

export function FormControlLabel(props: FormControlLabelProps) {
  return (
    <CustomForm />
  );
}

export default FormControlLabel;
