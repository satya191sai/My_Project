import React from "react";
import Item from "../Item/Item";
import newCollectionData from "../../Assets/new_collections"; // Make sure this file exports an array
import "./NewCollection.css";
const NewCollections = () => {
  return (
    <section className="new-collections-section">
      <h2>New Collections</h2>
      <div className="new-collections-grid">
        {newCollectionData.map((product) => (
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

export default NewCollections;
