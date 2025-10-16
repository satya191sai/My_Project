import React from "react";
import "./Offers.css";
import exclusive_image from "../../Assets/exclusive_image.png"; 

// Sample offers data
const offersData = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on summer collection!",
    image: "/src/Assets/exclusive_image.png",
  },
  {
    id: 2,
    title: "Festive Deals",
    description: "Special discounts for festive season!",
    image: "/src/Assets/festive_deal.png",
  },
  {
    id: 3,
    title: "Clearance Sale",
    description: "Last chance items at huge discounts!",
    image: "/src/Assets/clearance_sale.png",
  },
];

const Offers = () => {
  return (
    <section className="offers-section">
      <h2>Special Offers</h2>
      <div className="offers-grid">
        {offersData.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
