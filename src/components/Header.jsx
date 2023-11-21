import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';
import MenuOverlay from './MenuOverlay';
import Navigation from './Navigation';

function Header({ handleNavClick, activeSection }) {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    {
      id: 1,
      title: 'HOME',
    },
    {
      id: 2,
      title: 'ABOUT ME',
    },
    {
      id: 3,
      title: 'PORTFOLIO',
    },
    {
      id: 4,
      title: 'CONTACT',
    },
    {
      id: 5,
      title: 'RESUME',
    },
  ];

  const handleNavigationClick = (section) => {
    handleNavClick(section);
    setToggle(false);
  };

  return (
    <div className='flex items-center justify-between p-4 bg-gradient-to-r from-[#091498] via-[#120B2E] to-[#600000]'>
      <div>
        <h2 className='text-2xl md:text-3xl font-bold text-blue-300'>
          Son <span className='text-red-500'> Giang</span>
        </h2>
      </div>
      <div className='hidden md:flex gap-4'>
        <Navigation
          menuList={menuList}
          currentSection={activeSection}
          handleNavClick={handleNavigationClick}
        />
      </div>
      <div className='md:hidden'>
        {!toggle ? (
          <HiBars3BottomRight
            onClick={() => setToggle(!toggle)}
            className='text-white text-[22px] cursor-pointer'
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className='text-white text-[22px] cursor-pointer'
          />
        )}
        {toggle ? <MenuOverlay menuList={menuList} handleNavClick={handleNavigationClick} /> : null}
      </div>
    </div>
  );
}

export default Header;

