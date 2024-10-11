import React, { useEffect, useState } from "react";
import Banner from "../features/Banner";
import CourseCard from "../features/CourseCard";
import courses from "../services/Course";
import ProgressTracker from "../features/ProgressTracker";
import SectionHeader from "../components/SectionHeader";
import Recommendation from "../components/Recommendation";
import BestSellingCard from "../features/BestSellingCard";
import UserExperienceDesign from "../components/UserExperienceDesign";
import CoursePlayer from "../components/CoursePlayer";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  // Handler for clicking on BestSellingCard
  const handleBestSellingClick = (course) => {
    setSelectedCourse(course); // Set the selected course
    setCurrentView("ux"); // Change view to UserExperienceDesign
  };

  // Resume handler for CourseCard
  const handleResume = (course) => {
    setSelectedCourse(course); // Set the selected course
    setCurrentView("coursePlayer"); // Change view to CoursePlayer
  };

  return (
    <div
      className={`bg-[#f4f4f9] scroll-smooth transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto px-2">
        {currentView === "dashboard" && <Banner />}{" "}
        {/* Hide Banner when not on the dashboard */}
      </div>

      {currentView === "dashboard" && (
        <>
          <div
            id="section-header"
            className={`px-2 mt-4 max-w-full sm:max-w-[65%] transition-opacity duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <SectionHeader />
          </div>

          <div className="max-w-6xl gap-2 px-2 justify-between flex flex-col md:flex-row h-full transition-all duration-700 ease-in-out">
            <div
              className={`flex-1 flex flex-col gap-2 justify-between h-full mt-4 basis-2/3 transition-transform duration-700 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-10 opacity-0"
              }`}
            >
              {courses.slice(0, 2).map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onResume={handleResume} // Pass the resume handler here
                />
              ))}
            </div>
            <div
              className={`flex-1 flex items-stretch h-full justify-end basis-1/3 transition-transform duration-700 ease-in-out ${
                isVisible ? "translate-x-0" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="rounded-lg px-2 p-4 h-full w-full transition-all duration-500 ease-in-out">
                <ProgressTracker />
              </div>
            </div>
          </div>

          <div
            className={`px-2 mb-2 max-w-full sm:max-w-[65%] transition-opacity duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Recommendation />
          </div>

          <div
            className={`max-w-6xl px-2 justify-between flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 transition-all duration-700 ease-in-out ${
              isVisible ? "translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <BestSellingCard
              onCardClick={handleBestSellingClick}
              onResume={handleResume}
            />{" "}
            {/* Pass the click handler here */}
          </div>
        </>
      )}

      {/* Render CoursePlayer when the view is set to 'coursePlayer' */}
      {currentView === "coursePlayer" && selectedCourse && (
        <CoursePlayer
          course={selectedCourse}
          onBack={() => setCurrentView("dashboard")} // Go back to the dashboard
        />
      )}

      {/* Render UserExperienceDesign when the view is set to 'ux' */}
      {currentView === "ux" && selectedCourse && (
        <UserExperienceDesign
          courseId={selectedCourse.id} // Pass course ID to UserExperienceDesign
          onClose={() => setCurrentView("dashboard")} // Go back to the dashboard
        />
      )}
    </div>
  );
};

export default Dashboard;
