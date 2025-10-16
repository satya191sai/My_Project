import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ id, name, image, newPrice, oldPrice }) => {
  return (
    <div className="item-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="item-image" />
      </Link>
      <h3 className="item-name">{name}</h3>
      <div className="item-price">
        <span className="new-price">${newPrice}</span>
        {oldPrice && <span className="old-price">${oldPrice}</span>}
      </div>
    </div>
  );
};

export default Item;
