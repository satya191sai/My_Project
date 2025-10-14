import React from "react";
import "./Hero.css";
import heroImage from "../../Assets/hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Aradhya Fashions</h1>
        <p className="hero-subtitle">
          Trendy & Stylish Outfits for Men, Women, and Kids
        </p>
        <button className="hero-btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Fashion Hero" />
      </div>
    </section>
  );
};

export default Hero;
