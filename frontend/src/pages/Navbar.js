import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-100 shadow-md mb-5">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-pink-700 text-2xl font-bold">
          PinkStore
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-pink-700 hover:text-pink-900 font-medium">
            Home
          </Link>
          <Link to="/cart" className="text-pink-700 hover:text-pink-900 font-medium">
            Cart
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-700 text-xl font-bold"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-pink-700 hover:text-pink-900">
            Home
          </Link>
          <Link to="/cart" className="block text-pink-700 hover:text-pink-900">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
