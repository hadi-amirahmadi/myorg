import {} from '@mui'

import './Tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {}

export function Tooltip(props: TooltipProps) {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Tooltip;
