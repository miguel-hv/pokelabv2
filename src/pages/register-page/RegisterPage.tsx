import React from "react";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../../customHooks/useAuth";

const RegisterPage: React.FC = () => {
    const { login } = useAuth();

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