import React, { useContext, useState } from "react";
import { ShopContext } from "../Contex/ShopContext";
import "./CSS/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotalPrice } =
    useContext(ShopContext);

  // Multiple addresses list
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      street: "123 MG Road, Sector 45",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560001",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Priya Sharma",
      street: "42 Park Avenue",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "+91 9823456789",
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  // Handle new address form input
  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new address
  const handleAddAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.pincode ||
      !newAddress.phone
    ) {
      alert("Please fill all address fields");
      return;
    }

    const newId = addresses.length + 1;
    setAddresses([...addresses, { ...newAddress, id: newId }]);
    setNewAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
    setShowAddAddress(false);
    setSelectedAddressId(newId);
  };

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-layout">
          {/* LEFT SECTION */}
          <div className="cart-items-section">
            {/* Delivery Addresses */}
            <div className="delivery-address-container">
              <div className="address-header">
                <h3>Select Delivery Address</h3>
                <button
                  className="pincode-btn"
                  onClick={() => setShowAddAddress(true)}
                >
                  + Add New
                </button>
              </div>

              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`address-card ${
                    selectedAddressId === addr.id ? "selected" : ""
                  }`}
                >
                  <label className="address-radio">
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddressId === addr.id}
                      onChange={() => setSelectedAddressId(addr.id)}
                    />
                    <span>
                      <strong>{addr.name}</strong> <br />
                      {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                      <br />
                      <span className="address-phone">
                        Phone: {addr.phone}
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>

            {/* Cart items */}
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.images ? item.images[0] : item.image}
                  alt={item.name}
                  className="cart-item-img"
                />

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-seller">
                    Seller: {item.seller || "Default Seller"}
                  </p>

                  <div className="cart-item-price">
                    {item.old_price && (
                      <span className="old-price">₹{item.old_price}</span>
                    )}
                    <span className="new-price">₹{item.new_price}</span>
                    {item.discount && (
                      <span className="discount">{item.discount}% Off</span>
                    )}
                  </div>

                  <div className="cart-item-quantity">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-actions">
                    <button className="save-btn">Save for Later</button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button className="place-order-btn">
              Deliver to {selectedAddress.name}
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="price-summary">
            <h3>PRICE DETAILS</h3>
            <div className="summary-row">
              <span>Price ({cartItems.length} items)</span>
              <span>₹{getCartTotalPrice() + 300}</span>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <span className="discount-text">− ₹300</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>₹40</span>
            </div>
            <div className="summary-total">
              <span>Total Amount</span>
              <span>₹{getCartTotalPrice() + 40}</span>
            </div>
            <p className="summary-save-text">
              You will save ₹300 on this order
            </p>
          </div>

          {/* ADD NEW ADDRESS MODAL */}
          {showAddAddress && (
            <div className="modal-overlay">
              <div className="address-modal">
                <h3>Add New Address</h3>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newAddress.name}
                    onChange={handleNewAddressChange}
                  />
                </div>

                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={newAddress.street}
                    onChange={handleNewAddressChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={newAddress.city}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                  <div className="form-group half">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      value={newAddress.state}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={newAddress.pincode}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                  <div className="form-group half">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={newAddress.phone}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                </div>

                <div className="modal-buttons">
                  <button
                    className="cancel-btn"
                    onClick={() => setShowAddAddress(false)}
                  >
                    Cancel
                  </button>
                  <button className="save-btn-modal" onClick={handleAddAddress}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
