import React from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ open, children, onClose, modalPosition }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0">
      <div className="w-screen h-screen bg-backdrop">
        <div className={`bg-white text-black p-10 ${modalPosition}`}>
          <div className="absolute -top-1.5 -right-9">
            <button className="text-white" onClick={onClose}>
              <FiX size={30} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
// flex justify-end
