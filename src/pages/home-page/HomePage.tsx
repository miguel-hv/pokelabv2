import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UrlRoutesRoot, UrlRoutes } from "../../enumerators/urlRoutes.enum";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import MenuComponent from "./MenuCoponent";
import { useSecrets } from "../../customHooks/useSecrets";
import { usePokemon } from "../../customHooks/usePokemon";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { secrets } = useSecrets();
  const { pokemon } = usePokemon();
  const pokemonType = PokemonType;

  // URLs
  const urlSelectPokemon = UrlRoutesRoot.selectPokemonRoot;
  const urlSecretFire = UrlRoutesRoot.secretFireRoot;
  const urlSecretLeaf = UrlRoutesRoot.secretLeafRoot;
  const urlSecretWater = UrlRoutesRoot.secretWaterRoot;

  useEffect(() => {
    if (secrets.length === 3) {
      navigate(`/${UrlRoutes.end}`);
    }
  }, [secrets, navigate]);

  return (
    <div className="menu">
      <Link className="menu__link menu__link--hint card" to={urlSelectPokemon}>
        <MenuComponent title="Laboratorio" src="../../../assets/images/map/lab.png" />  
      </Link>

      <Link
        className={`menu__link card ${
          pokemon?.type === pokemonType.fire ? "menu__link--hint" : ""
        }`}
        to={urlSecretFire}
      >
        <MenuComponent title="Caldera" src="../../../assets/images/map/house.png" /> 
      </Link>

      <Link
        className={`menu__link card ${
          pokemon?.type === pokemonType.leaf ? "menu__link--hint" : ""
        }`}
        to={urlSecretLeaf}
      >
        <MenuComponent title="Jardín" src="../../../assets/images/map/garden.png" /> 
      </Link>

      <Link
        className={`menu__link card ${
          pokemon?.type === pokemonType.water ? "menu__link--hint" : ""
        }`}
        to={urlSecretWater}
      >
        <MenuComponent title="Piscina" src="../../../assets/images/map/lake.png" /> 
      </Link>
    </div>
  );
};

export default HomePage;
