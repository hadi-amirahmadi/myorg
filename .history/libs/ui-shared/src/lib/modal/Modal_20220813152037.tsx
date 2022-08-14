import { DialogContent, Dialog, DialogTitle } from '@mui/material';
import './Modal.css';

/* eslint-disable-next-line */
export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  title: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { open, handleClose, title } = props;
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        
      </DialogContent>
      </Dialog>
  );
}

export default Modal;
