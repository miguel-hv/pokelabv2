import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { Pokemon } from "../../models/Pokemon.model";
import { User } from "../../models/User.model";

interface UserContextType {
  secrets: string[];
  pokemon: Pokemon | null;
  username: string;
  setSecrets: (secrets: string[]) => void;
  setPokemon: (pokemon: Pokemon | null) => void;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [secrets, setSecrets] = useState<string[]>(['']);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  // const [user, setUser] = useState<User | null>(null); // TODO: set user when using backend 
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (secrets) {
      localStorage.setItem('secrets', JSON.stringify(secrets));
    } 
  }, [secrets]); 

  useEffect(() => {
    if (pokemon) {
      localStorage.setItem('pokemon', JSON.stringify(pokemon));
    } 
    
  // css theme change based on pokemon
    document.body.classList.remove('leaf-theme', 'fire-theme', 'water-theme');
    if (pokemon?.type) {
      document.body.classList.add(`${pokemon.type}-theme`);
    }
  }, [pokemon]); 

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    }
  }, [username]);

  useEffect(() => {
    const storedSecrets = localStorage.getItem('secrets');
    const storedPokemon = localStorage.getItem('pokemon');
    const storedUsername = localStorage.getItem('username');

    if (storedSecrets) {
      setSecrets(JSON.parse(storedSecrets));
    }
    if (storedPokemon) {
      setPokemon(JSON.parse(storedPokemon));
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
