import React, { useState, useEffect, useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';
import Item from '../Item/Item';
import { ShopContext } from '../../Contex/ShopContext';

const ProductDisplay = ({ product }) => {
  const { all_product } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product.image);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [similarProducts, setSimilarProducts] = useState([]);

  // ✅ Sync main image whenever product changes
  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  // ✅ Similar products logic
  useEffect(() => {
    if (all_product && all_product.length > 0) {
      let filtered = [];

      if (product.category) {
        filtered = all_product.filter(
          (p) => p.category === product.category && p.id !== product.id
        );
      }

      if (filtered.length === 0) {
        const shuffled = [...all_product].sort(() => 0.5 - Math.random());
        filtered = shuffled.filter((p) => p.id !== product.id).slice(0, 4);
      }

      setSimilarProducts(filtered);
    }
  }, [product, all_product]);

  // ✅ Add comments
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([{ text: newComment, date: new Date() }, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="product-display">
      {/* ---------- LEFT SECTION ---------- */}
      <div className="product-left">
        <div className="product-thumbnails">
          {/* ✅ If product.images exists, map over it; otherwise fallback to product.image */}
          {(product.images?.length ? product.images : [product.image]).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setMainImage(img)}
              className={mainImage === img ? 'active-thumb' : ''}
            />
          ))}
        </div>

        <div className="product-main-image">
          <img src={mainImage} alt="Main product" />
        </div>
      </div>

      {/* ---------- RIGHT SECTION ---------- */}
      <div className="product-right">
        <h1 className="product-title">{product.name}</h1>

        <div className="product-rating">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>

        <div className="product-prices">
          <span className="price-old">${product.old_price}</span>
          <span className="price-new">${product.new_price}</span>
        </div>

        <p className="product-description">
          {product.description ||
            'The goal is to make font sizes fluid, meaning they automatically scale between a minimum and maximum value based on the viewport width — so your design looks natural on phones, tablets, and large screens.'}
        </p>

        <div className="product-sizes">
          <h3>Select Size</h3>
          <div className="size-options">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        <p className="product-category">
          <span>Category: </span>
          {product.category || 'Women, T-Shirt, Crop Top'}
        </p>
        <p className="product-tags">
          <span>Tags: </span>Modern, Latest
        </p>
        <div className="buttons">
          <button className="add-to-cart-btn">Buynow</button>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      {/* ---------- PRODUCT DETAILS ---------- */}
      <div className="product-details-section">
        <h2>Product Details</h2>
        <ul>
          <li>Material: 100% Cotton</li>
          <li>Fit: Regular</li>
          <li>Care: Machine wash cold, tumble dry low</li>
          <li>Imported</li>
        </ul>
      </div>

      {/* ---------- COMMENTS / REVIEWS ---------- */}
      <div className="product-comments-section">
        <h2>Customer Reviews</h2>

        <div className="add-comment">
          <textarea
            placeholder="Write your review..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Post Review</button>
        </div>

        {comments.length === 0 ? (
          <p className="no-comments">No reviews yet. Be the first to review!</p>
        ) : (
          <ul className="comments-list">
            {comments.map((c, i) => (
              <li key={i}>
                <p>{c.text}</p>
                <span>{c.date.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ---------- SIMILAR PRODUCTS ---------- */}
      <div className="similar-products-section">
        <h2>Similar Products</h2>
        <div className="similar-products-grid">
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            ))
          ) : (
            <p>No similar products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
