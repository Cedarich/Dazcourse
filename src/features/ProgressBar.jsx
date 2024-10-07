import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, progressPercentage }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 200); // Delay to start the animation smoothly

    return () => clearTimeout(timeout); // Clean up on unmount
  }, [progressPercentage]);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm text-black font-bold">
        <span>{progress} Lessons</span>
      </div>
      <div className="w-full h-3 bg-gray-300 rounded-full mt-1 relative overflow-hidden">
        {/* Intensified Gradient effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#6a5df7] via-[#9284f7] to-[#c7c0f7] animate-pulse opacity-60"
          style={{ width: `${animatedProgress}%` }}
        ></div>

        {/* Progress bar fill with stronger glow */}
        <div
          className="h-full bg-[#6a5df7] rounded-full transition-all duration-1000 ease-in-out relative"
          style={{ width: `${animatedProgress}%` }}
        >
          {/* Stronger Glow effect */}
          <div className="absolute inset-0 bg-[#b5bcc1] opacity-70 blur-lg rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
