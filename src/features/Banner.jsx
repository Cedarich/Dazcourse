import React, { useState, useEffect } from "react";
import image1 from "../assests/images/Image1.jpg";
import image2 from "../assests/images/Image2.jpg";
import image3 from "../assests/images/Image3.jpg";
import image4 from "../assests/images/Image4.jpg";

const Banner = () => {
  const images = [image1, image2, image3, image4]; // Array of images
  const colors = ["#312652", "#7A4DD2", "#5933d2", "#7A4DD2"]; // Array of colors
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false); // To trigger fade animation
  const [currentColor, setCurrentColor] = useState(colors[currentImage]); // To store current text color

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Trigger fade-out before changing image
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Change image
        setCurrentColor(colors[(currentImage + 1) % colors.length]); // Change text color
        setIsFading(false); // Fade back in after image change
      }, 1000); // Adjust this timeout based on the fade-out duration (1 second)
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length, currentImage, colors]);

  return (
    <div className="relative overflow-hidden shadow-md">
      {/* Background with sliding and fade effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center`}
        style={{
          opacity: isFading ? 0 : 1, // This controls the fade effect
          backgroundImage: `url(${images[currentImage]})`,
          transform: isFading ? "scale(1.05)" : "scale(1)", // Add scaling effect for smooth transition
          transition:
            "background-image 1s ease-in-out, opacity 1s ease-in-out, transform 1s ease-in-out", // Add transform transition
        }}
      ></div>

      {/* Content overlay */}
      <div
        className="relative z-10 p-6 w-full h-full rounded-[8px]"
        style={{
          background:
            "linear-gradient(to right, rgba(122, 77, 210, 0.3), rgba(107, 114, 128, 0.3), rgba(31, 41, 55, 0.3))",
        }}
      >
        <h2
          className="text-[48px] font-bold mb-4"
          style={{ color: currentColor }}
        >
          Success is a habit
        </h2>
        <p className="text-gray-700 font-bold mb-4">
          Build your learning routine in DazCourse. Find your best course here!
        </p>
        <span
          className={`inline-block bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] text-white font-bold py-2 px-4 rounded-[8px] shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#5933d2]`}
        >
          Explore Now
        </span>
      </div>
    </div>
  );
};

export default Banner;
