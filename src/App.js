import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './comonents/Login';

function App() {
    return (
    <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Router>
          
    </div>
  );
}

export default App;
