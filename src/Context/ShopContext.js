import React, { createContext, useState, useMemo } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const addToCart = (itemId, size, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === itemId && item.size === size
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingCartItemIndex) {
          const newQuantity = item.quantity + quantity;
          return { ...item, quantity: Math.max(newQuantity, 0) };
        }
        return item;
      }).filter(item => item.quantity > 0); // Remove items with zero quantity

      setCartItems(updatedCartItems);
    } else {
      const cartProduct = {
        ...all_product.find((product) => product.id === itemId),
        size,
        quantity
      };
      setCartItems([...cartItems, cartProduct]);
    }
  };

  const removeFromCart = (itemId, size) => {
    setCartItems(cartItems.filter((product) => !(product.id === itemId && product.size === size)));
  };

  const getTotalCartAmount = useMemo(() => {
    return cartItems.reduce((total, product) => total + (product.new_price * product.quantity), 0);
  }, [cartItems]);

  const getTotalCartItems = useMemo(() => {
    return cartItems.length;
  }, [cartItems]);

  const contextValue = {
    all_product,
    cartItems,
    theme,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    setTheme
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
