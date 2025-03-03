import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../home-page/HomePage';
import { beforeEach, describe, expect, it } from 'vitest';
import EndingProtectedRoute from '../../routes/guards/EndingProtectedRoute';
import EndPage from './EndPage';
import { Provider } from 'react-redux';
import store from '../../store';
import { UserState } from '../../models/UserState.model';
import { setSecrets, setUsername } from '../../user/slice/userSlice';


describe('Trigger EndPage', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('should redirect to end page when all secrets are set', async () => {
        render(
            <MemoryRouter initialEntries={['/the-end']}>
                <Provider store={store}>
                    <Routes> 
                        <Route path={UrlRoutes.home} element={<HomePage />} />
                        <Route element={<EndingProtectedRoute />}>
                            <Route path={UrlRoutes.end} element={<EndPage />} />
                        </Route>
                    </Routes>
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Laboratorio/i)).toBeInTheDocument();

        const userState: UserState = {
            username: 'testuser',
            pokemon: null,
            secrets: ['fire', 'water', 'leaf'],
        }
        localStorage.setItem('userState', JSON.stringify(userState));
        store.dispatch(setUsername(userState.username));
        store.dispatch(setSecrets(userState.secrets));

        await waitFor(() => {
            expect(screen.getByText(/¡Has completado el juego!/i)).toBeInTheDocument();
        });
    });
});
