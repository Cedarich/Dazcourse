import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { MdArrowBack } from "react-icons/md"; // Import the back arrow icon
import SubjectCard from "../features/SubjectCard";
import PricingCard from "../features/PricingCard";
import LearningCard from "../components/LearningCard";
import ContentCourse from "../components/ContentCourse";
import StudentReview from "./StudentReview";

const UserExperienceDesign = ({ courseId, onClose }) => {
  // Define entrance animations
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Start from above
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl px-2 py-2 flex flex-col min-h-screen transition-transform duration-700 ease-in-out opacity-100 transform translate-y-0">
        {/* Section with SubjectCard and PricingCard side by side */}
        <div className="flex flex-col md:flex-row w-full gap-4 relative">
          {/* Left section with SubjectCard */}
          <motion.div
            className="flex-grow flex justify-center items-stretch relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-screen-lg h-full">
              <SubjectCard courseId={courseId} />{" "}
              {/* Pass courseId to SubjectCard */}
            </div>
            {/* Animated Back Button positioned on top of the SubjectCard */}
            <motion.button
              onClick={onClose}
              className="absolute top-2 left-2 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#9b7fd8] to-[#7A4DD2] text-white rounded-full shadow-md transition-all duration-300 ease-in-out z-10"
              whileHover={{ scale: 1.1, rotate: 180 }} // Add rotate effect on hover
              whileTap={{ scale: 0.9 }} // Scale down effect on tap
            >
              <MdArrowBack className="text-lg mx-1" />
            </motion.button>
          </motion.div>
          {/* Right section with PricingCard */}
          <motion.div
            className="flex-grow flex justify-center items-stretch"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-screen-lg h-full">
              <PricingCard courseId={courseId} />{" "}
              {/* Pass courseId to PricingCard */}
            </div>
          </motion.div>
        </div>

        {/* LearningCard aligned under SubjectCard */}
        <motion.div
          className="w-full flex mt-4"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full max-w-screen-lg h-full">
            <LearningCard />
          </div>
        </motion.div>

        {/* Content Course */}
        <motion.div
          className="w-full max-w-screen-lg h-full mt-2"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <ContentCourse />
        </motion.div>

        {/* Student Review */}
        <motion.div
          className="w-full max-w-screen-lg h-full mt-2"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <StudentReview />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserExperienceDesign;
