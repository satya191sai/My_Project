// src/Item/Item.jsx
import React from "react";
import "./Item.css";

const Item = ({ id, name, image, newPrice, oldPrice }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <h3 className="item-name">{name}</h3>
      <div className="item-price">
        <span className="new-price">${newPrice}</span>
        {oldPrice && <span className="old-price">${oldPrice}</span>}
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Item;
