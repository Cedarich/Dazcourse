import React from "react";

const Recommendation = () => {
  return (
    <div className="flex justify-between items-center mx-auto py-1 ">
      {/* Smooth scaling effect on hover */}
      <h4 className="text-[24px] font-bold transition-transform duration-300 transform hover:scale-105">
        Recommendations
      </h4>
    </div>
  );
};

export default Recommendation;
