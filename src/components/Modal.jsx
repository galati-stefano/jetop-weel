import React from "react";
import { Fragment } from "react";

function Modal({ isOpen, onClose, children }) {
  const backdropClasses = isOpen
    ? "fixed inset-0 bg-gray-900 opacity-50 z-50"
    : "hidden";
  const modalClasses = isOpen ? "block" : "hidden";

  return (
    <Fragment>
      <div className={backdropClasses} onClick={onClose}></div>
      <div className={modalClasses + " fixed inset-0 z-50"}>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
