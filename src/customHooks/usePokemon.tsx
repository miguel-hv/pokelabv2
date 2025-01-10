import { useUserContext } from "../user/context/UserContext";

export const usePokemon = () => {
    const { pokemon, setPokemon } = useUserContext();
    return {
        pokemon, setPokemon
    }
}