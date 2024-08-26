import React from 'react';
import maphoto from '../assets/john.jpg';

const About = () => {
  return (
    <div id="about" className="container drop-shadow-md mx-auto bg-white md:w-3/4 px-12 py-6 mt-8 flex flex-col mb-8 md:flex-row">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-Nuni font-semibold mb-4 text-left"><strong>À propos de moi</strong></h2>
        <div className="h-1 bg-blue-600 mr-2 mb-6"></div>
        <p className="text-lg  font-normal font-Nuni mb-6">
          Je suis un développeur passionné avec des compétences variées en développement web et mobile. J'aime créer des applications intuitives et performantes.
        </p>
      </div>
      
      <div className="md:w-1/2">
        <div className="flex justify-center mb-4">
          <img src={maphoto} alt="kavi" className="w-screen h-48 " />
        </div>
          
        <div className="space-y-8">
          <h3 className="text-xl font-semibold mb-4">Mes compétences</h3>
          <SkillBar skill="HTML 90%" percentage={90} color="bg-red-500" />
          <SkillBar skill="CSS 80%" percentage={80} color="bg-sky-500" />
          <SkillBar skill="JavaScript 70%" percentage={70} color="bg-yellow-500" />
          <SkillBar skill="PHP 60%" percentage={60} color="bg-green-500" />
          <SkillBar skill="React 50%" percentage={50} color="bg-blue-500" />
        </div>  
      </div>   
    </div>
  );
};

const SkillBar = ({ skill, percentage, color }) => (
  
  <div className="flex items-center mb-2">
    <div className="w-full bg-gray-300 h-3 rounded ml-2">
      <div
        className={`h-3  rounded ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
      <span className="w-20 ">{skill}</span> 
    </div>
  </div>
);

export default About;


