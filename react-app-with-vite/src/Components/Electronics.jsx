import React from 'react';
import { Link } from 'react-router-dom';

const Electronics = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Electronics Categories</h2>
      <ul>
        <li><Link to="/electronics/home">Home Appliances</Link></li>
        <li><Link to="/electronics/commercial">Commercial Appliances</Link></li>
      </ul>
    </div>
  );
};

export default Electronics;
