// src/components/Footer.jsx
import React, { useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById('scroll-to-top');
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Developer Info */}
        <div>
          <h4 className="text-xl font-bold mb-2">John Doe</h4>
          <p>123 Rue Imaginaire, 75000 Paris, France</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-gray-400">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-gray-400">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-gray-400">
              <FaLinkedin size="1.5em" />
            </a>
          </div>
        </div>

       
        <div>
          <h4 className="text-xl font-bold mb-2">Pages</h4>
          <ul>
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-2">Réalisations</h4>
          <ul>
            <li><a href="#project1" className="hover:text-gray-400">Projet 1</a></li>
            <li><a href="#project2" className="hover:text-gray-400">Projet 2</a></li>
            <li><a href="#project3" className="hover:text-gray-400">Projet 3</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl font-bold mb-2">Articles de Blog</h4>
          <ul>
            <li><a href="#article1" className="hover:text-gray-400">Article 1</a></li>
            <li><a href="#article2" className="hover:text-gray-400">Article 2</a></li>
            <li><a href="#article3" className="hover:text-gray-400">Article 3</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
        <p>&copy; 2024 John Doe. Tous droits réservés.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:text-gray-400 transition"
          id="scroll-to-top"
          style={{ display: 'none' }}
        >
          Retour en haut
        </button>
      </div>
    </footer>
  );
};

export default Footer;
