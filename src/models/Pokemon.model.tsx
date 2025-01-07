export type TypeList = 'leaf' | 'fire' | 'water';
export type PokemonList = 'bulbasaur' | 'charmander' | 'squirtle';

export interface Pokemon {
    name: PokemonList;
    type: TypeList;
}