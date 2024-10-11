import React, { useState } from "react";
import { FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const LearningsCard = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className="w-full max-w-[736px] h-auto bg-white rounded-lg shadow-lg  sm:w-[90%] md:w-[80%] lg:w-[736px]"
      whileHover={{ scale: 1.03 }} // Apply hover scale here
      transition={{ duration: 0.3 }} // Transition effect for scaling
    >
      <motion.div
        className="rounded-lg p-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
        <div className="flex flex-wrap">
          <ul className="flex flex-col w-1/2 pr-2">
            <motion.div className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="text-[#9b7fd8] mr-2 " />
              Create mobile app designs from scratch
            </motion.div>
            <motion.div className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="text-[#9b7fd8] mr-2 w-7 h-7" />
              Understand the differences between designing for iOS and Android
            </motion.div>
            <motion.div className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="text-[#9b7fd8] mr-2 w-5 h-5" />
              Create wireframe designs for e-Commerce Project
            </motion.div>
          </ul>
          <ul className="flex flex-col w-1/2 pl-2">
            <motion.div className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="text-[#9b7fd8] mr-2 " />
              Create mockups using Figma
            </motion.div>
            <motion.div className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="text-[#9b7fd8] mr-2 " />
              Start a new career as a UI/UX designer
            </motion.div>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg  p-6 mt-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold mb-4">Requirements</h2>
        <ul className="list-none">
          <motion.div className="flex items-center mb-2">
            <FaClipboardCheck className="text-[#9b7fd8] mr-2 " />
            <span className="text-gray-700">
              No pre-knowledge required - we'll teach you everything you need to
              know
            </span>
          </motion.div>
          <motion.div className="flex items-center mb-2">
            <FaClipboardCheck className="text-[#9b7fd8] mr-2 " />
            <span className="text-gray-700"> A PC or Mac is required</span>
          </motion.div>
          <motion.div className="flex items-center mb-2">
            <FaClipboardCheck className="text-[#9b7fd8] mr-2 " />
            <span className="text-gray-700">
              No software is required in advance of the course (all software
              used in the course is free or has a demo version)
            </span>
          </motion.div>
        </ul>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg  p-6 mt-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={descriptionVariants}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                This course is great for people with absolutely no design
                experience or experienced designers who want to get up to speed
                quickly with mobile app design. We'll introduce you to the art
                of making beautiful apps. We'll explore key UI and UX concepts
                that are essential to building good looking and easy to use apps
                that are loved by users.
              </p>
              <p className="text-gray-700 mb-4">
                The course has a practical component that takes you step-by-step
                through the workflow of a professional app designer. From user
                flow diagrams to wireframing to mockups and prototypes.
              </p>
              <p className="text-gray-700">
                Students completing the course will have the knowledge to create
                beautiful and lovable apps that leave people with a smile on
                their face.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={handleToggle}
          className="mt-4 text-[#9b7fd8] font-semibold py-2 px-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#9b7fd8] hover:text-white hover:scale-105 focus:outline-none  focus:ring-[#7a56d7] focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? "See Less" : "See More"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default LearningsCard;
