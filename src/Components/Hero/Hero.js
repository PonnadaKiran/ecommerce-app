import React, { useContext } from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { theme } = useContext(ShopContext);
  return (
    <div
      className={`h-screen flex ${theme === "dark" 
        ? "bg-gradient-to-b from-purple-100 to-transparent" 
        : "bg-gradient-to-b from-purple-100 to-gray-800"}`}
    >
      <div className="flex-1 flex flex-col justify-center gap-5 pl-44">
        <h2 className={`text-2xl font-semibold ${theme === "dark" ? "text-black" : "text-white"}`}>
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className={`text-7xl font-bold ${theme === "dark" ? "text-gray-900" : "text-white"}`}>New</p>
            <img src={hand_icon} alt="Hand Icon" className="w-24" />
          </div>
          <p className={`text-7xl font-bold ${theme === "dark" ? "text-gray-900" : "text-white"}`}>Collections</p>
          <p className={`text-7xl font-bold ${theme === "dark" ? "text-gray-900" : "text-white"}`}>For Everyone</p>
        </div>
        <Link className="no-underline" to={"/collections"}>
          <div className="flex items-center justify-center gap-4 w-80 h-16 bg-red-500 text-white text-lg font-medium rounded-full mt-7">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <img src={hero_image} alt="Hero" className="mt-36 ml-36" />
      </div>
    </div>
  );
};

export default Hero;
