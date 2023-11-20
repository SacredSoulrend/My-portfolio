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
          Greetings! I'm Son, a fervent web developer with a boundless creative spirit. My skill set encompasses a wide array of technologies, including Javascript, JQuery, Node, Express, SQL, NoSQL, React, and the entire MERN stack, just to name a few. I excel in crafting not only solutions but digital experiences that are both efficient and user-friendly.
        </p>
        <p className='text-blue-300 leading-7 transition-transform duration-300 transform hover:scale-105'>
          I find joy in unraveling the complexities of challenges and transforming them into bespoke digital masterpieces. Let's embark on a journey of collaboration, where your ideas metamorphose into captivating digital realities!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

