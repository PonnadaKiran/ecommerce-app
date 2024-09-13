import React, { useContext } from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const Offers = () => {
  const { theme } = useContext(ShopContext);
  const darkMode = theme === "dark";

  return (
    <Link to={`/offers`} className="block w-full">
      <div className="offers w-full h-auto flex flex-col sm:flex-row justify-center items-center bg-gradient-to-b from-pink-100 to-gray-900 p-6 sm:p-20 mb-32 animate-bounce">
        <div className="offers-left flex-1 flex flex-col justify-center items-start text-center sm:text-left">
          <h1 className={`${darkMode ? "text-gray-900" : "text-white"} text-4xl sm:text-6xl font-bold`}>
            Exclusive
          </h1>
          <h1 className={`${darkMode ? "text-gray-900" : "text-white"} text-4xl sm:text-6xl font-bold`}>
            Offers For You
          </h1>
          <p className={`${darkMode ? "text-gray-900" : "text-white"} text-lg sm:text-xl font-semibold`}>
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white text-lg sm:text-xl px-6 py-3 rounded-full transition duration-300">
            Check Now
          </button>
        </div>
        <div className="offers-right flex-1 flex justify-center sm:justify-end items-center pt-8 sm:pt-0">
          <img src={exclusive_image} alt="Exclusive Offers" className="max-w-full h-auto" />
        </div>
      </div>
    </Link>
  );
};

export default Offers;
