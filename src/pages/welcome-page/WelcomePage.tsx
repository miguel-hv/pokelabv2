import React from 'react';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import './WelcomePage.scss'; // Import the SCSS file for styling
import { Button } from '@mui/material';
import { useNavigationUtils } from '../../customHooks/useNavigationUtils';

const WelcomePage: React.FC = () => {
  const { navigateTo} = useNavigationUtils();

  const handleActionButton = () => {
    navigateTo(UrlRoutes.home); 
  };

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleActionButton();
      }
    };

    document.addEventListener('keyup', handleKeyPress);
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="screen-container__access">
      <div className="welcome-dialog">
        <div className="welcome-dialog__main-info">
          <div className="welcome-image">
            <img
              src="/assets/images/pokemon/oak2.png"
              alt="Professor Oak"
            />
          </div>
          <div className="welcome-dialog__main-text">
            <p>¡Te doy la bienvenida a Pueblo Paleta!</p>
          </div>
        </div>
      </div>

      <div className="map__container">
        <img
          className="map__image"
          src="/assets/images/map/map.jpg"
          alt="Map"
        />
      </div>

      <div className="card card--p-l welcome-call">
        <p className="welcome-call__text">
          Consigue los secretos de fuego, agua y planta en las distintas ubicaciones.
        </p>
        <Button variant="contained" onClick={handleActionButton}>
          ¡Vamos allá!
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
