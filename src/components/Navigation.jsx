import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ menuList, currentSection, handleNavClick }) {
  return (
    <nav className="flex gap-4">
      {menuList.map((item) => (
        <NavLink
          key={item.id}
          to={`/${item.title.toLowerCase().replace(' ', '-')}`}
          className={`text-white hover:text-red-500 focus:outline-none ${
            currentSection === item.title.toLowerCase() ? 'underline' : ''
          }`}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
