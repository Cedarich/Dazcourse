import React from "react";

const Topheader = () => {
  return (
    <div className="flex justify-between items-center mx-auto py-2 px-2 ">
      {/* Smooth scaling effect on hover */}
      <h4 className="text-[24px] font-bold transition-transform duration-300 transform hover:scale-105">
        Top Course
      </h4>
    </div>
  );
};

export default Topheader;
