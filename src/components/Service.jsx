
import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, } from 'react-icons/fa';
import Banner from '../assets/banner.jpg'
const services = [
  { icon: <FaCode size="3em" />, title: "Développement Web", description: "Le dévelopeprment web de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP." },
  { icon: <FaMobileAlt size="3em" />, title: "Développement Mobile", description: "Le référencement natutrel d'un site, aussi appelé SEO, consisste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche." },
  { icon: <FaPaintBrush size="3em" />, title: "UX design", description: "L'UX Design est une méthode de conception centrée sur l'utilisiteur. Son but est d'offrir une expérience de navigation optimale à l'internaute " },
  
];

const Services = () => {
  return (
    
    <div id="services" className=" bg-gray-50">
      <div className='flex mb-8'>
        <img src={Banner} alt="kavi" />
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semi-bold mb-4">MON OFFRE DE SERVICE</h2>
        <p className='underline underline-offset-8 decoration-blue-500 decoration-4 mb-8'>
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div className=" container md:space-x-8 mb-8 flex md:justify-center max-w-full ">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg  shadow-md hover:bg-blue-100 transition  h-90 w-60">
              <div className="text-blue-500 hover:text-[#cde1f8] transition mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
