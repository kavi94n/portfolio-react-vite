import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold text-xl mb-2">Sivalingam kavirajh</h3>
          <p>210 Ave du 8 mai 1945, 93150 Le blanc mesnil</p>
          <p>06 05 69 85 61</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="1.5em" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Navigation</h3>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions Légales</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Dernières Réalisations</h3>
          <ul>
            <li><a href="/realisation1" className="hover:underline">Réalisation 1</a></li>
            <li><a href="/realisation2" className="hover:underline">Réalisation 2</a></li>
            <li><a href="/realisation3" className="hover:underline">Réalisation 3</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Derniers Articles</h3>
          <ul>
            <li><a href="/article1" className="hover:underline">Article 1</a></li>
            <li><a href="/article2" className="hover:underline">Article 2</a></li>
            <li><a href="/article3" className="hover:underline">Article 3</a></li>
          </ul>
        </div>
      </div>
      <div className="text-justisy-between mt-4">
        <p>&copy; 2024 Sivalingam kavirajh. Tous droits réservés.</p>
        <a href="#top" className="text-blue-500 hover:underline">Retour en haut</a>
      </div>
    </footer>
  );
};

export default Footer;

