import axios from 'axios';
import { useAlert } from './components/AlertContext';
import AuthService from './services/authService';

const useAxiosWithAlert = () => {
  const { showAlert } = useAlert();

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const message = error.response?.data?.message || 'Erro inesperado! Entre em contato com algum administrador.';
      
      if (error.response?.status === 401) {
        AuthService.logout();
        window.location.href = '/login';
        showAlert('Sessão expirada, por favor, faça login novamente.');
      } else {
        showAlert(message);
      }

      if (!error.response) {
        showAlert('Erro de conexão. Verifique sua internet.');
      }

      return Promise.reject(error);
    }
  );

  return api;
};

export default useAxiosWithAlert;
