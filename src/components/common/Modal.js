import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function CommonModal({ open, onClose, children }) {
  return (
    <Modal open={open} onClose={() => onClose()}>
      {children}
    </Modal>
  );
}
