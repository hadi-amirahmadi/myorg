import { Tooltip as CutomTooltip } from '@mui/material';
import Button from '../button/Button';

import './Tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {
  children: ReactNode;
  title: Node;
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
  const { children, title, arrow, placement } = props;
  return (
    <CutomTooltip title={title} placement={placement} arrow={arrow}>
      <Button>{children}</Button>
    </CutomTooltip>
  );
}

export default Tooltip;
