import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useUserContext } from "../user/context/UserContext";
import { useNavigationUtils } from "./useNavigationUtils";

export const useAuth = () => {
    const {username, setPokemon, setUsername, setSecrets} = useUserContext();
    const { navigateTo} = useNavigationUtils();

    const login = (username: string) => {
        setUsername(username);
        navigateTo(UrlRoutes.welcome);
    }

    const logout = () => {
        setPokemon(null);
        setUsername('');
        setSecrets([]);
    }

    return {
        username,
        login,
        logout
    }
}


