import React from 'react';
import maphoto from '../assets/pic.webp';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
      <div className="flex flex-col items-center mb-8">
        <img src={maphoto} alt="John Doe" className="w-48 h-48 rounded-full mb-4" />
        <p className="text-lg max-w-prose">je suis un développeur passionné avec des compétences variées en développement web et mobile. J'aime créer des applications intuitives et performantes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
          <p>HTML, CSS, JavaScript, React, Vue.js</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Développement Mobile</h3>
          <p>React Native</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Back-end</h3>
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
};

export default About;
