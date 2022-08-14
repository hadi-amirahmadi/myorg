import { Box, FormControl, InputLabel, SelectChangeEvent, Select as CustomSelect } from '@mui/material';
import './Select.css';

/* eslint-disable-next-line */
export interface SelectProps {
  value: string;
  variant?: 	'filled'
  | 'outlined'
  | 'standard';
  onChange?: (event: SelectChangeEvent) => void;
  children: React.ReactNode;
}

export function Select(props: SelectProps) {
  const { value, variant, onChange, children } = props;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={onChange}
        >
          {children}
        </CustomSelect>
      </FormControl>
    </Box>
  );
}

export default Select;
