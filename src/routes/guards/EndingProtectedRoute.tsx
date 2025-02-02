import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UrlRoutes } from "../../enumerators/urlRoutes.enum";
import { useSecrets } from "../../customHooks/useSecrets";

const EndingProtectedRoute: React.FC = () => {
  const { secrets } = useSecrets();

  if (secrets.length < 3) {
    return <Navigate to={UrlRoutes.home} replace />;
  }

  return <Outlet />;
};

export default EndingProtectedRoute;
