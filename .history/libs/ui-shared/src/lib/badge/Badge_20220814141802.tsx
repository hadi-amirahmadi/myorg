impot

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
    <div>
      <h1>Welcome to Badge!</h1>
    </div>
  );
}

export default Badge;
