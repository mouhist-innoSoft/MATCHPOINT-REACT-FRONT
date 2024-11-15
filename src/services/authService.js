import { useState } from 'react';
import useAxiosWithAlert from '../axiosConfig';

const useAuthService = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const api = useAxiosWithAlert();

  const login = async (email, senha) => {
    try {
      const response = await api.post('/login', {
        email: email,
        senha: senha
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token);

      setIsAuthenticated(true); // Atualiza o estado de autenticação
      return token;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false); // Atualiza o estado para deslogado
  };

  return {
    isAuthenticated,
    login,
    logout
  };
};

export default useAuthService;
