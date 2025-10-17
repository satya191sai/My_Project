import React, { createContext, useState, useEffect } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product (with optional size)
  const addToCart = (product, selectedSize = "M") => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existing) {
        // If same product and size exist, increase quantity
        return prev.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new size variant
        return [...prev, { ...product, quantity: 1, size: selectedSize }];
      }
    });
  };

  // Remove product
  const removeFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Update quantity
  const updateQuantity = (productId, size, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  // ✅ Update size of a cart item
  const updateSize = (productId, oldSize, newSize) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === productId && item.size === oldSize
      );

      if (!existing) return prev;

      // If the same product already exists with new size, merge quantities
      const duplicate = prev.find(
        (item) => item.id === productId && item.size === newSize
      );

      if (duplicate) {
        return prev
          .map((item) =>
            item.id === productId && item.size === newSize
              ? { ...item, quantity: item.quantity + existing.quantity }
              : item
          )
          .filter(
            (item) => !(item.id === productId && item.size === oldSize)
          );
      }

      // Otherwise, just update the size
      return prev.map((item) =>
        item.id === productId && item.size === oldSize
          ? { ...item, size: newSize }
          : item
      );
    });
  };

  // Totals
  const getCartTotalItems = () =>
    cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const getCartTotalPrice = () =>
    cartItems.reduce(
      (total, item) => total + (item.quantity || 1) * item.new_price,
      0
    );

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        getCartTotalItems,
        getCartTotalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
