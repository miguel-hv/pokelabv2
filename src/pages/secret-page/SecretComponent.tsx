import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const handleDialogClose = (result: string) => {
        setDialogOpen(false);
        if (result === "OK") {
          navigateBack();
        }
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
            {/* {isDialogOpen && (
                // <DialogInfo
                // maxWidth={resizeService.getWidth()} // Assuming `resizeService.getWidth()` provides dimensions
                // minWidth={resizeService.getWidth()}
                // data={dialogSettings}
                // onClose={handleDialogClose}
                // />
            )} */}
        </div>
    );
}

export default SecretComponent;