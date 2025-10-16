import React, { useRef } from "react";
import Item from "../Item/Item";
import data_product from "../../Assets/data";
import "./Popular.css";

const Popular = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="popular-section">
      <h2 className="popular-title">Popular Products</h2>

      <div className="popular-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#10094;
        </button>

        <div className="popular-scroll-container" ref={scrollRef}>
          {data_product.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              newPrice={product.new_price}   
              oldPrice={product.old_price}   
            />
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Popular;
