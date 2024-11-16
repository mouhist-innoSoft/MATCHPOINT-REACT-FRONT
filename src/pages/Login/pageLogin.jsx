import React, { useState } from 'react'
import { IonInput, IonButton, IonItem, IonLabel } from '@ionic/react'
import AuthService from '../../services/authService'

const PageLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null) // Adicionando o estado de erro

  const handleLogin = async () => {
    try {
      const token = await AuthService.login(email, password)
      console.log('Login bem-sucedido!', token)
    } catch (error) {
      setError(error, 'Falha ao fazer login. Verifique suas credenciais.')
    }
  }

  return (
    <div>
      <IonItem>
        <IonInput
          label="Email"
          labelPlacement="floating"
          placeholder="Entre o email"
          type="email"
          value={email}
          onIonChange={e => setEmail(e.detail.value)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          label="Senha"
          labelPlacement="floating"
          placeholder="Entre a senha"
          type="password"
          value={password}
          onIonChange={e => setPassword(e.detail.value)}
        ></IonInput>
      </IonItem>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibindo mensagem de erro */}
      <IonButton expand="block" onClick={handleLogin}>
        Login
      </IonButton>
    </div>
  )
}

export default PageLogin
