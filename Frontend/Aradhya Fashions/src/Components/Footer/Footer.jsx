import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../Assets/logo.png"; // Adjust the path if needed
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* --- Left: Logo & Description --- */}
        <div className="footer-about">
          <img src={logo} alt="Aradhya Fashions Logo" className="footer-logo" />
          <p>
            Aradhya Fashions brings you the latest trends in ethnic and modern wear.
            Shop our exclusive collection for Men, Women, and Kids with quality you’ll love.
          </p>
        </div>

        {/* --- Middle: Quick Links --- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* --- Right: Newsletter & Socials --- */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter and get exclusive offers & new arrivals.</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* --- Bottom Bar --- */}
      <div className="footer-bottom">
        <p>© 2025 Aradhya Fashions. All Rights Reserved.</p>
        <p>Designed with ❤️ by Aradhya Fashions Team</p>
      </div>
    </footer>
  );
};

export default Footer;
