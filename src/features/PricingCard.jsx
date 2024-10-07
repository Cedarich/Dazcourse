import React from "react";

const PricingCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-purple-600">$20</h2>
        <span className="text-gray-500 line-through">$30</span>
      </div>
      <p className="text-gray-700 mb-4">This course includes:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-700">5 hours on demand video</li>
        <li className="text-gray-700">15 articles</li>
        <li className="text-gray-700">4 downloadable resources</li>
        <li className="text-gray-700">Full lifetime access</li>
        <li className="text-gray-700">Access on mobile and tv</li>
      </ul>
      <div className="flex flex-col gap-2">
        <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Add to Cart
        </button>
        <button className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
          Buy Now
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-4 text-center">
        30 days money back guarantee
      </p>
    </div>
  );
};

export default PricingCard;
