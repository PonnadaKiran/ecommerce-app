import React, { useContext, useState } from "react";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { useLinkClickHandler } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState("S"); // State for selected size
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const { theme } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row lg:px-24 lg:py-16 p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {/* Thumbnail images */}
          <img className="w-32 h-40" src={product.image} alt="" />
          <img className="w-32 h-40" src={product.image} alt="" />
          <img className="w-32 h-40" src={product.image} alt="" />
        </div>
        <div className="flex justify-center">
          {/* Main image */}
          <img className="w-96 h-[28rem]" src={product.image} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:ml-12 mt-8 lg:mt-0">
        <h1 className={`text-4xl font-bold ${theme === 'light' ? 'text-white' : 'text-black'}`}>{product.name}</h1>

        {/* Star rating */}
        <div className="flex items-center gap-2 mt-4">
          <img src={start_icon} alt="Star" />
          <img src={start_icon} alt="Star" />
          <img src={start_icon} alt="Star" />
          <img src={start_icon} alt="Star" />
          <img src={start_dull_icon} alt="Star" />
          <p className={`text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}> (122) </p>
        </div>

        {/* Prices */}
        <div className="flex gap-4 mt-6 text-xl font-semibold">
          <div className="line-through text-gray-500">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>

        {/* Description */}
        <p className={`mt-6 text-sm ${theme === 'light' ? 'text-white' : 'text-gray-900'}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur assumenda cum eligendi tenetur, enim, expedita beatae.
        </p>

        {/* Size Selection */}
        <h1 className={`mt-10 text-lg font-semibold ${theme === 'light' ? 'text-white' : 'text-black'}`}>Select Size</h1>
        <div className="flex gap-4 mt-4">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              className={`p-2 border rounded-lg cursor-pointer ${
                selectedSize === size
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "bg-gray-100 border-gray-300"
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </div>
          ))}
        </div>

        {/* Quantity Selection */}
        <h1 className={`mt-10 text-lg font-semibold ${theme === 'light' ? 'text-white' : 'text-black'}`}>Select Quantity</h1>
        <input
          type="number"
          min="1"
          className="border-2 border-gray-300 rounded-lg p-2 w-20 mt-2 focus:outline-none focus:border-blue-500"
          value={selectedQuantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />

        {/* Add to Cart Button */}
        <button
          className="mt-8 bg-red-500 text-white p-3 rounded-lg w-48 font-semibold hover:bg-red-600 transition"
          onClick={() => {
            addToCart(product.id, selectedSize, selectedQuantity);
            toast.success("Item added to cart", {
              autoClose: 1500,
              closeButton: false,
            });
          }}
        >
          ADD TO CART
        </button>
        <ToastContainer toastStyle={{ fontWeight: "bold", marginTop: "68px" }} />

        {/* Product Info */}
        <p className={`mt-8 text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>
          <span className="font-semibold">Category:</span> Women, T-shirt, Crop Top
        </p>
        <p className={`text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
