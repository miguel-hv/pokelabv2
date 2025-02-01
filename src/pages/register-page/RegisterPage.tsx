import React, { useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../../customHooks/useAuth";
import { UrlRoutes } from "../../enumerators/urlRoutes.enum";
import { useNavigationUtils } from "../../customHooks/useNavigationUtils";

const RegisterPage: React.FC = () => {
    const { login } = useAuth();
    const { username } = useAuth();
    const { navigateTo } = useNavigationUtils();

    useEffect(() => {
        if (username) {
            navigateTo(UrlRoutes.home, true);
        }
      }, [username]);

    const handleFormSubmit = (username: string) => {
        login(username);
    }

    return (
        <div className="screen-container__access">
            <div className="card">
                <div className="welcome-dialog__extra-info">
                    <p>
                        Introduce un nuevo alias para 
                        registrarte o 
                    </p>
                    <p>
                        recuerda tu alias para hacer
                        login.
                    </p>
                </div>
                <RegisterForm onSubmit={handleFormSubmit} />
            </div>
        </div>
    )
}

export default RegisterPage;