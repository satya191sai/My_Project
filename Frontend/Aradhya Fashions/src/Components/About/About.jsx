import React from "react";
import "./About.css";
import team1 from "../../Assets/team1.png";
import team2 from "../../Assets/team2.png";
import team3 from "../../Assets/team3.png";
import iconQuality from "../../Assets/icon-quality.png";
import iconStyle from "../../Assets/icon-style.png";
import iconSupport from "../../Assets/icon-support.png";

const About = () => {
  return (
    <div className="maindiv">
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Aradhya Fashions</h1>
        <p>
          We bring the latest trends and stylish outfits for men, women, and kids. Our mission is to combine fashion and comfort for everyone.
        </p>
      </div>

      {/* Content Section */}
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

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="choose-us-cards">
          <div className="card">
            <img src={iconQuality} alt="Quality" />
            <h3>Premium Quality</h3>
            <p>We offer only the finest fabrics and well-crafted designs.</p>
          </div>
          <div className="card">
            <img src={iconStyle} alt="Style" />
            <h3>Stylish & Trendy</h3>
            <p>Our collections keep up with the latest fashion trends.</p>
          </div>
          <div className="card">
            <img src={iconSupport} alt="Support" />
            <h3>Customer Support</h3>
            <p>Our friendly team is here to assist you every step of the way.</p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src={team1} alt="Team Member" />
            <h3>Sarah Johnson</h3>
            <p>Head Designer</p>
          </div>
          <div className="team-card">
            <img src={team2} alt="Team Member" />
            <h3>Michael Lee</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-card">
            <img src={team3} alt="Team Member" />
            <h3>Emma Smith</h3>
            <p>Marketing Lead</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
