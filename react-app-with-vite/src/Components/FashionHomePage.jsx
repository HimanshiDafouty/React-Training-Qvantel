import React from 'react';
import { Link } from 'react-router-dom';

const FashionHomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fashion Website Home Page</h1>
      <h2>Categories:</h2>
      <ul>
        <li>
          <h4><Link to="/fashion">Fashion</Link></h4>
        </li>
        <li>
          <h4><Link to="/electronics">Electronic Appliances</Link></h4>
        </li>
      </ul>
    </div>
  );
};

export default FashionHomePage;
