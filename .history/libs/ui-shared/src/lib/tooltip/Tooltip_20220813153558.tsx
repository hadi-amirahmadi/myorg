import { Tooltip as CutomTooltip } from '@mui/material';
import Button from '../button/Button';

import './Tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {
  children: React.ReactNode;
  title: React.ReactNode;
  arrow?: boolean;
  placement?: 	'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top'
}

export function Tooltip(props: TooltipProps) {
  return (
    <CutomTooltip title="Delete">
      <Button>im tooltip</Button>
    </CutomTooltip>
  );
}

export default Tooltip;
