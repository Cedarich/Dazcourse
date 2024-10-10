// import React, { useEffect, useState } from "react";
// import CourseCard from "../features/CourseCard";
// import CoursePlayer from "../components/CoursePlayer";
// import courses from "../services/Course";
// import ProgressTracker from "../features/ProgressTracker";

// const MyLearning = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsVisible(true);
//     }, 300); // Delay before starting the entrance animation

//     return () => clearTimeout(timeout);
//   }, []);

//   // Function to handle course selection for the CoursePlayer
//   const handleResumeCourse = (course) => {
//     setSelectedCourse(course);
//   };

//   return (
//     <div
//       className={`bg-[#f4f4f9] p-4 scroll-smooth transition-all duration-1000 ease-in-out ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       {selectedCourse ? ( // Conditionally render CoursePlayer if a course is selected
//         <CoursePlayer
//           course={selectedCourse}
//           onBack={() => setSelectedCourse(null)}
//         />
//       ) : (
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between h-full space-y-4 md:space-y-0 transition-all duration-700 ease-in-out">
//           {/* <div></div> */}
//           <div
//             className={`flex-1 flex flex-col justify-between h-full mt-4 basis-2/3 p-2 transition-transform duration-700 ease-in-out ${
//               isVisible ? "translate-y-0" : "translate-y-10 opacity-0"
//             }`}
//           >
//             {courses.slice(0, 6).map((course, index) => (
//               <CourseCard
//                 key={course.id}
//                 course={course}
//                 onResume={handleResumeCourse} // Pass the handler to CourseCard
//                 className="transition-transform duration-300 ease-out"
//                 style={{
//                   animationDelay: `${index * 150}ms`,
//                   animationFillMode: "forwards",
//                 }}
//               />
//             ))}
//           </div>

//           {/* Right: ProgressTracker Section */}
//           <div
//             className={`flex-1 flex items-stretch h-full justify-end basis-1/3 transition-transform duration-700 ease-in-out ${
//               isVisible ? "translate-x-0" : "translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="rounded-lg p-4 h-full w-full transition-all duration-500 ease-in-out">
//               <ProgressTracker />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyLearning;

import React, { useEffect, useState } from "react";
import CourseCard from "../features/CourseCard";
import CoursePlayer from "../components/CoursePlayer";
import courses from "../services/Course";
import ProgressTracker from "../features/ProgressTracker";

const MyLearning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course
  const [activeTab, setActiveTab] = useState("all"); // State for active tab

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay before starting the entrance animation

    return () => clearTimeout(timeout);
  }, []);

  // Function to handle course selection for the CoursePlayer
  const handleResumeCourse = (course) => {
    setSelectedCourse(course);
  };

  // Function to filter courses based on the active tab
  const filteredCourses = () => {
    if (activeTab === "inProgress")
      return courses.filter((course) => course.status === "inProgress");
    if (activeTab === "completed")
      return courses.filter((course) => course.status === "completed");
    return courses; // Return all courses if "all" is selected
  };

  return (
    <div
      className={`bg-[#f4f4f9] p-4 scroll-smooth transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {selectedCourse ? ( // Conditionally render CoursePlayer if a course is selected
        <CoursePlayer
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 h-full transition-all duration-700 ease-in-out">
          {/* Left: Tabs + Course Cards Section */}
          <div className="flex-1 flex flex-col basis-2/3 space-y-4 p-2">
            <h4 className="text-[24px] font-bold transition-transform duration-300 transform ">
              My Learning
            </h4>
            {/* Tabs Section */}
            <div className="flex justify-between w-full mb-4">
              <div className="relative flex space-x-8">
                {/* Tab Buttons */}
                {["all", "inProgress", "completed"].map((tab) => (
                  <button
                    key={tab}
                    className={`relative pb-2 transition-all duration-300 ease-in-out ${
                      activeTab === tab
                        ? "text-black font-bold scale-105"
                        : "text-gray-500 hover:text-black"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "all" && "All Courses"}
                    {tab === "inProgress" && "In Progress"}
                    {tab === "completed" && "Completed"}

                    {/* Bottom Border Animation */}
                    <span
                      className={`absolute left-0 right-0 h-1 bg-[#7a56d7] transition-all duration-300 ease-in-out transform ${
                        activeTab === tab ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ bottom: "-4px" }} // Adjust this value for border positioning
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Course Cards Section */}
            <div
              className={`flex-1 flex flex-col justify-between h-full transition-transform duration-700 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-10 opacity-0"
              }`}
            >
              {filteredCourses()
                .slice(0, 6)
                .map((course, index) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onResume={handleResumeCourse} // Pass the handler to CourseCard
                    className="transition-transform duration-300 ease-out"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animationFillMode: "forwards",
                    }}
                  />
                ))}
            </div>
          </div>

          {/* Right: ProgressTracker Section */}
          <div
            className={`flex-1 flex items-stretch justify-end basis-1/3 transition-transform duration-700 ease-in-out ${
              isVisible ? "translate-x-0" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-lg p-4 h-full w-full transition-all duration-500 ease-in-out">
              <ProgressTracker />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyLearning;
