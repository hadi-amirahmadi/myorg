import { Radio as CutomRadio } from '@mui/material';

import './Radio.css';

/* eslint-disable-next-line */
export interface RadioProps {
  value?: string;
  checked?: boolean;
  color
}

export function Radio(props: RadioProps) {
  return (
    <CutomRadio />
  );
}

export default Radio;
