
import React from 'react';
import Navbar from './components/navbar';
import Background from './components/Background';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Background/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

