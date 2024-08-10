import React from 'react';
import food from '../assets/food.jpg';
import restaurant from '../assets/restaurant.jpg';
import espace from '../assets/espace.jpg';
import Banner from '../assets/banner.jpg';

const Realisation = () => {
  const projects = [
    {
      id: 1,
      title: 'Fresh food',
      description: "Réalisation d'un site commande en ligne",
      imageUrl: food,
      detail:'joejfoeifjo'
      
    },
    {
      id: 2,
      title: 'Restaurant Akira',
      description: "Réalisation d'un site vitrine ",
      imageUrl: restaurant,
    },
    {
      id: 3,
      title: 'Espace bien-etre',
      description: "Réalisation d'un site vitrine pour un patricien de bien etre",
      imageUrl: espace,
    },
     
  ];

  return (
   
    <div className="">
      <div className='flex w-screen'>
        <img src={Banner} alt="kavi" />
      </div>
      <div className='flex-row'>
      <h2 className="text-3xl font-bold mt-6 mb-8 text-center">PORTFOLIO</h2>
      <p className='text-center'>Voici quelques-unes de mes réalisation</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  border-gray-500 lg:grid-cols-3 gap-8 py-10 px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded  overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className=" grid grid-row ">
              <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-center">{project.description}</p>
             
              <button
                className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Voir
              </button>
              <div className='bg-slate-200 mt-5 text-center border border-gray-500'>
                {project.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisation;



