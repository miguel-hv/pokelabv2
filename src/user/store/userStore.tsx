import { useState, useEffect } from "react";
import { Pokemon } from "../../models/Pokemon.model";
import { User } from "../../models/User.model";

export const useUserStore = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [secrets, setSecrets] = useState<string[]>([]);

  useEffect(() => {
    // TODO: user Store is in userContext; needs to manage user apart from pokemon and secrets
    setCurrentUser({
         username: "AshKetchum",
         email: "ash@mail.com",
         token: "",
        });
    setSelectedPokemon({ 
        name: "charmander",
        type: "fire" 
    });
    setSecrets(["fire", "water"]);
  }, []);

  return { selectedPokemon, currentUser, secrets };
};
