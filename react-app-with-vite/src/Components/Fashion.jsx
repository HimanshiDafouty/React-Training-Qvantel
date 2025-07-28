import React from 'react';
import { Link } from 'react-router-dom';

const Fashion = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Fashion Categories</h2>
      <ul>
        <li><Link to="/fashion/men">Men’s Fashion</Link></li>
        <li><Link to="/fashion/women">Women’s Fashion</Link></li>
        <li><Link to="/fashion/kids">Kids Fashion</Link></li>
      </ul>
    </div>
  );
};

export default Fashion;
