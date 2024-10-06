import React from "react";
import Banner from "../features/Banner";
import CourseCard from "../features/CourseCard";
import courses from "../services/Course";
import ProgressTracker from "../features/ProgressTracker";
import SectionHeader from "../components/SectionHeader";
import Recommendation from "../components/Recommendation";
import BestSellingCard from "../features/BestSellingCard";

const Dashboard = () => {
  return (
    <div className="bg-[#f4f4f9] p-4 scroll-smooth">
      <div className="mx-auto px-2">
        <Banner />
      </div>

      {/* SectionHeader with an ID for smooth scrolling */}
      <div
        id="section-header"
        className="px-4 mt-4 max-w-full sm:max-w-[65%] whitespace-nowrap"
      >
        <SectionHeader />
      </div>

      <div className="max-w-6xl mx-auto justify-between flex flex-col md:flex-row h-full">
        <div className="flex-1 flex flex-col justify-between h-full mt-4 basis-2/3 p-2">
          {courses.slice(0, 2).map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              className={`transition-transform duration-300 ease-out`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            />
          ))}
        </div>
        <div className="flex-1 flex items-stretch h-full justify-end basis-1/3 transition-transform duration-300 ease-out hover:scale-105">
          <div className="rounded-lg p-4 h-full w-full transition-all duration-500 ease-in-out">
            <ProgressTracker />
          </div>
        </div>
      </div>

      <div className="px-4 mb-2 max-w-full sm:max-w-[65%] whitespace-nowrap">
        <Recommendation />
      </div>

      <div className="max-w-6xl mx-auto justify-between flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0">
        <BestSellingCard />
      </div>
    </div>
  );
};

export default Dashboard;
