// src/Components/Banner/Banner.jsx
import React from "react";
import "./Banner.css";

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner-image" />
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
