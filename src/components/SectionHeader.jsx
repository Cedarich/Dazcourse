import React from "react";
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/learning");
  };

  return (
    <div className="flex justify-between items-center  mx-auto">
      <h4 className="text-[24px] font-bold">Continue Learning</h4>
      <span
        onClick={handleNavigate}
        className="text-[#7a56d7] cursor-pointer text[14px]"
      >
        See All
      </span>
    </div>
  );
};

export default YourComponent;
