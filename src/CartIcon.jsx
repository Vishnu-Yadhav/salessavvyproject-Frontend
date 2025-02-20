import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styles.css';

export function CartIcon({ count }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/UserCartPage'); // Navigate to the cart page
  };

  return (
    <div onClick={handleCartClick} style={{ cursor: 'pointer' }}>
      🛒 <span>{count}</span> {/* ✅ Wrapping count inside a span */}
    </div>
  );
}
