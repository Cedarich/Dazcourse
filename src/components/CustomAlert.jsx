import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="rounded-lg bg-white shadow-lg border-l-4 border-yellow-400 p-4 mb-4 flex items-start">
      <div className="flex-shrink-0">
        <ExclamationTriangleIcon
          aria-hidden="true"
          className="h-6 w-6 text-yellow-600"
        />
      </div>
      <div className="ml-3 flex-grow">
        <h3 className="text-base font-semibold text-yellow-800">
          Attention Needed
        </h3>
        <p className="mt-1 text-sm text-yellow-700">{message}</p>
      </div>
      <div className="ml-3 flex-shrink-0">
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-yellow-200 transition-colors focus:outline-none"
          aria-label="Close alert"
        >
          <XMarkIcon className="h-5 w-5 text-yellow-600" />
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
