import React, { useState, useEffect } from "react";
import { FaStar, FaShareAlt, FaHeart } from "react-icons/fa";
import {
  AiOutlineClockCircle,
  AiOutlineGlobal,
  AiOutlineUser,
} from "react-icons/ai";
import { motion } from "framer-motion";
import "../ui/Styles.css"; // Ensure correct path

const SubjectCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [triggerGlitter, setTriggerGlitter] = useState(false);

  const handleHeartClick = () => {
    setIsLiked((prev) => !prev);
    setTriggerGlitter(true); // Trigger glitter effect
  };

  useEffect(() => {
    if (triggerGlitter) {
      const timeout = setTimeout(() => setTriggerGlitter(false), 600); // Reset glitter effect after animation
      return () => clearTimeout(timeout);
    }
  }, [triggerGlitter]);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[736px] cursor-pointer transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${require("../assests/images/Subject.jpg")})`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mt-1 break-words text-gray-800 line-clamp-2">
              E-Commerce Mobile App Design using Figma
            </h1>
          </div>
          <div className="flex items-center gap-4 px-2">
            <button
              onClick={handleHeartClick}
              className="focus:outline-none relative"
            >
              <FaHeart
                className={`text-2xl transition-all duration-300 transform ${
                  isLiked ? "text-red-500 scale-110" : "text-gray-400"
                } ${triggerGlitter ? "glitter-effect" : ""}`} // Add glitter-effect class on click
              />
            </button>
            <button className="text-[#9b7fd8] hover:text-[#7146d2] focus:outline-none">
              <FaShareAlt className="text-2xl transition-all duration-300 transform hover:scale-110" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 py-2">
          <motion.span className="text-yellow-500" whileHover={{ scale: 1.2 }}>
            <FaStar />
          </motion.span>
          <span className="ml-1 text-gray-700">4.7 (687 Reviews)</span>
          <p className="text-gray-600">1250 students</p>
        </div>

        <div className="p-1">
          <span className="text-gray-500 text-sm mt-1 flex gap-2">
            Created by <p className="text-black font-semibold">Jack Harper</p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row mx-auto px-1 py-2 gap-4">
          <motion.span
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineClockCircle className="text-lg" />{" "}
            <p className="text-gray-500 text-xs ml-1">Last update 12/2020</p>
          </motion.span>
          <motion.span
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineGlobal className="text-lg" />{" "}
            <p className="text-gray-500 text-xs ml-1">English</p>
          </motion.span>
          <motion.span
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <AiOutlineUser className="text-lg" />{" "}
            <p className="text-gray-500 text-xs ml-1">
              English (Auto), French (Auto), 5 more
            </p>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectCard;
