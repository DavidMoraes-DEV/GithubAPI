import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <h4>Bootcamp Spring React - DevSuperior</h4>
      <Link to={'/search_profile'}>
      <button className='btn btn-primary button-container'>
        <p>Começar</p>
      </button>
      </Link>
    </div>
  );
};

export default Home;
