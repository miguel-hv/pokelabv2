import { useNavigate } from "react-router-dom";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useUserContext } from "../user/context/UserContext";

export const useAuth = () => {
    const {setPokemon, setUsername, setSecrets} = useUserContext();
    const navigate = useNavigate();

    const login = (username: string) => {
        setUsername(username);
        navigate(UrlRoutes.welcome);
    }

    const logout = () => {
        setPokemon(null);
        setUsername('');
        setSecrets([]);
    }

    return {
        login,
        logout
    }
}


