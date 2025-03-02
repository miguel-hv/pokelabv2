import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../models/Pokemon.model";
import { RootState } from "../store";
import { setPokemon } from "../user/slice/userSlice";

export const usePokemon = () => {
    const pokemon = useSelector((state: RootState) => state.user.pokemon);
    const setPokemonDispatch = (newPokemon: Pokemon | null) => {
        useDispatch()(setPokemon(newPokemon));
    }

    return {
        pokemon, setPokemon: setPokemonDispatch
    }
}