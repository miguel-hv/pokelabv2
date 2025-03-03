import { render, fireEvent, waitFor,  screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SelectPokePage from '../select-poke-page/SelectPokePage';
import PokePage from '../poke-page/PokePage';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import '@testing-library/jest-dom';
import store from '../../store';
import { Provider } from 'react-redux';
import { UserState } from '../../models/UserState.model';
import { clearUser, setUsername } from '../../user/slice/userSlice';

const testSelectedPokemon = async (pokemonName: string) => {
            
    render(
        <MemoryRouter initialEntries={['/poke/home']}>
            <Provider store={store}>
                <Routes> 
                    <Route path={UrlRoutes.poke} element={<PokePage />} >
                        <Route path={UrlRoutes.home} element={<HomePage />} />
                        <Route path={UrlRoutes.selectPokemon} element={<SelectPokePage />} />
                    </Route>
                </Routes>
            </Provider>
        </MemoryRouter>
    );

    const laboratorioButton = await screen.findByText('Laboratorio');
    fireEvent.click(laboratorioButton);
    
    const pokemonButton = await screen.findByText(pokemonName);
    // const pokemonButton = await waitFor(() => screen.getByText(pokemonName));
    fireEvent.click(pokemonButton);
    screen.debug();

    const chooseButton = await screen.findByText('¡Elegir!');
    fireEvent.click(chooseButton);

    screen.debug();
    
    await waitFor(() => {
        expect(screen.getByText(new RegExp(pokemonName, 'i'))).toBeInTheDocument();
    });

    await waitFor(() => {
        const userContext = JSON.parse(localStorage.getItem('userState') || '{}');
        expect(userContext.pokemon.name).toBe(pokemonName);
    });
}

describe('Select Pokemon', () => {

    beforeEach(() => {
        localStorage.clear();
        clearUser();
        const userState: UserState = {
            username: 'testuser',
            pokemon: null,
            secrets: [],
        }
        localStorage.setItem('userState', JSON.stringify(userState));
        store.dispatch(setUsername(userState.username));
    });
    

    it.each([['charmander'], ['squirtle'], ['bulbasaur']])('should select a pokemon and update user context', async (pokemonName) => {
        await testSelectedPokemon(pokemonName);
    });
    
    
});