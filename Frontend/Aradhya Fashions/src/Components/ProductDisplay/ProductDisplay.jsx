import React, { useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="product-display">
      <div className="product-left">
        <div className="product-thumbnails">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={`thumb-${index}`}
              onClick={() => setMainImage(product.image)}
            />
          ))}
        </div>

        <div className="product-main-image">
          <img src={mainImage} alt="Main product" />
        </div>
      </div>

      <div className="product-right">
        <h1 className="product-title">{product.name}</h1>

        <div className="product-rating">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>

        <div className="product-prices">
          <span className="price-old">${product.old_price}</span>
          <span className="price-new">${product.new_price}</span>
        </div>

        <p className="product-description">
          The goal is to make font sizes fluid, meaning they automatically scale between a minimum
          and maximum value based on the viewport width — so your design looks natural on phones,
          tablets, and large screens.
        </p>

        <div className="product-sizes">
          <h3>Select Size</h3>
          <div className="size-options">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        <p className="product-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-tags">
          <span>Tags: </span>Modern, Latest
        </p>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
