import { Link } from 'react-router-dom';
import './styles.css';
import { ReactComponent as LogoGithub } from '../../assets/images/logo-github.svg';
import HomeCard from '../../assets/images/home-page-card.png';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card-container">
        <img src={HomeCard} alt="HomeCard" />
      </div>
        <div className="home-content">
          <LogoGithub className="home-logo-github-container" />
          <div className="home-description">
            <h1>Encontre Usuários do Github</h1>
            <h4>Pesquise pelo nome do usuário.</h4>
            <div className="home-button-container">
              <Link to={'/search_profile'}>
                <button className="btn btn-primary button-content">
                  Pesquisar
                </button>
              </Link>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Home;
