import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";

const OfferCards = ({ searchTerm, offers, onAddToCart }) => {
  const [showCards, setShowCards] = useState(false);

  // Make sure searchTerm is a valid string to avoid errors
  const validSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";

  // Filter offers based on the search term, ensuring title exists
  const filteredOffers = offers.filter((offer) => {
    return offer.title
      ? offer.title.toLowerCase().includes(validSearchTerm)
      : false;
  });

  useEffect(() => {
    // Show cards after a delay to allow Explore's entrance animation to finish
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 800); // Match this delay with the duration of Explore's entrance animation

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredOffers.map((item, index) => (
        <div
          key={item.id}
          className={`max-w-sm rounded-lg shadow-lg bg-white p-6 transition-transform duration-700 ease-out transform ${
            showCards
              ? `translate-y-0 scale-100 animate-popIn`
              : `translate-y-[-20px] scale-95`
          } group hover:shadow-[0_0_10px_3px_rgba(122,86,215,0.6),0_0_15px_5px_rgba(186,186,201,0.4)] hover:scale-105`}
          style={{
            animationDelay: `${index * 150}ms`,
          }}
        >
          <div className="relative mb-4">
            <div className="relative">
              <span className="absolute top-0 right-0 bg-[#dbd7f4] text-[#7a56d7] text-xs font-bold uppercase px-2 py-1 rounded-br-lg z-10 shadow-lg cursor-pointer transition-transform transform duration-300 bounce-animation group-hover:animate-none">
                <span className="relative z-10">BEST SELLERS</span>
                <span className="absolute inset-0 rounded-br-lg bg-gradient-to-r from-[#7a56d7] to-[#c1b2e8] opacity-25 animate-gradient transition duration-500"></span>
                <span className="absolute inset-0 rounded-br-lg opacity-30 blur-md animate-shimmer transition duration-1000"></span>
              </span>
            </div>

            <img
              src={item.imageUrl}
              alt={item.title}
              className="bg-gray-200 h-48 w-full rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <div className="flex items-center mb-4">
            <img
              src={item.authorImage}
              alt={`${item.author} Avatar`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-black font-semibold">{item.author}</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-600">
              {item.rating} ({item.reviews} Reviews)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">
              {item.currency}
              {item.price}{" "}
              <span className="text-gray-500 line-through">
                {item.currency}
                {item.originalPrice}
              </span>
            </span>
            {/* Pass the onAddToCart function to AddButton */}
            <AddButton onClick={() => onAddToCart(item)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferCards;
