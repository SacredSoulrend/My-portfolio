import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Home from './components/Home.jsx';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Error from './pages/Error';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'AboutMe',
        element: <AboutMe />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
