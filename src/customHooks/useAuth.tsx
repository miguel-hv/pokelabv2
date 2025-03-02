import { useDispatch } from "react-redux";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useNavigationUtils } from "./useNavigationUtils";
import { clearUser, setUsername } from "../user/slice/userSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { navigateTo} = useNavigationUtils();

    const login = (inputUsername: string) => {
        dispatch(setUsername(inputUsername));
        navigateTo(`/${UrlRoutes.welcome}`);
    }

    const logout = () => {
        dispatch(clearUser());
    }

    return {
        login,
        logout
    }
}


