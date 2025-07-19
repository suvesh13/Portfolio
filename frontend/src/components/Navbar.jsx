import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/timeline", label: "Timeline" },
    { path: "/project", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b-2 border-indigo-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <Link to="/" className="hidden md:block text-2xl font-extrabold text-white hover:text-indigo-400 transition">
            Suvesh Rajput.
          </Link>
          <Link to="/" className="block md:hidden">
            <img src={logo} alt="Logo" className="h-8 w-auto hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-white text-lg font-medium">
          {routes.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative group transition-colors duration-300 ${
                location.pathname === path ? 'text-indigo-400' : ''
              }`}
            >
              <span>{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Connect Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
           className="bg-indigo-600 hover:bg-indigo-400 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg font-semibold transition duration-300 ease-in-out"
           >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:scale-110 transition-transform">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden px-6 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-3 text-white text-base font-medium pb-4">
          {routes.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`transition-all duration-300 ${location.pathname === path ? 'text-indigo-400' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
           className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 mt-2 rounded-full shadow-md hover:shadow-lg font-semibold transition duration-300 ease-in-out"
           >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
