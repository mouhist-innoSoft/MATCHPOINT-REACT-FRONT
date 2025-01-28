import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/utilities.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageHome from './pages/Home/PageHome'
import PageLogin from './pages/Login/pageLogin'
import App from './app'
import { AlertProvider } from './components/AlertContext'
import CadastroUsuario from './pages/CadastroUsuario/cadastroUsuario'
import { ErrorProvider } from './contexts/ErrorContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PageHome />
      },
      {
        path: 'login',
        element: <PageLogin />
      },
      {
        path: 'cadastro-usuario',
        element: <CadastroUsuario />
      }
    ]
  }
])

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <StrictMode>
    <ErrorProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </ErrorProvider>
  </StrictMode>
)
