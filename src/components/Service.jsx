// src/components/Services.jsx
import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const services = [
  { icon: <FaCode size="3em" />, title: "Développement Web", description: "Création de sites web modernes et réactifs." },
  { icon: <FaMobileAlt size="3em" />, title: "Développement Mobile", description: "Applications mobiles pour iOS et Android." },
  { icon: <FaPaintBrush size="3em" />, title: "Design Graphique", description: "Design UI/UX professionnel et attractif." }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-100 transition">
              <div className="text-blue-500 hover:text-[#cde1f8] transition mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
