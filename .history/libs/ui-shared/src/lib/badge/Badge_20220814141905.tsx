import { Badge as CustomBadge } from '@mui/material'

import './Badge.css';

/* eslint-disable-next-line */
export interface BadgeProps {
  color?: 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  badgeContent: React.ReactNode;
  anchorOrigin?: { horizontal: 'left'
  | 'right', vertical: 'bottom'
  | 'top' },
  variant?: 'dot'
  | 'standard'
}

export function Badge(props: BadgeProps) {
  const { color, badgeContent, anchorOrigin, variant } = props;
  return (
    <CustomBadge badgeContent>

    </CustomBadge>
  );
}

export default Badge;
