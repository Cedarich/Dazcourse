import React, { useState } from "react";
import ContentCourse from "../components/ContentCourse";
import { MdArrowBack } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const CoursePlayer = ({ course, onBack }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const descriptionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  // New diagonal slide-in animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 100, // Sliding from right side
      y: -100, // Sliding from above
      scale: 0.9, // Slightly smaller on entry
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto p-4 bg-[#f4f4f9]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="max-w-6xl px-2 py-2 flex flex-col min-h-screen transition-transform duration-700 ease-in-out opacity-100 transform translate-y-0">
        {/* Section with Video Player and ContentCourse */}
        <motion.div
          className="flex flex-col md:flex-row w-full gap-4"
          variants={containerVariants}
        >
          {/* Left section with Video Player */}
          <div className="flex-grow flex justify-center items-stretch">
            <div className="w-full max-w-[736px] h-[400px] mt-6">
              {/* Video Player */}
              <div className="relative w-full h-full bg-[#f4f4f9] rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-transform hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] duration-200">
                {/* YouTube Video Embed with Autoplay */}
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`${course.videoUrl}?autoplay=1`} // Enable autoplay
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Back Button */}
                <motion.button
                  onClick={onBack}
                  className="absolute top-2 left-2 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#9b7fd8] to-[#7A4DD2] text-white rounded-full shadow-md transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.1, rotate: 180 }} // Add rotate here
                  whileTap={{ scale: 0.9 }}
                >
                  <MdArrowBack className="text-lg" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Right section with ContentCourse */}
          <div className="w-full md:w-[300px] flex justify-center items-stretch">
            <div className="w-full h-full mt-2">
              <ContentCourse course={course} />
            </div>
          </div>
        </motion.div>

        {/* Course Overview Section directly under Video Player */}
        <motion.div
          className="w-full max-w-[730px] mt-2"
          variants={containerVariants}
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            E-Commerce Mobile App Design Using Figma
          </h1>

          <div className="mb-4">
            <div className="flex flex-col md:flex-row gap-4 py-4">
              <h2 className="text-[16px] font-semibold text-gray-800">
                Overview
              </h2>
              <span className="text-gray-500 text-[16px]">QnA</span>
              <span className="text-gray-500 text-[16px]">Note</span>
              <span className="text-gray-500 text-[16px]">Information</span>
            </div>

            <p className="text-black max-w-prose text-[14px]">
              Color is perception. Our eyes see something (the sky, for
              example), and data sent from our eyes to our brains tells us it’s
              a certain color (blue). Objects reflect light in different
              combinations of wavelengths. Our brains pick up on those
              wavelength combinations and translate them into the phenomenon we
              call color.
            </p>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={descriptionVariants}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-black max-w-prose text-[14px] mt-4">
                    Humans see colors in light waves. Mixing light or the
                    additive color mixing model allows you to create colors by
                    mixing red, green, and blue light sources of various
                    intensities. The more you add, the brighter the color
                    becomes. If you mix all three colors of light, you get pure,
                    white light.
                  </p>
                  <p className="text-black max-w-prose text-[14px] mt-2">
                    This process is used in technologies like screens and
                    projectors where RGB colors mix to create a wide range of
                    visible colors.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={handleToggle}
              className="mt-4 text-[#9b7fd8] font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#9b7fd8] hover:text-white hover:scale-105 focus:outline-none focus:ring-[#7a56d7] focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMore ? "See Less" : "See More"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoursePlayer;
