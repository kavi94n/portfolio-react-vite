// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          SIVALINGAM Kavirajh
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#Accueil" className="text-white hover:text-gray-300 font-bebas">ACCUEIL</a>
          <a href="#Service" className="text-white hover:text-gray-300 font-bebas">SERVICE</a>
          <a href="#Réalisation" className="text-white hover:text-gray-300 font-bebas">REALISATION</a>
          <a href="#Blog" className="text-white hover:text-gray-300 font-bebas">BLOG</a>
          <a href="#Me contacter " className="text-white hover:text-gray-300 font-bebas">ME CONTACTER</a>
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
          <a href="#Accueil" className="block px-4 py-2 text-white hover:bg-gray-700">ACCUEIL</a>
          <a href="#Service" className="block px-4 py-2 text-white hover:bg-gray-700">SERVICE</a>
          <a href="#Réalisation" className="block px-4 py-2 text-white hover:bg-gray-700">REALISATION</a>
          <a href="#Blog" className="block px-4 py-2 text-white hover:bg-gray-700">BLOG</a>
          <a href="#contacter" className="block px-4 py-2 text-white hover:bg-gray-700">ME CONTACTER</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;