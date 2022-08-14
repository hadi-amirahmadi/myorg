import { DialogContent, Dialog, DialogTitle, DialogActions } from '@mui/material';
import './Modal.css';

/* eslint-disable-next-line */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';
  scroll?: 'body'
  | 'paper';
  action
}

export function Modal(props: ModalProps) {
  const { open, onClose, title, children, className, maxWidth, action } = props;
  return (
    <Dialog onClose={onClose} open={open} className={className} maxWidth={maxWidth}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      <DialogActions>
        {action}
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
