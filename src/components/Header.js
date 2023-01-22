import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link className="header-link" to="/">Home</Link>
        <Link className="header-link" to="/login">Login/Create Account</Link>
      </nav>
    </header>
  );
}

export default Header;
