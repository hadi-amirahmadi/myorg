import { DialogContent, Dialog, DialogTitle } from '@mui/material';
import './Modal.css';

/* eslint-disable-next-line */
export interface ModalProps {
  open: b
}

export function Modal(props: ModalProps) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent>

      </DialogContent>
      </Dialog>
  );
}

export default Modal;
