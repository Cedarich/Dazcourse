import React from "react";

const ResumeButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#5933d2] text-sm md:text-base"
    >
      Resume
    </button>
  );
};

export default ResumeButton;
