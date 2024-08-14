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
      detail:'Site réalisation avec PHP et MySql',
      
    },
    {
      id: 2,
      title: 'Restaurant Akira',
      description: "Réalisation d'un site vitrine ",
      imageUrl: restaurant,
      detail:'Site réalisé avec Wordpress',
    },
    {
      id: 3,
      title: 'Espace bien-etre',
      description: "Réalisation d'un site vitrine pour un patricien de bien etre",
      imageUrl: espace,
       detail:'Site réalisé en HTML/CSS ',
    },
     
  ];

  return (
   
    <div className="">
      <div className='flex'>
        <img src={Banner} alt="kavi" />
      </div>
      <div className='flex flex-col'>
        <div>
        <h2 className="text-3xl font-semi-bold mt-6 mb-2 text text-center">PORTFOLIO</h2>
        <p className='text-center underline underline-offset-8 decoration-blue-500 decoration-4 '>Voici quelques-unes de mes réalisation</p>
        </div>
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
              <p className="text-gray-600 text-center mb-2">{project.description}</p>
             
              <button
                className=" flex justify-center border border-blue-500 rounded  mx-40 text-blue-500 py-1"
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



