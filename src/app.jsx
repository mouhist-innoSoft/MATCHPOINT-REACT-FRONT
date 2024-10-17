import ComponentHeader from "./components/header/componentHeader";
import ComponentSideNav from "./components/sideNav/componentSideNav";

import { Outlet } from "react-router-dom";

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
