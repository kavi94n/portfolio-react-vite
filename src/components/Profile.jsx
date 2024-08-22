import React from 'react';

const Profile = ({ profile }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        className="rounded-full mx-auto mb-4"
        src={profile.avatar_url}
        alt={`${profile.login} avatar`}
        width="150"
      />
      <h2 className="text-2xl font-bold mb-2">{profile.name || 'Nom non disponible'}</h2>
      <p className="text-gray-700 mb-2">
        <strong>Nom d'utilisateur : </strong>{profile.login}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Bio : </strong>{profile.bio || 'Bio non disponible'}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Nombre de repos publics : </strong>{profile.public_repos}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Nombre de followers : </strong>{profile.followers}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Nombre de following : </strong>{profile.following}
      </p>
      <a
        className="text-blue-500 hover:text-blue-700 font-semibold"
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir sur GitHub
      </a>
    </div>
  );
};

export default Profile;
