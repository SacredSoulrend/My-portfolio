import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header handleNavClick={handleNavClick} activeSection={activeSection} />
      <div className='min-h-screen bg-gradient-to-tr from-[#600000] via-[#120000] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
        <main className="mx-3">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
