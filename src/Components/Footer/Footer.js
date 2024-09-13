import React, { useContext } from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const { theme } = useContext(ShopContext);
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-28">
      <div className="flex items-center gap-5">
        <Link className="flex items-center" to="/" onClick={handleLogoClick}>
          <img src={footer_logo} alt="ShopNex Logo" />
          <p className={`text-4xl font-bold ${theme === "dark" ? "text-gray-700" : "text-white"}`}>
            ShopNex
          </p>
        </Link>
      </div>

      <ul className={`flex gap-12 list-none ${theme === "dark" ? "text-gray-600" : "text-white"}`}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>
          <Link className={`no-underline ${theme === "dark" ? "text-gray-700" : "text-white"}`} to="/about" onClick={scrollToTop}>
            About
          </Link>
        </li>
        <li>
          <Link className={`no-underline ${theme === "dark" ? "text-gray-700" : "text-white"}`} to="/contact" onClick={scrollToTop}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="flex gap-5">
        <div className="p-2 bg-gray-100 border border-gray-200">
          <img src={instagram_icon} alt="Instagram" className="transition-transform duration-200 ease-in-out hover:scale-110" />
        </div>
        <div className="p-2 bg-gray-100 border border-gray-200">
          <img src={pintester_icon} alt="Pinterest" className="transition-transform duration-200 ease-in-out hover:scale-110" />
        </div>
        <div className="p-2 bg-gray-100 border border-gray-200">
          <img src={whatsapp_icon} alt="WhatsApp" className="transition-transform duration-200 ease-in-out hover:scale-110" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-7 mb-7">
        <hr className={`w-4/5 h-1 rounded-full ${theme === "dark" ? "bg-gray-400" : "bg-gray-600"}`} />
        <p className={`text-lg ${theme === "dark" ? "text-gray-800" : "text-white"}`}>
          Copyright © {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
