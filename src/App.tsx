import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import { pokeTheme } from './styles/pokeTheme';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <ThemeProvider theme={pokeTheme}>
      <div className="screen-container__full-screen">
        <Router>
          <Provider store={store}>
            <AppRoutes />
          </Provider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App
