import { useUserContext } from "../user/context/UserContext";

export const useSecrets = () => {
    const { secrets,setSecrets } = useUserContext();

    const addSecret = (secret: string) => {
        setSecrets([...secrets, secret]);
    }
    return {
        addSecret
    }
}