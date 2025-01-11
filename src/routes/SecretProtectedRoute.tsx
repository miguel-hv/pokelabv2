import React from "react";
import { Navigate } from "react-router-dom";
import { TypeList } from "../models/Pokemon.model";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { usePokemon } from "../customHooks/usePokemon";

interface SecretProtectedRouteProps {
    type: TypeList;
    children: React.ReactElement;
}

const SecretProtectedRoute: React.FC<SecretProtectedRouteProps> = ({ type, children }) => {
  const { pokemon } = usePokemon();

  if (pokemon && type !== pokemon.type) {
    return <Navigate to={UrlRoutes.home} replace />;
  }

  return children;
};

export default SecretProtectedRoute;
