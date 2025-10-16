import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { ShopContext } from "../Contex/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = ({ category , banner }) => {
  const { all_product } = useContext(ShopContext);

  // Local state for sorting
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = all_product
    .filter((item) => item.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.new_price - b.new_price;
      if (sortOption === "price-desc") return b.new_price - a.new_price;
      return 0; // default order
    });

  return (
    <div className="shop-category">
      {/* Banner */}
      <img src={banner} alt={category} className="shopcategory-banner" />

      {/* Header + Controls */}
      <div className="shopcategory-header">
        <p className="showing-products">
          Showing <span>{filteredProducts.length}</span> products
        </p>

        <div className="sort-container">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price} // ✅ pass as newPrice
              oldPrice={item.old_price} // ✅ pass as oldPrice
            />
          ))
        ) : (
          <p className="no-products">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
