import { useCallback } from "react";
import { Pokemon } from "../../models/Pokemon.model";

export const useAuth = () => {

  const updatePokemon = useCallback((pokemon: Pokemon) => {
    // Logic to update the pokemon
  }, []);
  const logout = useCallback(() => {
    // Logic to log out the user
    console.log("User logged out");
    // Optionally clear user state and redirect
  }, []);


  return { updatePokemon, logout };
};
