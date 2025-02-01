import { useEffect } from "react";
import DialogOak from "../../components/shared/DialogOak";
import { useDialog } from "../../customHooks/useDialog";
import { useNavigationUtils } from "../../customHooks/useNavigationUtils";

interface SecretComponentProps {
    textSecretType: string;
    textSecret: string;
    imagePath: string;
}

const SecretComponent: React.FC<SecretComponentProps> = ({textSecretType, textSecret, imagePath}) => {
    const { isDialogOpen, openDialog, closeDialog } = useDialog();
    const { navigateBack } = useNavigationUtils();

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
        openDialog();
    }, [openDialog]);

    const handleDialogClose = () => {
        closeDialog();
        navigateBack();
    };

    const handleDialogAccept = () => {
        closeDialog();
        navigateBack();
    };

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