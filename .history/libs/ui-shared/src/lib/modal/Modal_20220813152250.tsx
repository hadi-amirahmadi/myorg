import { DialogContent, Dialog, DialogTitle } from '@mui/material';
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
  scroll
}

export function Modal(props: ModalProps) {
  const { open, onClose, title, children, className } = props;
  return (
    <Dialog onClose={onClose} open={open} className={className}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      </Dialog>
  );
}

export default Modal;
