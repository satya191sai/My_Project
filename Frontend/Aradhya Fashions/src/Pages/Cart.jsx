import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Contex/ShopContext";
import "./CSS/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotalPrice } =
    useContext(ShopContext);

  // --- Load saved addresses from localStorage ---
  const loadAddresses = () => {
    const saved = localStorage.getItem("addresses");
    return saved
      ? JSON.parse(saved)
      : [
          
        ];
  };

  const [addresses, setAddresses] = useState(loadAddresses);
  const [selectedAddressId, setSelectedAddressId] = useState(() => {
    const saved = localStorage.getItem("selectedAddressId");
    return saved ? Number(saved) : 1;
  });

  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const [editAddressId, setEditAddressId] = useState(null);
  const [editData, setEditData] = useState({});

  // --- Save addresses to localStorage whenever they change ---
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  // --- Save selected address ID ---
  useEffect(() => {
    if (selectedAddressId) {
      localStorage.setItem("selectedAddressId", selectedAddressId);
    }
  }, [selectedAddressId]);

  // --- Add new address ---
  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

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

    const newId = addresses.length ? addresses[addresses.length - 1].id + 1 : 1;
    const updated = [...addresses, { ...newAddress, id: newId }];

    setAddresses(updated);
    setSelectedAddressId(newId);
    setShowAddAddress(false);

    setNewAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
  };

  // --- Edit Address ---
  const handleEditAddress = (addr) => {
    setEditAddressId(addr.id);
    setEditData({ ...addr });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    if (
      !editData.name ||
      !editData.street ||
      !editData.city ||
      !editData.state ||
      !editData.pincode ||
      !editData.phone
    ) {
      alert("Please fill all fields before saving.");
      return;
    }

    setAddresses((prev) =>
      prev.map((a) => (a.id === editAddressId ? { ...editData } : a))
    );
    setEditAddressId(null);
  };

  const handleCancelEdit = () => {
    setEditAddressId(null);
  };

  // --- Delete Address ---
  const handleDeleteAddress = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);

    if (selectedAddressId === id && updated.length > 0) {
      setSelectedAddressId(updated[0].id);
    } else if (updated.length === 0) {
      setSelectedAddressId(null);
    }
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
                  {editAddressId === addr.id ? (
                    <div className="edit-address-form">
                      <input
                        type="text"
                        name="name"
                        value={editData.name}
                        onChange={handleEditChange}
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        name="street"
                        value={editData.street}
                        onChange={handleEditChange}
                        placeholder="Street Address"
                      />
                      <input
                        type="text"
                        name="city"
                        value={editData.city}
                        onChange={handleEditChange}
                        placeholder="City"
                      />
                      <input
                        type="text"
                        name="state"
                        value={editData.state}
                        onChange={handleEditChange}
                        placeholder="State"
                      />
                      <input
                        type="text"
                        name="pincode"
                        value={editData.pincode}
                        onChange={handleEditChange}
                        placeholder="Pincode"
                      />
                      <input
                        type="text"
                        name="phone"
                        value={editData.phone}
                        onChange={handleEditChange}
                        placeholder="Phone"
                      />

                      <div className="edit-buttons">
                        <button
                          className="save-btn-modal"
                          onClick={handleSaveEdit}
                        >
                          Save
                        </button>
                        <button className="cancel-btn" onClick={handleCancelEdit}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <label className="address-radio">
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddressId === addr.id}
                          onChange={() => setSelectedAddressId(addr.id)}
                        />
                        <span>
                          <strong>{addr.name}</strong> <br />
                          {addr.street}, {addr.city}, {addr.state} -{" "}
                          {addr.pincode}
                          <br />
                          <span className="address-phone">
                            Phone: {addr.phone}
                          </span>
                        </span>
                      </label>

                      <div className="address-actions">
                        <button onClick={() => handleEditAddress(addr)}>Edit</button>
                        <button onClick={() => handleDeleteAddress(addr.id)}>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* CART ITEMS */}
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

            {selectedAddress && (
              <button className="place-order-btn">
                Deliver to {selectedAddress.name}
              </button>
            )}
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
