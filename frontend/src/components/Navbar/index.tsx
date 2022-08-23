import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-mg bg-primary main-navbar">
      <div className="container-fluid container-nav">
        <Link to={'/'}>
          <p>Github API</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
