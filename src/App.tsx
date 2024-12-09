import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './user/context/UserContext';

function App() {

  return (
    <div className="screen-container__full-screen">
      <Router>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App
