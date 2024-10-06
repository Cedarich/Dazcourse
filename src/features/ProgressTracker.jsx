import React from "react";

const ProgressTracker = () => {
  const progressData = [
    [0, 0, 2, 3, 5, 2, 0],
    [0, 4, 5, 2, 1, 1, 0],
    [0, 4, 2, 1, 4, 5, 0],
    [1, 0, 4, 3, 5, 0, 0],
    [0, 1, 3, 0, 5, 4, 0],
  ];

  const progressColors = [
    "bg-gray-100", // 0 - No progress
    "bg-[#d9f2ec]", // 1 - Low progress
    "bg-[#77cfbb]", // 2
    "bg-[#3caa91]", // 3
    "bg-[#3caa97]", // 4
    "bg-[#287161]", // 5 - Full progress
  ];

  return (
    <div className="max-w-sm p-4 rounded-md shadow-lg bg-gradient-to-r from-white via-[#f8f9fc] to-[#eef2f5] animate-slide-in-right">
      <div className="flex justify-between items-center mb-2 border-b-2 border-gray-200 py-2 mx-auto">
        <h2 className="text-[16px] font-bold">My Progress</h2>
        <span className="text-[16px] font-semibold text-[#91919b]">
          October &#x276F;
        </span>
      </div>

      {/* Grid for days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-sm text-[#babac9] font-semibold text-[14px]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Progress grid with transition, hover effect, and glow */}
      <div className="grid grid-cols-7 gap-2">
        {progressData.flat().map((progress, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-lg ${progressColors[progress]} transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_15px_5px_rgba(0,255,200,0.5)] cursor-pointer`}
          />
        ))}
      </div>

      {/* Legend with a glow effect */}
      <div className="flex justify-end items-end mt-4 gap-2">
        <span className="text-sm text-[#babac9]">Low</span>
        <div className="flex space-x-1">
          {progressColors.slice(1).map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-lg ${color} transition-all duration-500 hover:shadow-[0_0_15px_5px_rgba(0,255,150,0.5)]`}
            />
          ))}
        </div>
        <span className="text-sm text-[#babac9]">Full</span>
      </div>
    </div>
  );
};

export default ProgressTracker;
