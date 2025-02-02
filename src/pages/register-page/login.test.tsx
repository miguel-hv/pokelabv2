import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import { UserProvider } from '../../user/context/UserContext';


describe('Login Test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('logs in and navigates correctly', async () => {
    const user = userEvent.setup();
    const username = 'testuser';

    render(
        <MemoryRouter initialEntries={["/access"]}>
            <UserProvider>
                <RegisterPage />
            </UserProvider>
        </MemoryRouter>
      );

    // Type into the input and submit
    expect(screen.getByLabelText(/Alias/i)).toBeInTheDocument();
    const input = screen.getByLabelText(/alias/i);
    expect(screen.getByRole('button', { type: /submit/i })).toBeInTheDocument();
    await user.type(input, `${username}{enter}`);

    // Press Enter on the body
    await user.keyboard('{Enter}');
    // expect(await screen.findByText(/¡Te doy la bienvenida a Pueblo Paleta!/i)).toBeInTheDocument();
    
    // Expect /poke route
    expect(await screen.findByText(/choose your pokemon/i)).toBeInTheDocument();

    // Verify local storage contains the correct user state
    const userState = JSON.parse(localStorage.getItem('userState') || '{}');
    expect(userState.currentUser.username).toBe(username);
  });
});
