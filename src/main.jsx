import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globalStyle.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageHome from './pages/Home/pageHome';
import PageLogin from './pages/Login/pageLogin';
import App from './App';

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

