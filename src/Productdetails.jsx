import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import all_product_data from './data';
import { CartContext } from './CartContext';

const Productdetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [cartMessage, setCartMessage] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const { addToCart } = useContext(CartContext);

  // Find the product in the combined all_products array
  const product = all_product_data.all_products.find(item => item.id === parseInt(id));

  if (!product) return <div className="p-6 text-red-500">Product not found</div>;

  const displayImage = mainImage || product.images?.[0];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setCartMessage('');
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setCartMessage('Please select a size before adding to cart');
      return;
    }
    
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.new_price,
      size: selectedSize,
      image: product.images?.[0],
      quantity: 1,
      category: product.category
    };
    
    addToCart(cartItem);
    setCartMessage(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6">
      {/* Left Side: Thumbnails and Main Image */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex md:flex-col gap-4">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className="w-20 h-20 object-cover rounded border cursor-pointer hover:border-blue-500"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <img
          src={displayImage}
          alt={product.name}
          className="max-w-md object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Info */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-xl font-bold">${product.new_price}</span>
          <span className="line-through text-gray-500">${product.old_price}</span>
        </div>
        <p className="text-gray-600">
          {product.description || 'Premium quality product with excellent craftsmanship.'}
        </p>

        <div className="space-y-2">
          <h4 className="font-semibold">Select Size</h4>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button 
                key={size} 
                className={`px-4 py-1 border rounded hover:bg-gray-200 ${
                  selectedSize === size ? 'bg-blue-500 text-white hover:bg-blue-600' : ''
                }`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button 
          className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors duration-200"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {cartMessage && (
          <p className={`mt-2 ${cartMessage.includes('Please select') ? 'text-red-500' : 'text-green-600'}`}>
            {cartMessage}
          </p>
        )}

        <div className="pt-4 border-t border-gray-200">
          <p><strong>Category:</strong> {product.category === 'women' ? "Women's" : "Men's"} Clothing</p>
          <p><strong>Tags:</strong> Modern, Latest, {product.category === 'women' ? "Feminine" : "Masculine"}</p>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
