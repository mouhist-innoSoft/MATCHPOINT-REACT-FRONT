import { useState } from 'react';
import UsuarioService from '../../services/usuarioServise';
import { IonButton, IonInput, IonItem } from '@ionic/react';
import InputCpf from '../../components/InputFormatCpf';
import InputDateModalFormat from '../../components/InputDateFormat';
import './stylesCadastroUsuario.css';
import { Navigate } from 'react-router-dom';
import UsuarioDTO from '../../dtos/usuarioDTO';
import { useError } from '../../contexts/ErrorContext';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const { cadastrar } = UsuarioService();
  const { showError } = useError();

  const realizarCadastro = async () => {
    if (!nome || !email || !dataNascimento || !cpf || !password || !confPassword) {
      showError('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confPassword) {
      showError('As senhas não coincidem.');
      return;
    }

    const usuarioDTO = new UsuarioDTO(nome, email, dataNascimento, cpf, password);

    await cadastrar(usuarioDTO);
    Navigate('/login');
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Usuário</h2>
      <div className="input-group">
        <label>Nome</label>
        <IonInput value={nome} onIonChange={e => setNome(e.detail.value)} />
      </div>
      <div className="input-group">
        <label>Email</label>
        <IonInput value={email} onIonChange={e => setEmail(e.detail.value)} />
      </div>
      <div className="input-group">
        <label>Data de Nascimento</label>
        <InputDateModalFormat value={dataNascimento} onChange={setDataNascimento} />
      </div>
      <div className="input-group">
        <label>CPF</label>
        <InputCpf value={cpf} onChange={setCpf} />
      </div>
      <div className="input-group">
        <label>Senha</label>
        <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value)} />
      </div>
      <div className="input-group">
        <label>Confirmar Senha</label>
        <IonInput type="password" value={confPassword} onIonChange={e => setConfPassword(e.detail.value)} />
      </div>
      <IonButton expand="block" onClick={realizarCadastro}>
        Cadastrar
      </IonButton>
    </div>
  );
};

export default CadastroUsuario;