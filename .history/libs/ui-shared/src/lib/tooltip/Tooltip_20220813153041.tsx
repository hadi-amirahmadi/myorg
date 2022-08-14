import { Tooltip as CutomTooltip } from '@mui/material';

import './Tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {}

export function Tooltip(props: TooltipProps) {
  return (
    <CutomTooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </CutomTooltip>
  );
}

export default Tooltip;
