import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'; // ✅ This fixes the error

const Cart = () => {
  const { cart, cartCount, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {cartCount === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600">Continue shopping</Link></p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b pb-4 items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => removeFromCart(item.id, item.size)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="border-t pt-4">
            <p className="text-lg font-semibold">
              Subtotal ({cartCount} items): 
              ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
