import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const TOP_OFFSET = 300;

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-10 right-10 h-12 w-12 bg-cyan-400 rounded-full flex justify-center items-center z-50 cursor-pointer transition-opacity duration-500 ease-in-out opacity-100 hover:bg-cyan-500"
          onClick={handleClick}
        >
          <FaArrowUp size={25} className="text-white" />
        </div>
      )}
    </>
  );
};

export default ScrollUpButton;
