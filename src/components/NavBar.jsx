import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importing a CSS file for styles

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Edit Godown</Link>
        </li>
        <li>
          <Link to="/QrCode">QR Code</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
