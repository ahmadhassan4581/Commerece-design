import React from 'react';
import { useParams } from 'react-router-dom';
import all_product_data from './data';

const Productdetails = () => {
  const { id } = useParams();
  // First check all_product, then check all_product_2 if not found
  const product = 
    all_product_data.all_product.find((item) => item.id === parseInt(id)) ||
    all_product_data.all_product_2.find((item) => item.id === parseInt(id));

  if (!product) return <div className="p-6 text-red-500">Product not found</div>;

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
              className="w-20 h-20 object-cover rounded border"
            />
          ))}
        </div>
        <img
          src={product.images?.[0]}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>

        <div className="space-y-2">
          <h4 className="font-semibold">Select Size</h4>
          <div className="flex gap-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size} className="px-4 py-1 border rounded hover:bg-gray-200">
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          Add to Cart
        </button>

        <div>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Tags:</strong> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;