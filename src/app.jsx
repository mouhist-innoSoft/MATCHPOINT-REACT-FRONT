import '@ionic/react/css/core.css'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/palettes/dark.system.css'

import { Outlet } from 'react-router-dom'
import { useAlert } from './components/AlertContext'

setupIonicReact()

const App = () => {
  const { alertData, hideAlert } = useAlert()

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pages</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton expand="block" fill="outline" color="medium" routerLink="/">
            Home
          </IonButton>
          <IonButton expand="block" fill="outline" color="medium" routerLink="/login">
            Login
          </IonButton>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>MatchPoint</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Outlet />
        </IonContent>
      </IonPage>
    </>
  )
}

export default App
