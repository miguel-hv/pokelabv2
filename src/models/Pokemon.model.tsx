type ThemeList = 'leaf' | 'fire' | 'water';
type PokemonList = 'bulbasaur' | 'charmander' | 'squirtle';

export interface Pokemon {
    name: PokemonList;
    type: ThemeList;
}