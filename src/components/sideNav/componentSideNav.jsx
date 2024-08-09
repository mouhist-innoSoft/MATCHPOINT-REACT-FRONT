import { Link } from 'react-router-dom';
import './stylesSideNav.css'

const ComponentSideNav = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};
      
export default ComponentSideNav;
