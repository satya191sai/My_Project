import React from "react";
import Item from "../Item/Item";
import data_product from "../../Assets/data"; // array of products

const Popular = () => {
  return (
    <section className="popular-section">
      <h2>Popular Products</h2>
      <div className="popular-grid">
        {data_product.map(product => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
