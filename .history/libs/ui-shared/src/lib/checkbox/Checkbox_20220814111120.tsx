import './Checkbox.css';

/* eslint-disable-next-line */
export interface CheckboxProps {
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
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'medium' | 'small'
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div>
      <h1>Welcome to Checkbox!</h1>
    </div>
  );
}

export default Checkbox;
