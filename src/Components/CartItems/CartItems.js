import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import placeholder_image from "../Assets/empty-cart.png";

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount, theme } =
    useContext(ShopContext);

  const calculateTotalPrice = (item) => item.new_price * item.quantity;
  const isEmptyCart = cartItems.length === 0;

  return (
    <div className="mx-6 md:mx-20 my-16">
      <div
        className={`grid grid-cols-7 gap-4 text-center font-semibold py-5 ${theme === "dark" ? "text-gray-700" : "text-white"}`}
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {isEmptyCart && (
        <div className="text-center">
          <img
            src={placeholder_image}
            alt="Empty Cart"
            className="w-32 mx-auto my-4"
          />
          <p className="text-xl text-gray-800">Hey, it feels so light!</p>
          <p className="text-md text-gray-500">
            There is nothing in your bag. Let's add some items.
          </p>
        </div>
      )}

      <hr className="my-4" />

      {cartItems.map((item) => (
        <div key={item.id} className="mb-4">
          <div
            className={`grid grid-cols-7 gap-4 text-center items-center font-medium py-5 ${theme === "dark" ? "text-gray-700" : "text-white"}`}
          >
            <img
              src={item.image}
              alt=""
              className="h-16 mx-auto"
            />
            <p>{item.name}</p>
            <p className="text-center">${item.new_price}</p>
            <p className="text-center">{item.size}</p>
            <p className="text-center">{item.quantity}</p>
            <p className="text-center">${calculateTotalPrice(item)}</p>
            <img
              className="w-4 mx-auto cursor-pointer"
              src={remove_icon}
              onClick={() => removeFromCart(item.id)}
              alt="remove"
            />
          </div>
          <hr />
        </div>
      ))}

      <div className="flex flex-col lg:flex-row gap-12 mt-16">
        <div className="flex-1 space-y-6">
          <h1 className={`text-xl ${theme === "dark" ? "text-gray-700" : "text-white"}`}>Cart Totals</h1>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h3>Total</h3>
              <h3>${getTotalCartAmount}</h3>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white py-3 font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-gray-500">If you have a promo code, enter it here</p>
          <div className="flex items-center space-x-4 bg-gray-200 p-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 bg-transparent outline-none"
            />
            <button className="bg-black text-white px-6 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
