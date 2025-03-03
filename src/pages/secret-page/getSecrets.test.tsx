import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import SecretProtectedRoute from '../../routes/guards/SecretProtectedRoute';
import FireSecret from './FireSecretPage';
import WaterSecret from './WaterSecretPage';
import LeafSecret from './LeafSecretPage';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PokePage from '../poke-page/PokePage';
import HomePage from '../home-page/HomePage';
import { beforeEach, describe, expect, it } from 'vitest';
import { Pokemon, PokemonList, TypeList } from '../../models/Pokemon.model';
import { Provider } from 'react-redux';
import store from '../../store';
import { UserState } from '../../models/UserState.model';
import { setPokemon, setUsername } from '../../user/slice/userSlice';

interface testPokemon {
    pokemon: PokemonList;
    secretName: TypeList;
    secretText: string;
    location: string;
}

const charmander = {
    pokemon: 'charmander',
    secretName: 'fire',
    secretText: 'secreto tipo fuego!',
    location: 'Caldera'
} as const; 

const bulbasaur = {
    pokemon: 'charmander',
    secretName: 'leaf',
    secretText: 'secreto tipo planta',
    location: 'Jardín'
} as const; 

const squirtle = {
    pokemon: 'squirtle',
    secretName: 'water',
    secretText: 'secreto tipo agua',
    location: 'Piscina'
} as const; 


const testGetSecrets = async (testPokemon: testPokemon) => {
    render(
        <MemoryRouter initialEntries={['/poke/home']}>
            <Provider store={store}>
                <Routes> 
                    <Route path={UrlRoutes.secrets}>
                        <Route
                            path={UrlRoutes.secretFire}
                            element={
                            <SecretProtectedRoute type="fire">
                                <FireSecret />
                            </SecretProtectedRoute>
                            }
                        />
                        <Route
                            path={UrlRoutes.secretWater}
                            element={
                            <SecretProtectedRoute type="water">
                                <WaterSecret />
                            </SecretProtectedRoute>
                            }
                        />
                        <Route
                            path={UrlRoutes.secretLeaf}
                            element={
                            <SecretProtectedRoute type="leaf">
                                <LeafSecret />
                            </SecretProtectedRoute>
                            }
                        />
                    </Route>
                    <Route path={UrlRoutes.poke} element={<PokePage />} >
                        <Route path={UrlRoutes.home} element={<HomePage />} />
                    </Route>
                </Routes>
            </Provider>
        </MemoryRouter>
    );


    const pokemonSelected: Pokemon = {
        name: testPokemon.pokemon,
        type: testPokemon.secretName
    }
    const userState: UserState = {
        username: 'testuser',
        pokemon: pokemonSelected,
        secrets: [],
    }

    localStorage.setItem('userState', JSON.stringify(userState));
    store.dispatch(setUsername(userState.username));
    store.dispatch(setPokemon(userState.pokemon));

    fireEvent.click(screen.getByText(testPokemon.location));

    await screen.findByText((content) => content.includes(testPokemon.secretText));

    const okButtonElement = await screen.findByRole('button', { name: 'OK' });
    fireEvent.click(okButtonElement);   

    screen.debug();

    await waitFor(() => {
        const userState = JSON.parse(localStorage.getItem('userState') || '[]');
        expect(userState.secrets).toContain(testPokemon.secretName);
    });
}

describe('Get Secret', () => {

    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('username', JSON.stringify('testuser'));
    });
    

    it.each([[charmander], [bulbasaur], [squirtle]])('should retrieve secret and update user context', async (testPokemon) => {
        await testGetSecrets(testPokemon);
    });
    
    
});