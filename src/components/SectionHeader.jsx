import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; // Importing an icon for interactivity

const YourComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/learning");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-2">
      {/* Smooth scaling effect on hover */}
      <h4 className="text-[24px] font-bold transition-transform duration-300 transform hover:scale-105 md:text-left mb-2 md:mb-0">
        Continue Learning
      </h4>

      <span
        onClick={handleNavigate}
        className="text-[#7a56d7] cursor-pointer text-[14px] flex items-center gap-1 transition-all duration-300 ease-in-out hover:text-[#6a5df7] group md:text-left"
      >
        See All
        <FiArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" />
        {/* Arrow icon will slightly move to the right on hover */}
        <span className="block h-[2px] bg-[#7a56d7] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        {/* Underline grows on hover */}
      </span>
    </div>
  );
};

export default YourComponent;
