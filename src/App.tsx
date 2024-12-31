import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './user/context/UserContext';
import { ThemeProvider } from '@mui/material';
import { pokeTheme } from './styles/pokeTheme';

function App() {

  return (
    <ThemeProvider theme={pokeTheme}>
      <div className="screen-container__full-screen">
        <Router>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App
