import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { Pokemon, TypeList } from "../../models/Pokemon.model";
import { UserContextType } from "./userContextType";
import { storage } from "./storageService";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [secrets, setSecrets] = useState<TypeList[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  // const [user, setUser] = useState<User | null>(null); // TODO: set user when using backend 
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (secrets.length > 0) {
      storage.set('secrets', secrets);
    } 
  }, [secrets]); 

  useEffect(() => {
    if (pokemon) {
      storage.set('pokemon', pokemon);
    } 
    
  // css theme change based on pokemon
    document.body.classList.remove('leaf-theme', 'fire-theme', 'water-theme');
    if (pokemon?.type) {
      document.body.classList.add(`${pokemon.type}-theme`);
    }
  }, [pokemon]); 

  useEffect(() => {
    if (username) {
      storage.set('username', username);
    }
  }, [username]);

  useEffect(() => {
    const storedSecrets = storage.get('secrets');
    const storedPokemon = storage.get('pokemon');
    const storedUsername = storage.get('username');

    if (storedSecrets) {
      setSecrets(storedSecrets);
    }
    if (storedPokemon) {
      setPokemon(storedPokemon);
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <UserContext.Provider value={{ secrets, pokemon, username, setSecrets, setPokemon, setUsername }}>
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
