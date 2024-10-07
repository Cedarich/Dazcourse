import React, { useState } from "react";
import Banner from "../features/Banner";
import OfferCards from "../features/OfferCards";
import SearchInput from "../features/SearchInput";
import SearchResult from "../features/SearchResult";
import InstructorProfiled from "../components/InstructorProfiled.jsx";
import UserExperienceDesign from "../components/UserExperienceDesign";
import { CgArrowBottomRightR } from "react-icons/cg";
import { FaTags } from "react-icons/fa6";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]); // State to manage cart items
  const [currentView, setCurrentView] = useState("offers"); // State to manage the current view

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

  // Function to handle adding items to the cart
  const handleAddToCart = (offer) => {
    setCartItems((prevItems) => [...prevItems, offer]);
  };

  // Handler to change view
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="bg-[#f4f4f9] p-4 scroll-smooth modern-entrance">
      <div className="mx-auto px-2">
        <Banner />
      </div>

      <div className="flex flex-wrap items-center text-center gap-4 my-4 px-2 whitespace-nowrap">
        {/* Offers Section */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => handleViewChange("offers")}
        >
          <p className="transition-transform duration-300 group-hover:translate-x-1 text-[#babac9] text-xs">
            Best Sellers
          </p>
          <FaTags className="text-[#babac9] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#7a56d7]" />
        </div>

        {/* Instructor Profile Section */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => handleViewChange("instructor")}
        >
          <p className="transition-transform duration-300 group-hover:translate-x-1 text-[#babac9] text-xs">
            Instructor Profile
          </p>
          <CgArrowBottomRightR className="text-[#babac9] font-semibold transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#7a56d7]" />
        </div>

        {/* User Experience Design Section */}
        <div
          className="flex items-center gap-2 group cursor-pointer w-full sm:w-auto"
          onClick={() => handleViewChange("ux")}
        >
          <p className="transition-transform duration-300 group-hover:translate-x-1 text-[#babac9] text-xs">
            User Experience Design
          </p>
          <CgArrowBottomRightR className="text-[#babac9] font-semibold transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#7a56d7]" />
        </div>
      </div>

      {/* Render SearchInput and SearchResult only for the "offers" view */}
      {currentView === "offers" && (
        <>
          <div className="py-4 mt-4 w-full">
            <SearchInput onSearch={handleSearch} />
          </div>

          <div>
            {/* Pass cartItems.length to SearchResult */}
            <SearchResult cartCount={cartItems.length} />
          </div>

          <div>
            {/* Render the OfferCards only for the "offers" view */}
            <OfferCards
              searchTerm={searchTerm}
              offers={offers}
              onAddToCart={handleAddToCart} // Pass the add to cart handler
            />
          </div>
        </>
      )}

      {/* Render components based on current view */}
      {currentView === "instructor" && <InstructorProfiled />}
      {currentView === "ux" && <UserExperienceDesign />}
    </div>
  );
};

export default Explore;
