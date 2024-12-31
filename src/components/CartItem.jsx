import React, { useState } from 'react';
import './CartItem.css';

function CartItem({ item, updateQuantity, removeItem }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <img className="item-image" src={item.image} alt={item.name} />
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-price">₹{item.unitPrice}</span>
      </div>
      <div className="item-quantity">
        <input 
          type="number" 
          value={quantity} 
          min="1" 
          onChange={handleQuantityChange} 
        />
      </div>
      <div className="item-total">
        <span>₹{item.unitPrice * quantity}</span>
      </div>
      <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
