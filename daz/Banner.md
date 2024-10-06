import React, { useState } from "react";

// Example images array; replace with your actual images
const images = [
  "image1.jpg", // Add your actual image URLs
  "image2.jpg",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Now
        </button>
      </div>

      {/* Recommendation Section */}
      <div className="relative overflow-hidden shadow-md h-[296px]">
        {/* Background with fade effect */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out backdrop-blur-lg backdrop-brightness-75 bg-white/30`}
          style={{
            opacity: isFading ? 0 : 1, // Controls the fade effect
            backgroundImage: `linear-gradient(to bottom right, rgba(122, 77, 210, 0.4), rgba(122, 77, 210, 0.25), rgba(107, 114, 128, 0.3)), url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px",
          }}
        ></div>

        {/* Content overlay */}
        <div
          className="relative z-10 p-6 w-full h-full"
          style={{
            background:
              "linear-gradient(to right, rgba(122, 77, 210, 0.3), rgba(107, 114, 128, 0.3), rgba(31, 41, 55, 0.3))",
          }}
        >
          <h2 className="text-[48px] font-bold mb-4 text-[#312652]">
            Success is a habit
          </h2>
          <p className="text-gray-700 font-semibold mb-4">
            Build your learning routine in DazCourse. Find your best course
            here!
          </p>
          <span
            className={`inline-block bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] text-white font-bold py-2 px-4 rounded-[8px] shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#5933d2]`}
          >
            Explore Now
          </span>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Flutter Development */}
          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-700">Flutter Development</h3>
              <p className="text-sm text-gray-500">
                20. Object-oriented Programming on Dart
              </p>
              <progress className="w-full" value="20" max="40"></progress>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Resume
            </button>
          </div>

          {/* iOS Development */}
          <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-700">iOS Development</h3>
              <p className="text-sm text-gray-500">
                10. Working with loops on Swift
              </p>
              <progress className="w-full" value="10" max="40"></progress>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Best Seller Card 1 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-bold text-gray-700">
              e-Commerce Mobile App using Figma
            </h3>
            <p className="text-sm text-gray-500">Jack Harper</p>
            <p className="text-lg font-bold text-blue-500">
              $20{" "}
              <span className="text-sm text-gray-500 line-through">$30</span>
            </p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
              Add to cart
            </button>
          </div>

          {/* Best Seller Card 2 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-bold text-gray-700">
              e-Commerce Mobile App using Sketch
            </h3>
            <p className="text-sm text-gray-500">Olivia Jansen</p>
            <p className="text-lg font-bold text-blue-500">
              $25{" "}
              <span className="text-sm text-gray-500 line-through">$30</span>
            </p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
              Add to cart
            </button>
          </div>

          {/* Best Seller Card 3 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-bold text-gray-700">
              e-Commerce Mobile App using Adobe XD
            </h3>
            <p className="text-sm text-gray-500">Jacob Sianturi</p>
            <p className="text-lg font-bold text-blue-500">
              $22{" "}
              <span className="text-sm text-gray-500 line-through">$30</span>
            </p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* My Progress Calendar */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">My Progress October</h2>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="grid grid-cols-7 gap-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold text-gray-700">
                {day}
              </div>
            ))}
            {/* Days Placeholder */}
            {[...Array(31)].map((_, index) => (
              <div key={index} className="text-center text-gray-500">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
