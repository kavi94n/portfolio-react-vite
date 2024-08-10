import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';
import MentionsLegales from './components/MentionsLegales';
import Realisation from './components/Realisation';
import Blog from './components/Blog';

function App() {
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

