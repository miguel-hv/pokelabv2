import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useAuth } from "../customHooks/useAuth";


const UserProtectedRoute: React.FC = () => {
    const { username } = useAuth();

    if (!username) {
        return <Navigate to={UrlRoutes.access} replace />;
    }

    return <Outlet />;
}

export default UserProtectedRoute;