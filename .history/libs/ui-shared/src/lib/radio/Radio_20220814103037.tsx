
import './Radio.css';

/* eslint-disable-next-line */
export interface RadioProps {}

export function Radio(props: RadioProps) {
  return (
    <FormControlLabel value="female" control={<Radio />} label="Female" />
  );
}

export default Radio;
