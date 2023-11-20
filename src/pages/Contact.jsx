import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission (e.g., send the data to a server, show a success message)
    // Will do at a later point
    console.log('Form submitted:', formData);
  };

  return (
    <div className='text-white'>
      <h2 className='text-3xl font-bold mb-4'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-semibold mb-1'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-semibold mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-semibold mb-1'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            rows='4'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
