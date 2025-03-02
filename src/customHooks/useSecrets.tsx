import { useDispatch, useSelector } from "react-redux";
import { TypeList } from "../models/Pokemon.model";
import { addSecret } from "../user/slice/userSlice";
import { RootState } from "../store";

export const useSecrets = () => {
    const secrets = useSelector((state: RootState) => state.user.secrets);

    const addSecretDispatch = (secret: TypeList) => {
        useDispatch()(addSecret(secret));
    }
    return {
        secrets, addSecret: addSecretDispatch
    }
}