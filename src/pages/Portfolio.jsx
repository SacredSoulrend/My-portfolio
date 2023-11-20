import React from 'react';

const Project = ({ title, image, githubLink }) => {
  return (
    <div className='bg-gradient-to-r from-[#0044cc] via-[#0066cc] to-[#0088cc] p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105'>
      <h3 className='text-2xl font-bold mb-4 text-white'>{title}</h3>
      <img
        src={`src/assets/images/${image}`}
        alt={`${title} screenshot`}
        className='w-full h-48 object-cover mb-4 rounded-md'
      />
      <p className='text-white'>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-yellow-500 hover:underline"
        >
          View on GitHub
        </a>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <Project
        title="One Click Eats"
        image="one-click-eats-1.jpeg"
        githubLink="https://github.com/Stephen-Garcia/RecipeProject"
      />
      <Project
        title="Weather Dashboard"
        image="weather-dashboard-screenshot.jpeg"
        githubLink="https://github.com/SacredSoulrend/weather-dashboard"
      />
      <Project
        title="Just Another Text Editor"
        image="JATE.png"
        githubLink="https://github.com/SacredSoulrend/text-editor"
      />
            <Project
        title="Code Quiz"
        image="255750033-f87737e4-f8ec-474c-abc0-bc5c7d80c905.jpeg"
        githubLink="https://github.com/SacredSoulrend/code-quiz"
      />
            <Project
        title="Work Day Scheduler"
        image="257121033-94d62d20-f538-4565-bc7b-4bd5618a700b.png"
        githubLink="https://github.com/SacredSoulrend/work-day-scheduler"
      />
    </div>
  );
};

export default App;
