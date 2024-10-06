import React from "react";
import ProgressBar from "../features/ProgressBar";

const ResumeButton = () => {
  return (
    <button className="bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] text-white font-bold py-1 px-2 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#5933d2] text-sm md:py-2 md:px-4 md:text-base">
      Resume
    </button>
  );
};

const CourseCard = ({ course, className }) => {
  // Check if course is defined
  if (!course) {
    return <div>No course data available.</div>; // Display a fallback message
  }

  return (
    <div
      className={`flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4 relative overflow-hidden ${className}`}
    >
      {/* Shining effect div */}
      <div className="shine absolute top-0 left-0 right-0 bottom-0 z-0"></div>

      {/* Left side (image) */}
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-20 h-20 rounded-lg object-cover z-10 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#3caa91]/50"
      />

      {/* Middle content */}
      <div className="flex flex-col flex-1 ml-4 z-10">
        <h2 className="text-lg font-semibold text-[#1c1c28] mb-2">
          {course.title}
        </h2>
        <p className="text-sm text-gray-400">{course.description}</p>

        {/* Progress bar */}
        <ProgressBar
          progress={course.progress}
          progressPercentage={course.progressPercentage}
        />
      </div>

      {/* Right side (Resume button) */}
      <ResumeButton />
    </div>
  );
};

export default CourseCard;
