import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-gradient-to-r from-pink-200 via-rose-100 to-pink-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-center">
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex justify-center items-center space-x-10 text-lg font-semibold text-gray-700 font-serif">
          <li className="hover:text-blue-600 transition">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link to="/mens">MENS</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link to="/womens">WOMENS</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link to="/new">NEW</Link>
          </li>
          <li className="relative hover:text-blue-600 transition">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start space-y-3 px-6 pb-4 text-base font-semibold text-gray-700 font-serif bg-pink-100">
          <li className="hover:text-blue-600 transition w-full">
            <Link to="/" onClick={toggleMenu}>HOME</Link>
          </li>
          <li className="hover:text-blue-600 transition w-full">
            <Link to="/mens" onClick={toggleMenu}>MENS</Link>
          </li>
          <li className="hover:text-blue-600 transition w-full">
            <Link to="/womens" onClick={toggleMenu}>WOMENS</Link>
          </li>
          <li className="hover:text-blue-600 transition w-full">
            <Link to="/new" onClick={toggleMenu}>NEW</Link>
          </li>
          <li className="relative hover:text-blue-600 transition w-full">
            <Link to="/cart" onClick={toggleMenu} className="flex items-center">
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
