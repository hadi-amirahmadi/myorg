import './Switch.css';

/* eslint-disable-next-line */
export interface SwitchProps {
  value?: string;
  checked?: boolean;
  color?: 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'small'
}

export function Switch(props: SwitchProps) {
  const { value, checked, color, disabled, size, onChange } = props;
  return (
    <Swith
  );
}

export default Switch;
