

import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/hero-bg.jpg';

const Home = () => {
  return (
    <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url(${HomeImage})`,
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: '',
      }}

    ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-Nuni font-semibold  mb-4"><strong>SIVALINGAM KAVIRAJH</strong></h1>
        <h2 className="text-2xl font-semibold font-Nuni mb-8">développeur web</h2>
        <Link
          to="/about"
          className="px-6 py-3 font-normal  bg-blue-500 text-white rounded-lg transition duration-300"
        >
          En savoir plus
        </Link>
      </div>
   </div>
  );
};

export default Home;


