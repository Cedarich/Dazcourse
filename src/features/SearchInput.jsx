import React, { useState } from "react";
import {
  FaArrowCircleRight,
  FaTimesCircle,
  FaSearchPlus,
} from "react-icons/fa"; // Importing the icons

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change and call onSearch with the new value
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Trigger onSearch with the current value
  };

  // Clear the search input
  const clearSearch = () => {
    setSearchTerm("");
    onSearch(""); // Call onSearch with an empty string
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full">
        <input
          type="text"
          value={searchTerm} // Controlled input
          placeholder="Search for offers..."
          onChange={handleInputChange} // Trigger handleInputChange on change
          className="w-full py-3 pl-10 pr-12 text-[#9b7fd8] font-bold text-lg bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7a56d7] transition duration-200 ease-in-out hover:shadow-xl"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaSearchPlus className="h-5 w-5" />
        </div>
        {/* Clear button with FaTimesCircle icon */}
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 transition duration-300 ease-in-out hover:text-[#7a56d7] focus:outline-none"
          >
            <FaTimesCircle className="h-6 w-6" />
          </button>
        )}
        {/* Search button with FaArrowCircleRight icon */}
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7a56d7] transition duration-300 ease-in-out hover:shadow-lg focus:outline-none">
          <FaArrowCircleRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
