import axios from 'axios';
import { useAlert } from './AlertContext';

export const useAxiosWithAlert = () => {
  const { showAlert } = useAlert();

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Interceptor de requisições
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
    (error) => {
      const message = error.response?.data?.message || 'Ocorreu um erro na requisição.';
      showAlert(message);
      return Promise.reject(error);
    }
  );

  return api;
};
