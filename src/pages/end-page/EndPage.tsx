import { Button } from "@mui/material";
import { useAuth } from "../../customHooks/useAuth";


const EndPage: React.FC = () => {
    const { logout } = useAuth();
    const handleStartAgain = () => {
        logout();
    }
    return (
        <div className="screen-container__end">
            <div className="card end__container">
                <a href="https://github.com/miguel-hv/poke-lab">
                    <div className="end__image"></div>
                </a>
                <h1 className="end__title">
                    ¡Has completado el juego!
                </h1>
                <a href="https://github.com/miguel-hv/poke-lab/blob/main/README.md">
                    <div className="end__link">
                        <p>
                            Info, documentación y código
                        </p>
                        <img className="button--image" src="../../../assets/images/github.png" alt="image github logo"/>
                    </div>

                </a>
                <Button variant="contained" onClick={handleStartAgain}>Comenzar de nuevo</Button>
            </div>
        </div>
    );
}

export default EndPage;