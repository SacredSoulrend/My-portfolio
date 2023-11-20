import React from 'react';

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>
        <p className='text-blue-300 text-[40px]'>Hi,</p>
        <p className='text-blue-300  text-[50px] font-bold'>My name is Son</p>
        <p className='text-red-500 text-[40px] font-bold'>& I'm a Full Stack Developer</p>
      </div>
      <div className='flex justify-center group'>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8] relative overflow-hidden transform transition-transform duration-300 group-hover:scale-105'>
          <img
            src="src/assets/images/f5c51d6ace6d9cd9fbcdf37dadda2fbb.webp"
            alt="Son's Avatar"
            className='h-full w-full object-cover rounded-[20px] transition-opacity duration-300 group-hover:opacity-75'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <p className='text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

