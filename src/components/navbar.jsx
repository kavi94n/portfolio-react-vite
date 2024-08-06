import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          SIVALINGAM Kavirajh
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" exact className="text-white hover:text-gray-300 font-bebas" activeClassName="text-blue-500">ACCUEIL</NavLink>
          <NavLink to="/service" className="text-white hover:text-gray-300 font-bebas" activeClassName="text-blue-500">SERVICE</NavLink>
          <NavLink to="/realisation" className="text-white hover:text-gray-300 font-bebas" activeClassName="text-blue-500">REALISATION</NavLink>
          <NavLink to="/blog" className="text-white hover:text-gray-300 font-bebas" activeClassName="text-blue-500">BLOG</NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300 font-bebas" activeClassName="text-blue-500">ME CONTACTER</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink to="/" exact className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>ACCUEIL</NavLink>
          <NavLink to="/service" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>SERVICE</NavLink>
          <NavLink to="/realisation" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>REALISATION</NavLink>
          <NavLink to="/blog" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>BLOG</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>ME CONTACTER</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

