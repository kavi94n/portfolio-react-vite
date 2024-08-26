import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import Banner from '../assets/banner.jpg';

const services = [
  {
    icon: <FaCode size="3em" />,
    title: "DEVELEPMENT WEB",
    description: "Le développement web de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP."
  },
  {
    icon: <FaMobileAlt size="3em" />,
    title: "REFERENCEMENT",
    description: "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche."
  },
  {
    icon: <FaPaintBrush size="3em" />,
    title: "UX DESIGN",
    description: "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-50 ">
      <div className="flex justify-center mb-8">
        <img src={Banner} alt="banner" className="w-full h-auto object-cover" />
      </div>
  
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4"><strong>MON OFFRE DE SERVICE</strong></h2>
        <p className="underline underline-offset-8 decoration-blue-500 decoration-4 font-normal mb-8">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>

      
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8 justify-center space-y-8 md:space-y-0">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-100 transition transform hover:scale-105 md:h-96 md:w-56 mx-0">
              <div className="text-blue-500 hover:text-[#cde1f8] transition mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-Nuni font-semibold mb-2"><strong>{service.title}</strong></h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

