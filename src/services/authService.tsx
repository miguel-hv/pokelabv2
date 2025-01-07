import { useNavigate } from "react-router-dom";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useUserContext } from "../user/context/UserContext";


const {setPokemon, setUsername, setSecrets} = useUserContext();
const navigate = useNavigate();

export const login = (username: string) => {
    setUsername(username);
    navigate(UrlRoutes.welcome);
}

export const logout = () => {
    setPokemon(null);
    setUsername('');
    setSecrets([]);
}