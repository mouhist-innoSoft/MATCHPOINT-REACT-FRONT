import api from '../axiosConfig';

const UsuarioService = () => {
  const cadastrar = async (usuarioDTO) => {
    return api.post('/api/usuario/cadastrar', usuarioDTO);
  };

  return { cadastrar };
};

export default UsuarioService;