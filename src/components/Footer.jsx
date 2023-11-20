import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#091498] to-[#60072C] text-white p-4">
      <p>Connect with me:</p>
      <a href="https://github.com/SacredSoulrend" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>{' '}
      |{' '}
      <a href="https://www.linkedin.com/in/son-giang-981513294/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>{' '}
      |{' '}
      <a href="https://stackoverflow.com/users/21760360/sacredsoulrend" target="_blank" rel="noopener noreferrer">
        Stack Overflow
      </a>
    </footer>
  );
};

export default Footer;
