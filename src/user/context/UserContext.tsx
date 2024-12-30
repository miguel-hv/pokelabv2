import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { Pokemon } from "../../models/Pokemon.model";

interface UserContextType {
  secrets: string[];
  pokemon: Pokemon | null;
  setSecrets: (secrets: string[]) => void;
  setPokemon: (pokemon: Pokemon | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [secrets, setSecrets] = useState<string[]>(["fire", "water"]);
  const [pokemon, setPokemon] = useState<Pokemon | null>(
    { 
    name: "charmander",
    type: "fire" 
  });

  useEffect(() => {
    document.body.classList.remove('leaf-theme', 'fire-theme', 'water-theme');

    if (pokemon?.type) {
      document.body.classList.add(`${pokemon.type}-theme`);
    }
  }, [pokemon]); 

  return (
    <UserContext.Provider value={{ secrets, pokemon, setSecrets, setPokemon }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
