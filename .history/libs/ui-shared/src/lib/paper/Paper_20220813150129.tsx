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
  className?: string; 
}

export function Paper(props: PaperProps) {
  const { children, elevation, square, variant, className } = props;
  return (
    <CustomPaper className={className} >
      {children}
    </CustomPaper>
  );
}

export default Paper;
