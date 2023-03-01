const Modal = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-6 shadow-lg">{children}</div>
    </div>
  );
};

export default Modal;
