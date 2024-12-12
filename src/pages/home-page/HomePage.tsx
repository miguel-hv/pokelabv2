import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UrlRoutesRoot, UrlRoutes } from "../../enumerators/urlRoutes.enum";
import { PokemonType } from "../../enumerators/pokemonType.enum";
import { useUserContext } from "../../user/context/UserContext";

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
    <div>test</div>
    // <div className="menu">
    //   {/* Laboratory Link */}
    //   <Link className="menu__link menu__link--hint card" to={urlSelectPokemon}>
    //     <div className="menu__item">
    //       <div>Laboratorio</div>
    //       <div className="menu__image-container">
    //         <img
    //           className="menu__image"
    //           src="/assets/images/map/lab.png"
    //           alt="Laboratorio"
    //         />
    //       </div>
    //     </div>
    //   </Link>

    //   {/* Fire Secret Link */}
    //   <Link
    //     className={`menu__link card ${
    //       pokemon?.type === pokemonType.fire ? "menu__link--hint" : ""
    //     }`}
    //     to={urlSecretFire}
    //   >
    //     <div className="menu__item">
    //       <div className="menu__image-container menu__image-container--house">
    //         <img
    //           className="menu__image"
    //           src="/assets/images/map/house.png"
    //           alt="Caldera"
    //         />
    //       </div>
    //       <div>Caldera</div>
    //     </div>
    //   </Link>

    //   {/* Leaf Secret Link */}
    //   <Link
    //     className={`menu__link card ${
    //       pokemon?.type === pokemonType.leaf ? "menu__link--hint" : ""
    //     }`}
    //     to={urlSecretLeaf}
    //   >
    //     <div className="menu__item">
    //       <div>Jardín</div>
    //       <div className="menu__image-container">
    //         <img
    //           className="menu__image"
    //           src="/assets/images/map/garden.png"
    //           alt="Jardín"
    //         />
    //       </div>
    //     </div>
    //   </Link>

    //   {/* Water Secret Link */}
    //   <Link
    //     className={`menu__link card ${
    //       pokemon?.type === pokemonType.water ? "menu__link--hint" : ""
    //     }`}
    //     to={urlSecretWater}
    //   >
    //     <div className="menu__item">
    //       <div className="menu__image-container">
    //         <img
    //           className="menu__image"
    //           src="/assets/images/map/laker.png"
    //           alt="Piscina"
    //         />
    //       </div>
    //       <div>Piscina</div>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default HomePage;
