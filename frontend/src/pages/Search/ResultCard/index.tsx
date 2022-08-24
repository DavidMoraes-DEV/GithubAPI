import './styles.css';

type Props = {
  avatar_Url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const ResultCard = ({ avatar_Url, url, followers, location, name }: Props) => {
  
  const infoDefault = 'Indisponível';
  
  return (
    <div className="base-card card-container"> 
      <img src={avatar_Url} alt="Foto de Perfil" />
      <div className="card-content">
        <h1>Informações</h1>
        <div className="card-itens">
          <h5>Perfil:</h5>
          <p>{url === null ? infoDefault : url.substring(0, 23)}</p>
          <p>{url === null ? "" : url.substring(23,)}</p>
        </div>
        <div className="card-itens">
          <h5>Seguidores:</h5>
          <p>{followers === null ? infoDefault : followers}</p>
        </div>
        <div className="card-itens">
          <h5>Localidade:</h5>
          <p>{location === null ? infoDefault : location}</p>
        </div>
        <div className="card-itens">
          <h5>Nome:</h5>
          <p>{name === null ? infoDefault : name}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
