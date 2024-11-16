import React from 'react'
import './stylesHome.css'
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'

class PageHome extends React.Component {
  renderDescriptionCard() {
    return (
      <div>
        <IonCard>
          <img
            alt="Futebol"
            src="https://wallpapers.com/images/hd/gorgeous-landscape-of-fifa-21-green-football-field-vbqqd2bkliimt8dm.jpg"
          />
          <IonCardHeader>
            <IonCardTitle>Cansou do Papel e Caneta?</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Organize e participe de jogos com facilidade. Conecte-se com jogadores, agende partidas
            e aproveite o esporte que você ama.
          </IonCardContent>
        </IonCard>
      </div>
    )
  }

  renderLoginPrompt() {
    return (
      <div>
        <IonCard>
          <img
            alt="Contrato"
            src="https://wallpapers.com/images/hd/man-in-suit-signing-a-contract-spcqb9kwm16rdl40.jpg"
          />
          <IonCardHeader>
            <IonCardTitle>Ainda nāo tem uma conta?</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>Registre-se</IonCardContent>
        </IonCard>
      </div>
    )
  }

  render() {
    return (
      <>
        {this.renderDescriptionCard()}
        {this.renderLoginPrompt()}
      </>
    )
  }
}

export default PageHome
