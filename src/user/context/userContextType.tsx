import { Pokemon, TypeList } from "../../models/Pokemon.model";

export interface UserContextType {
  secrets: TypeList[];
  pokemon: Pokemon | null;
  username: string;
  setSecrets: (secrets: TypeList[]) => void;
  setPokemon: (pokemon: Pokemon | null) => void;
  setUsername: (username: string) => void;
}