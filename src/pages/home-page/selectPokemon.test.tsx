import { render, fireEvent, waitFor,  screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { UserProvider } from '../../user/context/UserContext';
import SelectPokePage from '../select-poke-page/SelectPokePage';
import PokePage from '../poke-page/PokePage';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import '@testing-library/jest-dom';


describe('Select Pokemon', () => {

    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('username', JSON.stringify('testuser'));
    });
    

    it('should select a pokemon and update user context', async () => {
        render(
            <MemoryRouter initialEntries={['/poke/home']}>
                <UserProvider>
                    <Routes> 
                        <Route path={UrlRoutes.poke} element={<PokePage />} >
                            <Route path={UrlRoutes.home} element={<HomePage />} />
                            <Route path={UrlRoutes.selectPokemon} element={<SelectPokePage />} />
                        </Route>
                    </Routes>
                </UserProvider>
            </MemoryRouter>
        );
    
        const laboratorioButton = await screen.findByText('Laboratorio');
        fireEvent.click(laboratorioButton);
    
        const bulbasaurButton = await screen.findByText('bulbasaur');
        fireEvent.click(bulbasaurButton);
    
        const elegirButton = await screen.findByText('¡Elegir!');
        fireEvent.click(elegirButton);
        
        await waitFor(() => {
            expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
        });
    
        await waitFor(() => {
            const userContext = JSON.parse(localStorage.getItem('pokemon') || '{}');
            console.log(userContext);
            expect(userContext.name).toBe('bulbasaur');
        });
    });
    
});