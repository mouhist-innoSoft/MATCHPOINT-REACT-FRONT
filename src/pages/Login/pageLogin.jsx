import React, { useEffect, useState } from 'react'
import { IonInput, IonButton, IonItem} from '@ionic/react'
import { useNavigate } from 'react-router-dom';
import useAuthService from '../../services/authService';
import './stylesLogin.css';

const PageLogin = () => {
  const { login } = useAuthService();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loginClicked, setLoginClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      try {
        await login(email, password);
        navigate('/outra-tela');
      } catch (error) {
        setError('Falha ao fazer login. Verifique suas credenciais.');
      }
    };
  
    if (loginClicked) {
      handleLogin();
      setLoginClicked(false);
    }
  }, [loginClicked, email, password, login, navigate]);
  
  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  return (
    <div className="login-container">
      <IonItem>
        <IonInput
          label="Email"
          labelPlacement="floating"
          placeholder="Digite seu email"
          type="email"
          value={email}
          onIonChange={e => setEmail(e.detail.value)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          label="Senha"
          labelPlacement="floating"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onIonChange={e => setPassword(e.detail.value)}
        ></IonInput>
      </IonItem>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibindo mensagem de erro */}
      <IonButton expand="block" onClick={handleLoginClick}>
        Login
      </IonButton>
      <br />
      <div className="center-text">
        Não tem cadastro?
      </div>
      <IonButton expand="block" routerLink="/cadastro-usuario">
        Cadastre-se
      </IonButton>
    </div>
  )
}

export default PageLogin
