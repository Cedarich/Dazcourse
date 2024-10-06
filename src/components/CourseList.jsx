// Importing in CourseList.js or wherever you are displaying the CourseCard
import React from "react";
import CourseCard from "../services/CourseCard";
import courses from "../services/Course"; // Adjust the path according to your folder structure

const CourseList = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1c1c28]">Continue Learning</h1>
        <button className="text-[#6a5df7] font-semibold">See All</button>
      </div>

      {/* Course cards */}
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
