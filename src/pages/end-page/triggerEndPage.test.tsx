import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import { UserProvider } from '../../user/context/UserContext';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PokePage from '../poke-page/PokePage';
import HomePage from '../home-page/HomePage';
import { beforeEach, describe, expect, it } from 'vitest';
import EndingProtectedRoute from '../../routes/guards/EndingProtectedRoute';
import EndPage from './EndPage';


describe('Trigger EndPage', () => {

    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem('username', JSON.stringify('testuser'));
    });

    it('should redirect to end page when all secrets are set', async () => {
        render(
            <MemoryRouter initialEntries={['/the-end']}>
                <UserProvider>
                    <Routes> 
                        <Route path={UrlRoutes.home} element={<HomePage />} />
                        <Route element={<EndingProtectedRoute />}>
                            <Route path={UrlRoutes.end} element={<EndPage />} />
                        </Route>
                    </Routes>
                </UserProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Laboratorio/i)).toBeInTheDocument();
        
        localStorage.setItem('secrets', JSON.stringify(['fire', 'water', 'leaf']));

        render(
            <MemoryRouter initialEntries={['/home']}>
                <UserProvider>
                    <Routes> 
                        <Route path={UrlRoutes.home} element={<HomePage />} />
                        <Route element={<EndingProtectedRoute />}>
                            <Route path={UrlRoutes.end} element={<EndPage />} />
                        </Route>
                    </Routes>
                </UserProvider>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText(/¡Has completado el juego!/i)).toBeInTheDocument();
        });
    });
});
