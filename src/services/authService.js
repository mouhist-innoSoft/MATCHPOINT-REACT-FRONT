import api from './axiosConfig';

class AuthService {
  async login(email, senha) {
    try {
      const response = await api.post('/login', {
        email: email,
        senha: senha
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token);

      return token;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return token !== null;
  }
}

export default new AuthService();
