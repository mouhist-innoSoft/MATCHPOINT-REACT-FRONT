import axios from 'axios';
import authService from './services/authService';
import { showError } from './contexts/ErrorContext';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
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
    const message = error.response?.data || 'Erro inesperado! Entre em contato com algum administrador.';
    
    if (error.response?.status === 401) {
      authService.logout();
    }

    showError(message);
    return Promise.reject(error);
  }
);

export default api;