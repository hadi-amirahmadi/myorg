import { DialogContent, Dialog, DialogTitle } from '@mui/material';
import './Modal.css';

/* eslint-disable-next-line */
export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  className
}

export function Modal(props: ModalProps) {
  const { open, handleClose, title, children, className } = props;
  return (
    <Dialog onClose={handleClose} open={open} className={className}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      </Dialog>
  );
}

export default Modal;
