import React from 'react';
import avatarImage from '../assets/images/5a2a5924f60022165452f6fbf65bdd56.jpg';

const AboutMe = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4 md:p-8'>
      <div>
        <div className='relative group'>
          <img
            src={avatarImage}
            alt='Avatar'
            className='rounded-full w-40 h-40 md:w-60 md:h-60 object-cover mx-auto transform transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
          </div>
        </div>
      </div>
      <div className='text-white'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>About Me</h2>
        <p className='text-gray-300 leading-7 transition-transform duration-300 transform hover:scale-105'>
          Hello! I'm Son, a passionate web developer with a creative flair. My expertise spans across
          Javascript, JQuery, Node, Express, SQL, NoSQL, React, MERN stack, and more. I thrive on
          creating efficient and user-friendly solutions to complex problems. Let's collaborate and
          turn your ideas into digital masterpieces!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
