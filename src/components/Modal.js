import React from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ open, children, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-backdrop">
        <div className="modal-box">
          <div className="flex justify-end">
            <button className="modal-btn" onClick={onClose}>
              <FiX />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
