import React from "react";
import "./Header.scss"; // Assuming SCSS is set up properly
import { Button } from "@mui/material";
import { useAuth } from "../../../customHooks/useAuth";
import { usePokemon } from "../../../customHooks/usePokemon";
import { useSecrets } from "../../../customHooks/useSecrets";

const Header: React.FC = () => {
  const { username } = useAuth();
  const { pokemon } = usePokemon();
  const { secrets } = useSecrets();
  const imageTitleSrc = "/assets/images/backgrounds/logo.png";
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="header card">
      {username ? (
        <>
          <div className="header__userid-container">
            <div
              className={`header__image-container ${
                pokemon
                  ? pokemon.name === "bulbasaur"
                    ? "header__image-container--bulbasaur"
                    : pokemon.name === "charmander"
                    ? "header__image-container--charmander"
                    : pokemon.name === "squirtle"
                    ? "header__image-container--squirtle"
                    : ""
                  : "header__image-container--ball"
              }`}
            ></div>

            <div className="header__data-container">
              <div className="header__text--title">
                {pokemon?.name && (
                  pokemon.name.charAt(0).toUpperCase() +
                  pokemon.name.slice(1)
                )}
              </div>
              <div className="header__text--sub">{username}</div>
            </div>
          </div>

          <div className="header__state-container">
            <div className="header__logout">
              <Button variant="outlined" name="logout" color="primary" onClick={handleLogout}>
                Logout
              </Button>
            </div>

            <div className="header__data-container header__data-container--header">
              <span
                className={`header__secret ${
                  secrets.includes("fire") ? "header__secret--active" : ""
                }`}
              >
                <img
                  className="header__secret--fire"
                  src="/assets/images/pokemon/fire.png"
                  alt="fire-secret image"
                />
              </span>
              <span
                className={`header__secret ${
                  secrets.includes("water") ? "header__secret--active" : ""
                }`}
              >
                <img
                  className="header__secret--water"
                  src="/assets/images/pokemon/water.png"
                  alt="water-secret image"
                />
              </span>
              <span
                className={`header__secret ${
                  secrets.includes("leaf") ? "header__secret--active" : ""
                }`}
              >
                <img
                  className="header__secret--grass"
                  src="/assets/images/pokemon/grass.png"
                  alt="grass-secret image"
                />
              </span>
            </div>

            <div className="header__icon">
              <a href="https://github.com/miguel-hv/poke-lab">
                <span className="icon-info"></span>
              </a>
            </div>
          </div>
        </>
      ) : (
        <img className="header__login" src={imageTitleSrc} alt="" />
      )}
    </div>
  );
};

export default Header;
