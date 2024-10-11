import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing star icon from react-icons

// Move ratingsData outside the component since it's static
const ratingsData = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
];

const StudentReview = () => {
  const [progress, setProgress] = useState([]);

  const reviews = [
    {
      name: "Anas Amalina",
      timeAgo: "4 hours ago",
      content:
        "Learning these design skills was fascinating for an accountant and very easy to follow. I have learnt a lot and will be designing on a regular basis going forward.",
      rating: 5,
      imageUrl: require("../assests/images/anny.jpg"),
    },
    {
      name: "Big Cedar",
      timeAgo: "5 hours ago",
      content:
        "Learning these design skills was fascinating for an accountant and very easy to follow. I have learnt a lot and will be designing on a regular basis going forward.",
      rating: 5,
      imageUrl: require("../assests/images/newprof.jpg"),
    },
  ];

  useEffect(() => {
    const loadProgress = () => {
      const newProgress = ratingsData.map((rating) => ({
        ...rating,
        current: 0,
      }));
      setProgress(newProgress);

      newProgress.forEach((rating, index) => {
        setTimeout(() => {
          setProgress((prev) => {
            const updated = [...prev];
            updated[index].current = rating.percentage;
            return updated;
          });
        }, index * 1000); // Adjust the time delay for each bar
      });
    };

    loadProgress();
  }, []); // No dependencies since ratingsData is static

  return (
    <div className="max-w-[740px] rounded-lg p-2 mt-4 px-2">
      <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>

      {/* Responsive Rating Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex flex-col items-center mb-2">
          <span className="text-6xl font-bold">4.9</span>
          <span className="text-gray-400 text-sm">12.6k reviews</span>
        </div>

        {/* Rating Progress Bars with Stars and Percentage */}
        <div className="flex-grow">
          {progress.map((rating) => (
            <div key={rating.stars} className="flex items-center mb-1">
              <div className="flex items-center mr-2">
                {[...Array(rating.stars)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-500 star-icon cursor-pointer"
                  />
                ))}
                {[...Array(5 - rating.stars)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-gray-300 star-icon cursor-pointer"
                  />
                ))}
              </div>
              <div className="w-3/4 bg-gray-300 rounded h-2 mr-2 overflow-hidden group">
                <div
                  className="bg-blue-600 h-2 rounded transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:bg-blue-700"
                  style={{ width: `${rating.current}%` }}
                ></div>
              </div>
              <span>{rating.current}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-t pt-2 px-2 mt-4 flex flex-col sm:flex-row items-start transition-transform transform hover:scale-105 hover: p-2 duration-300 ease-in-out"
        >
          <img
            src={review.imageUrl}
            alt={review.name}
            className="w-12 h-12 rounded-full mr-3 shadow image-hover"
          />
          <div className="mt-2 sm:mt-0">
            <h3 className="font-semibold">
              {review.name}{" "}
              <span className="text-gray-500">• {review.timeAgo}</span>
            </h3>
            {/* Stars under user name */}
            <div className="flex items-center mb-1">
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500 star-icon" />
              ))}
              {[...Array(5 - review.rating)].map((_, index) => (
                <FaStar key={index} className="text-gray-300 star-icon" />
              ))}
            </div>
            <p className="text-gray-700 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">
              {review.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentReview;
