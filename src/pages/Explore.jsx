import React, { useState } from "react";
import Banner from "../features/Banner";
import OfferCards from "../features/OfferCards";
import SearchInput from "../features/SearchInput";
import SearchResult from "../features/SearchResult";
import InstructorProfiled from "../components/InstructorProfiled.jsx";
import UserExperienceDesign from "../components/UserExperienceDesign"; // Import UserExperienceDesign
import { CgArrowBottomRightR } from "react-icons/cg";
import { FaTags } from "react-icons/fa6";
import CustomAlert from "../components/CustomAlert";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [currentView, setCurrentView] = useState("offers"); // State to manage current view
  const [selectedCourseId, setSelectedCourseId] = useState(null); // State to manage selected course ID
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const offers = [
    // Your offers data...
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
    {
      id: 4,
      title: "Creative Landing Page Design Guide",
      author: "Sarah Connor",
      price: 30000,
      originalPrice: 8000,
      currency: "₦",
      rating: 4.5,
      reviews: 500,
      imageUrl: require("../assests/images/Landing.png"),
      authorImage: require("../assests/images/Sarah.png"),
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      author: "Adebayo Oluka",
      price: 2500,
      originalPrice: 4500,
      currency: "₦",
      rating: 4.9,
      reviews: 1200,
      imageUrl: require("../assests/images/UX.png"),
      authorImage: require("../assests/images/John.png"),
    },
    {
      id: 6,
      title: "e-Commerce Mobile App Design using Figma",
      author: "Jack Harper",
      price: 2400,
      originalPrice: 7000,
      currency: "₦",
      rating: 4.8,
      reviews: 997,
      imageUrl: require("../assests/images/Ecom.png"),
      authorImage: require("../assests/images/Jack.png"),
    },
    {
      id: 7,
      title: "Mesh Clothing Making",
      author: "Mendy Bahago",
      price: 1400,
      originalPrice: 17000,
      currency: "₦",
      rating: 4.8,
      reviews: 997,
      imageUrl: require("../assests/images/Mesh.jpg"),
      authorImage: require("../assests/images/dave.jpg"),
    },
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (offer) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === offer.id);
      if (itemExists) {
        setAlertMessage(`${offer.title} is already in your cart!`);
        setShowAlert(true);
        return prevItems;
      } else {
        return [...prevItems, offer];
      }
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Handler for card click to manage views
  const handleCardClick = (id) => {
    setSelectedCourseId(id); // Set the selected course ID
    setCurrentView("ux"); // Change the view to UserExperienceDesign
  };

  return (
    <div className="bg-[#f4f4f9] p-4 scroll-smooth modern-entrance">
      <div className="mx-auto px-2">
        <Banner />
      </div>

      <div className="flex flex-wrap items-center text-center gap-4 my-4 px-2 whitespace-nowrap">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => setCurrentView("offers")}
        >
          <p className="transition-transform duration-300 group-hover:translate-x-1 text-[#babac9] text-xs">
            Best Sellers
          </p>
          <FaTags className="text-[#babac9] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#7a56d7]" />
        </div>
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => setCurrentView("instructor")}
        >
          <p className="transition-transform duration-300 group-hover:translate-x-1 text-[#babac9] text-xs">
            Instructor Profile
          </p>
          <CgArrowBottomRightR className="text-[#babac9] font-semibold transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#7a56d7]" />
        </div>
      </div>

      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}

      {/* Render offers view */}
      {currentView === "offers" && (
        <>
          <SearchInput onSearch={handleSearch} />
          <SearchResult cartCount={cartItems.length} />
          <OfferCards
            searchTerm={searchTerm}
            offers={offers}
            onAddToCart={handleAddToCart}
            onCardClick={(offer) => handleCardClick(offer.id)} // Trigger view change on card click
          />
        </>
      )}

      {/* Render Instructor Profile */}
      {currentView === "instructor" && <InstructorProfiled />}

      {/* Render UserExperienceDesign */}
      {currentView === "ux" && (
        <UserExperienceDesign
          courseId={selectedCourseId} // Pass the selected course ID
          onClose={() => setCurrentView("offers")} // Provide a way to return to offers view
        />
      )}
    </div>
  );
};

export default Explore;
