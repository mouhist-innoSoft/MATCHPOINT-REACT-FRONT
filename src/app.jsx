import ComponentHeader from "./components/header/componentHeader";
import ComponentSideNav from "./components/sideNav/componentSideNav";
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
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

setupIonicReact();

const App = () => {
  return (
    <div className="front-page">
      <ComponentHeader />
      <div className="app-with-sidebar">
        <ComponentSideNav />
        <div className="full-width">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
