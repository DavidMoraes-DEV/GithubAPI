import ContentLoader from 'react-content-loader';

import './styles.css';

const CardLoader = () => {
  return (
      <div className="card-loader-container">
        <ContentLoader
          speed={2}
          width="100%"
          height="100%"
          viewBox="0 0 100% 100%"
          backgroundColor="#f0f0f0"
          foregroundColor="#e9e9e9"
          className="card-loader-content"
        >
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" className='card-loader-img'/>
        </ContentLoader>
        <div className='card-loader-itens-container'>
          <ContentLoader
          speed={2}
          width="100%"
          height="200px"
          viewBox="0 0 100% 100%"
          backgroundColor="#f1f1f1"
          foregroundColor="#ecebeb"
          className="card-loader-item"
        >
          <rect x="0" y="2%" rx="3" ry="3" width="130" height="20" />
          <rect x="0" y="22%" rx="3" ry="3" width="100%" height="15%" />
          <rect x="0" y="42%" rx="3" ry="3" width="100%" height="15%" />
          <rect x="0" y="62%" rx="3" ry="3" width="100%" height="15%" />
          <rect x="0" y="82%" rx="3" ry="3" width="100%" height="15%" />
          
          </ContentLoader>
          
          
        </div>
      </div>
  );
};

export default CardLoader;
