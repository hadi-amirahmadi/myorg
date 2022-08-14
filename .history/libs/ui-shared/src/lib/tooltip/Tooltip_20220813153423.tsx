import { Tooltip as CutomTooltip } from '@mui/material';
import Button from '../button/Button';

import './Tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {
  children: React.ReactElement;
  title: React.ReactNode;
  arrow?: boolean;
  placement?: 
}

export function Tooltip(props: TooltipProps) {
  return (
    <CutomTooltip title="Delete">
      <Button>im tooltip</Button>
    </CutomTooltip>
  );
}

export default Tooltip;
