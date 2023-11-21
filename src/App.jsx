import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <Header handleNavClick={handleNavClick} activeSection={activeSection} />
      <div className='min-h-screen bg-gradient-to-tr from-[#600000] via-[#120000] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
