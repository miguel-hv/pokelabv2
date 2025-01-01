import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterPage: React.FC = () => {

    const handleFormSubmit = (username: string) => {
        console.log("Form submitted", username);
        //TODO: handle form submission
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