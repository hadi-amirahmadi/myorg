import './Modal.css';

/* eslint-disable-next-line */
export interface ModalProps {}

export function Modal(props: ModalProps) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
  );
}

export default Modal;
