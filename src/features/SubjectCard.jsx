import React from "react";
import { FaStar, FaShareAlt } from "react-icons/fa";

const SubjectCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 bg-gray-200"></div> {/* Placeholder for image */}
      <div className="p-4">
        <div className="flex items-center">
          <span className="text-yellow-500">
            <FaStar />
          </span>
          <span className="ml-1 text-gray-700">4.7 (687 Reviews)</span>
        </div>
        <h2 className="text-lg font-bold mt-2">
          E-Commerce Mobile App Design using Figma
        </h2>
        <p className="text-gray-600">1250 students</p>
        <p className="text-gray-500 text-sm mt-1">Created by Jack Harper</p>
        <p className="text-gray-500 text-xs mt-2">Last update 12/2020</p>
        <p className="text-gray-500 text-xs">
          English (Auto), French (Auto), 5 more
        </p>

        <div className="flex justify-between items-center mt-4">
          <button className="text-blue-500 hover:text-blue-700">
            <FaShareAlt /> {/* Share icon */}
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
