import React from "react";

interface NotificationProps {
  type: "info" | "success" | "warning" | "error";
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  onClose,
}) => {
  const typeStyles = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  };

  return (
    <div
      className={`fixed top-4 right-0 transform px-6 py-2 border rounded shadow-lg mx-2 md:max-w-xl ${typeStyles[type]}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="font-semibold">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 inline-flex items-center justify-center p-1 rounded hover:bg-opacity-50 focus:outline-none"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            {/* Path for "x" icon */}
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notification;
