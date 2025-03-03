import { Pokemon, TypeList } from "./Pokemon.model";

export interface UserState {
    username: string;
    pokemon: Pokemon | null;
    secrets: TypeList[];
}
