import React, { useEffect, useRef, useState } from "react";
import AddButton from "./AddButton";
import Jack from "../assests/images/Jack.png";
import Sarah from "../assests/images/Sarah.png";
import John from "../assests/images/John.png";

const bestSellingItems = [
  {
    id: 1,
    title: "e-Commerce Mobile App design using Figma",
    author: "Jack Harper",
    price: 2400,
    originalPrice: 7000,
    currency: "₦",
    rating: 4.8,
    reviews: 997,
    imageUrl: require("../assests/images/Ecom.png"),
    authorImage: Jack,
  },
  {
    id: 2,
    title: "Creative Landing Page Design Guide",
    author: "Sarah Connor",
    price: 30000,
    originalPrice: 8000,
    currency: "₦",
    rating: 4.5,
    reviews: 500,
    imageUrl: require("../assests/images/Landing.png"),
    authorImage: Sarah,
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    author: "Adebayo Oluka",
    price: 2500,
    originalPrice: 4500,
    currency: "₦",
    rating: 4.9,
    reviews: 1200,
    imageUrl: require("../assests/images/UX.png"),
    authorImage: John,
  },
];

const BestSellingCard = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bestSellingItems.map((item, index) => (
        <div
          key={item.id}
          ref={ref}
          className={`max-w-sm rounded-lg shadow-lg bg-white p-6 transition-all duration-700 ease-out transform ${
            visible
              ? "opacity-100 translate-y-0 scale-100 animate-slideDown"
              : "opacity-0 translate-y-[-20px] scale-95"
          } hover:shadow-2xl hover:scale-105 hover:shadow-[#7a56d7] group`}
          style={{
            animationDelay: `${index * 150}ms`,
          }}
        >
          <div className="relative mb-4">
            <div className="relative">
              <span
                className="absolute top-0 right-0 bg-[#dbd7f4] text-[#7a56d7] text-xs font-bold uppercase px-2 py-1 rounded-br-lg z-10 
                shadow-lg cursor-pointer transition-transform transform duration-300 bounce-animation group-hover:animate-none"
              >
                <span className="relative z-10">Best Sellers</span>
                <span
                  className="absolute inset-0 rounded-br-lg bg-gradient-to-r from-[#7a56d7] to-[#c1b2e8] opacity-25 
                  animate-gradient transition duration-500"
                ></span>
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
            <AddButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellingCard;
