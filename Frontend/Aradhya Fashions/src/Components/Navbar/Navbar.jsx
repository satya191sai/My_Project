import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; // ✅ Added FaShoppingCart
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Contex/ShopContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems = [] } = useContext(ShopContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Aradhya Fashions" />
        <Link to="/" className="logo-text">Aradhya Fashions</Link>
      </div>

      {/* Menu Links */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/mens" onClick={() => setMenuOpen(false)}>Hot Deals</Link></li>
        <li><Link to="/womens" onClick={() => setMenuOpen(false)}>Westen</Link></li>
        <li><Link to="/kids" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
      </ul>

      {/* Login & Cart */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart className="cart-svg" /> {/* ✅ React Icon */}
            {cartItems.length > 0 && (
              <span className="nav-cart-count">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Hamburger */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
