import { FormControlLabel, Radio as CutomRadio } from '@mui/material';

import './Radio.css';

/* eslint-disable-next-line */
export interface RadioProps {
  value
}

export function Radio(props: RadioProps) {
  return (
    <FormControlLabel value="female" control={<CutomRadio />} label="Female" />
  );
}

export default Radio;
