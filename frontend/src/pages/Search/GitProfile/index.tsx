import axios from 'axios';
import { useState } from 'react';
import './styles.css';
import 'App.css';
import ResultCard from '../ResultCard';
import CardLoader from './CardLoader';

type formData = {
  profileGit: string;
};

type InfoProfile = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const GitProfile = () => {
  const [infoProfile, setInfoProfile] = useState<InfoProfile>();
  const [formData, setFormData] = useState<formData>({ profileGit: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get('https://api.github.com/users/' + formData.profileGit)
      .then((response) => {
        setInfoProfile(response.data);
      })
      .catch((error) => {
        setInfoProfile(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="search-container">
      <div className="base-card search-content-container">
        <h1>Encontre um perfil Github</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <input
              type="text"
              name="profileGit"
              value={formData.profileGit}
              placeholder="Usuário Github"
              onChange={handleChange}
              className="search-input"
            />
            <button type="submit" className="btn btn-primary git-profile-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? (
        <CardLoader />
      ) : (
        infoProfile && (
          <ResultCard
            avatar_Url={infoProfile.avatar_url}
            url={infoProfile.url}
            followers={infoProfile.followers}
            location={infoProfile.location}
            name={infoProfile.name}
          />
        )
      )}
    </div>
  );
};

export default GitProfile;
