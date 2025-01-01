import React from "react";
import RegisterForm from "./RegisterForm";
import { useUserContext } from "../../user/context/UserContext";
import { useNavigate } from "react-router-dom";
import { UrlRoutes } from "../../enumerators/urlRoutes.enum";

const RegisterPage: React.FC = () => {
    const { setUsername } = useUserContext();
    const navigate = useNavigate();

    const handleFormSubmit = (username: string) => {
        setUsername(username);
        navigate(UrlRoutes.welcome);
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