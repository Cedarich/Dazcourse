import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ModalContext } from "../services/ModalContext"; // Import ModalContext

export default function LogoutModal() {
  const { isLogoutModalOpen, setLogoutModalOpen } = useContext(ModalContext); // Access ModalContext
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("userData"); // Clear user data from local storage
    setLogoutModalOpen(false); // Close the modal
    navigate("/"); // Navigate to the login page after logging out
  };

  return (
    <Dialog
      open={isLogoutModalOpen}
      onClose={() => setLogoutModalOpen(false)} // Close modal on outside click or escape
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out" />

      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        <DialogPanel className="relative bg-white rounded-xl p-6 shadow-xl max-w-sm w-[85%] sm:max-w-md sm:w-full sm:p-8">
          {/* Modal Content */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <ExclamationTriangleIcon
                  className="h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <DialogTitle
                as="h3"
                className="text-lg leading-6 font-semibold text-gray-900"
              >
                Confirm Logout
              </DialogTitle>
              <p className="mt-2 text-sm text-gray-600">
                Are you sure you want to log out? You will need to sign back in
                to access your account.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleLogout} // Use the handleLogout function
              className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-red-500 transition-colors duration-300"
            >
              Logout
            </button>
            <button
              type="button"
              onClick={() => setLogoutModalOpen(false)} // Close modal on Cancel
              className="inline-flex items-center justify-center rounded-lg bg-gray-200 text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-300 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
