import { useDispatch, useSelector } from "react-redux";
import { UrlRoutes } from "../enumerators/urlRoutes.enum";
import { useNavigationUtils } from "./useNavigationUtils";
import { clearUser, setUsername } from "../user/slice/userSlice";
import { RootState } from "../store";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { navigateTo} = useNavigationUtils();

    const username
    = useSelector((state: RootState) => state.user.username);

    const login = (inputUsername: string) => {
        dispatch(setUsername(inputUsername));
        navigateTo(`/${UrlRoutes.welcome}`);
    }

    const logout = () => {
        dispatch(clearUser());
    }

    return {
        login,
        logout,
        username
    }
}


