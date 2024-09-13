import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const DescriptionBox = () => {
  const { theme } = useContext(ShopContext);
  return (
    <div className="mx-6 md:mx-20 my-16">
      <div className="flex space-x-4">
        <div
          className={`flex items-center justify-center w-40 h-16 font-semibold border ${theme === "dark" ? "text-gray-700" : "text-white"} border-gray-300`}
        >
          Description
        </div>
        <div
          className={`flex items-center justify-center w-40 h-16 font-semibold border ${theme === "dark" ? "text-gray-700 bg-gray-100" : "text-white bg-gray-100"} border-gray-300`}
        >
          Reviews (122)
        </div>
      </div>
      <div className="mt-6 p-12 border border-gray-300 space-y-6">
        <p className={theme === "dark" ? "text-gray-700" : "text-white"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste
          enim numquam ipsum deserunt molestiae repellat quis quo dignissimos
          vitae, hic asperiores adipisci. Saepe animi ea facilis voluptas
          corrupti! Voluptatem!
        </p>
        <p className={theme === "dark" ? "text-gray-700" : "text-white"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
