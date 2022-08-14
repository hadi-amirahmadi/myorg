import './Badge.css';

/* eslint-disable-next-line */
export interface BadgeProps {
  color?: 	'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
}

export function Badge(props: BadgeProps) {
  return (
    <div>
      <h1>Welcome to Badge!</h1>
    </div>
  );
}

export default Badge;
