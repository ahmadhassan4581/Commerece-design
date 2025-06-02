import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, cartCount, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Here you would typically:
    // 1. Send the cart data to your backend
    // 2. Process payment
    // 3. Clear the cart
    // 4. Redirect to a confirmation page
    
    // For now, we'll just navigate to a checkout page
    navigate('/checkout');
    
    // In a real app, you might want to:
    // 1. Create a checkout API endpoint
    // 2. Integrate with a payment processor like Stripe
    // 3. Handle the payment flow
    // 4. Show order confirmation
  };

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
                  disabled={item.quantity <= 1}
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
            <button 
              onClick={handleCheckout}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              disabled={cartCount === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
