import React from 'react';
import { Helmet } from 'react-helmet';

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container mx-auto my-5 p-4">
        <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
        <div className="space-y-4">
          <details className="p-4 border rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">L’éditeur du site</summary>
            <div className="mt-2">
              <p>Nom: John Doe</p>
              <p>Adresse: 123 Rue Imaginaire, 75000 Paris, France</p>
              <p>Email: johndoe@example.com</p>
            </div>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">L’hébergeur du site</summary>
            <div className="mt-2">
              <p>Nom: Hosting Company</p>
              <p>Adresse: 456 Avenue Hôte, 75001 Paris, France</p>
              <p>Email: hosting@example.com</p>
            </div>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">Crédits</summary>
            <div className="mt-2">
              <p>Les images utilisées sur ce site proviennent de <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Pixabay</a>.</p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
