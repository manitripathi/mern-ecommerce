import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-5 bg-pink-50 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold text-pink-700 mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item._id}
          className="mb-4 p-3 border border-pink-200 rounded bg-white shadow-sm"
        >
          <h4 className="text-md font-medium text-pink-800">
            {item.name} × {item.qty}
          </h4>
          <p className="text-sm text-pink-600">${item.price} each</p>
          <button
            onClick={() => removeFromCart(item._id)}
            className="mt-2 text-sm text-white bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded transition"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="text-lg font-semibold text-pink-900 mt-6">
        Total: ${total.toFixed(2)}
      </h3>
    </div>
  );
}

export default CartPage;
