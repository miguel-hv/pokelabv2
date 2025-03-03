import { Navigate, Outlet } from "react-router-dom";
import { UrlRoutes } from "../../enumerators/urlRoutes.enum";
import { useAuth } from "../../customHooks/useAuth";

const AuthRedirectRoute: React.FC = () => {
  const username = useAuth().username;

  return username ? <Navigate to={UrlRoutes.welcome} replace /> : <Outlet />;
};

export default AuthRedirectRoute;
