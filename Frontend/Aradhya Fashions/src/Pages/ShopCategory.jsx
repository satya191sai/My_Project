import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { ShopContext } from "../Contex/ShopContext";

// Banners for categories
const categoryBanners = {
  men: "/src/Assets/men_banner.png",
  women: "/src/Assets/women_banner.png",
  kids: "/src/Assets/kids_banner.png"
};

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category (case-insensitive)
  const filteredProducts = all_product.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="shop-category">
      <img src={categoryBanners[category]} alt={`${category} banner`} />
      <h2 className="category-title">{category} Collection</h2>
      <p>
        <span>Showing 1-{Math.min(12, filteredProducts.length)}</span> out of {filteredProducts.length} products
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="dropdown" />
      </div>
      <div className="category-grid">
        {filteredProducts.length === 0 && <p>No products found.</p>}
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <h3>{product.name}</h3>
            <div className="price">
              <span className="new-price">${product.newPrice}</span>
              {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
            </div>
            <Link to={`/product/${product.id}`} className="btn">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
