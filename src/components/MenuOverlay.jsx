import React from 'react';
import { Link } from 'react-router-dom';

function MenuOverlay({ menuList }) {
  return (
    <div className='absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7'>
      <div className="flex flex-col items-center justify-center h-full">
        {menuList.map((item) => (
          <Link
            key={item.id}
            to={`/${item.title.toLowerCase().replace(' ', '-')}`}
            className='text-white text-[24px] mb-6 hover:text-red-500 transition-all ease-in-out duration-300 cursor-pointer'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuOverlay;
