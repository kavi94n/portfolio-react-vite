
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Nom</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div>
              <label className="block text-gray-700">E-mail</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div>
              <label className="block text-gray-700">Numéro de téléphone</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div>
              <label className="block text-gray-700">Sujet</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4" required></textarea>
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Coordonnées</h2>
          <p className="mb-2">Adresse: 123 Rue Imaginaire, 75000 Paris, France</p>
          <p className="mb-2">Téléphone: +33 1 23 45 67 89</p>
          <iframe 
            className="w-full h-64 mt-4 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990276928334!2d2.294481315674413!3d48.858844379287944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf5e8e16ff%3A0x1a0b7c8d7c688d8b!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1619112142152!5m2!1sen!2sfr" 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
