import React from "react";
import "./Header.scss"; // Assuming SCSS is set up properly
import { useAuth } from "../../../auth/services/AuthService";
import { useUserStore } from "../../../user/store/userStore"; // Custom hooks for state
import { Button } from "@mui/material";

const Header: React.FC = () => {
  const { selectedPokemon, currentUser, secrets } = useUserStore();
  const { logout } = useAuth();

  const imageTitleSrc = "/assets/images/backgrounds/logo.png";

  return (
    <div className="header card">
      {currentUser ? (
        <>
          <div className="header__userid-container">
            <div
              className={`header__image-container ${
                selectedPokemon
                  ? selectedPokemon.name === "bulbasaur"
                    ? "header__image-container--bulbasaur"
                    : selectedPokemon.name === "charmander"
                    ? "header__image-container--charmander"
                    : selectedPokemon.name === "squirtle"
                    ? "header__image-container--squirtle"
                    : ""
                  : "header__image-container--ball"
              }`}
            ></div>

            <div className="header__data-container">
              <div className="header__text--title">
                {selectedPokemon?.name && (
                  selectedPokemon.name.charAt(0).toUpperCase() +
                  selectedPokemon.name.slice(1)
                )}
              </div>
              <div className="header__text--sub">{currentUser.username}</div>
            </div>
          </div>

          <div className="header__state-container">
            <div className="header__logout">
              <Button variant="outlined" color="primary" onClick={logout}>
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
