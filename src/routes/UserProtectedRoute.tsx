import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useUserContext } from "../user/context/UserContext";


const UserProtectedRoute: React.FC = () => {
    const { username } = useUserContext();

    if (!username) {
        return <Navigate to={UrlRoutes.access} replace />;
    }

    return <Outlet />;
}

export default UserProtectedRoute;