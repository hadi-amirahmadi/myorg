import { DialogContent, Dialog, DialogTitle } from '@mui/material';
import './Modal.css';

/* eslint-disable-next-line */
export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { open, handleClose, title, children } = props;
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>

      </DialogContent>
      </Dialog>
  );
}

export default Modal;
