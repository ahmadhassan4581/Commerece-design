import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="bg-gradient-to-r from-pink-200 via-rose-100 to-pink-300 shadow-md">
      <ul className="flex justify-center items-center space-x-10 p-4 text-lg font-semibold text-gray-700 font-serif">
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to='/'>HOME</Link>
        </li>
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to="/mens">MENS</Link>
        </li>
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to="/womens">WOMENS</Link>
        </li>
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to="/new">NEW</Link>
        </li>
        <li className="relative hover:text-blue-600 transition cursor-pointer">
          <Link to="/cart" className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;