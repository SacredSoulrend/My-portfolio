import React from 'react';
import resumePDF from '../assets/images/Resume2023.pdf';

const Resume = () => {
  return (
    <div className='text-white max-w-3xl mx-auto bg-gradient-to-br from-[#60072C] via-[#120B2E] to-[#091498] p-8 rounded-lg shadow-xl'>
      <h2 className='text-4xl font-bold mb-8 text-center'>🚀 My Resume 🚀</h2>
      <p className='text-lg mb-8 text-center'>
        Download my{' '}
        <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
          resume
        </a>
      </p>

      <div className='border-b-2 border-white mb-6' />

      <h3 className='text-2xl font-semibold mb-4'>🛠️ Skills</h3>
      <ul className='list-disc pl-8 mb-8'>
        <li className='mb-2'>JavaScript (ES6+)</li>
        <li className='mb-2'>React.js</li>
        <li className='mb-2'>HTML5 & CSS3</li>
        <li className='mb-2'>jQuery</li>
        <li className='mb-2'>Node.js</li>
        <li className='mb-2'>Express.js</li>
        <li className='mb-2'>SQL (Relational Databases)</li>
        <li className='mb-2'>NoSQL (MongoDB, or other NoSQL databases)</li>
        <li className='mb-2'>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
      </ul>

      <div className='border-b-2 border-white mb-6' />

      <h3 className='text-2xl font-semibold mb-6'>💼 Experience</h3>
      <div className='mb-4'>
        <p className='text-xl font-semibold'>Web Developer</p>
        <p className='text-gray-300'>December 2023 - Present</p>
      </div>

      <div className='border-b-2 border-white mb-6' />

      <h3 className='text-2xl font-semibold mb-6'>🎓 Education</h3>
      <div className='mb-4'>
        <p className='text-xl font-semibold'>University of Denver</p>
        <p className='text-gray-300'>Graduated: December 2023</p>
      </div>
    </div>
  );
};

export default Resume;

