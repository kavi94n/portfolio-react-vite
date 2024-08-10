import React from 'react';
import maphoto from '../assets/john.jpg';

const About = () => {
  return (
    <div id="about" className="container drop-shadow-md mx-auto bg-white md:w-3/4 rem px-12 py-6 mt-6 flex">
      <div className=" mx-auto  md:w-1/2 ">
        <h2 className="text-3xl font-bold mb-8 text-start">À propos de moi</h2>
        <div className='h-1 bg-blue-500 mb-6 mr-5'>
        </div>
          <p className="text-lg max-w-prose mb-6">
            Je suis un développeur passionné avec des compétences variées en développement web et mobile. J'aime créer des applications intuitives et performantes.
          </p>
      </div>
      
      <div className=" flex-row mx-auto md:w-1/2">
        <div className='flex'>
        <img src={maphoto} alt="kavi" className="w-full h-48" />
        </div>
          
          <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Mes compétences</h3>
            <SkillBar skill="HTML"  percentage={90} color="red-500" />
            <SkillBar skill="CSS" percentage={80} color="sky-500" />
            <SkillBar skill="JS" percentage={70} color="yellow-500" />
            <SkillBar skill="PHP" percentage={60} color="green-500" />
            <SkillBar skill="React" percentage={50} color="blue-500" />
          </div>  
      </div>   
    </div>
  
  );
};
const SkillBar = ({ skill, percentage, color }) => (
  <div className="flex items-center">
    <span className="w-20 text-">{skill}</span>
    <div className="w-full bg-gray-300 h-3 rounded">
      <div
        className={`h-3 rounded bg-${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default About;

