import React from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ open, children, onClose, modalPosition }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0">
      <div className="w-screen h-screen bg-backdrop">
        <div className={`bg-white text-black p-5 ${modalPosition}`}>
          <div className="flex justify-end">
            <button className="bg-primary p-2 text-secondary" onClick={onClose}>
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
