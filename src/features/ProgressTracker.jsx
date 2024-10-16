// import React, { useEffect, useState } from "react";
// import { FaChevronDown } from "react-icons/fa"; // Stylish icon for dropdown arrow

// const ProgressTracker = () => {
//   const progressData = [
//     [0, 0, 2, 3, 5, 2, 0],
//     [0, 4, 5, 2, 1, 1, 0],
//     [0, 4, 2, 1, 4, 5, 0],
//     [1, 0, 4, 3, 5, 0, 0],
//     [0, 1, 3, 0, 5, 4, 0],
//   ];

//   const progressColors = [
//     "bg-gray-100", // 0 - No progress
//     "bg-[#d9f2ec]", // 1 - Low progress
//     "bg-[#77cfbb]", // 2
//     "bg-[#3caa91]", // 3
//     "bg-[#3caa97]", // 4
//     "bg-[#287161]", // 5 - Full progress
//   ];

//   const [progressAnimation, setProgressAnimation] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [hoveredDay, setHoveredDay] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState("October");
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgressAnimation((prev) => (prev < 100 ? prev + 20 : 100)); // Increased increment
//     }, 800); // Decreased interval duration

//     return () => clearInterval(interval);
//   }, []);

//   const handleMonthChange = (month) => {
//     setSelectedMonth(month);
//     setShowDropdown(false); // Close dropdown after selection
//   };

//   return (
//     <div className="max-w-sm p-4 rounded-md bg-gradient-to-r from-white via-[#f8f9fc] to-[#eef2f5] animate-slide-in-right relative overflow-hidden">
//       <div className="flex justify-between items-center mb-2 border-b-2 border-gray-200 py-2 mx-auto">
//         <h2 className="text-[16px] font-bold transition-transform duration-300 hover:scale-105">
//           My Progress
//         </h2>
//         <div className="relative group">
//           <span
//             className={`text-[16px] font-semibold text-[#91919b] cursor-pointer hover:animate-pulse hover:text-[#7a56d7] transition-colors duration-300 transform ${
//               showDropdown ? "scale-105" : ""
//             }`}
//             onClick={() => setShowDropdown((prev) => !prev)} // Toggle dropdown on click
//           >
//             {selectedMonth} <FaChevronDown className="inline-block" />
//           </span>
//           {/* Dropdown for selecting month */}
//           {showDropdown && (
//             <div className="absolute bg-white border rounded-md shadow-lg transition-all duration-200 mt-1 z-10">
//               <ul className="py-1">
//                 {["October", "November", "December", "January"].map((month) => (
//                   <li
//                     key={month}
//                     className="hover:bg-[#3caa91] transition-colors duration-200"
//                   >
//                     <a
//                       href="#"
//                       onClick={() => handleMonthChange(month)}
//                       className="block px-4 py-2 text-gray-700 text-sm hover:text-white transition-colors duration-200" // Change text color to white on hover
//                     >
//                       {month}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Grid for days of the week */}
//       <div className="grid grid-cols-7 gap-2 text-center mb-2 cursor-pointer">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
//           <div
//             key={day}
//             onMouseEnter={() => setHoveredDay(index)}
//             onMouseLeave={() => setHoveredDay(null)}
//             className={`text-sm text-[#babac9] font-semibold text-[14px] transition-transform duration-300 ease-in-out transform ${
//               hoveredDay === index ? "scale-110 shadow-lg shadow-gray-500" : ""
//             }`}
//             style={{
//               boxShadow:
//                 hoveredDay === index
//                   ? "0 0 10px 5px rgba(128, 128, 128, 0.5)"
//                   : "none", // Gray rounded glow
//             }}
//           >
//             {day}
//           </div>
//         ))}
//       </div>

//       {/* Progress grid with enhanced transitions */}
//       <div className="grid grid-cols-7 gap-2 relative">
//         {progressData.flat().map((progress, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className={`w-8 h-8 rounded-lg ${progressColors[progress]} transition-transform duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg hover:shadow-[#3caa97] cursor-pointer`} // Changed glow color to #3caa97
//             style={{
//               transform: `scale(${progressAnimation / 100})`,
//               boxShadow:
//                 hoveredIndex === index
//                   ? `0 0 15px 4px rgba(60, 170, 151, 0.5)`
//                   : "none", // Add glow effect on hover
//             }}
//           />
//         ))}

//         {/* Tooltip for showing progress on hover */}
//         {hoveredIndex !== null && (
//           <div
//             className="absolute bg-white border border-gray-300 rounded-lg p-2 shadow-lg"
//             style={{
//               left: `${(hoveredIndex % 7) * 32 + 40}px`, // Adjust position based on the index
//               top: `${Math.floor(hoveredIndex / 7) * 32 + 90}px`, // Adjust position based on the row
//               transition: "opacity 0.3s ease-in-out", // Smooth opacity transition
//               opacity: 1,
//             }}
//           >
//             <span className="text-black font-semibold">
//               Progress: {progressData.flat()[hoveredIndex]}
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Legend */}
//       <div className="flex justify-end items-end mt-4 gap-2">
//         <span className="text-sm text-[#babac9]">Low</span>
//         <div className="flex space-x-1">
//           {progressColors.slice(1).map((color, index) => (
//             <div
//               key={index}
//               className={`w-6 h-6 rounded-lg ${color} transition-all duration-500`}
//             />
//           ))}
//         </div>
//         <span className="text-sm text-[#babac9]">Full</span>
//       </div>
//     </div>
//   );
// };

