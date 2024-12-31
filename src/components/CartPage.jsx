import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Tomato seeds', unitPrice: 300, quantity: 2 },
    { id: 2, name: 'Shear scissor', unitPrice: 2500, quantity: 2 }
  ]);

  const updateQuantity = (id, quantity) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  const shippingFee = 250;
  const total = subtotal + shippingFee;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Add items to proceed with checkout.</p>
      ) : (
        <div className="cart-items">
          {items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem}
            />
          ))}
        </div>
      )}

      <div className="summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="summary-item">
          <span>Shipping fee</span>
          <span>₹{shippingFee}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button className="checkout-button">Check out</button>
      </div>
    </div>
  );
}

export default Cart;
