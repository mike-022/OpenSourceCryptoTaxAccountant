import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { useState } from "react";

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import AuthContext from './components/AuthContext';
import Dashboard from './components/Dashboard'
import PreviousReports from './components/PreviousReports'
function App() {
  const [isAuth, setIsAuth] = useState(false);

  
  return (
      <AuthContext.Provider value={{ isAuth, setAuth: setIsAuth }}>
        <div className='App'>
        <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/previousreports" element={<PreviousReports />} />
          </Routes>
        </Router>
        </div>
    </AuthContext.Provider> 
  );
}

export default App;