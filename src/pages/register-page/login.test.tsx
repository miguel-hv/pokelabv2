import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import { UserProvider } from '../../user/context/UserContext';
import WelcomePage from '../welcome-page/WelcomePage';
import { UrlRoutes } from '../../enumerators/urlRoutes.enum';
import PokePage from '../poke-page/PokePage';
import HomePage from '../home-page/HomePage';
import UserProtectedRoute from '../../routes/guards/UserProtectedRoute';
import '@testing-library/jest-dom';


describe('Login Test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('logs in and navigates correctly', async () => {
    const user = userEvent.setup();
    const username = 'testuser';

    render(
        <MemoryRouter initialEntries={[`/${UrlRoutes.welcome}`]}> 
        <UserProvider>
          <Routes>
            <Route path={UrlRoutes.access} element={<RegisterPage />} />
            <Route element={<UserProtectedRoute />}>
              <Route path={UrlRoutes.welcome} element={<WelcomePage />} />
              <Route index element={<Navigate to={`/${UrlRoutes.poke}`} replace />} />
              <Route path="*" element={<Navigate to={`/${UrlRoutes.poke}`} replace />} />
              <Route path={UrlRoutes.poke} element={<PokePage />} >
                <Route path={UrlRoutes.home} element={<HomePage />} />
              </Route>
            </Route>
          </Routes>
        </UserProvider>
      </MemoryRouter>
      );

      //make sure it redirects from welcome to access
    expect(await screen.getByLabelText(/alias/i)).toBeInTheDocument();
    const input = screen.getByLabelText(/alias/i);
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
    await user.type(input, `${username}`);

    await user.keyboard('{Enter}');
    expect(await screen.findByText(/¡Te doy la bienvenida a Pueblo Paleta!/i)).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // await user.keyboard('{Enter}');
    const button = screen.getByRole("button");
    screen.debug();
    await user.click(button);

    screen.debug();
      
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();

    const userState = JSON.parse(localStorage.getItem('username') || '{}');
    expect(userState).toBe(username);
  });
});
