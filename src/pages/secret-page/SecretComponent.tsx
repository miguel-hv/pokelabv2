import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogOak from "../../components/shared/DialogOak";

interface SecretComponentProps {
    textSecretType: string;
    textSecret: string;
    imagePath: string;
}

const SecretComponent: React.FC<SecretComponentProps> = ({textSecretType, textSecret, imagePath}) => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const navigate = useNavigate();

    const dialogTexts = {
        alreadyVisited: "Ya tienes este secreto",
        advice: "Consigue el resto de secretos para completar tu colección",
    };
    const dialogSettings = {
        description: textSecret || dialogTexts.alreadyVisited,
        ok: "OK",
        no: "",
    };

    useEffect(() => {
        openDialogOak();
    }, []);

    const openDialogOak = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        navigateBack();
    };

    const handleDialogAccept = () => {
        setDialogOpen(false);
        navigateBack();
    };

    const navigateBack = () => {
        navigate(-1);
    }

    return (
        <div className="secret__image-container screen-container__inner">
            <div className="card secret__text">
                {textSecretType}
            </div>
            <img className ="secret__image" src={imagePath} alt="image"/>
            {isDialogOpen && (
                <DialogOak
                    open={isDialogOpen}
                    onClose={handleDialogClose}
                    onAccept={handleDialogAccept}
                    description={dialogSettings.description}
                    okButton={dialogSettings.ok}
                    noButton={dialogSettings.no}
                />
            )}
        </div>
    );
}

export default SecretComponent;