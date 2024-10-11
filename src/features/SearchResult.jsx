import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const SearchResult = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center mx-auto py-4 px-2">
      <h4 className="text-[24px] font-bold transition-transform duration-300 transform hover:scale-105">
        Your result
      </h4>
      <div className="relative group">
        {/* Tooltip for Checkout Message */}
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block text-xs font-medium text-white bg-gray-600 rounded-md px-2 py-1 transition-opacity duration-300">
          Checkout
        </span>

        {/* Shopping Cart Button */}
        <button className="bg-transparent p-2 focus:outline-none transition-transform transform hover:scale-110 cursor-pointer">
          <FaShoppingCart className="text-2xl transition-transform duration-300 hover:rotate-12 hover:text-[#7a56d7]" />
          {cartCount > 0 && (
            <span className="absolute top-[-2px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
