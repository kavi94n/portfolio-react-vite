import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';
import MentionsLegales from './components/MentionsLegales';
import Realisation from './components/Realisation';
import Blog from './components/Blog';
import Profile from './components/Profile';
import { Helmet } from 'react-helmet';

function App() {
  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://api.github.com/users/kavi94n';

    const fetchProfile = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du profil');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/realisation" element={<Realisation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            
            <Route 
              path="/profile" 
              element={
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                  <h1 className="text-4xl font-bold text-blue-600 mb-8">GitHub Profile Viewer</h1>
                  {loading && <p className="text-lg text-gray-700">Chargement en cours...</p>}
                  {error && <p className="text-lg text-red-500">{error}</p>}
                  {profile && <Profile profile={profile} />}
                </div>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


