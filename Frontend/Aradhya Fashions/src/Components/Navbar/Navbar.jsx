import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Contex/ShopContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems = [] } = useContext(ShopContext); // ✅ Default empty array

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Aradhya Fashions" className="logo-img" />
          <span className="logo-text">Aradhya Fashions</span>
        </Link>
      </div>

      {/* Menu Links */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/hotdeals" onClick={() => setMenuOpen(false)}>Hot Deals</Link></li>
        <li><Link to="/western" onClick={() => setMenuOpen(false)}>Western</Link></li>
        <li><Link to="/newarrivals" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
      </ul>

      {/* Login & Cart */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart className="cart-svg" />
          {cartItems.length > 0 && (
            <span className="nav-cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>

      {/* Hamburger */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
