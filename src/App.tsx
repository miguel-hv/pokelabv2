import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <div className="screen-container__full-screen">
      <Router>
          {/* Optional: Add a Header or Navigation Bar Here */}
          {/* The main content will be rendered here */}
          <AppRoutes />
      </Router>
    </div>
  );
}

export default App
