import React, { useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import Divine from "../assests/images/Divine.jpg";
import Topheader from "../features/Topheader";
import OfferCards from "../features/OfferCards"; // Import OfferCards

const InstructorProfiled = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  // Simulate fade-in effect on component load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample offers array with three items
  const offers = [
    {
      id: 1,
      title: "UI/UX Design Course",
      author: "Mohameed Yahaya",
      rating: 4.5,
      reviews: 120,
      currency: "₦",
      price: 599,
      originalPrice: 1999,
      imageUrl: require("../assests/images/UU.jpg"),
      authorImage: require("../assests/images/Old.jpg"),
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      author: "Mercy Duru",
      rating: 4.8,
      reviews: 90,
      currency: "₦",
      price: 1049,
      originalPrice: 2490,
      imageUrl: require("../assests/images/Web.jpg"),
      authorImage: require("../assests/images/Mercy.jpg"),
    },
    {
      id: 3,
      title: "Game Development",
      author: "Makama Elisha",
      price: 2400,
      originalPrice: 7000,
      currency: "₦",
      rating: 4.8,
      reviews: 997,
      imageUrl: require("../assests/images/game.jpg"),
      authorImage: require("../assests/images/Divine.jpg"),
    },
  ];

  // Toggle social media visibility for small screens
  const toggleSocials = () => {
    setShowSocials((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      <div
        className={`flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-all duration-700 ease-in-out transform ${
          isLoaded
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10"
        }`}
      >
        {/* Profile Picture */}
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex items-center justify-center mb-4 relative transition-all duration-700 ease-in-out transform hover:scale-110">
          <img
            src={Divine}
            alt="Instructor"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b7fd8] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Instructor Name */}
        <h2
          className={`text-2xl font-bold mb-2 text-gray-800 transition-opacity transform ${
            isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0"
          } duration-700`}
        >
          Ritchey Nwadubisi
        </h2>
        <p
          className={`text-black text-lg mb-4 transition-opacity transform ${
            isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0"
          } duration-700 delay-200`}
        >
          UX Designer
        </p>

        {/* Student and Review Count */}
        <div
          className={`flex gap-8 items-center mb-4 text-xl transition-opacity transform ${
            isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0"
          } duration-700 delay-300`}
        >
          <p className="text-gray-500 text-base">
            Total Students:{" "}
            <span className="font-semibold text-gray-800 animate-pulse">
              2778
            </span>
          </p>
          <p className="text-gray-500 text-base">
            Total Reviews:{" "}
            <span className="font-semibold text-gray-800 animate-pulse">
              1220
            </span>
          </p>
        </div>

        {/* Instructor Bio */}
        <p
          className={`text-gray-700 text-base mb-6 text-center leading-relaxed transition-all ${
            isLoaded
              ? "opacity-100 scale-100 translate-y-0 hover:text-[#7a56d7]"
              : "opacity-0"
          } duration-700 delay-400`}
        >
          I’ve been preaching and practicing the gospel of User Experience (UX)
          to Fortune 100, 500 and Government organizations for nearly three
          decades. That work includes commercial industry leaders like Google
          Ventures, Kroll/Duff + Phelps, Broadridge, Conde Nast, Johns Hopkins,
          Mettler-Toledo, PHH Arval, SC Johnson and Wolters Kluwer, as well as
          government agencies like the National Science Foundation, National
          Institutes of Health and the Dept. of Homeland Security.
        </p>

        {/* Social Media Links */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-4 items-center transition-opacity transform ${
            isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0"
          } duration-700 delay-500`}
        >
          {[
            { icon: FiMessageCircle, label: "Message" },
            { icon: AiFillLinkedin, label: "LinkedIn" },
            { icon: AiOutlineTwitter, label: "Twitter" },
            { icon: AiOutlineInstagram, label: "Instagram" },
            { icon: AiOutlineFacebook, label: "Facebook" },
          ].map((social, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-2 group transition-transform duration-500 ease-out hover:scale-110 hover:shadow-lg hover:bg-[#f2f0fa] p-2 rounded-lg cursor-pointer ${
                isLoaded ? `animate-fade-in-${index}` : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <social.icon className="text-[#9b7fd8] text-xl group-hover:scale-125 transition-transform duration-300" />
              <p className="group-hover:text-[#7a56d7] transition-colors duration-300">
                {social.label}
              </p>
            </div>
          ))}
        </div>

        {/* Show More Button for Small Screens Only */}
        <button
          className="mt-4 text-[#7a56d7] font-semibold transition-all duration-300 hover:text-[#9b7fd8] focus:outline-none sm:hidden"
          onClick={toggleSocials}
        >
          {showSocials ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="mt-2">
        <Topheader />
      </div>

      {/* Render OfferCards for 3 offers */}
      <div className="mt-8">
        <OfferCards offers={offers} onAddToCart={() => {}} />
      </div>
    </div>
  );
};

export default InstructorProfiled;
