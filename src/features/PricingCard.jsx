import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Modern check icon
import { motion } from "framer-motion"; // For animations

const PricingCard = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleButtonClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500); // Bounce effect duration
  };

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 5; i++) {
      particles.push(
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-[#9b7fd8] rounded-full opacity-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["0%", "50%", "-50%", "0%"],
            y: ["0%", "100%", "-100%", "0%"],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 2 + 2,
            ease: "easeInOut",
            delay: Math.random(),
          }}
        />
      );
    }
    return particles;
  };

  return (
    <motion.div
      className="w-full max-w-[352px] sm:w-[90%] mx-auto bg-white rounded-lg shadow-lg p-6  h-auto flex flex-col justify-between transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Modern Sparkling Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {generateParticles()}
      </div>

      <div>
        {/* Pricing and original price */}
        <div className="flex gap-4 items-center mb-4 border-b py-1">
          <h2 className="text-3xl font-bold text-[#3fafba]">₦2000</h2>
          <span className="text-gray-500 line-through">₦3500</span>
        </div>

        {/* Course details */}
        <p className="text-black text-[15px] mb-4 font-semibold">
          This course includes:
        </p>

        {/* Updated list with modern checkmark icons */}
        <ul className="list-none mb-4 text-[11px] space-y-2">
          <li className="flex items-center text-black">
            <FaCheckCircle className="text-[#9b7fd8] mr-2" /> 5 hours on demand
            video
          </li>
          <li className="flex items-center text-black">
            <FaCheckCircle className="text-[#9b7fd8] mr-2" /> 15 articles
          </li>
          <li className="flex items-center text-black">
            <FaCheckCircle className="text-[#9b7fd8] mr-2" /> 4 downloadable
            resources
          </li>
          <li className="flex items-center text-black">
            <FaCheckCircle className="text-[#9b7fd8] mr-2" /> Full lifetime
            access
          </li>
          <li className="flex items-center text-black">
            <FaCheckCircle className="text-[#9b7fd8] mr-2" /> Access on mobile
            and TV
          </li>
        </ul>
      </div>

      {/* Buttons with new styles */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleButtonClick}
          className={`bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] text-white font-bold py-2 px-4 rounded-xl w-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#5933d2] ${
            isBouncing ? "animate-bounce" : ""
          }`}
        >
          Add to Cart
        </button>
        <button
          onClick={handleButtonClick}
          className={`bg-white text-[#9b7fd8] border-2 border-[#9b7fd8] font-bold py-2 px-4 rounded-xl w-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#9b7fd8] ${
            isBouncing ? "animate-bounce" : ""
          }`}
        >
          Buy Now
        </button>
      </div>

      {/* Guarantee text */}
      <p className="text-gray-500 text-[10px] mt-4   text-center">
        30 days money back guarantee
      </p>
    </motion.div>
  );
};

export default PricingCard;
