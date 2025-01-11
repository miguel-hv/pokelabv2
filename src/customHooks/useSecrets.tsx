import { TypeList } from "../models/Pokemon.model";
import { useUserContext } from "../user/context/UserContext";

export const useSecrets = () => {
    const { secrets,setSecrets } = useUserContext();

    const addSecret = (secret: TypeList) => {
        setSecrets([...secrets, secret]);
    }
    return {
        secrets, addSecret
    }
}