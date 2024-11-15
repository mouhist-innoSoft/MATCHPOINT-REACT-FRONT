import ComponentHeader from "./components/header/componentHeader";
import ComponentSideNav from "./components/sideNav/componentSideNav";
import '@ionic/react/css/core.css';
import { IonAlert, setupIonicReact } from '@ionic/react';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { Outlet } from "react-router-dom";
import { useAlert } from "./components/AlertContext";

setupIonicReact();

const App = () => {

  const { alertData, hideAlert } = useAlert(); 
  
  return (
    <div className="front-page">
      <ComponentHeader />
      <div className="app-with-sidebar">
        <ComponentSideNav />
        <div className="full-width">
          <Outlet />
        </div>
      </div>
      <IonAlert
        isOpen={alertData.showAlert}
        onDidDismiss={hideAlert}
        header="Erro"
        message={alertData.alertMessage}
        buttons={['OK']}
      />
    </div>
  );
};

export default App;