// export default ProgressTracker;

import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Stylish icon for dropdown arrow

const ProgressTracker = () => {
  const progressData = [
    [0, 0, 2, 3, 5, 2, 0],
    [0, 4, 5, 2, 1, 1, 0],
    [0, 4, 2, 1, 4, 5, 0],
    [1, 0, 4, 3, 5, 0, 0],
    [0, 1, 3, 0, 5, 4, 0],
  ];

  const progressColors = [
    "bg-gray-100", // 0 - No progress
    "bg-[#d9f2ec]", // 1 - Low progress
    "bg-[#77cfbb]", // 2
    "bg-[#3caa91]", // 3
    "bg-[#3caa97]", // 4
    "bg-[#287161]", // 5 - Full progress
  ];

  const [progressAnimation, setProgressAnimation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("October");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressAnimation((prev) => (prev < 100 ? prev + 20 : 100)); // Increased increment
    }, 800); // Decreased interval duration

    return () => clearInterval(interval);
  }, []);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div className="max-w-sm p-4 rounded-md bg-gradient-to-r from-white via-[#f8f9fc] to-[#eef2f5] animate-slide-in-right relative overflow-hidden">
      <div className="flex justify-between items-center mb-2 border-b-2 border-gray-200 py-2 mx-auto">
        <h2 className="text-[16px] font-bold transition-transform duration-300 hover:scale-105">
          My Progress
        </h2>
        <div className="relative group">
          <span
            className={`text-[16px] font-semibold text-[#91919b] cursor-pointer hover:animate-pulse hover:text-[#7a56d7] transition-colors duration-300 transform ${
              showDropdown ? "scale-105" : ""
            }`}
            onClick={() => setShowDropdown((prev) => !prev)} // Toggle dropdown on click
          >
            {selectedMonth} <FaChevronDown className="inline-block" />
          </span>
          {/* Dropdown for selecting month */}
          {showDropdown && (
            <div className="absolute bg-white border rounded-md shadow-lg transition-all duration-200 mt-1 z-10">
              <ul className="py-1">
                {["October", "November", "December", "January"].map((month) => (
                  <li
                    key={month}
                    className="hover:bg-[#3caa91] transition-colors duration-200"
                  >
                    <button
                      onClick={() => handleMonthChange(month)}
                      className="block px-4 py-2 text-gray-700 text-sm hover:text-white transition-colors duration-200 w-full text-left" // Change text color to white on hover
                    >
                      {month}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Grid for days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center mb-2 cursor-pointer">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div
            key={day}
            onMouseEnter={() => setHoveredDay(index)}
            onMouseLeave={() => setHoveredDay(null)}
            className={`text-sm text-[#babac9] font-semibold text-[14px] transition-transform duration-300 ease-in-out transform ${
              hoveredDay === index ? "scale-110 shadow-lg shadow-gray-500" : ""
            }`}
            style={{
              boxShadow:
                hoveredDay === index
                  ? "0 0 10px 5px rgba(128, 128, 128, 0.5)"
                  : "none", // Gray rounded glow
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Progress grid with enhanced transitions */}
      <div className="grid grid-cols-7 gap-2 relative">
        {progressData.flat().map((progress, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-8 h-8 rounded-lg ${progressColors[progress]} transition-transform duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg hover:shadow-[#3caa97] cursor-pointer`} // Changed glow color to #3caa97
            style={{
              transform: `scale(${progressAnimation / 100})`,
              boxShadow:
                hoveredIndex === index
                  ? `0 0 15px 4px rgba(60, 170, 151, 0.5)`
                  : "none", // Add glow effect on hover
            }}
          />
        ))}

        {/* Tooltip for showing progress on hover */}
        {hoveredIndex !== null && (
          <div
            className="absolute bg-white border border-gray-300 rounded-lg p-2 shadow-lg"
            style={{
              left: `${(hoveredIndex % 7) * 32 + 40}px`, // Adjust position based on the index
              top: `${Math.floor(hoveredIndex / 7) * 32 + 90}px`, // Adjust position based on the row
              transition: "opacity 0.3s ease-in-out", // Smooth opacity transition
              opacity: 1,
            }}
          >
            <span className="text-black font-semibold">
              Progress: {progressData.flat()[hoveredIndex]}
            </span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex justify-end items-end mt-4 gap-2">
        <span className="text-sm text-[#babac9]">Low</span>
        <div className="flex space-x-1">
          {progressColors.slice(1).map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-lg ${color} transition-all duration-500`}
            />
          ))}
        </div>
        <span className="text-sm text-[#babac9]">Full</span>
      </div>
    </div>
  );
};

export default ProgressTracker;
