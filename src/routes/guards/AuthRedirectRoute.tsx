import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";
import { UrlRoutes } from "../../enumerators/urlRoutes.enum";

const AuthRedirectRoute: React.FC = () => {
  const { username } = useAuth();

  return username ? <Navigate to={UrlRoutes.welcome} replace /> : <Outlet />;
};

export default AuthRedirectRoute;
