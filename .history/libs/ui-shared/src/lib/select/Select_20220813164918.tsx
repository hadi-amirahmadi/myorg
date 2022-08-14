import { Box, FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Select;
