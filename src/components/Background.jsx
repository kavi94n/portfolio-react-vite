// src/components/Background.jsx
import React from 'react';
import backgroundImage from '../assets/pic.webp'; 

const Background = ({ children }) => {
  return (
    // 
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 105, 255, 0.5)' }}></div>
      {children}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site</h1>
        <h2 className="text-2xl mb-8">Découvrez notre histoire et nos projets</h2>
        <a href="#about" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default Background;
