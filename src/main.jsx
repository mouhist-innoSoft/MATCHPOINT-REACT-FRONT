import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/utilities.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageHome from './pages/Home/pageHome';
import PageLogin from './pages/Login/pageLogin';
import App from './app';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <PageHome/>,
      },
      {
        path: "login",
        element: <PageLogin/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

