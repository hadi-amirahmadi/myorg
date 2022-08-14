import { Paper as CustomPaper } from '@mui/material';
import './Paper.css';

/* eslint-disable-next-line */
export interface PaperProps {
  children?: React.ReactNode;
  //shadow
  elevation?: number;
  //radius
  square?: boolean;
  variant?: 'elevation' | 'outlined';
}

export function Paper(props: PaperProps) {
  const { children, elevation, square, variant } = props;
  return (
    <CustomPaper>
  );
}

export default Paper;
