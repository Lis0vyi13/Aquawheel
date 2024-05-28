import { useEffect, useState } from "react";

const Modal = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const visibilityTime = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(visibilityTime);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center justify-end">
      <div
        className={`relative text-[20px] bg-main text-white p-6 rounded-lg shadow-lg ${
          isVisible ? "animate-slideIn" : "animate-slideOut"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute text-[30px] -top-1 -mt-1 right-1 text-white hover:text-gray-300"
        >
          &times;
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
