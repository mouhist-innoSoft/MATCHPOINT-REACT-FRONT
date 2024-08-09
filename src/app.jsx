import ComponentHeader from './components/header/componentHeader';
import ComponentSideNav from './components/sideNav/componentSideNav';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ComponentHeader />
      <ComponentSideNav />
      <div className="main-content">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
