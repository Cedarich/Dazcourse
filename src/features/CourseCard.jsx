// import React from "react";
// import ProgressBar from "../features/ProgressBar";
// import ResumeButton from "./ResumeButton"; // Ensure this import is correct

// const CourseCard = ({ course, onResume, className }) => {
//   // Check if course is defined
//   if (!course) {
//     return <div>No course data available.</div>; // Display a fallback message
//   }

//   return (
//     <div
//       className={`flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4 relative overflow-hidden transition-transform duration-500 ease-out transform hover:scale-105 hover:shadow-xl ${className}`}
//     >
//       {/* Shining effect div */}
//       <div className="shine absolute top-0 left-0 right-0 bottom-0 z-0"></div>

//       {/* Image at the top for small screens and left for medium and above */}
//       <div className="w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">
//         <img
//           src={course.imageUrl}
//           alt={course.title}
//           className="w-20 h-20 mx-auto md:mx-0 rounded-lg object-cover z-10 transition-transform duration-[600ms] ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#3caa91]/50"
//         />
//       </div>

//       {/* Middle content */}
//       <div className="flex flex-col flex-1 ml-0 md:ml-4 z-10 text-center md:text-left">
//         <h2 className="text-lg font-semibold text-[#1c1c28] mb-2">
//           {course.title}
//         </h2>
//         <p className="text-sm text-gray-400">{course.description}</p>

//         {/* Progress bar */}
//         <ProgressBar
//           progress={course.progress}
//           progressPercentage={course.progressPercentage}
//         />
//       </div>

//       {/* Button at the bottom for small screens, right for larger screens */}
//       <div className="mt-4 md:mt-0 flex justify-center md:block">
//         <ResumeButton onClick={() => onResume(course)} />{" "}
//         {/* Pass the course object */}
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

import React from "react";
import ProgressBar from "../features/ProgressBar";
import ResumeButton from "./ResumeButton"; // Ensure this import is correct

const CourseCard = ({ course, onResume, className }) => {
  // Check if course is defined
  if (!course) {
    return <div>No course data available.</div>; // Display a fallback message
  }

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4 relative overflow-hidden transition-transform duration-500 ease-out transform hover:scale-105 hover:shadow-xl ${className}`}
    >
      {/* Shining effect div */}
      <div className="shine absolute top-0 left-0 right-0 bottom-0 z-0"></div>

      {/* Image at the top for small screens and left for medium and above */}
      <div className="w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">
        <img
          src={course.imageUrl || "/path/to/default/image.jpg"} // Fallback image if none exists
          alt={course.title || "Course Image"} // Fallback alt text
          className="w-20 h-20 mx-auto md:mx-0 rounded-lg object-cover z-10 transition-transform duration-[600ms] ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#3caa91]/50"
        />
      </div>

      {/* Middle content */}
      <div className="flex flex-col flex-1 ml-0 md:ml-4 z-10 text-center md:text-left">
        <h2 className="text-lg font-semibold text-[#1c1c28] mb-2">
          {course.title || "Untitled Course"} {/* Fallback title */}
        </h2>
        <p className="text-sm text-gray-400">
          {course.description || "No description available."}
        </p>

        {/* Progress bar */}
        <ProgressBar
          progress={course.progress || 0} // Fallback progress
          progressPercentage={course.progressPercentage || 0} // Fallback percentage
        />
      </div>

      {/* Button at the bottom for small screens, right for larger screens */}
      <div className="mt-4 md:mt-0 flex justify-center md:block">
        <ResumeButton
          onClick={() => onResume(course)} // Pass the entire course object to the onResume handler
          aria-label={`Resume ${course.title}`}
        />
        {/* Ensure the onResume function is handled correctly in the parent component */}
      </div>
    </div>
  );
};

export default CourseCard;
