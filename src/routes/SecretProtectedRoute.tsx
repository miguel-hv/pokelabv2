import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../user/context/UserContext";
import { TypeList } from "../models/Pokemon.model";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";

interface SecretProtectedRouteProps {
    type: TypeList;
    children: React.ReactElement;
}

const SecretProtectedRoute: React.FC<SecretProtectedRouteProps> = ({ type, children }) => {
  const { pokemon } = useUserContext();

  if (pokemon && type === pokemon.type) {
    return <Navigate to={UrlRoutes.home} replace />;
  }

  return children;
};

export default SecretProtectedRoute;
