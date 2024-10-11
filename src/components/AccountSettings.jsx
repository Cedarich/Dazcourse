import React, { useState, useEffect, useContext } from "react";
import LogoutModal from "./LogoutModal"; // Adjust the import path as needed
import { ModalContext } from "../services/ModalContext"; // Import ModalContext

const Settings = () => {
  const { isLogoutModalOpen, openLogoutModal, closeLogoutModal } =
    useContext(ModalContext); // Get modal context values
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for fade-in effect

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log("Form submitted");
    // Add logic for handling the password change here
  };

  return (
    <div
      className={`flex flex-col p-2 md:flex-row max-w-[736px] w-full transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex-1 mb-6 md:mr-4">
        <h2 className="text-2xl font-bold mb-4 py-2">Settings</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg transition-transform duration-700 ease-in-out hover:shadow-xl"
        >
          <h4 className="text-[24px] font-semibold mb-2">Account</h4>
          <p className="mb-4">
            Edit your account settings and change your password
          </p>

          {/* Email field */}
          <div className="mb-4 border-t border-gray-200 py-2">
            <label
              className="block text-sm text-black font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="godwinekoh@gmail.com"
              className="mt-1 block w-full rounded-md shadow-sm p-2 bg-[#f4f4f9] border-gray-300 focus:outline-none focus:ring-4 transition-all duration-300"
              readOnly // Prevent editing
            />
          </div>

          {/* Current Password field */}
          <div className="mb-4">
            <label
              className="block text-sm text-black font-bold"
              htmlFor="currentPassword"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Enter current password"
              className="mt-1 block w-full rounded-md shadow-sm p-2 bg-[#f4f4f9] border-gray-300 focus:outline-none focus:ring-4 transition-all duration-300"
              required // Required for better validation
            />
          </div>

          {/* New Password field */}
          <div className="mb-4">
            <label
              className="block text-sm text-black font-bold"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              className="mt-1 block w-full rounded-md shadow-sm p-2 bg-[#f4f4f9] border-gray-300 focus:outline-none focus:ring-4 transition-all duration-300"
              required // Required for better validation
            />
          </div>

          {/* Confirm Password field */}
          <div className="mb-4 border-b border-gray-200 py-2">
            <label
              className="block text-sm text-black font-bold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-type new password"
              className="mt-1 block w-full rounded-md shadow-sm p-2 bg-[#f4f4f9] border-gray-300 focus:outline-none focus:ring-4 transition-all duration-300"
              required // Required for better validation
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-red-500 text-sm md:text-base md:py-2 md:px-4"
          >
            Change Password
          </button>
        </form>
      </div>

      {/* Account options */}
      <div className="md:w-1/3 px-6 mt-6 py-6 transition-opacity duration-700 ease-in-out hover:opacity-90">
        <h3 className="text-[24px] font-bold mb-4">Account</h3>
        <ul className="space-y-2">
          <li>
            <button className="text-gray-600 hover:underline transition-all duration-300 ease-in-out hover:text-gray-800">
              Profile
            </button>
          </li>
          <li>
            <button className="text-gray-500 hover:underline transition-all duration-300 ease-in-out hover:text-gray-800">
              Notification
            </button>
          </li>
          <li>
            <button className="text-gray-500 hover:underline transition-all duration-300 ease-in-out hover:text-gray-800">
              Payment Methods
            </button>
          </li>
          <li>
            <button className="text-gray-500 hover:underline transition-all duration-300 ease-in-out hover:text-gray-800">
              Privacy
            </button>
          </li>
          <li>
            <button
              onClick={openLogoutModal}
              className="text-gray-500 hover:underline transition-all duration-300 ease-in-out hover:text-gray-800"
            >
              Close Account
            </button>
          </li>
        </ul>
      </div>

      {/* Logout Modal */}
      {isLogoutModalOpen && <LogoutModal onClose={closeLogoutModal} />}
    </div>
  );
};

export default Settings;
