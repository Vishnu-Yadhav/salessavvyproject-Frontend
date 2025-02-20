import React from 'react';
import './assets/styles.css';

export function ProductList({ products, selectedCategory, onAddToCart }) {
  // Filter products by selected category
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  if (filteredProducts.length === 0) {
    return <p className="no-products">No products available.</p>;
  }

  return (
    <div className="product-list">
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="product-card">
            <img
              src={product.images?.[0] || 'https://via.placeholder.com/150'} // Handle missing images
              alt={product.name}
              className="product-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150'; // Fallback image
              }}
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product.product_id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
