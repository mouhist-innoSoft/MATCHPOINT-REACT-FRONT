import { useState } from 'react';
import api from '../axiosConfig';

const useAuthService = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, senha) => {
    try {
      const response = await api.post('/api/auth/login', {
        email: email,
        senha: senha
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token);

      setIsAuthenticated(true); 
      return token;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout
  };
};

export default useAuthService;
