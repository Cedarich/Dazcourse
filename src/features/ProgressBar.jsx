import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, progressPercentage }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Trigger the animation effect when component mounts or progressPercentage changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 100); // small delay to start the animation smoothly

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [progressPercentage]);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm text-black font-bold">
        <span>{progress} Lessons</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
        <div
          className="h-full bg-[#6a5df7] rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${animatedProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
