import React, { createContext, useState } from "react";

// ✅ Create the context
export const ShopContext = createContext();

// ✅ Provider component
export const ShopProvider = ({ children }) => {
  const [all_product, setAllProduct] = useState([
    {
      id: 1,
      name: "Men's T-Shirt",
      image: "/src/Assets/men1.png",
      newPrice: 20,
      oldPrice: 30,
      category: "men"
    },
    {
      id: 2,
      name: "Men's Jeans",
      image: "/src/Assets/men2.png",
      newPrice: 40,
      oldPrice: 50,
      category: "men"
    },
    {
      id: 3,
      name: "Women's Dress",
      image: "/src/Assets/women1.png",
      newPrice: 35,
      oldPrice: 50,
      category: "women"
    },
    {
      id: 4,
      name: "Women's Top",
      image: "/src/Assets/women2.png",
      newPrice: 25,
      oldPrice: 40,
      category: "women"
    },
    {
      id: 5,
      name: "Kids Jacket",
      image: "/src/Assets/kids1.png",
      newPrice: 25,
      oldPrice: 35,
      category: "kids"
    },
    {
      id: 6,
      name: "Kids T-Shirt",
      image: "/src/Assets/kids2.png",
      newPrice: 15,
      oldPrice: 25,
      category: "kids"
    }
  ]);

  return (
    <ShopContext.Provider value={{ all_product, setAllProduct }}>
      {children}
    </ShopContext.Provider>
  );
};
