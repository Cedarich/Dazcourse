import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaRegPlayCircle } from "react-icons/fa"; // Import modern icons

const CourseItem = ({ title, duration }) => {
  return (
    <div className="flex justify-between items-center border-b py-2 hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-center">
        <FaRegPlayCircle className="text-[#9b7fd8] mr-2 animate-bounce" />
        {/* Play Circle Icon */}
        <span className="text-gray-700">{title}</span>
      </div>
      <span className="text-gray-500">{duration}</span>
    </div>
  );
};

const ContentCourse = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-[736px] bg-white rounded-lg shadow-lg p-4 mt-4 w-full border border-gray-300 transition-transform duration-300 hover:scale-105">
      {/* Card now has a scale effect on hover */}
      <h2 className="text-2xl font-bold mb-6">Content Course</h2>

      {/* Color Theory Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-4 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => toggleSection("colorTheory")}
        >
          <span className="font-semibold text-lg">Color Theory</span>
          <span>
            {isOpen.colorTheory ? (
              <FaChevronDown className="text-[#9b7fd8]" />
            ) : (
              <FaChevronRight className="text-[#9b7fd8]" />
            )}
          </span>
        </div>
        {isOpen.colorTheory && (
          <div className="pl-6 transition-all duration-300 ease-in-out">
            <CourseItem
              title="Understanding the Mood of your Colour Palettes"
              duration="Preview 06:02"
            />
            <CourseItem
              title="How to Combine Colours to Create Colour Palettes"
              duration="Preview 04:22"
            />
            <CourseItem
              title="Tools for Designing with Colour"
              duration="Preview 06:02"
            />
            <CourseItem
              title="Further Reading on Designing with Colour"
              duration="Preview 06:02"
            />
          </div>
        )}
      </div>

      {/* UI Design for Mobile Apps Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => toggleSection("uiDesign")}
        >
          <span className="font-semibold text-lg">
            UI Design for Mobile Apps
          </span>
          <span>
            {isOpen.uiDesign ? (
              <FaChevronDown className="text-[#9b7fd8]" />
            ) : (
              <FaChevronRight className="text-[#9b7fd8]" />
            )}
          </span>
        </div>
        {isOpen.uiDesign && (
          <div className="pl-6 transition-all duration-300 ease-in-out">
            {/* Add UI design topics here */}
          </div>
        )}
      </div>

      {/* UX Design for Mobile Apps Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => toggleSection("uxDesign")}
        >
          <span className="font-semibold text-lg">
            UX Design for Mobile Apps
          </span>
          <span>
            {isOpen.uxDesign ? (
              <FaChevronDown className="text-[#9b7fd8]" />
            ) : (
              <FaChevronRight className="text-[#9b7fd8]" />
            )}
          </span>
        </div>
        {isOpen.uxDesign && (
          <div className="pl-6 transition-all duration-300 ease-in-out">
            {/* Add UX design topics here */}
          </div>
        )}
      </div>

      {/* Designing for iOS and Android Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-4 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => toggleSection("designingForMobile")}
        >
          <span className="font-semibold text-lg">
            Designing for iOS and Android
          </span>
          <span>
            {isOpen.designingForMobile ? (
              <FaChevronDown className="text-[#9b7fd8]" />
            ) : (
              <FaChevronRight className="text-[#9b7fd8]" />
            )}
          </span>
        </div>
        {isOpen.designingForMobile && (
          <div className="pl-6 transition-all duration-300 ease-in-out">
            {/* Add iOS and Android design topics here */}
          </div>
        )}
      </div>

      {/* Putting it All Together Section */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer py-4 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => toggleSection("puttingItAllTogether")}
        >
          <span className="font-semibold text-lg">
            Putting it All Together: A step-by-step guide to E-Commerce Mobile
            Apps
          </span>
          <span>
            {isOpen.puttingItAllTogether ? (
              <FaChevronDown className="text-[#9b7fd8]" />
            ) : (
              <FaChevronRight className="text-[#9b7fd8]" />
            )}
          </span>
        </div>
        {isOpen.puttingItAllTogether && (
          <div className="pl-6 transition-all duration-300 ease-in-out">
            {/* Add topics for this section here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCourse;
