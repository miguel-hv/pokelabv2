import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/shared/header/Header";

const PokePage: React.FC = () => {
  return (
    <div className="poke-page">
      <div className="screen-container__header">
        <Header />
      </div>
      <div className="screen-container__main">
        <Outlet />
      </div>
    </div>
  );
};

export default PokePage;
