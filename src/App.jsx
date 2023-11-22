import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    // Use React Router's navigate function to change the route
    navigate(section);
  };

  return (
    <>
      <Header handleNavClick={handleNavClick} />
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

