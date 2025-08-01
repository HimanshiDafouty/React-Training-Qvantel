import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/accounts">Accounts</Link></li>
    </ul>
  </nav>
);

export default Menu;
