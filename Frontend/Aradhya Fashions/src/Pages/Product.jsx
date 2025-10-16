import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Contex/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  // Find product by ID
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product Not Found
      </h2>
    );
  }

  return (
    <div className="product-page">
      <Breadcrum product={product} />
      <ProductDisplay product={product} addToCart={addToCart} />
    </div>
  );
};

export default Product;
