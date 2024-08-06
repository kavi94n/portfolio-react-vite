import React from 'react';
import VuePortfolio from '../assets/vue.png';
import Figma from '../assets/figma.png';
import cv from '../assets/cv.png'

const Realisation = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Crée Le CV avec HTML et CSS',
      imageUrl: cv,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Figma prototype E-commerce',
      imageUrl: Figma,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Portfolio avec le framework vue.js ',
      imageUrl: VuePortfolio,
    },
     
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Réalisations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisation;



