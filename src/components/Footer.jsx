import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4 px-24">
        <div>
          <h3 className="font-bold text-xl mb-2">Sivalingam kavirajh</h3>
          <p>210 Ave du 8 mai 1945, 93150 Le blanc mesnil</p>
          <p>06 05 69 85 61</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/kavi94n" target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="1.5em" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Liens utiles</h3>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions Légales</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Mes Dernières Réalisations</h3>
          <ul>
            <li><a href="/realisation1" className="hover:underline">Fresh food</a></li>
            <li><a href="/realisation2" className="hover:underline">Restaurant Akira</a></li>
            <li><a href="/realisation3" className="hover:underline">Espace bien-etre</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Mes Derniers Articles</h3>
          <ul>
            <li><a href="/article1" className="hover:underline">Article 1</a></li>
            <li><a href="/article2" className="hover:underline">Article 2</a></li>
            <li><a href="/article3" className="hover:underline">Article 3</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center align-middle h-16 mt-4 mb-4 text-white md:w-screen bg-black ">
        <p className='py-4'>&copy; Designed by Sivalingam kavirajh</p>
      </div>
    </footer>
  );
};

export default Footer;

