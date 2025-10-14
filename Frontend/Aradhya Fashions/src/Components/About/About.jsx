import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Aradhya Fashions</h1>
        <p>
          We are passionate about providing the latest trends and stylish outfits for men, women, and kids. Our mission is to bring fashion and comfort together.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Aradhya Fashions started with a vision to make fashion accessible and affordable to everyone. From trendy casual wear to elegant formal wear, we curate collections that suit all ages and styles.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver high-quality, stylish, and sustainable fashion that empowers people to express themselves confidently.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>Quality over quantity</li>
            <li>Customer-first approach</li>
            <li>Innovation and style</li>
            <li>Sustainability and ethics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
