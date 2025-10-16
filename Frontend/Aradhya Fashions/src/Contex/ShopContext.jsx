import React, { createContext, useState } from "react";
import all_product from '../Assets/all_product'

// ✅ Create the context
export const ShopContext = createContext();

// ✅ Provider component
export const ShopProvider = (props) => {
  const contextValue ={all_product}
    
  return (
    <ShopContext.Provider value={ contextValue }>
      {props.children}
      </ShopContext.Provider>
   
  );
};
export default ShopProvider;
