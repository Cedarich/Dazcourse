import React from "react";
import AddButton from "./AddButton";

const bestSellingItems = [
  {
    id: 1,
    title: "e-Commerce Mobile App design using Figma",
    author: "Jack Harper",
    price: 20,
    originalPrice: 30,
    currency: "₦",
    rating: 4.8,
    reviews: 997,
    imageUrl: "https://via.placeholder.com/150", // Placeholder for the image
  },
  {
    id: 2,
    title: "Landing Page Design Guide",
    author: "Sarah Connor",
    price: 15,
    originalPrice: 25,
    currency: "₦",
    rating: 4.5,
    reviews: 500,
    imageUrl: "https://via.placeholder.com/150", // Placeholder for the image
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    author: "John Doe",
    price: 25,
    originalPrice: 35,
    currency: "₦",
    rating: 4.9,
    reviews: 1200,
    imageUrl: "https://via.placeholder.com/150", // Placeholder for the image
  },
  {
    id: 4,
    title: "Mobile App Development Basics",
    author: "Jane Smith",
    price: 30,
    originalPrice: 40,
    currency: "₦",
    rating: 4.7,
    reviews: 800,
    imageUrl: "https://via.placeholder.com/150", // Placeholder for the image
  },
  {
    id: 5,
    title: "Advanced CSS Techniques",
    author: "Emily Johnson",
    price: 18,
    originalPrice: 28,
    currency: "₦",
    rating: 4.6,
    reviews: 650,
    imageUrl: "https://via.placeholder.com/150", // Placeholder for the image
  },
];

const BestSellingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bestSellingItems.slice(0, 3).map((item) => (
        <div
          key={item.id}
          className="max-w-sm rounded-lg shadow-lg bg-white p-6"
        >
          <div className="relative mb-4">
            <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-br-lg">
              Best Sellers
            </span>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="bg-gray-200 h-48 rounded-lg mb-4"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40" // User avatar placeholder
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-gray-600">{item.author}</p>
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
            <AddButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellingCard;
