// src/Pages/Product.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Contex/ShopContext";

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
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-pricing">
          <span className="new-price">${product.new_price}</span>
          {product.old_price && <span className="old-price">${product.old_price}</span>}
        </div>
        <button onClick={() => addToCart(product.id)} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
