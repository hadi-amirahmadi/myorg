import { Tooltip as CutomTooltip } from '@mui/material';
import Button from '../button/Button';

import './Tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {}

export function Tooltip(props: TooltipProps) {
  return (
    <CutomTooltip title="Delete">
      <Button></Button>
    </CutomTooltip>
  );
}

export default Tooltip;
