import { FormControlLabel, Radio as CutomRadio } from '@mui/material';

import './Radio.css';

/* eslint-disable-next-line */
export interface RadioProps {
  value?: string
}

export function Radio(props: RadioProps) {
  return (
    <FormControlLabel value="female" control={<CutomRadio />
  );
}

export default Radio;
