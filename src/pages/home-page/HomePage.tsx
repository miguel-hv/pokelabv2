import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UrlRoutesRoot, UrlRoutes } from "../../enumerators/urlRoutes.enum";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import { useUserContext } from "../../user/context/UserContext";

const MenuComponent: React.FC<{src: string | undefined; title: string}> = ({src, title}) => {
  let styleUnique = "";
  if (title === "Caldera") styleUnique = "menu__image-container--house";
  return (
    <div className="menu__item">
      <div>{title}</div>
      <div className={`menu__image-container ${styleUnique}`}>
        <img
          className="menu__image"
          src={src}
          alt={`${title} section`}
        />
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { secrets, pokemon } = useUserContext();
  const pokemonType = PokemonType;

  // URLs
  const urlSelectPokemon = UrlRoutesRoot.selectPokemonRoot;
  const urlSecretFire = UrlRoutesRoot.secretFireRoot;
  const urlSecretLeaf = UrlRoutesRoot.secretLeafRoot;
  const urlSecretWater = UrlRoutesRoot.secretWaterRoot;

  useEffect(() => {
    if (secrets.length === 3) {
      navigate(UrlRoutes.end);
    }
  }, [secrets, navigate]);

  return (
    <div className="menu">
      <Link className="menu__link menu__link--hint card" to={urlSelectPokemon}>
        <MenuComponent title="Laboratorio" src="../../../public/assets/images/map/lab.png" />  
      </Link>

      <Link
        className={`menu__link card ${
          pokemon?.type === pokemonType.fire ? "menu__link--hint" : ""
        }`}
        to={urlSecretFire}
      >
        <MenuComponent title="Caldera" src="../../../public/assets/images/map/house.png" /> 
      </Link>

      <Link
        className={`menu__link card ${
          pokemon?.type === pokemonType.leaf ? "menu__link--hint" : ""
        }`}
        to={urlSecretLeaf}
      >
        <MenuComponent title="Jardín" src="../../../public/assets/images/map/garden.png" /> 
      </Link>

      <Link
        className={`menu__link card ${
          pokemon?.type === pokemonType.water ? "menu__link--hint" : ""
        }`}
        to={urlSecretWater}
      >
        <MenuComponent title="Piscina" src="../../../public/assets/images/map/lake.png" /> 
      </Link>
    </div>
  );
};

export default HomePage;
