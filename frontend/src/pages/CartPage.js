import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item._id} style={{ marginBottom: 10 }}>
          <h4>{item.name} x {item.qty}</h4>
          <p>${item.price} each</p>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
