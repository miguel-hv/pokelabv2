import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { storage } from "../user/context/storageService";
import { useUserContext } from "../user/context/UserContext";
import { useNavigationUtils } from "./useNavigationUtils";

export const useAuth = () => {
    const {username, pokemon, secrets, setPokemon, setUsername, setSecrets} = useUserContext();
    const { navigateTo} = useNavigationUtils();

    const login = (inputUsername: string) => {
        setUsername(inputUsername);
        navigateTo(`/${UrlRoutes.welcome}`);
    }

    const logout = () => {
        setPokemon(null);
        setUsername('');
        setSecrets([]);
        //TODO: remove
        storage.remove('pokemon');
        storage.remove('secrets');
        storage.remove('username');
    }

    return {
        username,
        login,
        logout
    }
}


