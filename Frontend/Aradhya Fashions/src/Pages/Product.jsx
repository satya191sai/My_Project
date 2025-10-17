// src/Pages/Product.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Contex/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
const Product = () => {
  const { productId } = useParams(); // get productId from URL
  const { all_product, addToCart } = useContext(ShopContext);

  // Find the product by ID
  const product = all_product.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h2>;
  }

  return (
    <div className="product-page">
      <Breadcrum product={product} />
      <ProductDisplay product={product} addToCart={addToCart} />
    </div>
  );
};

export default Product;
