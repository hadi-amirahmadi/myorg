import { Paper as CustomPaper } from '@mui/material';
import './Paper.css';

/* eslint-disable-next-line */
export interface PaperProps {
  children?: React.React
}

export function Paper(props: PaperProps) {
  return (
    <CustomPaper />
  );
}

export default Paper;
