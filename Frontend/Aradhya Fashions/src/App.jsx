import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/hotdeals" element={<ShopCategory category="hotdeals" />} />
        <Route path="/western" element={<ShopCategory category="western" />} />
        <Route path="/newarrivals" element={<ShopCategory category="newarrivals" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              Page Not Found
            </h2>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
