import React, { useEffect, useState } from "react";
import CourseCard from "../features/CourseCard";
import courses from "../services/Course";
import ProgressTracker from "../features/ProgressTracker";

const MyLearning = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay before starting the entrance animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`bg-[#f4f4f9] p-4 scroll-smooth transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between h-full space-y-4 md:space-y-0 transition-all duration-700 ease-in-out">
        {/* Left: CourseCards Section */}
        <div
          className={`flex-1 flex flex-col justify-between h-full mt-4 basis-2/3 p-2 transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-y-0" : "translate-y-10 opacity-0"
          }`}
        >
          {courses.slice(0, 6).map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              className="transition-transform duration-300 ease-out"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            />
          ))}
        </div>

        {/* Right: ProgressTracker Section */}
        <div
          className={`flex-1 flex items-stretch h-full justify-end basis-1/3 transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-x-0" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="rounded-lg p-4 h-full w-full transition-all duration-500 ease-in-out">
            <ProgressTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
